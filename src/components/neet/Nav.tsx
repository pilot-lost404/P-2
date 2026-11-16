import Link from "@/components/neet/AppLink";
import { useLocation } from "@tanstack/react-router";
import { useState } from "react";
import TextSizeToggle from "./TextSizeToggle";
import ProfileMenu from "./ProfileCard";
import { useSession } from "@/hooks/use-session";

const LINKS = [
  { href: "/paths", label: "Paths" },
  { href: "/labs", label: "Labs" },
  { href: "/library", label: "Library" },
  { href: "/sources", label: "Sources" },
  { href: "/me", label: "Progress" },
];

/** The rest, reachable from the footer and the command palette rather than the bar. */
const MORE = [
  { href: "/method", label: "The method" },
  { href: "/exercises", label: "Exercises" },
  { href: "/careers", label: "Careers" },
  { href: "/coverage", label: "Research coverage" },
  { href: "/health", label: "Content status" },
];

export default function Nav() {
  const pathname = useLocation({ select: (l) => l.pathname });
  const [open, setOpen] = useState(false);
  const { user, ready } = useSession();
  const openPalette = () => window.dispatchEvent(new Event("neet:palette"));

  // Close the mobile sheet whenever the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (open) setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="flex items-baseline gap-3" onClick={() => setOpen(false)}>
          <span className="font-label text-xl font-bold tracking-[0.25em] text-accent">NEET</span>
          <span className="hidden font-display text-sm italic text-muted xl:inline">
            we ain&apos;t an academy
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {LINKS.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {l.label}
                {active && (
                  <span
                    aria-hidden
                    className="absolute inset-x-3 -bottom-[1px] h-0.5 rounded-full bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openPalette}
            aria-label="Search (Command K)"
            className="flex min-h-11 items-center gap-2 rounded-lg border border-line px-3 text-sm text-muted hover:border-accent hover:text-text"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span className="hidden font-label sm:inline">⌘K</span>
          </button>
          <div className="hidden xl:block">
            <TextSizeToggle />
          </div>
          {ready &&
            (user ? (
              <ProfileMenu />
            ) : (
              <Link href="/auth" className="btn-ink text-sm">
                Sign in
              </Link>
            ))}
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-line text-muted lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-surface px-5 py-4 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {[...LINKS, ...MORE].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === l.href ? "page" : undefined}
                className="flex min-h-11 items-center rounded-lg px-3 text-base text-text hover:bg-surface-2 aria-[current=page]:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex items-center justify-between gap-3">
            <TextSizeToggle />
            {ready && !user && (
              <Link href="/auth" onClick={() => setOpen(false)} className="btn-ink text-sm">
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
