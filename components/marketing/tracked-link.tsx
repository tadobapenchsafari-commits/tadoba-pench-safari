'use client';

import { track } from '@/lib/analytics';

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  params?: Record<string, unknown>;
};

export function TrackedLink({
  event,
  params,
  onClick,
  children,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, params);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
