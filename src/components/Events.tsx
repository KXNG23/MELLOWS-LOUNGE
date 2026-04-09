import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Music, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    title: "Deep House",
    date: "7th March 2026",
    time: "19:00 - Late",
    description: "Unwind with all Deep House Genres, including AfroTech(DeepTech).",
    image: "https://lh3.googleusercontent.com/d/115iLzmHw6rY0HMJp_1sTeIV1CBnajDiO",
    video: "https://lh3.googleusercontent.com/d/11vxg3Kxu_tRlHj8DrpYoNFs24swCLr15",
    icon: Music,
    buttonText: "BUY TICKET",
    link: "/contacts"
  },
  {
    title: "EASTER NIGHT",
    date: "4th April 2026",
    time: "15:00 - 18:00",
    description: "Come Enjoy Soul Feeding Food and Music.",
    image: "https://lh3.googleusercontent.com/d/1ab0hCEbQ9lfztp2nvymAd3IIT_nC9byu",
    icon: Sparkles,
    buttonText: "BUY TICKET",
    link: "/contacts"
  },
  {
    title: "Sunday Chill Session",
    date: "Every Sunday",
    time: "14:00 - 20:00",
    description: "The perfect way to end your weekend with laid-back beats and special platter deals.",
    image: "https://lh3.googleusercontent.com/d/1fNOf3OI_pzMIpbOyF3zv63AWzsZ5xO7V",
    icon: Calendar,
    buttonText: "BUY TICKET",
    link: "/contacts"
  },
];

export default function Events() {
  return (
    <section id="events" className="py-32 px-6 md:px-16 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 opacity-80">Exclusive Gatherings</h2>
            <h3 className="text-5xl md:text-7xl font-heading tracking-tighter">Upcoming Events</h3>
            <div className="w-16 h-[1px] bg-gold mx-auto mt-8 opacity-50" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative h-[500px] overflow-hidden rounded-[2rem] border border-white/10 hover:border-gold/50 transition-all duration-700">
                {/* Background Media */}
                <div className="absolute inset-0 z-0">
                  {event.video ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      poster={event.image}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    >
                      <source src={event.video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/event-${idx}/800/1200`;
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                  >
                    <div className="mb-6 text-gold">
                      <event.icon className="h-8 w-8 stroke-[1.5px]" />
                    </div>
                    <h4 className="text-3xl font-heading mb-4 tracking-tight leading-none">{event.title}</h4>
                    <div className="flex flex-col gap-1 mb-6 text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                      <span>{event.date}</span>
                      <span className="opacity-50">{event.time}</span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed font-light mb-8 line-clamp-2 group-hover:line-clamp-none transition-all duration-700">
                      {event.description}
                    </p>
                    <Link to={event.link}>
                      <button className="w-full py-4 rounded-full border border-gold/30 text-[10px] font-bold uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-black transition-all duration-500">
                        {event.buttonText}
                      </button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
