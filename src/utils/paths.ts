/** Prefix local URLs with Astro's deployment base; preserve external URLs and anchors. */
export function withBase(path: string): string;
export function withBase(path: undefined): undefined;
export function withBase(path: string | undefined): string | undefined;
export function withBase(path: string | undefined): string | undefined {
  if (!path || /^(?:[a-z][a-z\d+.-]*:|\/\/|#|\?)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (base && (path === base || path.startsWith(`${base}/`))) return path;
  return `${base}/${path.replace(/^\/+/, '')}`;
}
