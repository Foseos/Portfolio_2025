import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
           <span className="text-primary"> Présentation </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
                Développeur Web
            </h3>

            <p className="text-muted-foreground">
              Diplômé d'un BTS SIO spécialité SLAM en 2023, je possède de solides compétences en développement web et cybersécurité.
            </p>

            <p className="text-muted-foreground">
              Passionné par la résolution de problèmes complexes, je me distingue par mon professionnalisme et ma détermination à mener à bien les missions qui me sont confiées.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contact
              </a>

              <a
                href="Dachez Lucas.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                download="Dachez Lucas.pdf"
              >
                Télécharger le CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Développement Web</h4>
                  <p className="text-muted-foreground">
                    Création de sites et applications web modernes, avec ou sans frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Travail en équipe</h4>
                  <p className="text-muted-foreground">
                    Grâce à mes expériences professionnelles, j'ai développé de solides compétences en travail d'équipe et en communication
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Gestion de projet</h4>
                  <p className="text-muted-foreground">
                    Au cours de mes expériences, j'ai développé ma capacité à gérer des tâches dans des délais définis pour mener à bien les projets
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};