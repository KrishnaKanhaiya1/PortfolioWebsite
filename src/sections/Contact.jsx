import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="contact-section">
            <div className="container contact-container">
                <h2 className="contact-title">Let's Connect</h2>
                <p className="contact-text">
                    Currently open for new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/krishna-kanhaiya-124080295/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/KrishnaKanhaiya1" target="_blank" rel="noopener noreferrer" className="social-link">
                        <FaGithub />
                    </a>
                    <a href="mailto:23cs531kris@ug.cusat.ac.in" className="social-link">
                        <FaEnvelope />
                    </a>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Krishna Kanhaiya. Built with React & Vite.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
