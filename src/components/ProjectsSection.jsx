import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Modal } from "./Modal";
import { PaginationControls } from "./PaginationControls";
import { usePagination } from "@/hooks/usePagination";
import { projects } from "@/data/projects";
import { SOCIAL_LINKS } from "@/data/config";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    currentPage,
    totalPages,
    paginatedItems: currentProjects,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  } = usePagination(projects, 3);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mes <span className="text-primary"> Projets </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer flex flex-col"
              onClick={() => handleProjectClick(project)}
            >
              <div className="h-48 overflow-hidden flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <div className="flex flex-wrap gap-2 mb-4 justify-center min-h-[32px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 min-h-[56px] flex items-center justify-center">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center items-center w-full">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
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
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              <div className="space-y-6">
                {/* Carrousel d'images */}
                <div className="relative group/carousel">
                  <div className="overflow-hidden rounded-xl bg-black/5">
                    <img
                      src={allImages[currentImageIndex]}
                      alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                      className="w-full h-96 object-contain transition-all duration-500"
                    />
                  </div>

                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg opacity-0 group-hover/carousel:opacity-100 hover:bg-background transition-all duration-300"
                        aria-label="Image précédente"
                      >
                        <ChevronLeft size={18} className="text-foreground" />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) => (prev + 1) % allImages.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg opacity-0 group-hover/carousel:opacity-100 hover:bg-background transition-all duration-300"
                        aria-label="Image suivante"
                      >
                        <ChevronRight size={18} className="text-foreground" />
                      </button>

                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg">
                        <span className="text-xs text-muted-foreground font-medium">
                          {currentImageIndex + 1} / {allImages.length}
                        </span>
                        <div className="flex gap-1.5">
                          {allImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`rounded-full transition-all duration-300 ${
                                index === currentImageIndex
                                  ? "bg-primary w-5 h-2"
                                  : "bg-muted-foreground/30 hover:bg-primary/50 w-2 h-2"
                              }`}
                              aria-label={`Image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed text-justify">
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="text-left">
                    <h3 className="text-xl font-semibold mb-3">Fonctionnalités</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start space-x-3 text-muted-foreground"
                        >
                          <span className="text-primary mt-1 flex-shrink-0">•</span>
                          <span className="text-left">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 pt-4">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cosmic-button flex items-center gap-2"
                    >
                      <ExternalLink size={20} />
                      Voir la démo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                    >
                      <Github size={20} />
                      Code source
                    </a>
                  )}
                </div>
              </div>
            );
          })()}
        </Modal>
      )}
    </section>
  );
};
