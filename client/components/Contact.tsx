import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:pulatergashev@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/edevzi",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/pulatergashev",
      color: "hover:text-blue-400",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });

    // Reset success state after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background with Unsplash image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(1px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900/95 to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold gradient-text mb-6"
            >
              Get In Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full glow-primary"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-300 mt-6 max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind or want to collaborate? I'd love to hear
              from you. Let's create something amazing together!
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass border-cyan-400/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
                    placeholder="Your Name"
                    data-cursor-hover
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass border-cyan-400/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50"
                    placeholder="your.email@example.com"
                    data-cursor-hover
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full glass border-cyan-400/30 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/50 resize-none"
                    placeholder="Tell me about your project..."
                    data-cursor-hover
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading || isSuccess}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-4 rounded-lg font-medium glow-hover transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-cursor-hover
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : isSuccess ? (
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                  <span>
                    {isLoading
                      ? "Sending..."
                      : isSuccess
                        ? "Message Sent!"
                        : "Send Message"}
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm always excited to work on new projects and collaborate
                  with talented individuals. Whether you have a specific project
                  in mind or just want to connect, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white">Find me on</h4>
                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                      className={`flex items-center space-x-4 text-gray-300 ${link.color} transition-all duration-300 group`}
                      data-cursor-hover
                    >
                      <div className="w-12 h-12 glass rounded-full flex items-center justify-center group-hover:glow-primary border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-lg">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5 }}
                className="glass p-6 rounded-2xl border border-cyan-400/20 glow-hover"
              >
                <h4 className="text-xl font-semibold text-white mb-3">
                  Quick Response
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  I typically respond to messages within 24 hours. Looking
                  forward to hearing from you and discussing how we can work
                  together!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
