import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects } from "@/data/projects";
import { SOCIAL_LINKS } from "@/data/config";
import { PaginationControls } from "./PaginationControls";
import { usePagination } from "@/hooks/usePagination";
import { BentoProjectCard } from "./BentoProjectCard";

const ITEMS_PER_PAGE = 6;

export const ProjectsSection = () => {
  const [expandedId, setExpandedId] = useState(null);

  const categories = ["Tous", "React", "Symfony", "Python"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "Tous" || project.tags.some((tag) => tag.toLowerCase().includes(activeCategory.toLowerCase()))
  );

  const {
    currentPage,
    totalPages,
    paginatedItems: currentProjects,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    resetPage,
  } = usePagination(filteredProjects, ITEMS_PER_PAGE);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setExpandedId(null);
    resetPage();
  };

  const handleToggle = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Mes <span className="text-primary">Projets</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Une sélection de projets qui reflètent ma progression et mes compétences techniques.
        </motion.p>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                  : "bg-secondary/70 text-foreground hover:bg-primary/20 hover:text-primary hover:scale-105 active:scale-95"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <LayoutGroup>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-5 lg:gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {currentProjects
                .filter((project) => !expandedId || project.id === expandedId)
                .map((project, index) => (
                <motion.div
                  key={project.id}
                  className={
                    expandedId === project.id
                      ? "col-span-1 md:col-span-2 lg:col-span-3"
                      : "col-span-1"
                  }
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{
                    duration: 0.5,
                    delay: expandedId ? 0 : index * 0.1,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  layout
                >
                  <BentoProjectCard
                    project={project}
                    isExpanded={expandedId === project.id}
                    onToggle={handleToggle}
                    isOtherExpanded={false}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={goToPreviousPage}
          onNext={goToNextPage}
          onPageClick={goToPage}
        />

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href={SOCIAL_LINKS.github}
          >
            Voir mon GitHub <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
