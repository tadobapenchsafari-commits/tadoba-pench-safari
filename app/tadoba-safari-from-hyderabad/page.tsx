import { notFound } from 'next/navigation';
import { originCities } from '@/data/origin-cities';
import { CityLanding, cityMetadata } from '@/components/marketing/city-landing';

const SLUG = 'hyderabad';

export function generateMetadata() {
  const c = originCities.find((x) => x.slug === SLUG);
  if (!c) return {};
  return cityMetadata(c);
}

export default function Page() {
  const c = originCities.find((x) => x.slug === SLUG);
  if (!c) notFound();
  return <CityLanding city={c} />;
}
