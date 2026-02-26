import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";

const TAG_COLORS = {
  react: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  tailwindcss: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  symfony: "bg-black/10 text-foreground border-foreground/20",
  php: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  twig: "bg-green-500/10 text-green-400 border-green-500/20",
  bootstrap: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  doctrine: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  flask: "bg-gray-500/10 text-gray-400 border-gray-500/20",
  python: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  selenium: "bg-green-500/10 text-green-400 border-green-500/20",
  sqlite: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  customtkinter: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  cryptography: "bg-red-500/10 text-red-400 border-red-500/20",
};

function getTagColor(tag) {
  return (
    TAG_COLORS[tag.toLowerCase()] ||
    "bg-primary/10 text-primary border-primary/20"
  );
}

export const BentoProjectCard = ({
  project,
  isExpanded,
  onToggle,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  const allImages = [
    project.image,
    ...(project.detailedImages || []),
  ];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  if (isExpanded) {
    return (
      <motion.div
        layout
        className="glass-panel rounded-2xl overflow-hidden border border-border/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Image carousel */}
          <div className="relative aspect-video lg:aspect-auto lg:min-h-[400px] overflow-hidden bg-black/5">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={allImages[currentImage]}
                alt={`${project.title} - Image ${currentImage + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {allImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImage(i);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === currentImage
                          ? "bg-white scale-110"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Content */}
          <div className="p-6 lg:p-8 flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full border ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => onToggle(project.id)}
                className="p-2 rounded-full hover:bg-secondary/50 transition-colors shrink-0"
              >
                <ChevronUp size={20} />
              </button>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {project.detailedDescription}
            </p>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Fonctionnalités
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        size={16}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 mt-auto pt-4">
              {project.demoUrl && project.demoUrl !== "" && project.demoUrl !== "#" && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button inline-flex items-center gap-2 text-sm"
                >
                  <ExternalLink size={16} />
                  Démo
                </a>
              )}
              {project.githubUrl && project.githubUrl !== "" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border hover:bg-secondary/50 transition-colors"
                >
                  <Github size={16} />
                  Code source
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Collapsed card
  return (
    <motion.div
      layout
      className="glass-panel rounded-2xl overflow-hidden border border-border/50 h-full flex flex-col cursor-pointer group hover:border-primary/30 transition-colors"
      onClick={() => onToggle(project.id)}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Quick action icons */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.githubUrl && project.githubUrl !== "" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {project.demoUrl && project.demoUrl !== "" && project.demoUrl !== "#" && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-xs px-2 py-0.5 rounded-full border ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-lg font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {project.description}
        </p>

        <div className="mt-auto flex items-center text-sm text-primary font-medium">
          Voir le détail
          <ChevronDown size={16} className="ml-1" />
        </div>
      </div>
    </motion.div>
  );
};
