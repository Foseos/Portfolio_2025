import { useState } from "react";
import { cn } from "@/lib/utils";
import { PaginationControls } from "./PaginationControls";
import { usePagination } from "@/hooks/usePagination";
import { skills, skillCategories } from "@/data/skills";

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

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
  } = usePagination(filteredSkills, 6);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    resetPage();
  };

  const getSkillColor = (skillName) => {
    const colors = {
      "curiosité": { border: "hover:border-amber-500/50", bg: "from-amber-500/10", text: "group-hover:text-amber-500" },
      "rigueur": { border: "hover:border-indigo-500/50", bg: "from-indigo-500/10", text: "group-hover:text-indigo-500" },
      "bon relationnel": { border: "hover:border-pink-500/50", bg: "from-pink-500/10", text: "group-hover:text-pink-500" },
      "adaptabilité": { border: "hover:border-teal-500/50", bg: "from-teal-500/10", text: "group-hover:text-teal-500" },
      "autonomie": { border: "hover:border-emerald-500/50", bg: "from-emerald-500/10", text: "group-hover:text-emerald-500" },
      "excel": { border: "hover:border-green-500/50", bg: "from-green-500/10", text: "group-hover:text-green-500" },
      "sql": { border: "hover:border-sky-500/50", bg: "from-sky-500/10", text: "group-hover:text-sky-500" },
      "rgpd": { border: "hover:border-red-500/50", bg: "from-red-500/10", text: "group-hover:text-red-500" },
    };

    const key = Object.keys(colors).find((k) => skillName.toLowerCase().includes(k));
    return colors[key] || { border: "hover:border-primary/50", bg: "from-primary/10", text: "group-hover:text-primary" };
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary">Savoir Faire et Savoir Être</span>
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
              {category === "all" ? "Tous" : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 min-h-[200px]">
          {displayedSkills.map((skill) => {
            const colors = getSkillColor(skill.name);
            return (
              <div
                key={skill.name}
                className={cn(
                  "group relative bg-card px-4 py-3 rounded-lg shadow-sm border border-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_20px_rgba(255,255,255,0.04)] overflow-hidden flex items-center justify-center",
                  colors.border
                )}
              >
                <div className={cn(
                  "absolute inset-0 bg-linear-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  colors.bg
                )} />
                <h3 className={cn(
                  "relative z-10 font-semibold text-base text-center transition-colors duration-300",
                  colors.text
                )}>{skill.name}</h3>
              </div>
            );
          })}
        </div>

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={goToPreviousPage}
          onNext={goToNextPage}
          onPageClick={goToPage}
        />
      </div>
    </section>
  );
};
