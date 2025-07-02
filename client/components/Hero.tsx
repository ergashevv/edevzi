import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    "React.js",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Responsive UI",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(2px)",
          }}
        />
      </div>

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-teal-500/20 to-cyan-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Particles */}
      <ParticlesBackground />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
          >
            <span className="gradient-text">Pulat Ergashev</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-3xl text-gray-300 mb-8 h-20 flex items-center justify-center"
          >
            <span className="mr-3">Frontend Developer specializing in</span>
            <motion.span
              key={currentSkill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-cyan-400 font-bold min-w-[180px] text-left"
              style={{
                textShadow: "0 0 20px rgba(0, 173, 219, 0.5)",
              }}
            >
              {skills[currentSkill]}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Transforming complex product ideas into high-performance user
            interfaces with 4+ years of hands-on expertise in modern web
            technologies and clean code practices.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToNext()}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-lg overflow-hidden glow-hover"
              data-cursor-hover
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">View My Work</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-8 py-4 glass border-2 border-cyan-400/50 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400/10 transition-all duration-300"
              data-cursor-hover
            >
              <span className="relative z-10">Get In Touch</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        data-cursor-hover
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        >
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <div className="p-2 rounded-full border border-cyan-400/30">
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
