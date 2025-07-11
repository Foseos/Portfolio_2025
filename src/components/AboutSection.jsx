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
                Web Developer
            </h3>

            <p className="text-muted-foreground">
              J'ai obtenu en 2023 mon BTS SIO spécialité SLAM, de plus 
              j'ai des bonne connaissance en cybersécurité
            </p>

            <p className="text-muted-foreground">
              Passionné par la résolution de problème plus ou moins complexe,
              je serai me montrer professionnel et déterminé a resoudres les
              taches qui me seront confiées
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
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    création de site et applications web avec ou sans framework
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
                    Avec mes expériences professionnel j'ai acquéris des compétences 
                    de travail d'équipe et de communication
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
                    durant mes experence passé j'ai pu developper ma capacité a gérer des taches dans un temps donner pour realisé un projet
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