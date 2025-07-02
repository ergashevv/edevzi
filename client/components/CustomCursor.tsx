import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add cursor tracking
    window.addEventListener("mousemove", updateMousePosition);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, input, textarea, [data-cursor-hover]",
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor dot */}
      <motion.div
        className="cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      {/* Cursor outline */}
      <motion.div
        className="cursor-outline"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
    </>
  );
}
