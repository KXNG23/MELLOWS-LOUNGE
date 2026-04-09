import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/d/14elfTM6fh0Y5JBtF7wCOEabFjkIsanxK",
    alt: "Lounge Interior",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://lh3.googleusercontent.com/d/1cTMsxQV_39Lb9Ii38jQhYE2n8XWWfvCX",
    alt: "Signature Cocktail",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://lh3.googleusercontent.com/d/1NYlxumXDSfM7jdRKybJm6havdMApYwAz",
    alt: "Gourmet Platter",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://lh3.googleusercontent.com/d/1JRYefAtrYalMMUysWbvRprGWiHGsog38",
    alt: "Lounge Atmosphere",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    src: "https://picsum.photos/seed/lounge-5/800/800",
    alt: "Evening Vibe",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://picsum.photos/seed/lounge-6/800/800",
    alt: "Bar Detail",
    span: "md:col-span-1 md:row-span-1",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="py-32 px-6 md:px-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-gold text-xs font-bold tracking-[0.5em] uppercase mb-4 opacity-80">Visual Journey</h2>
          <h3 className="text-5xl md:text-7xl font-heading tracking-tighter text-white">The Gallery</h3>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-8 opacity-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 auto-rows-[300px]">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative overflow-hidden group border border-white/5 cursor-pointer ${image.span}`}
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/lounge-gallery-${idx}/800/800`;
                }}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-[0.3em] uppercase border border-white/30 px-6 py-3">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-[110]"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="h-8 w-8" />
            </motion.button>

            <button
              className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={prevImage}
            >
              <ChevronLeft className="h-10 w-10 md:h-16 md:w-16" />
            </button>

            <button
              className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-[110]"
              onClick={nextImage}
            >
              <ChevronRight className="h-10 w-10 md:h-16 md:w-16" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/lounge-gallery-${selectedIndex}/1200/800`;
                }}
              />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="mt-8 text-center"
              >
                <h4 className="text-gold text-2xl font-heading tracking-tight mb-2">
                  {galleryImages[selectedIndex].alt}
                </h4>
                <p className="text-white/50 text-[10px] uppercase tracking-[0.4em] font-bold">
                  Image {selectedIndex + 1} of {galleryImages.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
