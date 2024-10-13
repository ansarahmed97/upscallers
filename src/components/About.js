import React from 'react';
import '../styles/About.css'; // Import the CSS file
import aboutImage from './assets/upscalelogo.png'; // Image for the left side
import { FaInstagram } from 'react-icons/fa'; // Import Instagram icon from react-icons

const About = () => {
    return (
        <div className="about-section">
            <div className="about-content">
                <div className="upscalelogo">
                    <img src={aboutImage} alt="About Upscaleweb" />
                </div>
                <div className="about-text">
                    <h2>Designed at Upscaleweb by Ansar Ahmed</h2>
                    <p>
                        Welcome to Upscaleweb, where innovative web designs meet the pinnacle of modern technology.
                        Crafted with passion, this platform is a blend of creativity and functionality aimed at providing
                        the best web experience. Ansar Ahmed, the mind behind Upscaleweb, is driven by the vision to 
                        empower businesses with a visually stunning and highly responsive web presence. Every pixel on this site 
                        is fine-tuned for excellence and user satisfaction.
                    </p>
                    <p>
                        Follow our journey and stay updated with the latest trends in web development, design tips, and project showcases.
                    </p>
                    <div className="instagram-follow">
                        <p>Follow us on Instagram:</p>
                        <div className="insta-links">
                            <a href="https://instagram.com/upscaleweb" target="_blank" rel="noopener noreferrer" className="insta-button">
                                <FaInstagram /> Follow @upscaleweb
                            </a>
                            <a href="https://instagram.com/ansarahmed" target="_blank" rel="noopener noreferrer" className="insta-button">
                                <FaInstagram /> Follow @AnsarAhmed
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
