import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "backOut" }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-14 h-14 glass rounded-full border border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center glow-hover group relative overflow-hidden"
            data-cursor-hover
          >
            {/* Animated background */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-sm"
            />

            {/* Icon */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <ChevronUp className="h-6 w-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
