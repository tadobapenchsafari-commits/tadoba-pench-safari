import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Titles get the ' | Tadoba Pench Safari' suffix from the root layout. When
// that would push past ~60 chars (Google's display limit), drop the suffix.
export function seoTitle(title: string): string | { absolute: string } {
  return title.length + ' | Tadoba Pench Safari'.length > 60 ? { absolute: title } : title;
}

// Meta description from longer copy: whole sentences up to `max` chars, or a
// word-boundary cut when the first sentence alone is too short to be useful.
export function metaDescription(text: string, max = 155): string {
  const sentences = text.match(/[^.!?]+[.!?]+/g) ?? [text];
  let out = '';
  for (const s of sentences) {
    if ((out + s).trim().length > max) break;
    out += s;
  }
  out = out.trim();
  if (out.length >= 120) return out;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}
