import { motion } from "framer-motion";

const tools = ["Node.js", "Express", "MongoDB", "React"];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
              About Me
            </h2>
            <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                Hello! I'm Anisha, a B.Tech student who enjoys building things that live on the internet. 
                My interest in web development started back when I was trying to figure out how APIs work, 
                and it quickly snowballed into full-stack development.
              </p>
              <p>
                I'm currently focused on the MERN stack. I don't claim to know it all—I'm learning in public, 
                reading docs, debugging errors, and occasionally pulling my hair out when a route doesn't hit.
              </p>
              <p>
                Right now, my main focus is building <span className="text-accent font-medium">Huddle</span>, a 
                team-collaboration app that tries to combine the best parts of GitHub, Notion, and Discord. 
                It's ambitious, but it's teaching me a lot about real-time websockets and complex state management.
              </p>
              
              <div className="pt-4">
                <p className="mb-4 text-slate-800 dark:text-slate-200 font-medium">
                  Here are a few technologies I've been working with recently:
                </p>
                <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                  {tools.map((tool, i) => (
                    <motion.li 
                      key={tool}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-accent">▹</span> {tool}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="relative group mx-auto w-full max-w-sm md:max-w-none">
              <div className="relative z-10 rounded-lg overflow-hidden border-2 border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-square flex items-center justify-center transition-all duration-300 group-hover:border-accent">
                {/* Placeholder for an image. Using a stylized initial for now. */}
                <div className="text-9xl font-display font-bold text-slate-300 dark:text-slate-700 group-hover:text-accent transition-colors duration-300">
                  A
                </div>
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-4 translate-y-4 -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
