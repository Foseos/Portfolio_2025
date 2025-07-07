import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    {/* pour ce rapeller du dark mode quand on actualise */}

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark")
        }
        else{
            setIsDarkMode(false)
            document.documentElement.classList.add("light")
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
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outlin-hidden"
      )}
    >
        {/* si darkmode alors soleil sinon lune pour le bouton */}
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300"/>
        ) : (
            <Moon className="h-6 w-6 text-blue-900"/>
        )}
    </button>
    );
}