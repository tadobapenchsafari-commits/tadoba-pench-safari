import Link from 'next/link';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { TrackedLink } from './tracked-link';
import { originCities } from '@/data/origin-cities';

export function Footer() {
  return (
    <footer className="bg-bark text-bone/80 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Plan from your city */}
        <div className="border-b border-bone/10 pb-8 mb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-bone/60 mb-4">
            Plan your Tadoba safari from
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
            {originCities.map((c) => (
              <Link
                key={c.slug}
                href={`/tadoba-safari-from-${c.slug}`}
                className="hover:text-sunrise"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-sunrise flex items-center justify-center">
                <span className="font-display text-bark text-xl">T</span>
              </div>
              <div className="font-display text-lg text-bone">Tadoba Pench</div>
            </div>
            <p className="text-sm leading-relaxed">
              Expert-led jungle safaris in Tadoba and Pench. Curated by people
              born and raised in these forests.
            </p>
          </div>

          <div>
            <h4 className="font-display text-bone text-base mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/destinations/tadoba" className="hover:text-sunrise">Tadoba</Link></li>
              <li><Link href="/destinations/pench" className="hover:text-sunrise">Pench</Link></li>
              <li><Link href="/gates" className="hover:text-sunrise">All gates</Link></li>
              <li><Link href="/packages" className="hover:text-sunrise">Packages</Link></li>
              <li><Link href="/blog" className="hover:text-sunrise">Journal</Link></li>
              <li><Link href="/testimonials" className="hover:text-sunrise">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-bone text-base mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-sunrise">About</Link></li>
              <li><Link href="/contact" className="hover:text-sunrise">Contact</Link></li>
              <li><Link href="/contact" className="hover:text-sunrise">Travel Agents</Link></li>
              <li><Link href="/contact" className="hover:text-sunrise">Press</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-bone text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <TrackedLink event="phone_click" params={{ location: 'footer' }} href="tel:+918208090280" className="hover:text-sunrise">+91 82080 90280</TrackedLink>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <TrackedLink event="email_click" params={{ location: 'footer' }} href="mailto:info@tadobapenchsafari.com" className="hover:text-sunrise break-all">info@tadobapenchsafari.com</TrackedLink>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <address className="not-italic">
                  1105, Pioneer Tulip, Jaitala
                  <br />
                  Nagpur, Maharashtra 440036
                  <br />
                  India
                </address>
              </li>
            </ul>

            <div className="flex gap-3 mt-5">
              <a href="https://instagram.com/tadobapenchsafari" aria-label="Instagram" className="p-2 rounded-full bg-bone/10 hover:bg-sunrise hover:text-bark transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com/tadobapenchsafari" aria-label="Facebook" className="p-2 rounded-full bg-bone/10 hover:bg-sunrise hover:text-bark transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@tadobapenchsafari" aria-label="YouTube" className="p-2 rounded-full bg-bone/10 hover:bg-sunrise hover:text-bark transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-bone/10 flex flex-col sm:flex-row justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Tadoba Pench Safari Co. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-sunrise">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-sunrise">Terms</Link>
            <Link href="/legal/cancellation-policy" className="hover:text-sunrise">Cancellation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
