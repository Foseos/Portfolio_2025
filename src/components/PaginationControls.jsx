import { ChevronLeft, ChevronRight } from "lucide-react";

export const PaginationControls = ({
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  onPageClick,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-4 mt-12">
      <button
        onClick={onPrevious}
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
              onClick={() => onPageClick(i)}
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
        onClick={onNext}
        className="p-2 rounded-full bg-card hover:bg-primary/10 transition-colors duration-300"
        aria-label="Page suivante"
      >
        <ChevronRight className="h-6 w-6 text-primary" />
      </button>
    </div>
  );
};
