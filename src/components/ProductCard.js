import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
    const navigate = useNavigate();

    const handleBuyNow = () => {
        // Log to verify the correct product ID is being used
        console.log(`Navigating to BuyNow with ID: ${product.id}`);
        navigate(`/buy-now/${product.id}`); // Navigate to BuyNow component with product ID
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div className="button-container">
                <button className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                <button 
                    className="add-to-cart" 
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
