import { X } from "lucide-react";
import { useEffect } from "react";

export const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-md transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative bg-card/95 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden animate-fade-in custom-scrollbar scale-in-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-20 bg-card/80 backdrop-blur-xl border-b border-border/50 p-6 flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-foreground to-foreground/70">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary hover:rotate-90 transition-all duration-300 active:scale-95"
            aria-label="Fermer"
          >
            <X size={20} className="stroke-[2.5]" />
          </button>
        </div>

        <div className="p-6 md:p-8">{children}</div>
      </div>
    </div>
  );
};
