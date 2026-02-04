import { PaginationControls } from "./PaginationControls";
import { usePagination } from "@/hooks/usePagination";
import { experiences } from "@/data/experiences";

export const ExperienceSection = () => {
  const {
    currentPage,
    totalPages,
    paginatedItems: currentExperiences,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  } = usePagination(experiences, 3);

  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mon <span className="text-primary">Expérience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]">
          {currentExperiences.map((exp) => (
            <div
              key={exp.id}
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
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
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
