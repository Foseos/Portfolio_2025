import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Users, Briefcase, User, Download, Mail, FileCheck, Award, FolderGit2, CalendarDays } from "lucide-react";
import { Reveal } from "./Reveal";
import { SpotlightCard } from "./SpotlightCard";
import { projects } from "../data/projects";

const stats = [
  { icon: FolderGit2, value: projects.length, suffix: "+", label: "Projets réalisés" },
  { icon: CalendarDays, value: 10, suffix: " mois", label: "Expérience RH" },
  { icon: Award, value: 1, suffix: "", label: "Certification RGPD" },
];

const skillCards = [
  {
    icon: Users,
    color: "primary",
    title: "Gestion administrative RH",
    desc: "Suivi des dossiers formations, gestion documentaire, offres de stage et d'alternance.",
  },
  {
    icon: User,
    color: "purple-500",
    title: "Intégration & Accompagnement",
    desc: "Recrutement, onboarding et suivi des alternants. Bon relationnel, sens du contact.",
  },
  {
    icon: Briefcase,
    color: "blue-500",
    title: "Digitalisation & Formations HSE",
    desc: "Modes opératoires, supports digitaux, programmation des formations HSE — background IT.",
  },
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* Colonne gauche */}
          <Reveal delay={200} className="flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                Alternant en Ressources Humaines
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Diplômé d'un BTS SIO en 2023, je prépare un Bac+3 RH au Groupe Alternance Montluçon. Mon CDD chez <span className="text-foreground font-medium">France Travail</span> et mon stage chez <span className="text-foreground font-medium">Cottel</span> m'ont donné des bases concrètes en gestion administrative des formations, traitement des offres de stage et d'alternance, et accompagnement des collaborateurs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Curieux, organisé et bon relationnel, mon background IT est un atout direct pour devenir rapidement <span className="text-foreground font-medium">référent d'une plateforme de gestion des connaissances</span>, déployer des modes opératoires, digitaliser les supports RH et programmer les formations HSE — sans temps d'adaptation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="CV_Dachez_RH.pdf"
                className="cosmic-button flex items-center gap-2 group/btn"
                download="CV_Dachez_RH.pdf"
              >
                <Download size={16} className="group-hover/btn:-translate-y-0.5 transition-transform" />
                Télécharger mon CV
              </a>
              <a
                href="#contact"
                className="px-5 py-2 rounded-full border border-primary/40 text-foreground text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary flex items-center gap-2"
              >
                <Mail size={15} className="text-primary" />
                Me contacter
              </a>
            </div>
          </Reveal>

          {/* Colonne droite */}
          <div ref={statsRef} className="space-y-4">
            <div className="space-y-3">
              {skillCards.map((card, i) => (
                <Reveal key={card.title} delay={300 + i * 80}>
                  <SpotlightCard className="p-4 group">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl bg-${card.color}/10 group-hover:scale-110 group-hover:bg-${card.color}/20 transition-all duration-300 shrink-0`}>
                        <card.icon className={`h-5 w-5 text-${card.color}`} />
                      </div>
                      <div>
                        <h4 className={`font-semibold text-sm mb-0.5 group-hover:text-${card.color} transition-colors`}>{card.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                      </div>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>

            <Reveal delay={550}>
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <SpotlightCard key={stat.label} className="p-3 text-center flex flex-col items-center justify-center group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-1.5 group-hover:bg-primary/20 transition-colors">
                      <stat.icon size={15} className="text-primary" />
                    </div>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} isVisible={isInView} />
                    <p className="text-muted-foreground text-[11px] font-medium mt-0.5">{stat.label}</p>
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
