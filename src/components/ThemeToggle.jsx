import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    {/* constante qui change le fond d'ecran avec les parametre du css d'ou la classe dark */}
    const toggleTheme = () => {
        if (isDarkMode) 
        {
            document.documentElement.classList.remove("dark")
            setIsDarkMode(false)
        }
        else
        {
            document.documentElement.classList.add("dark")
            setIsDarkMode(true)
        }
    }


    return (
    <button onClick={toggleTheme}>
        {/* si darkmode alors soleil sinon lune pour le bouton */}
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300"/>
        ) : (
            <Moon className="h-6 w-6 text-blue-900"/>
        )}
    </button>
    );
}