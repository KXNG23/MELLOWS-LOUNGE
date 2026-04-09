import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

const carouselItems = [
  {
    type: "video",
    src: "https://lh3.googleusercontent.com/d/11vxg3Kxu_tRlHj8DrpYoNFs24swCLr15",
    poster: "https://lh3.googleusercontent.com/d/14elfTM6fh0Y5JBtF7wCOEabFjkIsanxK",
  },
  {
    type: "video",
    src: "https://lh3.googleusercontent.com/d/10eBaA_kwPv6kRr050XpxIdH5mLGycvdD",
    poster: "https://lh3.googleusercontent.com/d/14elfTM6fh0Y5JBtF7wCOEabFjkIsanxK",
  },
  {
    type: "image",
    src: "https://lh3.googleusercontent.com/d/14elfTM6fh0Y5JBtF7wCOEabFjkIsanxK",
  },
  {
    type: "image",
    src: "https://lh3.googleusercontent.com/d/1cTMsxQV_39Lb9Ii38jQhYE2n8XWWfvCX",
  },
  {
    type: "image",
    src: "https://lh3.googleusercontent.com/d/1nFgGiKSJjURVH0wt1rpsJ7D5oj6szny0",
  },
  {
    type: "image",
    src: "https://lh3.googleusercontent.com/d/1rwcsrcjrXFBwZFBMHwNtvcf3m5fDHZq5",
  },
];

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const sectionRef = React.useRef<HTMLElement>(null);
  const plugin = React.useRef(
    Autoplay({ delay: 8000, stopOnInteraction: false })
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Handle video playback for the active slide
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      const index = api.selectedScrollSnap();
      const currentItem = carouselItems[index];

      // Find all videos and pause them, then play the current one if it's a video
      const videos = document.querySelectorAll('.hero-video');
      videos.forEach((v) => {
        const video = v as HTMLVideoElement;
        video.pause();
      });

      if (currentItem.type === "video") {
        const activeVideo = document.querySelector(`.hero-video-${index}`) as HTMLVideoElement;
        if (activeVideo) {
          activeVideo.currentTime = 0;
          activeVideo.play().catch(err => {
            if (err.name !== "AbortError") {
              console.error("Video play failed:", err);
            }
          });
        }
        // If it's a video, we might want to stay longer
        plugin.current.stop();
        const timer = setTimeout(() => {
          if (api.selectedScrollSnap() === index) {
            api.scrollNext();
            plugin.current.play();
          }
        }, 15000); // Stay for 15s on video slides
        return () => clearTimeout(timer);
      } else {
        plugin.current.play();
      }
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Carousel with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 h-[130%]"
      >
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-full ml-0">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="pl-0 h-full">
                <div className="relative h-full w-full bg-black">
                  {item.type === "video" ? (
                    <video
                      className={`hero-video hero-video-${index} h-full w-full object-cover object-top`}
                      poster={item.poster}
                      muted
                      loop
                      playsInline
                      preload="auto"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.src}
                      alt={`Lounge Atmosphere ${index + 1}`}
                      className="h-full w-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/lounge-${index}/1920/1080`;
                      }}
                    />
                  )}
                  {/* Overlay for better text legibility */}
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>

      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 text-center px-6 w-full max-w-xl mt-auto mb-32"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
        >
          <Link to="/menu" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-black px-8 md:px-12 py-6 md:py-8 text-[10px] md:text-xs font-bold tracking-[0.2em] rounded-full transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(191,155,48,0.4)]">
              EXPLORE MENU
            </Button>
          </Link>
          <Link to="/bookings" className="w-full sm:w-auto">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-black px-8 md:px-12 py-6 md:py-8 text-[10px] md:text-xs font-bold tracking-[0.2em] rounded-full transition-all duration-500 hover:scale-110">
              BOOK NOW
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
