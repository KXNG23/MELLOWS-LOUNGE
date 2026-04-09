import { motion } from "motion/react";

export default function NightlifeVideo() {
  const imageSrc = "https://lh3.googleusercontent.com/d/1tvI0DzUIDik1ZvFlcgn_kvg3t1Wnquxi";

  return (
    <section className="relative py-32 px-6 md:px-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase opacity-80">The New Standard</h2>
            <h3 className="text-5xl md:text-7xl font-heading tracking-tighter text-white leading-[0.9] uppercase font-bold">
              New <span className="text-gold">Custodians</span> <br />
              of Zeerust Nightlife
            </h3>
          </div>
          
          <div className="w-16 h-[1px] bg-gold opacity-50" />
          
          <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
            As the new custodians of Zeerust nightlife, Mellows Lounge is redefining luxury and entertainment in the heart of the North West. We are committed to providing an unparalleled experience where sophistication meets rhythm, ensuring every night is a masterpiece of taste and style.
          </p>
          
          <p className="text-white/40 text-sm font-light leading-relaxed max-w-xl">
            From curated soundscapes to world-class mixology, we invite you to witness the evolution of the lounge experience. This is where the elite gather, and where memories are crafted in gold.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl"
        >
          <img
            src={imageSrc}
            alt="Mellows Lounge Atmosphere"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>
    </section>
  );
}
