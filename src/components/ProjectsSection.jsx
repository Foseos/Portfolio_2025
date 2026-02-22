import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useState } from "react";
import { Modal } from "./Modal";
import { PaginationControls } from "./PaginationControls";
import { usePagination } from "@/hooks/usePagination";
import { projects } from "@/data/projects";
import { SOCIAL_LINKS } from "@/data/config";
import { SpotlightCard } from "./SpotlightCard";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["Tous", "React", "Symfony", "Python"];
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "Tous" || project.tags.includes(activeCategory)
  );

  const {
    currentPage,
    totalPages,
    paginatedItems: currentProjects,
    goToNextPage,
    goToPreviousPage,
    goToPage,
    resetPage,
  } = usePagination(filteredProjects, 4);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    resetPage();
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const getTagColor = (tag) => {
    const colors = {
      react: "text-sky-500 bg-sky-500/10 border-sky-500/20",
      tailwindcss: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
      symfony: "text-foreground bg-foreground/10 border-foreground/20",
      php: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
      python: "text-yellow-500 bg-yellow-500/10 border-yellow-500/20",
      flask: "text-foreground bg-foreground/10 border-foreground/20",
    };
    return colors[tag.toLowerCase()] || "text-primary bg-primary/10 border-primary/20";
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mes <span className="text-primary"> Projets </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[500px]">
          {currentProjects.map((project, index) => {
            const isFeatured = index === 0 && currentPage === 1 && activeCategory === "Tous";
            
            return (
              <SpotlightCard
                key={project.id}
                className={`group rounded-3xl overflow-hidden cursor-pointer border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                  isFeatured ? "md:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div 
                  className={`flex h-full relative z-10 ${
                    isFeatured ? "flex-col lg:flex-row" : "flex-col"
                  }`}
                  onClick={() => handleProjectClick(project)}
                >
                  {/* Image Container */}
                  <div className={`overflow-hidden relative flex-shrink-0 bg-white/5 ${
                    isFeatured ? "lg:w-3/5 h-64 lg:h-auto" : "h-52"
                  }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-background/90 backdrop-blur-md flex items-center justify-center text-primary translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                        <Eye size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`p-6 md:p-8 flex flex-col flex-grow bg-card/80 backdrop-blur-sm ${
                    isFeatured ? "lg:w-2/5 justify-center" : "items-center text-center"
                  }`}>
                    {isFeatured && (
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 w-fit uppercase tracking-wider backdrop-blur-md">
                        ✨ Projet Phare
                      </div>
                    )}
                    
                    <h3 className={`font-bold mb-3 ${isFeatured ? "text-2xl md:text-3xl" : "text-xl min-h-[56px] flex items-center justify-center"}`}>
                      {project.title}
                    </h3>
                    
                    <p className={`text-muted-foreground mb-6 ${isFeatured ? "text-base md:text-lg" : "text-sm"}`}>
                      {project.description}
                    </p>

                    <div className={`flex flex-wrap gap-2 mb-8 ${isFeatured ? "" : "justify-center min-h-[32px]"}`}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1.5 text-xs font-medium border rounded-full transition-colors ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className={`flex w-full mt-auto pt-6 border-t border-border/50 ${isFeatured ? "justify-start" : "justify-center"}`}>
                      <div className="flex space-x-3">
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-2.5 rounded-full bg-secondary text-secondary-foreground hover:bg-foreground hover:text-background transition-all duration-300 hover:scale-110 active:scale-95"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
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

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href={SOCIAL_LINKS.github}
          >
            Voir mon GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          {(() => {
            const allImages = [selectedProject.image, ...(selectedProject.detailedImages || [])];
            return (
              <div className="flex flex-col gap-10">
                {/* Top: Media */}
                <div className="w-full flex flex-col gap-6">
                  {/* Carrousel d'images */}
                  <div className="relative group/carousel">
                    <div className="overflow-hidden rounded-2xl bg-black/5 border border-border/50 shadow-sm">
                      <img
                        src={allImages[currentImageIndex]}
                        alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                        loading="lazy"
                        className="w-full h-64 sm:h-80 md:h-[450px] object-cover transition-all duration-500"
                      />
                    </div>

                    {allImages.length > 1 && (
                      <>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg opacity-0 group-hover/carousel:opacity-100 hover:bg-background hover:scale-110 active:scale-95 transition-all duration-300"
                          aria-label="Image précédente"
                        >
                          <ChevronLeft size={20} className="text-foreground" />
                        </button>
                        <button
                          onClick={() => setCurrentImageIndex((prev) => (prev + 1) % allImages.length)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg opacity-0 group-hover/carousel:opacity-100 hover:bg-background hover:scale-110 active:scale-95 transition-all duration-300"
                          aria-label="Image suivante"
                        >
                          <ChevronRight size={20} className="text-foreground" />
                        </button>

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg">
                          <span className="text-xs text-foreground font-semibold">
                            {currentImageIndex + 1} / {allImages.length}
                          </span>
                          <div className="flex gap-2">
                            {allImages.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`rounded-full transition-all duration-300 ${
                                  index === currentImageIndex
                                    ? "bg-primary w-6 h-2"
                                    : "bg-muted-foreground/40 hover:bg-primary/50 w-2 h-2"
                                }`}
                                aria-label={`Image ${index + 1}`}
                              />
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Bottom: Content */}
                <div className="w-full space-y-8 pb-4">
                  <div className="text-left space-y-3">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <div className="w-8 h-1 bg-primary rounded-full"></div>
                      Description
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-justify text-[15px]">
                      {selectedProject.detailedDescription}
                    </p>
                  </div>

                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div className="text-left space-y-4">
                      <h3 className="text-xl font-bold flex items-center gap-3">
                        <div className="w-8 h-1 bg-primary rounded-full"></div>
                        Fonctionnalités Clés
                      </h3>
                      <ul className="space-y-3">
                        {selectedProject.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-3 text-muted-foreground bg-secondary/30 p-3.5 rounded-xl border border-border/50 hover:border-primary/30 transition-colors"
                          >
                            <span className="text-primary mt-0.5 flex-shrink-0 bg-primary/10 p-1.5 rounded-full">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </span>
                            <span className="text-left text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="text-left space-y-4">
                    <h3 className="text-xl font-bold flex items-center gap-3">
                      <div className="w-8 h-1 bg-primary rounded-full"></div>
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-3 py-1.5 text-xs font-medium border rounded-full transition-colors ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 border-t border-border/50">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cosmic-button flex items-center gap-2 group/btn shadow-primary/20"
                      >
                        <ExternalLink size={18} className="group-hover/btn:-rotate-12 transition-transform" />
                        Voir la démo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 rounded-full border border-primary/50 text-foreground font-medium hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2 group/btn"
                      >
                        <Github size={18} className="group-hover/btn:rotate-12 transition-transform text-primary" />
                        Code source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })()}
        </Modal>
      )}
    </section>
  );
};
