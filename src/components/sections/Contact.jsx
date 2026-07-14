import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate a network request for the micro-interaction
    setTimeout(() => {
      setStatus("success");
      e.target.reset();
      
      setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-32 mb-10">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-lg mx-auto">
            Whether you have a question about my projects, want to collaborate on a hackathon, 
            or just want to say hi, my inbox is always open.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-left max-w-md mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow text-slate-900 dark:text-slate-50"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow text-slate-900 dark:text-slate-50"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full px-4 py-3 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-shadow text-slate-900 dark:text-slate-50 resize-none"
              ></textarea>
            </div>

            <div className="flex justify-center pt-4">
              <Button 
                type="submit" 
                disabled={status === "submitting" || status === "success"}
                className={`w-full relative overflow-hidden ${
                  status === "success" ? "bg-green-500 hover:bg-green-600 text-white" : ""
                }`}
              >
                <AnimatePresence mode="wait">
                  {status === "idle" && (
                    <motion.span
                      key="idle"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Say Hello
                    </motion.span>
                  )}
                  {status === "submitting" && (
                    <motion.span
                      key="submitting"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      Sending...
                    </motion.span>
                  )}
                  {status === "success" && (
                    <motion.span
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2"
                    >
                      Sent!
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
