import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const skills = [
  // Savoir faire
  { name: "HTML/CSS", category: "Savoir faire" },
  { name: "React",  category: "Savoir faire" },
  { name: "Node.js", category: "Savoir faire" },
  { name: "PostgreSQL", category: "Savoir faire" },
  { name: "C#", category: "Savoir faire" },
  { name: "Git/GitHub",  category: "Savoir faire" },
  { name: "Docker", category: "Savoir faire" },

  // Savoir être
  { name: "Esprit d'équipe",  category: "Savoir être" },
  { name: "Ecoute",  category: "Savoir être" },
  { name: "Curiosité",  category: "Savoir être" },
  { name: "Rigueur",  category: "Savoir être" },
  { name: "Communication",  category: "Savoir être" },
];

const categories = ["all", "Savoir faire", "Savoir être"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 3;

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // Pagination uniquement sur mobile
  const displayedSkills = isMobile
    ? filteredSkills.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : filteredSkills;

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Réinitialiser la page à 0 quand on change de catégorie
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(0);
  };

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
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          isMobile && "min-h-[300px]"
        )}>
          {displayedSkills.map((skill, key) => (
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

        {isMobile && totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={goToPreviousPage}
              className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors duration-300"
              aria-label="Page précédente"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground font-medium">
                Page {currentPage + 1} / {totalPages}
              </span>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i === currentPage
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-primary/50"
                    }`}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={goToNextPage}
              className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors duration-300"
              aria-label="Page suivante"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};