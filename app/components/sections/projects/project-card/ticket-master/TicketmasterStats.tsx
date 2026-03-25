import Stat from "./Stat";

type TicketmasterStatsProps = {
  accentColor: string;
};

export default function TicketmasterStats({
  accentColor,
}: TicketmasterStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-2 mb-6">
      <Stat
        value={500}
        label="VUs máximos"
        suffix="+"
        color={accentColor}
      />
      <Stat value={0} label="Error rate" suffix="%" color={accentColor} />
      <Stat value={12} label="p95 latency" suffix="ms" color={accentColor} />
    </div>
  );
}
