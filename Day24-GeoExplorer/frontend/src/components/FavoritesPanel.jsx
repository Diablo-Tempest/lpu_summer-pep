import PlaceCard from "./PlaceCard.jsx";

export default function FavoritesPanel({ favorites, selectedPlace, onSelect, onToggleFavorite }) {
  if (!favorites.length) {
    return (
      <div className="empty-state">
        <span className="glyph">♡</span>
        No favorites yet.
        <br />
        Tap the heart on any place to save it here.
      </div>
    );
  }

  return (
    <div>
      {favorites.map((fav) => (
        <PlaceCard
          key={fav.placeId}
          place={fav}
          isSelected={selectedPlace?.placeId === fav.placeId}
          isFavorite
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}
