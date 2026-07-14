import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

const taglines = [
  "Backend Developer",
  "Full-Stack Learner",
  "Building Huddle"
];

export default function Hero() {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle Animated Background Mesh/Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent blur-[120px] opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[40%] right-[0%] w-[40vw] h-[40vw] rounded-full bg-lime-400 blur-[120px] opacity-10"
        />
      </div>

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
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-50 mb-6"
        >
          Anisha.
        </motion.h1>
        
        <div className="h-12 md:h-16 flex justify-center items-center mb-8">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentTaglineIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-semibold text-slate-600 dark:text-slate-400"
            >
              I'm a <span className="text-slate-800 dark:text-slate-200">{taglines[currentTaglineIndex]}</span>.
            </motion.h2>
          </AnimatePresence>
        </div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10"
        >
          B.Tech student navigating the world of the MERN stack. I build honest, 
          fast, and functional web applications while learning something new every day.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
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
