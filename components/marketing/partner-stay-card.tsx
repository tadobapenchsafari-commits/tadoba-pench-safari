import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Promo card for our partner resort; links to /stays/tadoba-aranya-villa.
export function PartnerStayCard() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href="/stays/tadoba-aranya-villa"
        className="group grid md:grid-cols-2 bg-paper rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
      >
        <Image
          src="/images/stays/tadoba-aranya-villa-swimming-pool-gazebo-1920w.webp"
          alt="Pool at Tadoba Aranya Villa Resort, near Kolara gate"
          width={1920}
          height={1440}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="w-full h-64 md:h-full object-cover"
        />
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <p className="divider-tribal max-w-xs mb-4"><span>Our partner stay</span></p>
          <h2 className="font-display text-4xl text-bark leading-tight mb-3">
            Tadoba Aranya Villa <span className="italic text-sunrise">Resort</span>
          </h2>
          <p className="text-bark/75 leading-relaxed mb-6">
            Minutes from Kolara gate, with a pool, a machan and all meals included. Rooms from ₹7,000 a night. We book your stay and your safaris together.
          </p>
          <span className="inline-flex items-center gap-2 text-canopy font-medium">
            See the resort <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </section>
  );
}
