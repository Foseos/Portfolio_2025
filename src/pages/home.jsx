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

const SITE_URL = "https://www.portfoliodachez.fr";
const SITE_TITLE = "Lucas Dachez | Portfolio";
const SITE_DESCRIPTION = "Portfolio de Lucas Dachez, développeur web. Découvrez mes projets, mes compétences et mon expérience dans la création d'applications web modernes.";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/projects/project1.png`} />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/projects/project1.png`} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Lucas Dachez",
          url: SITE_URL,
          jobTitle: "Développeur Web",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Vichy",
            addressCountry: "FR",
          },
          sameAs: [
            "https://github.com/Foseos",
          ],
        })}</script>
      </Helmet>

      {/* Skip to content (accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:rounded-full focus:bg-primary focus:text-primary-foreground focus:font-medium focus:shadow-lg focus:outline-none"
      >
        Aller au contenu principal
      </a>

      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main id="main-content">
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
