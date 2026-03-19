import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const SOCIAL_LINKS = [
    { name: "GitHub", url: "https://github.com/KrishnaKanhaiya1", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/krishna-kanhaiya/", icon: FaLinkedin }, // Assumed or need to verify
    { name: "Email", url: "mailto:kanhaiya1krishna@gmail.com", icon: FaEnvelope }
];

export const EXPERIENCES = [
    {
        role: "AI Intern",
        company: "Infosys",
        duration: "Sep 2025 – Nov 2025",
        description: [
            "Architected and deployed an AI-based plant disease diagnosis system using Python and CNNs, achieving high accuracy in complex image classification tasks.",
            "Engineered robust data preprocessing and augmentation pipelines to substantially improve model generalization across diverse real-world datasets.",
            "Conducted rigorous performance evaluation using structured metrics and documented comprehensive results to drive continuous model optimization."
        ]
    },
    {
        role: "Web Development Intern",
        company: "VaultofCodes",
        duration: "June 2025 – July 2025",
        description: [
            "Designed and deployed scalable backend RESTful APIs using Node.js and Express.js, serving as the core infrastructure for key product workflows.",
            "Optimized high-performance MySQL database schemas and queries, implementing indexing strategies that significantly reduced query latency.",
            "Enhanced system reliability by implementing comprehensive error handling, input validation, and logging mechanisms, ensuring high availability for critical services."
        ]
    }
];

export const PROJECTS = [
    {
        title: "YelpCamp",
        desc: "Production-ready Full Stack Web Application for campground reviews with secure authentication.",
        tech: ["Node.js", "Express", "MongoDB", "Bootstrap"],
        links: { demo: "https://yelpcamp-e313.onrender.com/" },
        category: "Web Development"
    },
    {
        title: "Car Rental Agency",
        desc: "Core PHP and MySQL rental platform with separate customer/agency workflows, inventory management, and booking references.",
        tech: ["PHP", "MySQL", "Bootstrap 5", "JavaScript"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/Car-Rental-Agency",
            demo: "https://krishnakanhaiya.fwh.is/"
        },
        category: "Web Development"
    },
    {
        title: "UdaanCoach (WAT Analyzer)",
        desc: "AI-powered soft-skill coaching platform that analyzes responses, explains trait impact, and suggests rewrites with multilingual support.",
        tech: ["FastAPI", "React", "PostgreSQL", "Gemini API"],
        links: { github: "https://github.com/KrishnaKanhaiya1/wat-analyzer" },
        category: "AI/ML"
    },
    {
        title: "SmartTour",
        desc: "Agentic AI travel companion for itinerary planning, food and guide recommendations, translation, safety insights, and routing.",
        tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/smartTour",
            demo: "https://smarttour-test.vercel.app/"
        },
        category: "AI/ML"
    },
    {
        title: "ITRCoPilot",
        desc: "Multi-agent AI income tax filing assistant that processes documents, computes ITR-1, validates outputs, and supports e-verification flow.",
        tech: ["Python", "FastAPI", "React", "LLM Agents"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/ITRCoPilot",
            demo: "https://itr-co-pilot.vercel.app/"
        },
        category: "AI/ML"
    },
    {
        title: "CoastGuard AI",
        desc: "AI-powered maritime surveillance and emergency response system with real-time analytics.",
        tech: ["Streamlit", "Python", "Computer Vision", "TensorFlow"],
        links: { github: "https://github.com/KrishnaKanhaiya1/CoastGuardAI", demo: "https://coastguard-by-krishna-kanhaiya.streamlit.app/" },
        category: "AI/ML"
    },
    {
        title: "Student Professor Portal",
        desc: "Web-based academic management system for streamlining communication and resource sharing.",
        tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
        links: { github: "https://github.com/krishnakanhaiya/PHP-Profrssor-and-Student-Portal-" },
        category: "Web Development"
    },
    {
        title: "Music Recommendation System",
        desc: "Content-based recommendation engine using cosine similarity to suggest personalized tracks.",
        tech: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
        links: { github: "https://github.com/KrishnaKanhaiya1/musicRecommendationSystem" },
        category: "Data Science"
    }
];
