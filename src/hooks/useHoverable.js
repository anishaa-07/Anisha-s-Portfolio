import { useState, useEffect } from "react";

export function useHoverable() {
  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const mediaQuery = window.matchMedia("(hover: hover)");
    setIsHoverable(mediaQuery.matches);

    const handleChange = (e) => {
      setIsHoverable(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isHoverable;
}
