import { getCategory } from "../constants/categories.js";

function formatWhen(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function HistoryPanel({ history, onRerun, onClear, onRemove }) {
  if (!history.length) {
    return (
      <div className="empty-state">
        <span className="glyph">🕘</span>
        No searches yet.
        <br />
        Your recent nearby searches will show up here.
      </div>
    );
  }

  return (
    <div>
      {history.map((entry) => {
        const cat = getCategory(entry.category);
        return (
          <div key={entry._id} className="history-item">
            <div>
              <div style={{ fontWeight: 600 }}>
                {cat.glyph} {cat.label}
              </div>
              <div className="mono" style={{ fontSize: 11, color: "var(--ink-soft)" }}>
                {entry.resultCount} results · {formatWhen(entry.createdAt)}
              </div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => onRerun(entry)}>Search again</button>
              <button onClick={() => onRemove(entry._id)}>Remove</button>
            </div>
          </div>
        );
      })}
      <button className="clear-history-btn" onClick={onClear}>
        Clear all history
      </button>
    </div>
  );
}
