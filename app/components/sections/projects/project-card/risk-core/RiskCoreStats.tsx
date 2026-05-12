type StatItemProps = {
  label: string;
  value: string;
  suffix?: string;
  color: string;
};

function StatItem({ label, value, suffix, color }: StatItemProps) {
  return (
    <div
      style={{
        background: `rgba(${color}, 0.06)`,
        border: `1px solid rgba(${color}, 0.15)`,
        borderRadius: 2,
        padding: "12px 16px",
      }}
    >
      <div
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 20,
          fontWeight: 700,
          color: `rgb(${color})`,
          lineHeight: 1.2,
          marginBottom: 4,
        }}
      >
        {value}
        {suffix && (
          <span style={{ fontSize: 13, fontWeight: 500, marginLeft: 2 }}>
            {suffix}
          </span>
        )}
      </div>
      <div
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 10,
          color: "var(--text-muted2)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

type RiskCoreStatsProps = {
  colorRgb: string;
};

export default function RiskCoreStats({ colorRgb }: RiskCoreStatsProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5">
      <StatItem label="Breaking Point" value="300" suffix="users" color={colorRgb} />
      <StatItem label="Success Rate" value="98.57" suffix="%" color={colorRgb} />
      <StatItem label="Throughput ↑" value="22" suffix="×" color={colorRgb} />
      <StatItem label="Tests" value="251" suffix="passing" color={colorRgb} />
    </div>
  );
}
