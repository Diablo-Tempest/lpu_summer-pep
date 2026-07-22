export default function CompassMark({ size = 280 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Compass rose"
      className="compass-mark"
    >
      <circle cx="100" cy="100" r="96" stroke="var(--parchment-dim)" strokeWidth="1.5" opacity="0.5" />
      <circle cx="100" cy="100" r="72" stroke="var(--gold)" strokeWidth="1" opacity="0.6" />

      {/* Tick marks */}
      {Array.from({ length: 36 }).map((_, i) => {
        const angle = (i * 10 * Math.PI) / 180;
        const long = i % 9 === 0;
        const r1 = 96;
        const r2 = long ? 86 : 91;
        const x1 = 100 + r1 * Math.sin(angle);
        const y1 = 100 - r1 * Math.cos(angle);
        const x2 = 100 + r2 * Math.sin(angle);
        const y2 = 100 - r2 * Math.cos(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="var(--parchment)"
            strokeWidth={long ? 1.6 : 0.8}
            opacity={long ? 0.9 : 0.45}
          />
        );
      })}

      {/* Rotating needle group */}
      <g className="compass-needle">
        <polygon points="100,28 110,100 100,92" fill="var(--rust)" />
        <polygon points="100,172 90,100 100,108" fill="var(--parchment)" />
        <circle cx="100" cy="100" r="6" fill="var(--gold)" stroke="var(--ink)" strokeWidth="1.5" />
      </g>

      <text x="100" y="20" textAnchor="middle" fill="var(--parchment)" fontSize="12" fontFamily="var(--font-mono)" opacity="0.85">N</text>
      <text x="184" y="104" textAnchor="middle" fill="var(--parchment)" fontSize="12" fontFamily="var(--font-mono)" opacity="0.6">E</text>
      <text x="100" y="188" textAnchor="middle" fill="var(--parchment)" fontSize="12" fontFamily="var(--font-mono)" opacity="0.6">S</text>
      <text x="16" y="104" textAnchor="middle" fill="var(--parchment)" fontSize="12" fontFamily="var(--font-mono)" opacity="0.6">W</text>
    </svg>
  );
}
