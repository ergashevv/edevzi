import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AKFA Group",
      description:
        "Corporate website for AKFA Group with modern design and comprehensive business solutions showcase.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://akfagroup.com",
      githubUrl: "#",
    },
    {
      title: "SlotSpot",
      description:
        "Interactive gaming platform with real-time features and engaging user experience.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2074&auto=format&fit=crop",
      technologies: ["Vue.js", "Vuex", "SCSS", "Node.js"],
      liveUrl: "https://slotspot.uz",
      githubUrl: "#",
    },
    {
      title: "Taminot24",
      description:
        "Digital platform for educational services with modern UI/UX and responsive design.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
      technologies: ["React", "Redux Toolkit", "Material UI", "Express"],
      liveUrl: "https://taminot24.uz",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2025&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

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
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full glow-primary"
            ></motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
                data-cursor-hover
              >
                <div className="glass rounded-2xl overflow-hidden border border-cyan-400/20 glow-hover">
                  <div className="relative overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Hover overlay with buttons */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/70 flex items-center justify-center space-x-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="p-3 glass rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                        data-cursor-hover
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="p-3 glass rounded-full border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
                        data-cursor-hover
                      >
                        <Github className="h-5 w-5" />
                      </motion.button>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium glass border border-cyan-400/30 text-cyan-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium glow-hover transition-all duration-300 flex items-center justify-center space-x-2"
                      data-cursor-hover
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View Live</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
