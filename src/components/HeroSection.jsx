import { ArrowDown } from "lucide-react";
import { TextRotator } from "./TextRotator";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] md:blur-[150px] pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-purple-500/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Et si notre</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              collaboration
            </span>
            <span className="opacity-0 animate-fade-in-delay-2 flex flex-col sm:flex-row items-center justify-center gap-2">
              <span className="hidden sm:inline">{" "}</span>
              <TextRotator 
                texts={["faisait la différence", "créait de la valeur", "marquait les esprits"]} 
                className="text-primary font-bold min-h-[1.2em] relative"
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Développeur web alliant expertise technique et vision stratégique pour transformer vos idées en solutions concrètes et performantes
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Découvrir mes projets
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};