const experiences = [
  {
    id: 1,
    title: "Manutentionnaire",
    company: "Ligier",
    period: "Septembre 2025 - Novembre 2025",
    contractType: "Interim",
    description: "Gestion logistique, nettoyage et manutention de marchandises et colis",
    image: "/experience/Ligier.jpg",
    technologies: []
  },
  {
    id: 2,
    title: "Agent logistique",
    company: "Manpower",
    period: "Août 2024",
    contractType: "Intérim",
    description: "Gestion et tri des déchets dans le respect des normes environnementales",
    image: "/experience/Manpower.jpg",
    technologies: []
  },
  {
    id: 3,
    title: "Trieur de colis",
    company: "LaPoste",
    period: "Novembre 2024 - Décembre 2024",
    contractType: "CDD",
    description: "Tri et dispatching des colis dans le respect des délais de livraison",
    image: "/experience/LaPoste.svg",
    technologies: []
  },
  {
    id: 4,
    title: "Service Civique",
    company: "France Travail",
    period: "Février 2024 - Octobre 2024",
    contractType: "Service Civique",
    description: "Accompagnement des demandeurs d'emploi dans l'utilisation des outils numériques",
    image: "/experience/France_Travail.jpg",
    technologies: []
  },
  {
    id: 5,
    title: "Développeur web stagiaire",
    company: "Pecheur.com",
    period: "Janvier 2023 - Février 2023",
    contractType: "Stage",
    description: "Migration d'une application client lourd vers une architecture web moderne",
    image: "/experience/Pecheur.png",
    technologies: [ "C#", "HTML", "CSS", "JS", "ASP.net", "SQL"]
  },
  {
    id: 6,
    title: "Développeur web stagiaire",
    company: "Axereal",
    period: "Mai 2022 - Juin 2022",
    contractType: "Stage",
    description: "Développement d'un script automatisé de vérification et validation des sauvegardes",
    image: "/experience/Axereal.jpg",
    technologies: [ "Bash", "Python", "SQL"]
  }

];

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ExperienceSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(experiences.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentExperiences = experiences.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mon <span className="text-primary">Expérience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {currentExperiences.map((exp, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden flex items-center justify-center bg-white dark:bg-white">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="max-w-[80%] max-h-[80%] object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 text-center">{exp.title}</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="px-4 py-1.5 text-sm font-bold rounded-full bg-primary text-primary-foreground shadow-md">
                    {exp.contractType}
                  </span>
                </div>
                <p className="text-primary font-medium text-sm mb-2 text-center">{exp.company}</p>
                <p className="text-muted-foreground text-sm mb-4 text-center flex-grow">
                  {exp.description}
                </p>
                <p className="text-xs text-muted-foreground text-center">{exp.period}</p>
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
      </div>
    </section>
  );
};