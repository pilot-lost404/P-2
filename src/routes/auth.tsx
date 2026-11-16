import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { authErrorMessage } from "@/hooks/use-session";
import { supabaseConfigured } from "@/lib/neet/supabase-env";
import { pageHead } from "@/lib/neet/meta";

const search = z.object({
  redirect: z.string().optional(),
  mode: z.enum(["signin", "signup", "forgot"]).optional(),
});

/** Only allow same-origin relative paths as post-login destinations. */
function safeRedirect(r?: string) {
  if (!r) return "/me";
  try {
    const u = new URL(r, window.location.origin);
    return u.origin === window.location.origin ? u.pathname + u.search : "/me";
  } catch {
    return "/me";
  }
}

type FieldError = { message: string; field?: string };

function AuthPage() {
  const { redirect, mode: initial } = Route.useSearch();
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">(initial ?? "signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<FieldError | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    if (!supabaseConfigured) return;
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) navigate({ to: safeRedirect(redirect), replace: true });
    });
  }, [navigate, redirect]);

  // Submitting should never leave a keyboard or screen-reader user stranded: if we know
  // which field failed, move focus there so the error is read out with the input.
  const errorRef = useRef<string | null>(null);
  useEffect(() => {
    const field = errorRef.current;
    if (!field || !error) return;
    document.getElementById(`auth-${field}`)?.focus();
    errorRef.current = null;
  }, [error]);

  const fail = (field: string, message: string) => {
    errorRef.current = field;
    setError({ message, field });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setNotice(null);
    const em = email.trim().toLowerCase();
    if (!/^\S+@\S+\.\S+$/.test(em))
      return fail("email", "Enter a valid email address, like name@example.com.");
    if (mode !== "forgot" && password.length < 8)
      return fail("password", "Password must be at least 8 characters.");
    if (mode === "signup" && !name.trim())
      return fail("name", "Tell us your name — your signature is made from your initials.");
    if (!supabaseConfigured) {
      setError({
        message:
          "Accounts aren't configured on this deployment yet. You can still learn — progress is saved in this browser.",
      });
      return;
    }
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email: em, password });
        if (error) throw error;
        navigate({ to: safeRedirect(redirect), replace: true });
      } else if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email: em,
          password,
          options: {
            emailRedirectTo: window.location.origin + "/auth",
            data: { display_name: name.trim().slice(0, 80) },
          },
        });
        if (error) throw error;
        if (data.session) navigate({ to: safeRedirect(redirect), replace: true });
        else setNotice("Check your inbox to confirm your email, then sign in.");
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(em, {
          redirectTo: window.location.origin + "/reset-password",
        });
        if (error) throw error;
        setNotice("If that email has an account, a reset link is on its way.");
      }
    } catch (err) {
      setError({ message: authErrorMessage(err) });
    } finally {
      setBusy(false);
    }
  };

  const title =
    mode === "signin"
      ? "Welcome back"
      : mode === "signup"
        ? "Create your account"
        : "Reset your password";

  return (
    <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-md flex-col justify-center px-5 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      <p className="mt-2 text-muted">
        {mode === "forgot"
          ? "We'll email you a link to set a new password."
          : "Your progress, goals and signature follow you on every device."}
      </p>

      {mode !== "forgot" && (
        <div role="tablist" className="mt-8 grid grid-cols-2 rounded-full bg-surface-2 p-1 text-sm">
          {(["signin", "signup"] as const).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={mode === m}
              onClick={() => {
                setMode(m);
                setError(null);
                setNotice(null);
              }}
              className={`rounded-full py-2 transition ${mode === m ? "bg-bg font-medium text-text shadow-sm" : "text-muted"}`}
            >
              {m === "signin" ? "Sign in" : "Create account"}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={submit} className="mt-6 space-y-4" noValidate>
        {mode === "signup" && (
          <Field
            id="auth-name"
            label="Full name"
            value={name}
            onChange={setName}
            autoComplete="name"
            invalid={error?.field === "name"}
            describedBy={error?.field === "name" ? "auth-error" : undefined}
            hint="Your signature is made from your initials."
          />
        )}
        <Field
          id="auth-email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          autoComplete="email"
          invalid={error?.field === "email"}
          describedBy={error?.field === "email" ? "auth-error" : undefined}
        />
        {mode !== "forgot" && (
          <Field
            id="auth-password"
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
            invalid={error?.field === "password"}
            describedBy={error?.field === "password" ? "auth-error" : undefined}
            hint={mode === "signup" ? "At least 8 characters." : undefined}
          />
        )}
        {error && (
          <p
            id="auth-error"
            role="alert"
            className="rounded-2xl bg-surface-2 px-4 py-3 text-sm text-text"
          >
            {error.message}
          </p>
        )}
        {notice && (
          <p role="status" className="rounded-2xl bg-accent/10 px-4 py-3 text-sm text-text">
            {notice}
          </p>
        )}
        <button disabled={busy} className="btn-ink w-full justify-center disabled:opacity-50">
          {busy
            ? "Please wait…"
            : mode === "signin"
              ? "Sign in"
              : mode === "signup"
                ? "Create account"
                : "Send reset link"}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-muted">
        {mode === "signin" && (
          <button onClick={() => setMode("forgot")} className="hover:text-text">
            Forgot password?
          </button>
        )}
        {mode === "forgot" && (
          <button onClick={() => setMode("signin")} className="hover:text-text">
            ← Back to sign in
          </button>
        )}
      </div>
    </div>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  invalid = false,
  describedBy,
  hint,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
  invalid?: boolean | undefined;
  describedBy?: string | undefined;
  hint?: string | undefined;
}) {
  return (
    <div className="block">
      <label htmlFor={id} className="block">
        <span className="text-sm text-muted">{label}</span>
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          required
          aria-required="true"
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={`mt-1 w-full rounded-2xl border bg-bg px-4 py-3 outline-none transition focus:border-accent ${
            invalid ? "border-warn" : "border-line"
          }`}
        />
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-xs text-muted">
          {hint}
        </p>
      )}
    </div>
  );
}

export const Route = createFileRoute("/auth")({
  validateSearch: search,
  head: () =>
    pageHead(
      "Sign in",
      "Sign in or create a NEET account to save your progress, goals and signature.",
    ),
  component: AuthPage,
});
