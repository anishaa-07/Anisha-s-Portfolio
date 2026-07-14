import { motion } from "framer-motion";
import { skills } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 flex-row-reverse">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
              Tech Stack
            </h2>
            <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              >
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <motion.div
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: (groupIndex * 0.1) + (i * 0.05) 
                      }}
                      className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-colors cursor-default"
                    >
                      {skill}
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
