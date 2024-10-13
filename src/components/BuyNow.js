import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BuyNow.css';  // Import useNavigate for navigation

const BuyNow = ({ product }) => {
    const navigate = useNavigate(); // Initialize navigate function

    const handleGoBack = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <div className="buy-now">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>Price: ${product.price}</p>
            <button>Proceed to Checkout</button>
            <button onClick={handleGoBack} style={{ marginTop: '10px' }}>Go Back</button>
        </div>
    );
};

export default BuyNow;
