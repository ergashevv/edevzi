import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 95 },
        { name: "SCSS", level: 88 },
      ],
    },
    {
      title: "Frameworks/Libraries",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "Redux Toolkit", level: 88 },
        { name: "Zustand", level: 85 },
        { name: "Vuex", level: 80 },
      ],
    },
    {
      title: "Styling",
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Ant Design", level: 88 },
        { name: "Material UI", level: 85 },
        { name: "Bootstrap", level: 90 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 92 },
        { name: "Figma", level: 85 },
        { name: "Postman", level: 88 },
        { name: "Vite", level: 90 },
        { name: "Webpack", level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-gray-950">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
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
              Skills & Expertise
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full glow-primary"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ delay: 0.6 + categoryIndex * 0.1, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-6 rounded-2xl border border-cyan-400/20 glow-hover group"
                data-cursor-hover
              >
                <h3 className="text-xl font-bold text-white mb-6 text-center group-hover:text-cyan-400 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.6,
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-cyan-400 font-bold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            delay: 1 + categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 1.5,
                            ease: "easeOut",
                          }}
                          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full relative overflow-hidden"
                        >
                          {/* Animated glow effect */}
                          <motion.div
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "linear",
                              delay:
                                1.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                            }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
