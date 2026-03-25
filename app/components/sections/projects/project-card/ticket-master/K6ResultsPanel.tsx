export type K6ResultRow = {
  name: string;
  vus: string;
  p95: string;
  rps: string;
  errors: string;
  ok: boolean;
};

type K6ResultsPanelProps = {
  rows: readonly K6ResultRow[];
  color: string;
  open: boolean;
  onToggle: () => void;
};

export default function K6ResultsPanel({
  rows,
  color,
  open,
  onToggle,
}: K6ResultsPanelProps) {
  return (
    <div style={{ marginBottom: 16 }}>
      <button
        type="button"
        onClick={onToggle}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 11,
          color,
          letterSpacing: "0.08em",
          marginBottom: open ? 12 : 0,
          padding: 0,
        }}
      >
        <span
          style={{
            display: "inline-block",
            transform: open ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        >
          ▶
        </span>
        {open ? "OCULTAR" : "VER"} RESULTADOS K6
      </button>
      {open && (
        <div
          className="k6-table-wrapper"
          style={{
            border: "1px solid var(--border)",
            borderRadius: 2,
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div
            className="k6-table-scroll"
            style={{
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              width: "100%",
            }}
          >
            <table className="k6-table">
              <thead>
                <tr>
                  <th>Escenario</th>
                  <th>VUs</th>
                  <th>p95</th>
                  <th>req/s</th>
                  <th>Errores</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.name}>
                    <td className="k6-val">{row.name}</td>
                    <td>{row.vus}</td>
                    <td className="k6-val">{row.p95}</td>
                    <td>{row.rps}</td>
                    <td>{row.errors}</td>
                    <td
                      className="text-center"
                      style={{ color, fontWeight: 700 }}
                    >
                      ✅
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
