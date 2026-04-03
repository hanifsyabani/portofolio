"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    const handleInteractionEnter = () => setIsHovering(true);
    const handleInteractionLeave = () => setIsHovering(false);

    const interactiveSelectors = 'a, button, input, textarea, select, [role="button"]';

    const setupListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        // Prevent multiple listeners by removing first
        el.removeEventListener("mouseenter", handleInteractionEnter);
        el.removeEventListener("mouseleave", handleInteractionLeave);
        
        el.addEventListener("mouseenter", handleInteractionEnter);
        el.addEventListener("mouseleave", handleInteractionLeave);
      });
    };

    setupListeners();

    const observer = new MutationObserver(() => {
      setupListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    if (window.matchMedia("(pointer: fine)").matches) {
      setIsVisible(true);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractionEnter);
        el.removeEventListener("mouseleave", handleInteractionLeave);
      });
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[9999] mix-blend-difference hidden md:block shadow-sm"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{ 
        scale: isHovering ? 1.5 : 1,
        backgroundColor: isHovering ? "hsl(var(--primary))" : "transparent",
        opacity: isHovering ? 0.8 : 1
      }}
      transition={{ duration: 0.15, ease: "easeOut" }}
    />
  );
}
