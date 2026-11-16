import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { authErrorMessage } from "@/hooks/use-session";
import { pageHead } from "@/lib/neet/meta";
import { supabaseConfigured } from "@/lib/neet/supabase-env";

/**
 * `client.ts` is generated and throws on first access when the Supabase env vars are
 * missing, so it must never be imported into a page that can render in local mode.
 * It is loaded lazily, and only when Supabase is actually configured.
 */
async function getSupabase() {
  const { supabase } = await import("@/integrations/supabase/client");
  return supabase;
}

function ResetPage() {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);
  const [pw, setPw] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!supabaseConfigured) return;
    if (window.location.hash.includes("type=recovery")) setReady(true);
    let unsubscribe: (() => void) | undefined;
    let cancelled = false;
    void getSupabase().then((supabase) => {
      if (cancelled) return;
      const { data } = supabase.auth.onAuthStateChange((e) => {
        if (e === "PASSWORD_RECOVERY") setReady(true);
      });
      unsubscribe = () => data.subscription.unsubscribe();
    });
    return () => {
      cancelled = true;
      unsubscribe?.();
    };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pw.length < 8) return setError("Password must be at least 8 characters.");
    setBusy(true);
    try {
      const supabase = await getSupabase();
      const { error } = await supabase.auth.updateUser({ password: pw });
      setBusy(false);
      if (error) return setError(authErrorMessage(error));
      navigate({ to: "/me", replace: true });
    } catch (err) {
      setBusy(false);
      setError(authErrorMessage(err));
    }
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md flex-col justify-center px-5 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Set a new password</h1>
      {!supabaseConfigured ? (
        <p className="mt-4 text-muted">Accounts aren&apos;t configured on this deployment yet.</p>
      ) : !ready ? (
        <p className="mt-4 text-muted">Open this page from the reset link in your email.</p>
      ) : (
        <form onSubmit={submit} className="mt-8 space-y-4">
          <label htmlFor="new-password" className="block">
            <span className="text-sm text-muted">New password</span>
            <input
              id="new-password"
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              autoComplete="new-password"
              aria-required="true"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? "reset-error" : "reset-hint"}
              className={`mt-1 w-full rounded-2xl border bg-bg px-4 py-3 outline-none focus:border-accent ${
                error ? "border-warn" : "border-line"
              }`}
            />
          </label>
          <p id="reset-hint" className="text-xs text-muted">
            At least 8 characters. Paste from a password manager is fine.
          </p>
          {error && (
            <p id="reset-error" role="alert" className="text-sm text-text">
              {error}
            </p>
          )}
          <button disabled={busy} className="btn-ink w-full justify-center disabled:opacity-50">
            {busy ? "Saving…" : "Update password"}
          </button>
        </form>
      )}
    </div>
  );
}

export const Route = createFileRoute("/reset-password")({
  head: () => pageHead("Reset password", "Choose a new password for your NEET account."),
  component: ResetPage,
});
