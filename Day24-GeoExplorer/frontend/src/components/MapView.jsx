import { useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { getCategory } from "../constants/categories.js";

function divIcon(color, isOrigin = false) {
  const size = isOrigin ? 20 : 16;
  return L.divIcon({
    className: "",
    html: `<div style="
      width:${size}px;height:${size}px;border-radius:50%;
      background:${color};
      border:2.5px solid #fff;
      box-shadow:0 2px 6px rgba(17,36,31,0.4);
    "></div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

function FlyToOrigin({ origin }) {
  const map = useMap();
  useEffect(() => {
    if (origin) map.flyTo([origin.lat, origin.lon], 14, { duration: 0.8 });
  }, [origin, map]);
  return null;
}

function FlyToSelected({ place }) {
  const map = useMap();
  useEffect(() => {
    if (place) map.flyTo([place.lat, place.lon], 16, { duration: 0.6 });
  }, [place, map]);
  return null;
}

export default function MapView({ origin, places, selectedPlace, onSelect }) {
  const markerRefs = useRef({});
  const originIcon = useMemo(() => divIcon("#11241f", true), []);

  return (
    <MapContainer
      center={origin ? [origin.lat, origin.lon] : [20, 0]}
      zoom={origin ? 14 : 2}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {origin && (
        <Marker position={[origin.lat, origin.lon]} icon={originIcon}>
          <Popup>You are here</Popup>
        </Marker>
      )}

      {places.map((place) => {
        const cat = getCategory(place.category);
        const isSelected = selectedPlace?.placeId === place.placeId;
        return (
          <Marker
            key={place.placeId}
            position={[place.lat, place.lon]}
            icon={divIcon(cat.color)}
            eventHandlers={{ click: () => onSelect(place) }}
            ref={(el) => {
              if (el) markerRefs.current[place.placeId] = el;
            }}
          >
            <Popup>
              <strong>{place.name}</strong>
              <br />
              {place.address || cat.label}
              {place.distanceMeters != null && (
                <>
                  <br />
                  <span className="mono">{place.distanceMeters} m away</span>
                </>
              )}
            </Popup>
          </Marker>
        );
      })}

      <FlyToOrigin origin={origin} />
      <FlyToSelected place={selectedPlace} />
    </MapContainer>
  );
}
