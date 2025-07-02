import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import ParticlesBackground from "./ParticlesBackground";
import { SiTypescript, SiHtml5, SiCss3, SiJavascript, SiRedux, SiVuedotjs, SiNextdotjs, SiGit } from "react-icons/si";
import { Atom, Server } from "lucide-react";

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

      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1">
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
              <span className="gradient-text animate-gradient-move">Pulat Ergashev</span>
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
        {/* Animated Coding Globe with Orbiting Tech Icons */}
        <div className="flex-1 flex justify-center items-center relative mt-12 md:mt-0">
          {/* Coding Globe (Glass Sphere with Globe Lines) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
            className="relative w-[320px] h-[320px] rounded-full bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-700 backdrop-blur-xl shadow-2xl border border-white/20 flex items-center justify-center overflow-visible"
            style={{ boxShadow: "0 8px 40px 0 rgba(56,189,248,0.25), 0 1.5px 8px 0 rgba(167,139,250,0.15)" }}
          >
            {/* Globe Shine */}
            <div className="absolute left-10 top-10 w-24 h-10 bg-white/30 rounded-full blur-2xl opacity-60 rotate-12" />
            {/* Globe Latitude/Longitude Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320" fill="none">
              <ellipse cx="160" cy="160" rx="140" ry="140" stroke="#38bdf8" strokeWidth="0.7" opacity="0.18" />
              <ellipse cx="160" cy="160" rx="100" ry="140" stroke="#38bdf8" strokeWidth="0.7" opacity="0.12" />
              <ellipse cx="160" cy="160" rx="140" ry="100" stroke="#38bdf8" strokeWidth="0.7" opacity="0.12" />
              <ellipse cx="160" cy="160" rx="70" ry="140" stroke="#38bdf8" strokeWidth="0.09" opacity="0.10" />
              <ellipse cx="160" cy="160" rx="140" ry="70" stroke="#38bdf8" strokeWidth="0.09" opacity="0.10" />
            </svg>
            {/* Outer Orbiting Tech Icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 w-[400px] h-[400px] pointer-events-none"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              {/* React Icon (outer) */}
              <motion.div
                className="absolute"
                style={{ left: "50%", top: "0%", transform: "translate(-50%, -50%)" }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Atom size={40} color="#38bdf8" />
              </motion.div>
              {/* TypeScript Icon (outer) */}
              <motion.div
                className="absolute"
                style={{ right: "0%", top: "50%", transform: "translate(50%, -50%)" }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <SiTypescript size={36} color="#3178c6" />
              </motion.div>
              {/* Node.js Icon (outer) */}
              <motion.div
                className="absolute"
                style={{ left: "50%", bottom: "0%", transform: "translate(-50%, 50%)" }}
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Server size={38} color="#68a063" />
              </motion.div>
              {/* HTML5 Icon (outer) */}
              <motion.div
                className="absolute"
                style={{ left: "0%", top: "50%", transform: "translate(-50%, -50%)" }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <SiHtml5 size={34} color="#e34c26" />
              </motion.div>
              {/* CSS3 Icon (outer) */}
              <motion.div
                className="absolute"
                style={{ right: "10%", top: "10%" }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <SiCss3 size={34} color="#1572b6" />
              </motion.div>
            </motion.div>
            {/* Inner Orbiting Tech Icons */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 w-[220px] h-[220px] pointer-events-none"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              {/* JavaScript Icon (inner) */}
              <motion.div
                className="absolute"
                style={{ left: "50%", top: "0%", transform: "translate(-50%, -50%)" }}
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <SiJavascript size={32} color="#f7df1e" />
              </motion.div>
              {/* Redux Icon (inner) */}
              <motion.div
                className="absolute"
                style={{ right: "0%", top: "50%", transform: "translate(50%, -50%)" }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <SiRedux size={32} color="#764abc" />
              </motion.div>
              {/* Vue.js Icon (inner) */}
              <motion.div
                className="absolute"
                style={{ left: "50%", bottom: "0%", transform: "translate(-50%, 50%)" }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}
              >
                <SiVuedotjs size={32} color="#42b883" />
              </motion.div>
              {/* Next.js Icon (inner) */}
              <motion.div
                className="absolute"
                style={{ left: "10%", top: "80%" }}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut" }}
              >
                <SiNextdotjs size={32} color="#fff" />
              </motion.div>
              {/* Git Icon (inner) */}
              <motion.div
                className="absolute"
                style={{ right: "50%", top: "90%", transform: "translate(50%, -50%)" }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <SiGit size={30} color="#f34f29" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
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
