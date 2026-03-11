"use client";

import { useCounter } from "../../hooks/useCounter";

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
  color?: string;
}

export default function Stat({ value, label, suffix = "", color }: StatProps) {
  const { count, ref } = useCounter(value, 1600);

  return (
    <div style={{ textAlign: "left", }}>
      <div
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          fontWeight: 600,
          color: color ?? "var(--accent)",
          lineHeight: 1,
          marginBottom: 6,
        }}
      >
        <span ref={ref}>{count}</span>
        {suffix}
      </div>
      <div
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 10,
          color: "var(--text-muted)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}
