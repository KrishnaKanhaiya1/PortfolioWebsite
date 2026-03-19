import { motion } from 'framer-motion';
import './About.css';

const skills = [
    "Python", "JavaScript", "C++", "Node.js", "Express.js",
    "React", "MongoDB", "MySQL", "Git", "REST APIs"
];

const About = () => {
    return (
        <section id="about" className="section container about-section">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="about-content"
            >
                <h2 className="section-title">About Me</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I am a Computer Science undergraduate at Cochin University of Science and Technology (CUSAT),
                            passionate about building scalable web applications and exploring Artificial Intelligence.
                        </p>
                        <p>
                            With a strong foundation in Data Structures & Algorithms and hands-on experience in
                            Full Stack Development, I love solving complex problems and creating efficient solutions.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <span className="stat-value">8.98</span>
                                <span className="stat-label">CGPA</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">2+</span>
                                <span className="stat-label">Internships</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills-container">
                        <h3>Technical Skills</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    viewport={{ once: true }}
                                    className="skill-tag"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
