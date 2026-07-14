import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

const taglines = [
  "Backend Developer",
  "Full-Stack Learner",
  "Building Huddle"
];

const TypewriterText = ({ text }) => {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05 },
        },
        exit: {
          opacity: 0,
          y: -10,
          transition: { duration: 0.2 },
        },
      }}
      className="inline-block text-slate-800 dark:text-slate-200"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={`${text}-${index}`}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Tagline cycler
    const intervalId = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3500);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Performant cursor tracking background (no React state updates)
    const handleMouseMove = (e) => {
      if (backgroundRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        backgroundRef.current.style.webkitMaskImage = `radial-gradient(circle 400px at ${x}px ${y}px, black 0%, transparent 100%)`;
        backgroundRef.current.style.maskImage = `radial-gradient(circle 400px at ${x}px ${y}px, black 0%, transparent 100%)`;
      }
    };
    
    // Set initial mask to center so it's not invisible before mouse move
    if (backgroundRef.current) {
      const x = window.innerWidth / 2;
      const y = window.innerHeight / 2;
      backgroundRef.current.style.webkitMaskImage = `radial-gradient(circle 400px at ${x}px ${y}px, black 0%, transparent 100%)`;
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      
      {/* Interactive Dot Grid Background */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-20 transition-opacity duration-500"
        style={{
          backgroundImage: 'radial-gradient(circle at center, var(--color-accent) 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-medium mb-4 tracking-wide"
        >
          Hi, my name is
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-50 mb-6"
        >
          Anisha.
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="h-12 md:h-16 flex justify-center items-center mb-8"
        >
          <div className="text-2xl md:text-4xl font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-2">
            I'm a{" "}
            <AnimatePresence mode="wait">
              <TypewriterText key={currentTaglineIndex} text={taglines[currentTaglineIndex]} />
            </AnimatePresence>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="text-accent"
            >
              |
            </motion.span>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10"
        >
          B.Tech student navigating the world of the MERN stack. I build honest, 
          fast, and functional web applications while learning something new every day.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>
            View Projects
          </Button>
          <Button variant="outline" onClick={() => window.open("/resume.pdf", "_blank")}>
            Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
