export const projects = [
  {
    id: 5,
    title: "SmartHR",
    description:
      "Plateforme RH complète : gestion des formations, suivi des alternants, tableau de bord analytique avec 6 KPI et génération de rapports PDF.",
    image: "/projects/project5.png",
    tags: ["RH", "Formations", "Reporting", "Python", "FastAPI", "Chart.js"],
    demoUrl: "https://smarthr-rqie.onrender.com/",
    githubUrl: "",
    detailedDescription:
      "Plateforme de gestion RH développée en architecture micro-services. Conçue pour centraliser le suivi des formations, des collaborateurs et des recrutements. L'accès est différencié par rôle (RH, manager, employé, admin), avec un dashboard analytique offrant une vision immédiate des KPI et un module de reporting PDF pour les comptes-rendus de formation.",
    features: [
      "Suivi des formations : planification, participants, statuts (4 rôles utilisateurs)",
      "Dashboard analytique avec 6 KPI et 6 graphiques de reporting RH",
      "Module de recrutement : pipeline des candidatures et intégration des alternants",
      "Notifications email automatiques (convocations, confirmations, alertes)",
      "Génération de rapports PDF pour les bilans de formation (iText7)",
      "Authentification sécurisée par rôle avec contrôle d'accès granulaire",
      "Déployé en production sur Render.com",
    ],
    detailedImages: [],
  },
  {
    id: 3,
    title: "Job Scraper",
    description:
      "Outil de veille et de suivi des offres d'alternance et de stage : collecte automatisée sur France Travail, Kanban de suivi et statistiques.",
    image: "/projects/project3.png",
    tags: ["RH", "France Travail", "Alternance", "Python", "Flask", "Selenium"],
    demoUrl: "",
    githubUrl: "https://github.com/Foseos/Web_Scrapper",
    detailedDescription:
      "Application Python/Flask conçue comme un outil de gestion des offres d'alternance et de stage. Elle automatise la collecte sur France Travail via Selenium, diffuse les résultats en temps réel et offre un tableau Kanban pour suivre le pipeline de recrutement. Pensé pour alléger le travail administratif des équipes RH.",
    features: [
      "Collecte automatisée des offres France Travail (alternances, stages) par ville et métier",
      "Tableau Kanban de suivi du pipeline recrutement (À contacter / En cours / Validé)",
      "Filtres avancés : ville, métier, type de contrat, niveau d'expérience",
      "Statistiques et reporting visuel du pipeline de candidatures",
      "Streaming temps réel des résultats via Server-Sent Events",
      "Nettoyage automatique des offres expirées (> 14 jours)",
    ],
    detailedImages: [
      "/projects/details/project3_details1.png",
      "/projects/details/project3_details2.png",
      "/projects/details/project3_details3.png",
    ],
  },
];
