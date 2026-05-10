import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Users, Briefcase, User, Download, Mail, ArrowRight, FileCheck, Award, FolderGit2, CalendarDays } from "lucide-react";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { projects } from "../data/projects";

const stats = [
  { icon: FolderGit2, value: projects.length, suffix: "+", label: "Projets réalisés" },
  { icon: CalendarDays, value: 10, suffix: " mois", label: "Expérience RH" },
  { icon: Award, value: 1, suffix: "", label: "Certification RGPD" },
];

const AnimatedCounter = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let current = 0;
    const steps = 40;
    const increment = target / steps;
    const interval = 1500 / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="text-2xl md:text-3xl font-bold text-primary tabular-nums">
      {count}{suffix}
    </span>
  );
};

export const AboutSection = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

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
              Disponible dès l'été 2026 — Bac+3 RH
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
                Alternant en Ressources Humaines
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Diplômé d'un BTS SIO en 2023, je me reconvertis en Ressources Humaines et prépare un Bac+3 RH au Groupe Alternance Montluçon (disponible dès l'été 2026). Mon CDD de 9 mois chez France Travail et mon stage Assistant RH chez Cottel m'ont donné des bases solides en suivi administratif, gestion documentaire et accompagnement de publics variés — directement transférables à la gestion des formations et l'intégration des alternants.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-border/50">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-8 h-px bg-primary"></div>
                  Ma motivation
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Organisé, curieux et à l'aise avec les outils numériques, je veux contribuer concrètement à la gestion des formations et à la digitalisation des supports RH. Mon background BTS SIO est un atout direct pour prendre en main rapidement une plateforme de gestion des connaissances et moderniser les process administratifs.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-8 h-px bg-primary"></div>
                  Pourquoi me choisir ?
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Autonome, force de proposition et habitué aux environnements exigeants (France Travail, ligne de production Ligier), je serai opérationnel rapidement. Mon profil technique me différencie : je ne subis pas les outils, je les maîtrise — et j'apporte de vraies initiatives sur la modernisation des process RH.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <a
                href="CV_Dachez_RH.pdf"
                className="cosmic-button flex items-center justify-center gap-2 group/btn"
                download="CV_Dachez_RH.pdf"
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

              <a href="#projects" className="block">
                  <SpotlightCard className="p-3 h-full flex items-center justify-between group hover:border-primary/50 cursor-pointer overflow-hidden relative border border-dashed border-border/50">
                    <div className="absolute inset-0 bg-linear-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10 flex items-center gap-3 pl-2">
                      <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">Explorer mes réalisations</span>
                    </div>
                    <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 relative z-10">
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </SpotlightCard>
                </a>


            </div>
          </Reveal>

          {/* Right Column - Skill Cards + Stats */}
          <div ref={statsRef} className="space-y-6">
            {/* Skill cards */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 md:p-8 rounded-3xl shadow-sm space-y-5 flex flex-col justify-center">
              <Reveal delay={300}>
                <SpotlightCard className="p-4 group">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">Gestion administrative RH</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Traitement des dossiers formations, gestion documentaire, suivi des offres de stage et d'alternance.
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
                      <h4 className="font-semibold text-base mb-1 group-hover:text-purple-500 transition-colors">Intégration & Accompagnement</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Recrutement, intégration et suivi des alternants et stagiaires tout au long de leur parcours en entreprise.
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
                      <h4 className="font-semibold text-base mb-1 group-hover:text-blue-500 transition-colors">Digitalisation & Outils RH</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Digitalisation des supports RH, création de modes opératoires, maîtrise rapide des plateformes — BTS SIO comme fondation solide.
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>

              <Reveal delay={550}>
                <SpotlightCard className="p-4 group">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                      <FileCheck className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base mb-1 group-hover:text-emerald-500 transition-colors">RGPD & Conformité</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Certifié CNIL — respect des obligations légales liées au traitement des données candidats et à la confidentialité des processus RH.
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>

            {/* Stats row */}
            <Reveal delay={250}>
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <SpotlightCard key={stat.label} className="p-3 text-center group flex flex-col items-center justify-center">
                    <div className="w-8 h-8 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-1.5 group-hover:scale-100 group-hover:bg-primary/20 transition-all duration-300">
                      <stat.icon size={16} className="text-primary" />
                    </div>
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      isVisible={isInView}
                    />
                    <p className="text-muted-foreground text-[11px] font-medium mt-0.5">
                      {stat.label}
                    </p>
                  </SpotlightCard>
                ))}
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};