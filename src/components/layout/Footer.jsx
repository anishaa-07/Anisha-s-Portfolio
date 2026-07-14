import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            Designed & Built by Anisha
          </p>
          <p className="text-sm text-slate-500 mt-1">
            © {currentYear} All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a
            href="https://github.com/anishaa-07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
          >
            <span className="sr-only">GitHub</span>
            <Github size={20} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
