import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

import { PROJECTS } from '../constants';

const projects = PROJECTS;

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="project-card glass"
                    >
                        <div className="card-header">
                            <h3>{project.title}</h3>
                            <div className="card-links">
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                )}
                                {project.links.demo && (
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="project-desc">{project.desc}</p>
                        <div className="project-tech">
                            {project.tech.map((t, i) => (
                                <span key={i} className="tech-tag">{t}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
