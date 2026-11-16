/** Split an href into the pieces TanStack's typed `Link` wants. */
export function splitHref(href: string) {
  const [path = "", hash] = href.split("#");
  const [to, qs] = path.split("?");
  const search = qs ? Object.fromEntries(new URLSearchParams(qs)) : undefined;
  return { to: to || "/", hash: hash || undefined, search };
}
