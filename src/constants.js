import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const SOCIAL_LINKS = [
    { name: "GitHub", url: "https://github.com/KrishnaKanhaiya1", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/krishna-kanhaiya-124080295/", icon: FaLinkedin },
    { name: "Email", url: "mailto:kanhaiya1krishna@gmail.com", icon: FaEnvelope }
];

export const EXPERIENCES = [
    {
        role: "Frontend Development Intern",
        company: "EDU-LEARNING SPAZE PVT LTD",
        duration: "May 2026 – Present",
        description: [
            "Engineered the Core Study-Time Planner: Architected and developed the end-to-end Study-Time Management module in Next.js. Engineered a client-side feasibility algorithm that dynamic-allocates hours based on exam dates, calculates course-completion metrics, and visualizes scheduling trajectories using custom Gantt-style interfaces.",
            "Resolved Critical SSR Hydration & State Issues: Solved persistent Next.js server-side rendering (SSR) hydration mismatches and client-side mounting race conditions. Implemented a robust state serialization layer utilizing React hooks and localStorage to guarantee 100% data persistence without rendering flickering.",
            "Designed a Scalable Component Design System: Spearheaded the integration of a unified design system combining Material UI and Tailwind CSS. Refactored bloated, legacy forms into a library of modular, typesafe components (custom DatePicker, real-time error snackbars, and normalized inputs), reducing code duplication across the repository by over 30%.",
            "Developed Automated Preview Export Pipelines: Authored a headless browser automation script using Puppeteer and Node.js to dynamically compile, inline local CSS stylesheets, and serialize complex, state-driven React pages into single-file, portable HTML previews for zero-dependency external sharing.",
            "Led Repository Migration & Conflict Resolution: Managed the integration of extensive upstream updates from the remote GitHub repository into the local codebase. Resolved complex multi-file merge conflicts in Next.js layouts and components, ensuring a clean git tree and zero regressions during final pull requests."
        ]
    },
    {
        role: "AI Intern",
        company: "Infosys",
        duration: "Sep 2025 – Nov 2025",
        description: [
            "Built a plant disease detection system using CNNs and Python for image classification",
            "Implemented data preprocessing and augmentation pipelines to improve model accuracy",
            "Evaluated model performance and optimized results through iterative testing"
        ]
    },
    {
        role: "Web Development Intern",
        company: "VaultofCodes",
        duration: "June 2025 – July 2025",
        description: [
            "Developed RESTful APIs with Node.js and Express for backend services",
            "Optimized MySQL database queries and added indexing for better performance",
            "Implemented error handling and logging for improved system reliability"
        ]
    }
];

export const PROJECTS = [
    {
        title: "Three-Way Match Engine",
        desc: "High-performance transactional reconciliation engine automating Purchase Order, Goods Receipt Note, and Invoice matching with fuzzy item comparison.",
        tech: ["Node.js", "Express", "MongoDB", "Google Gemini API"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/Three-Way-MatchEngine",
            demo: "https://github.com/KrishnaKanhaiya1/Three-Way-MatchEngine#readme"
        },
        category: "Backend & Systems"
    },
    {
        title: "ITRCoPilot",
        desc: "LangGraph-style multi-agent autonomous tax engine evaluating income tax returns, tax regimes, and multi-document compliance automatically.",
        tech: ["Python", "LangGraph", "FastAPI", "Google Gemini API"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/ITRCoPilot",
            demo: "https://itr-co-pilot.vercel.app/"
        },
        category: "AI/ML"
    },
    {
        title: "SmartTour",
        desc: "Next.js multi-agent travel assistant coordinating specialized sub-agents for real-time itinerary generation, food recommendations, and local safety protocols.",
        tech: ["Next.js", "React", "Tailwind CSS", "Google Gemini API"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/smartTour",
            demo: "https://smarttour-test.vercel.app/"
        },
        category: "AI/ML"
    },
    {
        title: "Smart Incentive Calculator (SIC)",
        desc: "Full-stack incentive calculation platform evaluating multi-tier sales performance metrics, dynamic formulas, and regional commission rules.",
        tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/Smart-Incentive-Calculator",
            demo: "https://smart-incentive-calculator-gamma.vercel.app/"
        },
        category: "Web Development"
    },
    {
        title: "NaviMoney (finLiteracy)",
        desc: "Production-grade youth financial literacy platform featuring gamified micro-lessons, live stock trading simulator, and automated SMS alerts.",
        tech: ["Next.js", "Express", "TypeScript", "PostgreSQL", "Docker"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/finLiteracy",
            demo: "https://github.com/KrishnaKanhaiya1/finLiteracy#readme"
        },
        category: "Web Development"
    },
    {
        title: "CoastGuard AI",
        desc: "Maritime hazard warning system merging satellite geospatial intelligence with crowdsourced indigenous knowledge to deliver hyperlocal risk scores.",
        tech: ["Streamlit", "Python", "Geospatial ML", "TensorFlow"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/CoastGuardAI",
            demo: "https://coastguard-by-krishna-kanhaiya.streamlit.app/"
        },
        category: "AI/ML"
    },
    {
        title: "LawBuddy",
        desc: "Legal RAG platform indexing legal contracts, NDAs, and case memos for natural language vector retrieval and Gemini API constrained QA.",
        tech: ["Python", "Gemini API", "ChromaDB", "SentenceTransformers"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/LawBuddy",
            demo: "https://github.com/KrishnaKanhaiya1/LawBuddy#readme"
        },
        category: "AI/ML"
    },
    {
        title: "YelpCamp",
        desc: "Full-stack web application for reviewing and sharing campgrounds with secure authentication and user reviews.",
        tech: ["Node.js", "Express", "MongoDB", "Bootstrap"],
        links: { demo: "https://yelpcamp-e313.onrender.com/" },
        category: "Web Development"
    },
    {
        title: "Car Rental Agency",
        desc: "Rental management platform built with PHP and MySQL featuring customer and agency workflows.",
        tech: ["PHP", "MySQL", "Bootstrap 5", "JavaScript"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/Car-Rental-Agency",
            demo: "https://krishnakanhaiya.fwh.is/"
        },
        category: "Web Development"
    }
];
