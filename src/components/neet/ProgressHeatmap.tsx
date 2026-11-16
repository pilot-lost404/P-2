import { useMemo } from "react";
import { bucketByDay, heatmapGrid, streaks, type DisciplineCode } from "@/lib/neet/progress-math";

const LEVEL_BG = ["bg-surface-2", "bg-accent/25", "bg-accent/50", "bg-accent/75", "bg-accent"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DISC: { code: DisciplineCode; label: string }[] = [
  { code: "st", label: "Systems Thinking" },
  { code: "sd", label: "System Design" },
  { code: "en", label: "Engineering" },
];

export interface HeatEvent {
  occurred_on: string;
  discipline: string | null;
}

export default function ProgressHeatmap({
  events,
  weeks = 52,
  compact = false,
}: {
  events: HeatEvent[];
  weeks?: number;
  compact?: boolean;
}) {
  const { grid, s, total, perDisc } = useMemo(() => {
    const counts = bucketByDay(events.map((e) => e.occurred_on));
    const today = new Date();
    const perDisc = { st: 0, sd: 0, en: 0 } as Record<DisciplineCode, number>;
    for (const e of events)
      if (e.discipline === "st" || e.discipline === "sd" || e.discipline === "en")
        perDisc[e.discipline]++;
    return {
      grid: heatmapGrid(counts, today, weeks),
      s: streaks(counts, today),
      total: events.length,
      perDisc,
    };
  }, [events, weeks]);

  const size = compact ? "h-2.5 w-2.5" : "h-3 w-3";

  return (
    <div>
      {!compact && (
        <div className="mb-4 flex flex-wrap items-baseline gap-x-6 gap-y-1 text-sm">
          <span>
            <strong className="text-text">{total}</strong>{" "}
            <span className="text-muted">activities in the last year</span>
          </span>
          <span>
            <strong className="text-text">{s.current}</strong>{" "}
            <span className="text-muted">day streak</span>
          </span>
          <span>
            <strong className="text-text">{s.longest}</strong>{" "}
            <span className="text-muted">longest</span>
          </span>
        </div>
      )}
      <div
        className="overflow-x-auto pb-1"
        role="img"
        aria-label={`Daily progress: ${total} activities, ${s.current} day current streak`}
      >
        <div className="inline-flex flex-col gap-1">
          {!compact && (
            <div className="flex gap-[3px] pl-0 text-[11px] text-muted">
              {grid.map((col, i) => {
                const first = col[0]!;
                const d = new Date(first.date + "T00:00:00");
                const show = d.getDate() <= 7;
                return (
                  <span key={i} className={`${size} overflow-visible whitespace-nowrap`}>
                    {show ? MONTHS[d.getMonth()] : ""}
                  </span>
                );
              })}
            </div>
          )}
          <div className="flex gap-[3px]">
            {grid.map((col, i) => (
              <div key={i} className="flex flex-col gap-[3px]">
                {col.map((c) => (
                  <span
                    key={c.date}
                    title={
                      c.future
                        ? ""
                        : `${c.count} ${c.count === 1 ? "activity" : "activities"} on ${c.date}`
                    }
                    className={`${size} rounded-[3px] ${c.future ? "opacity-0" : LEVEL_BG[c.level]}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      {!compact && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <div className="flex flex-wrap gap-3">
            {DISC.map((d) => (
              <span key={d.code} className="rounded-full bg-surface-2 px-3 py-1">
                {d.label} <strong className="text-text">+{perDisc[d.code]}</strong>
              </span>
            ))}
          </div>
          <span className="flex items-center gap-1">
            Less{" "}
            {LEVEL_BG.map((b) => (
              <span key={b} className={`h-3 w-3 rounded-[3px] ${b}`} />
            ))}{" "}
            More
          </span>
        </div>
      )}
    </div>
  );
}
