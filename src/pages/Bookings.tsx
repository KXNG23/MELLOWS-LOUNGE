import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Phone, Mail, MapPin } from "lucide-react";
import { FormEvent } from "react";

export default function BookingsPage() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your booking request! We will contact you shortly to confirm.");
  };

  return (
    <div className="pt-28 bg-[#0a0a0a] min-h-screen text-white">
      <section className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 opacity-80">Reservations</h2>
            <h1 className="text-5xl md:text-7xl font-heading tracking-tighter uppercase font-bold">Book Your <span className="text-gold">Experience</span></h1>
            <div className="w-16 h-[1px] bg-gold mx-auto mt-8 opacity-50" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Booking Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-heading uppercase tracking-tight">Why Book With Us?</h3>
                <p className="text-white/60 font-light leading-relaxed">
                  Secure your spot at Zeerust's premier lounge. Whether it's a private celebration, a corporate gathering, or an intimate evening, we ensure every detail is handled with sophistication.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-[2rem]">
                  <div className="text-gold">
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest">Group Bookings</h4>
                  <p className="text-xs text-white/40 font-light">Special arrangements for groups of 10 or more.</p>
                </div>
                <div className="space-y-4 p-8 bg-white/5 border border-white/10 rounded-[2rem]">
                  <div className="text-gold">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest">Private Events</h4>
                  <p className="text-xs text-white/40 font-light">Exclusive access to our VIP lounge areas.</p>
                </div>
              </div>

              <div className="space-y-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Call Us</p>
                    <p className="text-sm">+27 72 83 2290</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email Us</p>
                    <p className="text-sm">bookings@mellowslounge.co.za</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="bg-white p-12 rounded-[2rem] shadow-2xl text-black"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Full Name</label>
                    <input required type="text" className="w-full bg-secondary/10 border border-border/50 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors rounded-2xl" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Email Address</label>
                    <input required type="email" className="w-full bg-secondary/10 border border-border/50 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors rounded-2xl" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Phone Number</label>
                    <input required type="tel" className="w-full bg-secondary/10 border border-border/50 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors rounded-2xl" placeholder="+27 ..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input required type="number" min="1" className="w-full bg-secondary/10 border border-border/50 pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors rounded-2xl" placeholder="2" />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input required type="date" className="w-full bg-secondary/10 border border-border/50 pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors rounded-2xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input required type="time" className="w-full bg-secondary/10 border border-border/50 pl-14 pr-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors rounded-2xl" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Special Requests</label>
                  <textarea className="w-full bg-secondary/10 border border-border/50 px-6 py-4 text-sm focus:outline-none focus:border-gold transition-colors rounded-2xl min-h-[120px]" placeholder="Tell us about your occasion..."></textarea>
                </div>

                <Button type="submit" className="w-full bg-black hover:bg-gold hover:text-black text-white font-bold uppercase tracking-[0.2em] text-xs py-8 rounded-full transition-all duration-500 shadow-xl">
                  Confirm Booking Request
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
