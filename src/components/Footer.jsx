import { SOCIAL_LINKS } from '../constants';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="social-links">
                    {SOCIAL_LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            aria-label={link.name}
                        >
                            <link.icon />
                        </a>
                    ))}
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} Krishna Kanhaiya. All rights reserved.
                </p>
                <p className="built-with">
                    Built with React & Vite
                </p>
            </div>
        </footer>
    );
};

export default Footer;
