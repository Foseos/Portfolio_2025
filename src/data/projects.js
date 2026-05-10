export const projects = [
  {
    id: 5,
    title: "SmartHR",
    description:
      "Plateforme RH complète : gestion des employés, des congés, des recrutements et reporting analytique, déployée en architecture micro-services.",
    image: "/projects/project5.png",
    tags: ["RH", "FastAPI", "Python", "PostgreSQL", "C#", "Java", "Chart.js"],
    demoUrl: "https://smarthr-rqie.onrender.com/",
    githubUrl: "",
    detailedDescription:
      "Plateforme RH déployée en architecture micro-services conteneurisée avec Docker Compose. Chaque service communique via un réseau virtuel Docker (bridge network) : l'API FastAPI expose des endpoints REST consommés par le frontend, un micro-service Java gère les notifications via SMTP, et une base PostgreSQL est accessible sur son propre socket réseau. L'authentification repose sur des tokens JWT transmis dans les headers HTTP.",
    features: [
      "Gestion des employés, des congés et des recrutements (4 rôles utilisateurs)",
      "Dashboard analytique avec 6 KPI et 6 graphiques Chart.js",
      "Notifications email automatiques via micro-service Java Spring Boot (SMTP)",
      "Authentification JWT avec contrôle d'accès par rôle",
      "Application desktop C# (.NET 8) pour le reporting PDF (iText7)",
      "Base PostgreSQL exposée sur socket réseau dédié dans Docker Compose",
      "Déploiement sur Render.com avec Docker Compose",
    ],
    detailedImages: [],
  },
  {
    id: 3,
    title: "Job Scraper",
    description:
      "Outil de veille emploi automatisé : collecte des offres sur France Travail, tableau Kanban de suivi des candidatures et statistiques.",
    image: "/projects/project3.png",
    tags: ["RH", "Flask", "Python", "Selenium", "SQLite"],
    demoUrl: "",
    githubUrl: "https://github.com/Foseos/Web_Scrapper",
    detailedDescription:
      "Application client-serveur développée en Python/Flask qui automatise la collecte d'offres d'emploi sur France Travail via Selenium et pousse les résultats en temps réel au navigateur via Server-Sent Events (SSE). Conçu comme un outil de gestion de candidatures à destination des recruteurs ou des conseillers emploi.",
    features: [
      "Collecte automatisée des offres France Travail multi-villes via Selenium",
      "Filtres avancés par ville, métier, expérience et type de contrat",
      "Streaming temps réel des résultats via le protocole SSE",
      "Tableau Kanban de suivi des candidatures",
      "Statistiques de suivi et reporting",
      "Déduplication et nettoyage automatique des données (> 14 jours)",
    ],
    detailedImages: [
      "/projects/details/project3_details1.png",
      "/projects/details/project3_details2.png",
      "/projects/details/project3_details3.png",
    ],
  },
];
