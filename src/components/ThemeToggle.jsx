import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    {/* pour ce rapeller du dark mode quand on actualise */}

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "light") {
            setIsDarkMode(false)
            document.documentElement.classList.remove("dark")
        }
        else{
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }

    }, [])

    {/* constante qui change le fond d'ecran avec les parametre du css d'ou la classe dark */}
    const toggleTheme = () => {
        if (isDarkMode) 
        {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
            setIsDarkMode(false)
        }
        else
        {
            document.documentElement.classList.add("dark")
            {/* mettre la valeur dark */}
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true)
        }
    }


    return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed bottom-6 right-6 p-4 rounded-full transition-all duration-500 z-50 overflow-hidden",
        "bg-background/80 backdrop-blur-md border border-border shadow-lg hover:shadow-primary/20",
        "hover:scale-110 active:scale-95 group"
      )}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun
          className={cn(
            "absolute w-6 h-6 text-yellow-500 transition-all duration-500",
            isDarkMode
              ? "opacity-0 -rotate-90 scale-50"
              : "opacity-100 rotate-0 scale-100 group-hover:rotate-12"
          )}
        />
        <Moon
          className={cn(
            "absolute w-6 h-6 text-indigo-400 transition-all duration-500",
            !isDarkMode
              ? "opacity-0 rotate-90 scale-50"
              : "opacity-100 rotate-0 scale-100 group-hover:-rotate-12"
          )}
        />
      </div>
    </button>
    );
}