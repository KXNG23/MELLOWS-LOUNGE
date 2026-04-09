import { motion } from "motion/react";
import { MapPin, Phone, Clock, Mail, Users, Calendar, Clock as ClockIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";

export default function Location() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    alert("Thank you for your booking request! We will contact you shortly to confirm.");
  };

  return (
    <section id="location" className="py-32 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-12 bg-white p-12 border border-border/50 rounded-[2rem] shadow-xl"
          >
            <div className="space-y-4">
              <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase opacity-80">Get In Touch</h2>
              <h3 className="text-5xl md:text-7xl font-heading tracking-tighter leading-[0.9] uppercase font-bold">Our <br /><span className="text-gold">Contacts</span></h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gold">
                  <MapPin className="h-5 w-5 stroke-[1.5px]" />
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold">Address</h4>
                </div>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  No 46 Zeerust Mall
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gold">
                  <Clock className="h-5 w-5 stroke-[1.5px]" />
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold">Hours</h4>
                </div>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Mon - Thu: 12:00 - 22:00<br />
                  Fri - Sat: 12:00 - 02:00<br />
                  Sun: 12:00 - 20:00
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gold">
                  <Phone className="h-5 w-5 stroke-[1.5px]" />
                  <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold">Contact</h4>
                </div>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  072 183 2290<br />
                  info@mellowslounge.co.za
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white p-12 border border-border/50 space-y-8 rounded-[2rem] shadow-xl"
          >
            <div className="space-y-2">
              <h4 className="text-2xl font-heading uppercase font-bold tracking-tight">Make a Reservation</h4>
              <p className="text-muted-foreground text-sm font-light">Fill in the details below to request a booking.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Name</label>
                  <input required type="text" className="w-full bg-secondary/10 border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors rounded-xl" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Email</label>
                  <input required type="email" className="w-full bg-secondary/10 border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors rounded-xl" placeholder="Your Email" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Phone Number</label>
                  <input required type="tel" className="w-full bg-secondary/10 border border-border/50 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors rounded-xl" placeholder="+27 ..." />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Number of Guests</label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input required type="number" min="1" className="w-full bg-secondary/10 border border-border/50 pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors rounded-xl" placeholder="2" />
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input required type="date" className="w-full bg-secondary/10 border border-border/50 pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Time</label>
                  <div className="relative">
                    <ClockIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input required type="time" className="w-full bg-secondary/10 border border-border/50 pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors rounded-xl" />
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-black hover:bg-gold hover:text-black text-white font-bold uppercase tracking-[0.2em] text-xs py-8 rounded-full transition-all duration-500">
                Submit Booking Request
              </Button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[500px] w-full border border-border/50 overflow-hidden rounded-[2rem] shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.455243179261!2d26.0754843!3d-25.5413889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ea263388833631ea%3A0x1ea263388833631ea!2sZeerust%20Mall!5e0!3m2!1sen!2sza!4v1712586000000!5m2!1sen!2sza"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mellows Lounge Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
