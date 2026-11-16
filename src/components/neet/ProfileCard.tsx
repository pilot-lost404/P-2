import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { supabase } from "@/integrations/supabase/client";
import { useMe } from "@/hooks/use-me";
import { addGoal, removeGoal } from "@/lib/neet/account.functions";
import { bucketByDay, streaks } from "@/lib/neet/progress-math";
import { SpotlightCard } from "./fx";
import { AsciiSignature } from "./ascii";
import ProgressHeatmap from "./ProgressHeatmap";
import Link from "./AppLink";

export default function ProfileMenu() {
  const { user, me, error, loading, refetch } = useMe();
  const [open, setOpen] = useState(false);
  const [goal, setGoal] = useState("");
  const qc = useQueryClient();
  const navigate = useNavigate();
  const add = useServerFn(addGoal);
  const remove = useServerFn(removeGoal);
  if (!user) return null;

  const initials = me?.profile.initials || (user.email?.[0] ?? "U").toUpperCase();
  const events = me?.events ?? [];
  const s = streaks(bucketByDay(events.map((e) => e.occurred_on)), new Date());
  const lessons = events.filter((e) => e.kind === "lesson").length;

  const onAdd = async () => {
    if (!goal.trim()) return;
    const r = await add({ data: { text: goal } });
    if (r.error) {
      toast.error(r.error);
      return;
    }
    setGoal("");
    qc.invalidateQueries({ queryKey: ["me"] });
  };
  const onRemove = async (id: string) => {
    const r = await remove({ data: { id } });
    if (r.error) {
      toast.error(r.error);
      return;
    }
    qc.invalidateQueries({ queryKey: ["me"] });
  };
  const signOut = async () => {
    setOpen(false);
    await qc.cancelQueries();
    qc.clear();
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label="Your profile"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-text text-sm font-semibold text-bg transition hover:opacity-85"
        >
          {initials}
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        sideOffset={10}
        className="w-[min(22rem,calc(100vw-1.5rem))] border-0 bg-transparent p-0 shadow-none"
      >
        <SpotlightCard className="border border-line bg-bg p-5 shadow-[var(--shadow-lift)] hover:translate-y-0">
          {error ? (
            <div className="text-sm">
              <p className="text-muted">{error}</p>
              <button className="mt-3 text-accent underline" onClick={() => refetch()}>
                Try again
              </button>
            </div>
          ) : loading || !me ? (
            <div className="space-y-3" aria-busy>
              <div className="h-16 animate-pulse rounded-2xl bg-surface-2" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-surface-2" />
            </div>
          ) : (
            <>
              <div className="h-16 rounded-2xl bg-surface">
                <AsciiSignature initials={initials} seed={me.profile.signature_seed} cell={6} />
              </div>
              <p className="mt-3 font-semibold text-text">
                {me.profile.display_name || user.email}
              </p>
              <p className="text-xs text-muted">{user.email}</p>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[
                  ["Streak", `${s.current}d`],
                  ["Best", `${s.longest}d`],
                  ["Lessons", lessons],
                ].map(([k, v]) => (
                  <div key={k as string} className="rounded-2xl bg-surface py-2">
                    <p className="text-lg font-semibold text-text">{v}</p>
                    <p className="text-[11px] uppercase tracking-wide text-muted">{k}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  Learning goals
                </p>
                <ul className="mt-2 space-y-1.5">
                  {me.goals.length === 0 && <li className="text-sm text-muted">No goals yet.</li>}
                  {me.goals.map((g) => (
                    <li
                      key={g.id}
                      className="group flex items-start justify-between gap-2 text-sm text-text"
                    >
                      <span>• {g.text}</span>
                      <button
                        aria-label={`Remove goal ${g.text}`}
                        className="text-muted opacity-60 hover:text-text group-hover:opacity-100"
                        onClick={() => onRemove(g.id)}
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
                {me.goals.length < 3 && (
                  <form
                    className="mt-2 flex gap-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      onAdd();
                    }}
                  >
                    <input
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      maxLength={200}
                      aria-label="Add a learning goal"
                      placeholder="Add a goal"
                      className="min-w-0 flex-1 rounded-full border border-line bg-bg px-3 py-1.5 text-sm outline-none focus:border-accent"
                    />
                    <button className="rounded-full bg-surface-2 px-3 text-sm">Add</button>
                  </form>
                )}
              </div>

              <div className="mt-4 rounded-2xl bg-surface p-3">
                <ProgressHeatmap events={events} weeks={16} compact />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Link href="/me" onClick={() => setOpen(false)} className="text-sm text-accent">
                  Full progress →
                </Link>
                <button onClick={signOut} className="text-sm text-muted hover:text-text">
                  Sign out
                </button>
              </div>
            </>
          )}
        </SpotlightCard>
      </PopoverContent>
    </Popover>
  );
}
