'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const nav = [
  { label: 'Tadoba', href: '/destinations/tadoba' },
  { label: 'Pench', href: '/destinations/pench' },
  { label: 'Properties', href: '/properties' },
  { label: 'Packages', href: '/packages' },
  { label: 'Journal', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bone/90 backdrop-blur-md border-b border-bark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-canopy flex items-center justify-center">
              <span className="font-display text-bone text-xl">T</span>
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-lg text-bark">Tadoba Pench</div>
              <div className="text-[10px] tracking-[0.25em] text-bamboo uppercase">
                Safari Co.
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-bark hover:text-sunrise transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sunrise group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918208090280"
              className="flex items-center gap-2 text-sm text-bark hover:text-sunrise"
            >
              <Phone className="w-4 h-4" />
              +91 82080 90280
            </a>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-sunrise text-bone rounded-full text-sm font-medium hover:bg-rust transition-colors"
            >
              Plan Your Safari
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-bark"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-bark/10 py-4 space-y-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-2 text-bark hover:text-sunrise"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-4 px-5 py-3 bg-sunrise text-bone rounded-full text-center font-medium"
            >
              Plan Your Safari
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
