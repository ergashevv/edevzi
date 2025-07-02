import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-black border-t border-cyan-400/20">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl font-bold gradient-text mb-4"
            >
              Edevzi
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-lg mx-auto leading-relaxed"
            >
              Crafting digital experiences with passion and precision. Let's
              build something amazing together.
            </motion.p>
          </div>

          {/* Scroll to top button */}
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mb-8 mx-auto w-12 h-12 glass rounded-full border border-cyan-400/30 text-cyan-400 hover:border-cyan-400/60 hover:text-cyan-300 transition-all duration-300 flex items-center justify-center glow-hover group"
            data-cursor-hover
          >
            <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} Edevzi. All rights reserved.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 text-sm flex items-center space-x-2 group"
                data-cursor-hover
              >
                <span>Designed & Developed by Edevzi with</span>
                <span className="inline-block">
                  <Heart
                    className="w-4 h-4 text-red-500 group-hover:text-red-400 transition-colors duration-300"
                    fill="currentColor"
                  />
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
