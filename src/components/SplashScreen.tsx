import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const logoUrl = "https://lh3.googleusercontent.com/d/1Tqp28bQEDCkgu8dAt8pnKYp2UMi8HMfg";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <img
              src={logoUrl}
              alt="Mellows Lounge Logo"
              className="h-64 w-64 object-contain brightness-110"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/restaurant/200/200";
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
