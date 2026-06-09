import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export const SOCIAL_LINKS = [
    { name: "GitHub", url: "https://github.com/KrishnaKanhaiya1", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/krishna-kanhaiya/", icon: FaLinkedin },
    { name: "Email", url: "mailto:kanhaiya1krishna@gmail.com", icon: FaEnvelope }
];

export const EXPERIENCES = [
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
    },
    {
        title: "UdaanCoach",
        desc: "AI coaching platform that analyzes soft skills and provides multilingual suggestions for improvement.",
        tech: ["FastAPI", "React", "PostgreSQL", "Gemini API"],
        links: { github: "https://github.com/KrishnaKanhaiya1/wat-analyzer" },
        category: "AI/ML"
    },
    {
        title: "SmartTour",
        desc: "AI travel companion that generates personalized itineraries, finds restaurants, and provides safety information.",
        tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/smartTour",
            demo: "https://smarttour-test.vercel.app/"
        },
        category: "AI/ML"
    },
    {
        title: "ITRCoPilot",
        desc: "AI assistant for income tax filing that processes documents and generates tax forms automatically.",
        tech: ["Python", "FastAPI", "React", "LLM Agents"],
        links: {
            github: "https://github.com/KrishnaKanhaiya1/ITRCoPilot",
            demo: "https://itr-co-pilot.vercel.app/"
        },
        category: "AI/ML"
    },
    {
        title: "CoastGuard AI",
        desc: "Maritime surveillance system using computer vision for real-time monitoring and emergency response.",
        tech: ["Streamlit", "Python", "Computer Vision", "TensorFlow"],
        links: { github: "https://github.com/KrishnaKanhaiya1/CoastGuardAI", demo: "https://coastguard-by-krishna-kanhaiya.streamlit.app/" },
        category: "AI/ML"
    },
    {
        title: "Student Professor Portal",
        desc: "Academic management platform for communication and resource sharing between students and professors.",
        tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
        links: { github: "https://github.com/krishnakanhaiya/PHP-Profrssor-and-Student-Portal-" },
        category: "Web Development"
    },
    {
        title: "Music Recommendation System",
        desc: "Recommendation engine using cosine similarity to suggest songs based on user preferences.",
        tech: ["Python", "Pandas", "Scikit-learn", "Jupyter"],
        links: { github: "https://github.com/KrishnaKanhaiya1/musicRecommendationSystem" },
        category: "Data Science"
    }
];
