import { MessageCircle } from 'lucide-react';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20a%20safari%20booking"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-7 h-7" fill="white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-rust rounded-full border-2 border-bone animate-pulse" />
    </a>
  );
}
