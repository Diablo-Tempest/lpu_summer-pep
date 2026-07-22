import { getCategory } from "../constants/categories.js";

export default function PlaceCard({ place, isSelected, isFavorite, onSelect, onToggleFavorite }) {
  const cat = getCategory(place.category);

  return (
    <div className={`place-card ${isSelected ? "selected" : ""}`} onClick={() => onSelect(place)}>
      <div className="place-card-top">
        <div>
          <div className="place-name">
            <span style={{ marginRight: 6 }}>{cat.glyph}</span>
            {place.name}
          </div>
          <div className="place-meta">{place.address || cat.label}</div>
        </div>
        <button
          className={`fav-btn ${isFavorite ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(place);
          }}
          aria-label={isFavorite ? "Remove from favorites" : "Save to favorites"}
          title={isFavorite ? "Remove from favorites" : "Save to favorites"}
        >
          {isFavorite ? "♥" : "♡"}
        </button>
      </div>
      {place.distanceMeters != null && (
        <div className="place-distance">{place.distanceMeters} m away</div>
      )}
    </div>
  );
}
