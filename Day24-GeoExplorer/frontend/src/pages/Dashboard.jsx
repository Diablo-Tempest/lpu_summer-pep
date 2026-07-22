import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import SearchPanel from "../components/SearchPanel.jsx";
import PlaceCard from "../components/PlaceCard.jsx";
import FavoritesPanel from "../components/FavoritesPanel.jsx";
import HistoryPanel from "../components/HistoryPanel.jsx";
import MapView from "../components/MapView.jsx";
import { placesApi, favoritesApi, historyApi } from "../services/api.js";
import "../styles/dashboard.css";

const SEARCH_DEBOUNCE_MS = 600;

const TABS = [
  { id: "search", label: "Nearby" },
  { id: "favorites", label: "Favorites" },
  { id: "history", label: "History" },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("search");

  const [origin, setOrigin] = useState(null);
  const [locating, setLocating] = useState(false);
  const [locationLabel, setLocationLabel] = useState("");
  const [locateError, setLocateError] = useState("");

  const [category, setCategory] = useState("restaurants");
  const [radius, setRadius] = useState(1500);

  const [places, setPlaces] = useState([]);
  const [placesLoading, setPlacesLoading] = useState(false);
  const [placesError, setPlacesError] = useState("");

  const [selectedPlace, setSelectedPlace] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [history, setHistory] = useState([]);

  // Load favorites once on mount so heart icons are accurate immediately
  useEffect(() => {
    favoritesApi
      .list()
      .then((data) => setFavorites(data.favorites))
      .catch(() => {});
  }, []);

  const refreshHistory = useCallback(() => {
    historyApi
      .list()
      .then((data) => setHistory(data.history))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (activeTab === "history") refreshHistory();
  }, [activeTab, refreshHistory]);

  const runSearch = useCallback(async (lat, lon, cat, rad, signal) => {
    setPlacesLoading(true);
    setPlacesError("");
    try {
      const data = await placesApi.nearby({ lat, lon, category: cat, radius: rad, signal });
      setPlaces(data.places);
      setSelectedPlace(null);
    } catch (err) {
      if (axios.isCancel(err)) return; // superseded by a newer search, not a real failure
      setPlacesError(err.message);
      setPlaces([]);
    } finally {
      if (!signal?.aborted) setPlacesLoading(false);
    }
  }, []);

  const abortControllerRef = useRef(null);

  // Debounced search: wait for origin/category/radius to settle (e.g. while the
  // radius slider is being dragged) before hitting the rate-limited Overpass API,
  // and cancel any in-flight request that's been superseded by a newer one.
  useEffect(() => {
    if (!origin) return;

    const timer = setTimeout(() => {
      abortControllerRef.current?.abort();
      const controller = new AbortController();
      abortControllerRef.current = controller;
      runSearch(origin.lat, origin.lon, category, radius, controller.signal);
    }, SEARCH_DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [origin, category, radius, runSearch]);

  async function handleLocate() {
    setLocating(true);
    setLocateError("");
    setLocationLabel("");

    if (!navigator.geolocation) {
      setLocateError("Geolocation isn't supported by this browser.");
      setLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        setOrigin({ lat, lon });
        try {
          const geo = await placesApi.reverseGeocode(lat, lon);
          setLocationLabel(geo.label);
        } catch {
          setLocationLabel("");
        }
        setLocating(false);
      },
      (err) => {
        let message = "Couldn't determine your location. Please try again.";
        if (err.code === err.PERMISSION_DENIED) {
          message = "Location access was denied. Enable it in your browser settings to search nearby.";
        } else if (err.code === err.POSITION_UNAVAILABLE) {
          message =
            "Your device couldn't provide a location — check that location services are turned on at the OS level, or search by address below instead.";
        } else if (err.code === err.TIMEOUT) {
          message = "Location lookup timed out. Try again, or search by address below.";
        }
        setLocateError(message);
        setLocating(false);
      },
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 60000 }
    );
  }

  async function handleAddressSearch(query) {
    setLocateError("");
    try {
      const data = await placesApi.search(query);
      if (!data.results.length) {
        setLocateError(`No location found for "${query}". Try a more specific address.`);
        return;
      }
      const best = data.results[0];
      setOrigin({ lat: best.lat, lon: best.lon });
      setLocationLabel(best.label);
    } catch (err) {
      setLocateError(err.message);
    }
  }

  function isFavorite(placeId) {
    return favorites.some((f) => f.placeId === placeId);
  }

  async function handleToggleFavorite(place) {
    const already = isFavorite(place.placeId);
    // Optimistic update
    setFavorites((prev) =>
      already ? prev.filter((f) => f.placeId !== place.placeId) : [place, ...prev]
    );
    try {
      if (already) {
        await favoritesApi.remove(place.placeId);
      } else {
        await favoritesApi.add(place);
      }
    } catch {
      // Revert on failure
      setFavorites((prev) =>
        already ? [place, ...prev] : prev.filter((f) => f.placeId !== place.placeId)
      );
    }
  }

  function handleRerunHistory(entry) {
    setCategory(entry.category);
    setOrigin({ lat: entry.lat, lon: entry.lon });
    setActiveTab("search");
  }

  async function handleClearHistory() {
    setHistory([]);
    try {
      await historyApi.clear();
    } catch {
      refreshHistory();
    }
  }

  async function handleRemoveHistory(id) {
    setHistory((prev) => prev.filter((h) => h._id !== id));
    try {
      await historyApi.removeOne(id);
    } catch {
      refreshHistory();
    }
  }

  return (
    <div className="dashboard-shell">
      <Navbar />
      <div className="dashboard-main">
        <aside className="sidebar">
          <div className="tabs">
            {TABS.map((t) => (
              <button
                key={t.id}
                className={`tab-btn ${activeTab === t.id ? "active" : ""}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="sidebar-scroll">
            {activeTab === "search" && (
              <>
                <SearchPanel
                  onLocate={handleLocate}
                  locating={locating}
                  locationLabel={locationLabel}
                  error={locateError}
                  category={category}
                  onCategoryChange={setCategory}
                  radius={radius}
                  onRadiusChange={setRadius}
                  onAddressSearch={handleAddressSearch}
                />

                {placesLoading && <div className="status-msg info">Searching nearby…</div>}
                {placesError && <div className="status-msg error">{placesError}</div>}

                {!placesLoading && !placesError && origin && places.length === 0 && (
                  <div className="empty-state">
                    <span className="glyph">🧭</span>
                    Nothing found within {radius} m. Try widening the radius.
                  </div>
                )}

                {!origin && !locating && (
                  <div className="empty-state">
                    <span className="glyph">📍</span>
                    Share your location to start discovering nearby places.
                  </div>
                )}

                {places.map((place) => (
                  <PlaceCard
                    key={place.placeId}
                    place={place}
                    isSelected={selectedPlace?.placeId === place.placeId}
                    isFavorite={isFavorite(place.placeId)}
                    onSelect={setSelectedPlace}
                    onToggleFavorite={handleToggleFavorite}
                  />
                ))}
              </>
            )}

            {activeTab === "favorites" && (
              <FavoritesPanel
                favorites={favorites}
                selectedPlace={selectedPlace}
                onSelect={setSelectedPlace}
                onToggleFavorite={handleToggleFavorite}
              />
            )}

            {activeTab === "history" && (
              <HistoryPanel
                history={history}
                onRerun={handleRerunHistory}
                onClear={handleClearHistory}
                onRemove={handleRemoveHistory}
              />
            )}
          </div>
        </aside>

        <div className="map-side">
          {places.length > 0 && (
            <div className="result-count-pill">
              {places.length} {category} found
            </div>
          )}
          <MapView
            origin={origin}
            places={activeTab === "favorites" ? favorites : places}
            selectedPlace={selectedPlace}
            onSelect={setSelectedPlace}
          />
        </div>
      </div>
    </div>
  );
}
