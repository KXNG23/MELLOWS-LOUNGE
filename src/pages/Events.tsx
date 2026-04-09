import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Events from "../components/Events";

export default function EventsPage() {
  return (
    <div className="pt-28">
      <Events />
      <section className="py-20 px-6 md:px-16 bg-[#0a0a0a] text-white border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 opacity-80">Private Functions</h2>
          <h3 className="text-4xl font-heading mb-8">Host Your Event</h3>
          <p className="text-white/50 leading-relaxed mb-12">
            Looking for an exclusive venue for your next celebration or corporate gathering? Mellows Lounge offers bespoke event packages tailored to your needs.
          </p>
          <Link to="/bookings">
            <Button className="bg-transparent border border-gold text-gold px-12 py-8 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-500 rounded-full">
              Inquire About Private Events
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
