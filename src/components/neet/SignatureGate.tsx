import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useMe } from "@/hooks/use-me";
import { signCommitment } from "@/lib/neet/account.functions";
import { initialsFrom, seedFrom } from "@/lib/neet/progress-math";
import { AsciiSignature } from "./ascii";

const HOLD_MS = 1400;

/** Shown before the first lesson: the learner signs with an initials-only ASCII signature. */
export default function SignatureGate() {
  const { user, me } = useMe();
  const qc = useQueryClient();
  const sign = useServerFn(signCommitment);
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [progress, setProgress] = useState(0);
  const [saving, setSaving] = useState(false);
  const raf = useRef(0);
  const start = useRef(0);

  useEffect(() => {
    if (me && !name)
      setName(me.profile.display_name || (user?.user_metadata?.["display_name"] as string) || "");
  }, [me, user, name]);

  const open = !!user && !!me && !me.profile.signed_at;
  const initials = initialsFrom(name || "U");
  const seed = seedFrom(initials + (user?.id ?? ""));
  const ready = name.trim().length > 0 && goal.trim().length > 0;

  const finish = async () => {
    setSaving(true);
    try {
      const r = await sign({
        data: { displayName: name.trim(), initials, seed, goal: goal.trim() },
      });
      if (r.error) throw new Error(r.error);
      toast.success("Signed. Welcome in.");
      qc.invalidateQueries({ queryKey: ["me"] });
    } catch (e) {
      toast.error((e as Error).message || "Couldn't save. Try again.");
      setProgress(0);
    } finally {
      setSaving(false);
    }
  };

  const tick = () => {
    const p = Math.min(1, (performance.now() - start.current) / HOLD_MS);
    setProgress(p);
    if (p >= 1) {
      finish();
      return;
    }
    raf.current = requestAnimationFrame(tick);
  };
  const down = () => {
    if (!ready || saving) return;
    start.current = performance.now();
    raf.current = requestAnimationFrame(tick);
  };
  const up = () => {
    cancelAnimationFrame(raf.current);
    if (progress < 1) setProgress(0);
  };

  return (
    <Dialog open={open}>
      <DialogContent
        className="max-w-md rounded-3xl [&>button]:hidden"
        onEscapeKeyDown={(e) => e.preventDefault()}
        onPointerDownOutside={(e) => e.preventDefault()}
      >
        <DialogTitle className="text-2xl font-semibold tracking-tight">
          Sign your commitment
        </DialogTitle>
        <DialogDescription>
          Before your first lesson, set one goal and sign with your initials.
        </DialogDescription>
        <div className="mt-2 h-28 rounded-2xl bg-surface">
          <AsciiSignature initials={initials} seed={seed} progress={progress} cell={7} />
        </div>
        <label htmlFor="signature-name" className="block text-sm">
          <span className="text-muted">Your name</span>
          <input
            id="signature-name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={80}
            className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-2 outline-none focus:border-accent"
          />
        </label>
        <label htmlFor="signature-goal" className="block text-sm">
          <span className="text-muted">What do you want to be able to do?</span>
          <input
            id="signature-goal"
            aria-describedby="signature-goal-hint"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            maxLength={200}
            placeholder="e.g. Design a rate limiter I can defend"
            className="mt-1 w-full rounded-xl border border-line bg-bg px-3 py-2 outline-none focus:border-accent"
          />
        </label>
        <p id="signature-goal-hint" className="-mt-1 text-xs text-muted">
          One sentence. You can add two more later.
        </p>
        <button
          type="button"
          disabled={!ready || saving}
          onPointerDown={down}
          onPointerUp={up}
          onPointerLeave={up}
          onKeyDown={(e) => {
            if ((e.key === " " || e.key === "Enter") && !e.repeat) down();
          }}
          onKeyUp={up}
          className="relative mt-2 w-full overflow-hidden rounded-full bg-text py-3 text-sm font-medium text-bg disabled:opacity-40"
        >
          <span
            aria-hidden
            className="absolute inset-y-0 left-0 bg-accent transition-[width]"
            style={{ width: `${progress * 100}%` }}
          />
          <span className="relative">
            {saving ? "Saving…" : ready ? "Press and hold to sign" : "Add your name and a goal"}
          </span>
        </button>
      </DialogContent>
    </Dialog>
  );
}
