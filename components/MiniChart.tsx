const points = "0,92 38,70 76,78 114,38 152,46 190,24 228,32 266,16 304,28 342,10";

export function MiniChart() {
  return (
    <div className="relative h-40 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100/80">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px]" />
      <svg viewBox="0 0 342 112" className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] overflow-visible">
        <defs>
          <linearGradient id="mini-chart-line" x1="0" x2="1" y1="0" y2="0">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#c084fc" />
          </linearGradient>
          <linearGradient id="mini-chart-fill" x1="0" x2="0" y1="0" y2="1">
            <stop stopColor="#8b5cf6" stopOpacity="0.34" />
            <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={`${points} 342,112 0,112`} fill="url(#mini-chart-fill)" />
        <polyline points={points} fill="none" stroke="url(#mini-chart-line)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
      </svg>
    </div>
  );
}
