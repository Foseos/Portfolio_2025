import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { PaginationControls } from "./PaginationControls";
import { usePagination } from "@/hooks/usePagination";
import { skills, skillCategories } from "@/data/skills";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isMobile, setIsMobile] = useState(false);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const {
    currentPage,
    totalPages,
    paginatedItems: displayedSkills,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    resetPage,
  } = usePagination(filteredSkills, 3);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    resetPage();
  };

  // Sur desktop, afficher tous les skills filtrés
  const skillsToDisplay = isMobile ? displayedSkills : filteredSkills;

  const getSkillColor = (skillName) => {
    const defaultColor = {
      border: "hover:border-primary/50",
      bg: "from-primary/10",
      text: "group-hover:text-primary",
    };

    const colors = {
      "html/css": {
        border: "hover:border-orange-500/50",
        bg: "from-orange-500/10",
        text: "group-hover:text-orange-500",
      },
      python: {
        border: "hover:border-yellow-500/50",
        bg: "from-yellow-500/10",
        text: "group-hover:text-yellow-500",
      },
      postgresql: {
        border: "hover:border-sky-500/50",
        bg: "from-sky-500/10",
        text: "group-hover:text-sky-500",
      },
      sql: {
        border: "hover:border-sky-400/50",
        bg: "from-sky-400/10",
        text: "group-hover:text-sky-400",
      },
      "c#": {
        border: "hover:border-purple-500/50",
        bg: "from-purple-500/10",
        text: "group-hover:text-purple-500",
      },
      "git/github": {
        border: "hover:border-red-500/50",
        bg: "from-red-500/10",
        text: "group-hover:text-red-500",
      },
      docker: {
        border: "hover:border-blue-500/50",
        bg: "from-blue-500/10",
        text: "group-hover:text-blue-500",
      },
      "esprit d'équipe": {
        border: "hover:border-emerald-500/50",
        bg: "from-emerald-500/10",
        text: "group-hover:text-emerald-500",
      },
      ecoute: {
        border: "hover:border-teal-500/50",
        bg: "from-teal-500/10",
        text: "group-hover:text-teal-500",
      },
      curiosité: {
        border: "hover:border-amber-500/50",
        bg: "from-amber-500/10",
        text: "group-hover:text-amber-500",
      },
      rigueur: {
        border: "hover:border-indigo-500/50",
        bg: "from-indigo-500/10",
        text: "group-hover:text-indigo-500",
      },
      communication: {
        border: "hover:border-pink-500/50",
        bg: "from-pink-500/10",
        text: "group-hover:text-pink-500",
      },
    };

    return colors[skillName.toLowerCase()] || defaultColor;
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary"> Savoir Faire et Savoir Être </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={cn(
                "px-6 py-2.5 rounded-full transition-all duration-300 capitalize font-medium",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-primary/20 hover:text-primary hover:scale-105 active:scale-95"
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
          {skillsToDisplay.map((skill) => {
            const colors = getSkillColor(skill.name);
            return (
              <div
                key={skill.name}
                className={cn(
                  "group relative bg-card p-6 rounded-xl shadow-sm border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] overflow-hidden",
                  colors.border
                )}
              >
                <div className={cn(
                  "absolute inset-0 bg-linear-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  colors.bg
                )} />
                <div className="relative z-10 text-center mb-4">
                  <h3 className={cn(
                    "font-semibold text-lg transition-colors duration-300",
                    colors.text
                  )}>{skill.name}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {isMobile && (
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevious={goToPreviousPage}
            onNext={goToNextPage}
            onPageClick={goToPage}
          />
        )}
      </div>
    </section>
  );
};
