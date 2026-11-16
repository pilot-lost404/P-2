import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      <p className="font-label text-sm uppercase tracking-widest text-accent">{eyebrow}</p>
      <h1 className="mt-2 text-4xl font-semibold md:text-5xl">{title}</h1>
      {children && <div className="measure mt-4 text-lg leading-8 text-muted">{children}</div>}
    </header>
  );
}

export function SearchField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
}) {
  return (
    <label className="relative block w-full">
      <span className="sr-only">{placeholder}</span>
      <svg
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
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
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-full border border-line bg-surface py-3 pl-11 pr-4 text-base text-text outline-none transition placeholder:text-muted focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:bg-bg"
      />
    </label>
  );
}

export function Chip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full px-4 text-sm transition-colors ${
        active
          ? "bg-ink font-medium text-bg"
          : "border border-line bg-bg text-text hover:border-accent hover:bg-surface"
      }`}
    >
      {active && <span aria-hidden>✓</span>}
      {children}
    </button>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  if (!children) return null;
  return (
    <div>
      <dt className="font-label text-xs uppercase tracking-wide text-muted">{label}</dt>
      <dd className="mt-0.5 text-sm leading-6 text-text">{children}</dd>
    </div>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <p className="rounded-3xl bg-surface p-10 text-center text-muted">{children}</p>;
}

export function LoadError({ error }: { error: unknown }) {
  return (
    <div role="alert" className="mx-auto max-w-xl px-5 py-24 text-center">
      <p className="font-label text-sm uppercase tracking-widest text-accent">Error</p>
      <h1 className="mt-2 text-3xl font-semibold">Couldn&apos;t load this page</h1>
      <p className="mt-3 text-muted">
        {error instanceof Error ? error.message : "Please try again."}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button type="button" className="btn-ink text-sm" onClick={() => window.location.reload()}>
          Try again
        </button>
        <a href="/" className="btn-soft text-sm">
          Go home
        </a>
      </div>
    </div>
  );
}
