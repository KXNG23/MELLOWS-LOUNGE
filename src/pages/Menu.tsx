import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function MenuPage() {
  const fullMenuImage = "https://lh3.googleusercontent.com/d/14zA8r-U-932T6clTmiQMpmil5ONh0zLK";

  return (
    <div className="pt-28 min-h-screen bg-background">
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 opacity-80">Full Selection</h2>
            <h3 className="text-5xl md:text-7xl font-heading tracking-tighter">Our Cuisine</h3>
            <div className="w-16 h-[1px] bg-gold mx-auto mt-8 opacity-50" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative shadow-2xl border border-border/50 overflow-hidden bg-white rounded-[2rem]"
          >
            <img
              src={fullMenuImage}
              alt="Mellows Lounge Full Menu"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 bg-secondary/5 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 opacity-80">Reservations</h2>
          <h3 className="text-4xl font-heading mb-8">Book Your Table</h3>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience our full culinary journey. We recommend booking in advance for weekend evenings.
          </p>
          <Link to="/bookings">
            <Button className="bg-black text-white px-12 py-8 text-xs font-bold tracking-[0.2em] uppercase hover:bg-gold hover:text-black transition-all duration-500 rounded-full">
              Make a Reservation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
