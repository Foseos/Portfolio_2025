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
                Développeur Web Full Stack
            </h3>

            <p className="text-muted-foreground">
              Diplômé d'un BTS SIO spécialité SLAM en 2023, je possède de solides compétences en développement web et cybersécurité.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Ma motivation</h4>
                <p className="text-muted-foreground">
                  Passionné par les nouvelles technologies et l'innovation, je suis constamment en quête d'apprentissage. Chaque projet est pour moi une opportunité de repousser mes limites et de créer des solutions qui ont un impact réel.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Pourquoi me choisir ?</h4>
                <p className="text-muted-foreground">
                  Ma polyvalence technique, ma curiosité naturelle et ma capacité d'adaptation me permettent de m'intégrer rapidement dans tout environnement. Je ne me contente pas de coder : je cherche à comprendre les enjeux métier pour proposer les meilleures solutions.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <a
                href="Dachez Lucas.pdf"
                className="cosmic-button flex items-center justify-center gap-2"
                download="Dachez Lucas.pdf"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Télécharger mon CV
              </a>

              <a
                href="#contact"
                className="cosmic-button flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                </svg>
                Me contacter
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