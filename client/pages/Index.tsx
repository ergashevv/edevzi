import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CustomCursor from "@/components/CustomCursor";

export default function Index() {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.documentElement.style.scrollBehavior = "smooth";

    // Set dark theme by default
    document.documentElement.classList.add("dark");

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
