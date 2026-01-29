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
  {
    id: 2,
    title: "Centre Hospitalier George Sand",
    description: "Refonte complète du site institutionnel avec Symfony",
    image: "/projects/project2.png",
    tags: ["Symfony", "PHP", "Twig", "Bootstrap", "Doctrine"],
    demoUrl: "",
    githubUrl: "",
    detailedDescription: "Refonte complète du site web institutionnel du Centre Hospitalier George Sand, établissement public spécialisé en santé mentale basé à Bourges. Projet personnel réalisé pour découvrir et maîtriser PHP et Symfony dans le cadre d'une candidature spontanée. Le site propose une interface moderne et accessible pour informer patients et familles sur les services de soins psychiatriques.",
    features: [
      "Développement complet avec Symfony pour l'apprentissage de PHP",
      "Espace d'administration pour gérer les offres d'emploi et les activités",
      "Système de candidature en ligne pour les offres d'emploi",
      "Annuaire médical avec répertoire des professionnels de santé",
      "Présentation détaillée des services de soins (psychiatrie adulte et pédopsychiatrie)",
      "Système de gestion des actualités avec carrousel automatisé",
      "Informations pratiques sur l'hospitalisation et les droits des patients",
      "Interface responsive optimisée pour tous les supports",
      "Intégration des réseaux sociaux et contact d'urgence direct"
    ],
    detailedImages: [

    ]
  },
  {
    id: 3,
    title: "Job Scraper",
    description: "Agrégateur d'offres d'emploi avec scraping et interface de suivi",
    image: "/projects/project3.png",
    tags: ["Flask", "Python", "Selenium", "SQLite"],
    demoUrl: "",
    githubUrl: "https://github.com/Foseos/Web_Scrapper",
    detailedDescription: "Agrégateur d'offres d'emploi françaises qui scrape les annonces depuis France Travail via Selenium, les stocke en base SQLite et propose une interface web complète pour rechercher, filtrer et suivre ses candidatures. L'application affiche les résultats en temps réel grâce au streaming SSE et offre des outils de suivi avancés : tableau Kanban, statistiques, carte interactive et dashboard personnalisable.",
    features: [
      "Scraping multi-villes avec rayon configurable via Selenium",
      "Streaming temps réel des résultats via Server-Sent Events (SSE)",
      "Filtres avancés par ville, métier, expérience, type de contrat et date",
      "Catégorisation automatique des offres par métier et niveau d'expérience",
      "Suivi des candidatures : favoris, postulé, notes personnelles",
      "Tableau Kanban pour le suivi visuel de l'avancement",
      "Statistiques et tendances de publication avec prédictions",
      "Carte interactive des offres avec Leaflet.js",
      "Dashboard personnalisable et thème sombre/clair",
      "Déduplication et nettoyage automatique de la base de données pour les offres supérieur a 14 Jours"
    ],
    detailedImages: ["/projects/Détails/project3_Détails1.png","/projects/Détails/project3_Détails2.png","/projects/Détails/project3_Détails3.png"]
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover cursor-pointer flex flex-col"
              onClick={() => { setSelectedProject(project); setCurrentImageIndex(0); }}
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
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 min-h-[56px] flex items-center justify-center">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center items-center w-full">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
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

            {selectedProject.features && (
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
            );
          })()}
        </Modal>
      )}
    </section>
  );
};