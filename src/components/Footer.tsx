import { Instagram, Facebook, Music, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const logoUrl = "https://lh3.googleusercontent.com/d/1Tqp28bQEDCkgu8dAt8pnKYp2UMi8HMfg";

  return (
    <footer className="bg-black text-white py-20 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <Link to="/">
            <img 
              src={logoUrl} 
              alt="Mellows Lounge" 
              className="h-20 w-20 object-contain brightness-125"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/restaurant/100/100";
              }}
            />
          </Link>
          <p className="text-white/40 text-sm font-light leading-relaxed">
            Zeerust's premier destination for those who appreciate the finer things in life. Experience luxury, taste, and style.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-gold text-xs font-bold tracking-[0.3em] uppercase font-heading">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><HashLink smooth to="/#home" className="hover:text-gold transition-colors">Home</HashLink></li>
            <li><HashLink smooth to="/#about" className="hover:text-gold transition-colors">About Us</HashLink></li>
            <li><HashLink smooth to="/#menu" className="hover:text-gold transition-colors">Our Cuisine</HashLink></li>
            <li><HashLink smooth to="/#events" className="hover:text-gold transition-colors">Upcoming Events</HashLink></li>
            <li><Link to="/contacts" className="hover:text-gold transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-gold text-xs font-bold tracking-[0.3em] uppercase font-heading">Contact Info</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold" />
              <span>No 46 Zeerust Mall</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              <span>072 183 2290</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <span>info@mellowslounge.co.za</span>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-gold text-xs font-bold tracking-[0.3em] uppercase font-heading">Follow Us</h4>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/officialmellowsloungecpt" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/p/DR1mdKaDJv2/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@mellows_32" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" aria-label="TikTok">
              <Music className="h-5 w-5" />
            </a>
          </div>
          <div className="pt-6 border-t border-white/10">
            <p className="text-white/30 text-[10px] tracking-widest uppercase">
              © 2026 MELLOWS LOUNGE.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
