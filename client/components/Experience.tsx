import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Mohirdev",
      position: "Senior Frontend Developer",
      period: "2023 - Present",
      location: "Tashkent, Uzbekistan",
      description:
        "Leading frontend development initiatives and mentoring junior developers in modern React ecosystem.",
    },
    {
      company: "Supermiya",
      position: "Frontend Developer",
      period: "2022 - 2023",
      location: "Tashkent, Uzbekistan",
      description:
        "Developed responsive web applications using React and Vue.js with focus on performance optimization.",
    },
    {
      company: "Eurosoft",
      position: "Frontend Developer",
      period: "2021 - 2022",
      location: "Tashkent, Uzbekistan",
      description:
        "Built complex user interfaces and integrated third-party APIs for enterprise applications.",
    },
    {
      company: "RealSoft",
      position: "Junior Frontend Developer",
      period: "2020 - 2021",
      location: "Tashkent, Uzbekistan",
      description:
        "Started career developing responsive websites and learning modern frontend frameworks.",
    },
    {
      company: "Yandex",
      position: "Frontend Developer Intern",
      period: "2020",
      location: "Remote",
      description:
        "Completed intensive internship program focusing on React development and best practices.",
    },
    {
      company: "Dynamic IT School",
      position: "Student & Teaching Assistant",
      period: "2019 - 2020",
      location: "Tashkent, Uzbekistan",
      description:
        "Learned web development fundamentals and assisted in teaching HTML, CSS, and JavaScript basics.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden bg-gray-950"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold gradient-text mb-6"
            >
              Experience
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full glow-primary"
            ></motion.div>
          </div>

          <div className="relative">
            {/* Animated timeline line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ delay: 0.8, duration: 2 }}
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full"
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 blur-sm opacity-50 rounded-full" />
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
                  className="relative flex items-start space-x-6 group"
                  data-cursor-hover
                >
                  {/* Animated timeline dot */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full border-4 border-gray-950 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-75" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="flex-1 glass p-6 rounded-2xl border border-cyan-400/20 glow-hover"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-sm text-cyan-400 mt-1 md:mt-0 font-medium">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center gradient-text font-bold mb-3 text-lg">
                      {exp.company}
                    </div>

                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>

                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
