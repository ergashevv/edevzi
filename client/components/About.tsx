import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with Unsplash image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/95 to-gray-950" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold gradient-text mb-6"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full glow-primary"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative flex justify-center items-center"
              data-cursor-hover
            >
              <div className="relative w-80 h-80 mx-auto group">
                {/* Animated background glow */}
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-3xl blur-xl"
                />

                {/* Tech icon container */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative glass rounded-3xl overflow-hidden border border-cyan-400/20 glow-hover flex items-center justify-center bg-gradient-to-br from-gray-900/50 to-black/50"
                >
                  <div className="text-6xl text-cyan-400">&lt;/&gt;</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-8"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Passionate Frontend Developer
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Experienced Frontend Developer with 4+ years in React, Next.js,
                and Vue.js. Transforming complex ideas into high-performance UIs
                with clean code and innovation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in creating digital experiences that not only look
                stunning but also provide exceptional user experiences. My
                approach combines technical excellence with creative
                problem-solving to deliver solutions that exceed expectations.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 glass rounded-xl glow-hover border border-cyan-400/20"
                  data-cursor-hover
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    4+
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Years Experience
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 glass rounded-xl glow-hover border border-cyan-400/20"
                  data-cursor-hover
                >
                  <div className="text-4xl font-bold gradient-text mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-400 font-medium">
                    Projects Completed
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
