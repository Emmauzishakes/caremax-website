interface HeroStat {
  value: string;
  label: string;
}

const stats: HeroStat[] = [
  {
    value: "99.9%",
    label: "Platform Uptime",
  },
  {
    value: "24/7",
    label: "Cloud Access",
  },
  {
    value: "Multi",
    label: "Branch Support",
  },
];

export function HeroStats() {
  return (
    <div className="grid grid-cols-3 gap-6 pt-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-xl font-bold text-primary">
            {stat.value}
          </h3>

          <p className="text-sm text-muted-foreground">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}