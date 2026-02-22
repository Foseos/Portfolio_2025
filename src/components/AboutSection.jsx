import { Briefcase, Code, User, Download, Mail, ArrowRight, Shield } from "lucide-react";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col items-center justify-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Disponible pour de nouvelles opportunités
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              À <span className="text-primary">propos</span> de moi
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Text */}
          <Reveal delay={200} className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Développeur Web Full Stack
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Diplômé d'un BTS SIO spécialité SLAM en 2023, je possède de solides compétences en développement web et cybersécurité. 
                Passionné par l'innovation, chaque projet est une opportunité de créer des solutions à fort impact.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border/50">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-8 h-px bg-primary"></div>
                  Ma motivation
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Passionné par les nouvelles technologies et l'innovation, je suis constamment en quête d'apprentissage. 
                  Chaque projet est pour moi une opportunité de repousser mes limites et d'offrir la meilleure expérience à l'utilisateur.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-8 h-px bg-primary"></div>
                  Pourquoi me choisir ?
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ma polyvalence technique, ma curiosité naturelle et ma capacité d'adaptation me permettent de 
                  m'intégrer rapidement. Je cherche à comprendre les enjeux métier pour proposer les solutions les plus durables.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="Dachez Lucas.pdf"
                className="cosmic-button flex items-center justify-center gap-2 group/btn"
                download="Dachez Lucas.pdf"
              >
                <Download size={18} className="group-hover/btn:-translate-y-1 transition-transform" />
                Télécharger mon CV
              </a>

              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary/40 text-foreground font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary flex items-center justify-center gap-2 group/btn"
              >
                <Mail size={18} className="text-primary" />
                Me contacter
              </a>
            </div>
          </Reveal>

          {/* Right Column - Skill Cards */}
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 md:p-8 rounded-3xl shadow-sm space-y-5 flex flex-col justify-center h-full">
            <Reveal delay={300}>
              <SpotlightCard className="p-4 group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">Développement Web</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Création d'applications web modernes avec une UX soignée.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={400}>
              <SpotlightCard className="p-4 group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                    <User className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 group-hover:text-purple-500 transition-colors">Travail d'équipe</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Collaboration fluide avec méthodes agiles pour structurer la réussite.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={500}>
              <SpotlightCard className="p-4 group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Briefcase className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 group-hover:text-blue-500 transition-colors">Gestion de projet</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Capacité à prioriser, estimer et délivrer dans les délais impartis.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={550}>
              <SpotlightCard className="p-4 group">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <Shield className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-1 group-hover:text-emerald-500 transition-colors">Cybersécurité</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Application des bonnes pratiques pour concevoir des systèmes fiables.
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
            
            <Reveal delay={600}>
              <a href="#projects" className="block w-full mt-2">
                <SpotlightCard className="p-3 flex items-center justify-between group hover:border-primary/50 cursor-pointer overflow-hidden relative border border-dashed border-border/50">
                  <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 flex items-center gap-3 pl-2">
                    <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">Explorer mes réalisations</span>
                  </div>
                  <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 relative z-10">
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </SpotlightCard>
              </a>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};