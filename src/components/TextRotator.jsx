import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export const TextRotator = ({ texts, duration = 3000, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % texts.length);
    }, duration);
    return () => clearInterval(timer);
  }, [texts, duration]);

  return (
    <div className={cn("inline-grid overflow-hidden", className)}>
      {texts.map((text, i) => (
        <span
          key={text}
          className={cn(
            "col-start-1 row-start-1 transition-all duration-700 ease-in-out",
            i === index
              ? "opacity-100 translate-y-0"
              : i === (index - 1 + texts.length) % texts.length
              ? "opacity-0 -translate-y-8"
              : "opacity-0 translate-y-8"
          )}
        >
          {text}
        </span>
      ))}
    </div>
  );
};
