import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface AboutProps {
  imageUrl?: string;
}

export default function About({ imageUrl }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const defaultImageUrl = "https://lh3.googleusercontent.com/d/1JRYefAtrYalMMUysWbvRprGWiHGsog38";
  const aboutImageUrl = imageUrl || defaultImageUrl;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 px-6 md:px-16 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative z-10 overflow-hidden aspect-[4/5] transition-all duration-1000">
            <motion.img
              style={{ y }}
              src={aboutImageUrl}
              alt="About Mellows Lounge"
              className="w-full h-[120%] -top-[10%] absolute object-cover transition-transform duration-1000"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/about-lounge/800/1000";
              }}
            />
          </div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10"
        >
          <div className="space-y-4">
            <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase opacity-80">Our Philosophy</h2>
            <h3 className="text-5xl md:text-7xl font-heading leading-[0.9] tracking-tighter">
              A Legacy of <br />
              <span className="italic font-light">Excellence</span>
            </h3>
          </div>
          
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
            <p>
              Mellows Lounge represents the intersection of timeless elegance and contemporary flair. We believe that true luxury lies in the details—the perfect pour, the subtle seasoning, and an atmosphere that feels both grand and intimate.
            </p>
            <p>
              Our journey began with a simple vision: to create a space in Zeerust that rivals the world's most iconic lounges. Today, we are proud to be a destination for those who seek more than just a meal, but an experience that engages all the senses.
            </p>
          </div>

          <div className="pt-8 flex gap-12 border-t border-border/50">
            <div>
              <span className="block text-4xl font-heading text-gold tracking-tighter">2014</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Established</span>
            </div>
            <div>
              <span className="block text-4xl font-heading text-gold tracking-tighter">100+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Curated Wines</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
