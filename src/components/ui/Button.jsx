import { forwardRef } from "react";
import { motion } from "framer-motion";

const Button = forwardRef(({ children, variant = "primary", className = "", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-200";
  
  const variants = {
    primary: "bg-accent hover:bg-lime-600 text-slate-900",
    outline: "border-2 border-accent text-accent hover:bg-accent/10",
    ghost: "text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800"
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
});

Button.displayName = "Button";
export default Button;
