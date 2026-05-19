declare global {
  interface Window {
    gtag?: (
      command: 'event',
      name: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function track(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', name, params);
}
