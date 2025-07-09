import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend" },
  { name: "React",  category: "frontend" },


  // Backend
  { name: "Node.js", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "C#", category: "backend" },


  // Tools
  { name: "Git/GitHub",  category: "Outils" },
  { name: "Docker", category: "Outils" },

  // Savoir être
  { name: "Esprit d'équipe",  category: "Savoir être" },
  { name: "Ecoute",  category: "Savoir être" },
  { name: " Curiosité",  category: "Savoir être" },
  { name: " Rigueur",  category: "Savoir être" },
  { name: "Communication",  category: "Savoir être" },


];

const categories = ["all", "frontend", "backend", "Outils", "Savoir être"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Mes   <span className="text-primary"> Compétences </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-center mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};