import React from 'react';
import '../styles/Home.css'; // Import the CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <h1 className="welcome-message">Welcome to Upscallers</h1>
            <p className="home-description">
                At Upscallers, we believe that fashion is not just about clothing; it's about expressing yourself. 
                Our carefully curated collection offers stylish outfits that blend comfort and elegance, ensuring 
                you look and feel your best, whether you're at a casual gathering or a formal event. 
                Discover the latest trends and elevate your wardrobe with our unique pieces tailored for every occasion. 
                Join us on this fashion journey and make a statement with Upscallers!
            </p>
        </div>
    );
};

export default Home;
