import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const menuImages = [
  "https://lh3.googleusercontent.com/d/14zA8r-U-932T6clTmiQMpmil5ONh0zLK",
  "https://lh3.googleusercontent.com/d/1ZPRuZGX6xEXU0JOB-OSOnYBexP2-WAmJ",
];

export default function Menu() {
  return (
    <section id="menu" className="py-32 px-6 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 opacity-80">Curated Selection</h2>
          <h3 className="text-5xl md:text-7xl font-heading tracking-tighter">Our Cuisine</h3>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-8 opacity-50" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {menuImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="relative aspect-[3/4] overflow-hidden border border-border/50 group cursor-pointer"
            >
              <img
                src={src}
                alt={`Menu Page ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground italic">
            * Prices and availability are subject to change. Please inform your server of any allergies.
          </p>
        </div>
      </div>
    </section>
  );
}
