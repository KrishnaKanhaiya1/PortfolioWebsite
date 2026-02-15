import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

import { EXPERIENCES } from '../constants';

const experiences = EXPERIENCES;

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="timeline-item"
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass">
                            <div className="timeline-header">
                                <h3>{exp.role}</h3>
                                <span className="company">{exp.company}</span>
                            </div>
                            <div className="timeline-date">
                                <FaCalendarAlt className="icon" /> {exp.duration}
                            </div>
                            <ul className="timeline-desc">
                                {exp.description.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
