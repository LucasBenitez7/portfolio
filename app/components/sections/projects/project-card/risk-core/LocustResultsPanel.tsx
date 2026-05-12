export type LocustResultRow = {
  metric: string;
  before: string;
  after: string;
  improvement: string;
  throughput?: string;
  errorRate?: string;
};

type LocustResultsPanelProps = {
  rows: readonly LocustResultRow[];
  color: string;
  open: boolean;
  onToggle: () => void;
};

export default function LocustResultsPanel({
  rows,
  color,
  open,
  onToggle,
}: LocustResultsPanelProps) {
  const showThroughput = rows.some((r) => r.throughput);
  const showErrorRate = rows.some((r) => r.errorRate);

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
        {open ? "OCULTAR" : "VER"} RESULTADOS LOCUST
      </button>
      {open && (
        <div
          className="locust-table-wrapper"
          style={{
            border: "1px solid var(--border)",
            borderRadius: 2,
            overflow: "hidden",
            width: "100%",
          }}
        >
          <div
            className="locust-table-scroll"
            style={{
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              width: "100%",
            }}
          >
            <table className="locust-table">
              <thead>
                <tr>
                  <th>Métrica</th>
                  <th>Antes</th>
                  <th>Después</th>
                  {showThroughput && <th>Throughput</th>}
                  {showErrorRate && <th>Error Rate</th>}
                  <th>Mejora</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.metric}>
                    <td className="locust-val">{row.metric}</td>
                    <td>{row.before}</td>
                    <td>{row.after}</td>
                    {showThroughput && <td>{row.throughput || "—"}</td>}
                    {showErrorRate && <td>{row.errorRate || "—"}</td>}
                    <td
                      className="text-center"
                      style={{ color, fontWeight: 700 }}
                    >
                      {row.improvement}
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
