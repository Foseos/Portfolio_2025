import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection"
import { Footer } from "../components/Footer";

// Lazy load des composants en dessous de la ligne de flottaison
const AboutSection = lazy(() => import("../components/AboutSection").then(module => ({ default: module.AboutSection })));
const SkillsSection = lazy(() => import("../components/SkillsSection").then(module => ({ default: module.SkillsSection })));
const ExperienceSection = lazy(() => import("../components/ExperienceSection").then(module => ({ default: module.ExperienceSection })));
const ProjectsSection = lazy(() => import("../components/ProjectsSection").then(module => ({ default: module.ProjectsSection })));
const ContactSection = lazy(() => import("../components/ContactSection").then(module => ({ default: module.ContactSection })));

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Portfolio | Développeur Web</title>
        <meta name="description" content="Portfolio de développeur web. Découvrez mes projets, mes compétences et mon expérience dans la création d'applications web modernes." />
      </Helmet>

      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        
        <Suspense fallback={
          <div className="min-h-[20vh] flex items-center justify-center">
            <div className="animate-pulse w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          </div>
        }>
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </Suspense>
      </main>

      {/* Footer */}
      <Footer />
    </div>
    );
};