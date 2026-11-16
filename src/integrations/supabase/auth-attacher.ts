// Must be registered as a global `functionMiddleware` in `src/start.ts`; otherwise
// the browser never attaches the bearer token to serverFn RPCs.
import { createMiddleware } from "@tanstack/react-start";
import { supabase } from "./client";
import { supabaseConfigured } from "@/lib/neet/supabase-env";

/** Per-browser development id, sent only when Supabase is not configured. */
function devHeaders(): Record<string, string> {
  const KEY = "neet.dev.user";
  try {
    let id = localStorage.getItem(KEY);
    if (!id) {
      id =
        globalThis.crypto?.randomUUID?.() ??
        `u-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      localStorage.setItem(KEY, id);
    }
    return { "x-neet-dev-user": id };
  } catch {
    return { "x-neet-dev-user": "anonymous-browser" };
  }
}

export const attachSupabaseAuth = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    if (!supabaseConfigured) {
      return next({ headers: devHeaders() });
    }
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    return next({
      headers: token ? { Authorization: `Bearer ${token}` } : devHeaders(),
    });
  },
);
