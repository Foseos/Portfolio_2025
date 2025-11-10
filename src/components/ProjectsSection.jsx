import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Modal } from "./Modal";

const projects = [
  {
    id: 1,
    title: "Portfolio Professionnel",
    description: "Portfolio personnel interactif",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Foseos/Portfolio_2025",
    detailedDescription: "Portfolio moderne développé avec React et TailwindCSS, mettant en valeur mes compétences techniques, mes réalisations et mon parcours professionnel à travers une interface élégante et intuitive.",
    features: [
      "Design responsive et moderne adapté à tous les supports",
      "Animations fluides et expérience utilisateur optimisée",
      "Mode sombre/clair pour un confort visuel optimal",
      "Formulaire de contact intégré et fonctionnel"
    ],
    detailedImages: [

    ]
  },
  
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Mes <span className="text-primary"> Projets </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {currentProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
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

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Foseos"
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
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedProject.detailedImages?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${selectedProject.title} - ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {selectedProject.detailedDescription}
              </p>
            </div>

            {selectedProject.features && (
              <div>
                <h3 className="text-xl font-semibold mb-3">Fonctionnalités</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h3 className="text-xl font-semibold mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
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
                  className="px-6 py-3 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 flex items-center gap-2"
                >
                  <Github size={20} />
                  Code source
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};