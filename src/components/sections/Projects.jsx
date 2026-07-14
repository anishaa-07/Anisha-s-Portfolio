import { motion } from "framer-motion";
import { ExternalLink, Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-100/50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50">
              Things I've Built
            </h2>
            <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-slate-50 dark:bg-slate-950 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-800 flex flex-col h-full group"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="text-accent">
          <Folder size={40} strokeWidth={1.5} />
        </div>
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>

      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2 group-hover:text-accent transition-colors">
        {project.title}
        {project.status === "In Progress" && (
          <span className="inline-flex items-center ml-3 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-1.5 animate-pulse"></span>
            In Progress
          </span>
        )}
      </h3>
      
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded"
          >
            {tech}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
