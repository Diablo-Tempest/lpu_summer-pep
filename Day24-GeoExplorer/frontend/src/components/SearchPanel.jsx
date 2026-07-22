import { useState } from "react";
import { CATEGORIES } from "../constants/categories.js";

export default function SearchPanel({
  onLocate,
  locating,
  locationLabel,
  category,
  onCategoryChange,
  radius,
  onRadiusChange,
  error,
  onAddressSearch,
}) {
  const [addressQuery, setAddressQuery] = useState("");
  const [searchingAddress, setSearchingAddress] = useState(false);

  async function handleAddressSubmit(e) {
    e.preventDefault();
    if (!addressQuery.trim()) return;
    setSearchingAddress(true);
    try {
      await onAddressSearch(addressQuery.trim());
    } finally {
      setSearchingAddress(false);
    }
  }

  return (
    <div>
      <div className="locate-row">
        <button className="locate-btn" onClick={onLocate} disabled={locating}>
          {locating ? "Locating…" : "📍 Use my current location"}
        </button>
      </div>

      {error && <div className="status-msg error">{error}</div>}

      <form className="address-row" onSubmit={handleAddressSubmit}>
        <input
          type="text"
          value={addressQuery}
          onChange={(e) => setAddressQuery(e.target.value)}
          placeholder="Or search by address or city"
        />
        <button type="submit" disabled={searchingAddress}>
          {searchingAddress ? "…" : "Go"}
        </button>
      </form>

      {!error && locationLabel && <div className="location-label">{locationLabel}</div>}

      <div className="section-title">Category</div>
      <div className="category-grid">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className={`category-chip ${category === cat.id ? "active" : ""}`}
            onClick={() => onCategoryChange(cat.id)}
          >
            <span className="swatch" style={{ background: cat.color }} />
            {cat.label}
          </button>
        ))}
      </div>

      <div className="radius-row">
        <div className="section-title">
          Search radius <span className="radius-value">— {radius} m</span>
        </div>
        <input
          type="range"
          min="300"
          max="5000"
          step="100"
          value={radius}
          onChange={(e) => onRadiusChange(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
