import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/Navbar";

export const Home = () => {
    return (
    <div className="min-h-screen">

        {/* Theme */}
            <ThemeToggle />
        {/* Effet du fond */}
            <StarBackground />
        {/* Navbar */}
            <NavBar />
        {/* Body */}


        {/* Footer */}

    </div>
    );
};