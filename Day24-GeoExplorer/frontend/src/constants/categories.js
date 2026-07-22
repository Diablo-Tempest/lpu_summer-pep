export const CATEGORIES = [
  { id: "restaurants", label: "Restaurants", color: "#c1523a", glyph: "🍽" },
  { id: "cafes", label: "Cafes", color: "#b5822c", glyph: "☕" },
  { id: "hospitals", label: "Hospitals", color: "#8a3b2f", glyph: "🏥" },
  { id: "atms", label: "ATMs", color: "#3a4f49", glyph: "🏧" },
  { id: "parks", label: "Parks", color: "#6f8f76", glyph: "🌳" },
];

export function getCategory(id) {
  return CATEGORIES.find((c) => c.id === id) || CATEGORIES[0];
}
