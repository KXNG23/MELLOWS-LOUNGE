import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Cuisine", href: "/menu" },
    { name: "Events", href: "/events" },
    { name: "Contacts", href: "/contacts" },
  ];

  const logoUrl = "https://lh3.googleusercontent.com/d/1Tqp28bQEDCkgu8dAt8pnKYp2UMi8HMfg";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-2xl">
      {/* Top Bar */}
      <div className="bg-black text-white/80 py-2 px-6 md:px-16 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest hidden sm:flex border-b border-white/5">
        <div className="flex gap-8">
          <div className="flex items-center gap-2">
            <Phone className="h-3 w-3" />
            <span>+27 72 83 2290</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3" />
            <span>info@mellowslounge.co.za</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-3 w-3" />
          <span>No 46 Zeerust Mall</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-black h-24 flex items-center justify-between px-6 lg:px-16 text-white border-b border-white/10">
        {/* Logo - Centered on mobile/tablet, left on desktop */}
        <div className="flex-1 lg:flex-none flex justify-start lg:justify-start">
          <Link to="/" className="flex items-center shrink-0">
            <img 
              src={logoUrl} 
              alt="Mellows Lounge" 
              className="h-16 w-16 md:h-20 md:w-20 min-w-[64px] min-h-[64px] object-contain brightness-110"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/restaurant/100/100";
              }}
            />
          </Link>
        </div>

        {/* Desktop Nav - Now at lg breakpoint */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[11px] font-bold transition-colors uppercase tracking-[0.2em] ${
                location.pathname === link.href ? "text-gold" : "text-white/70 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 border-l border-white/10 pl-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full text-white hover:bg-white/10"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/bookings">
              <Button className="bg-gold hover:bg-gold/90 text-black font-bold uppercase tracking-widest text-xs px-8 rounded-full h-12 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(191,155,48,0.3)]">
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile/Tablet Nav - Now up to lg breakpoint */}
        <div className="flex lg:hidden items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border">
              <div className="flex flex-col gap-8 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-heading transition-colors ${
                      location.pathname === link.href ? "text-gold" : "hover:text-gold"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/bookings" onClick={() => setIsOpen(false)} className="mt-4">
                  <Button className="w-full bg-gold hover:bg-gold/90 text-black font-bold uppercase tracking-widest text-xs py-6 rounded-full transition-all duration-500">
                    Book Now
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
