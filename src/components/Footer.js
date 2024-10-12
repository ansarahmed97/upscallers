import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>Thank you for visiting Upscallers!</h2>
                <p>Explore our amazing collection and find the perfect outfits for every occasion.</p>
                <p>&copy; 2024 Upscale web by Ansar Ahmed</p>
                <div className="download-buttons">
                    <a href="https://play.google.com/store" className="download-button">
                        <FontAwesomeIcon icon={faGooglePlay} /> Download on the Play Store
                    </a>
                    <a href="https://www.apple.com/app-store/" className="download-button">
                        <FontAwesomeIcon icon={faApple} /> Download on the App Store
                    </a>
                </div>
                <div className="social-links">
                    <p>Follow us on Instagram:</p>
                    <a href="https://www.instagram.com/ansarahmed._/" className="social-link">
                        <FontAwesomeIcon icon={faInstagram} /> Ansar Ahmed
                    </a>
                    <a href="https://www.instagram.com/upscaleweb/" className="social-link">
                        <FontAwesomeIcon icon={faInstagram} /> Upscaleweb
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
