import { Link } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { splitHref } from "@/lib/neet/href";

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

/** Thin wrapper so components can keep a simple `href` API. */
export default function AppLink({ href, ...rest }: Props) {
  const { to, hash, search } = splitHref(href);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Link to={to as any} hash={hash} search={search as any} {...(rest as any)} />;
}
