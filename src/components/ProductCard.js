import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <div className="button-container">
                <button className="buy-now">Buy Now</button>
                <button className="add-to-cart" onClick={addToCart}>Add to Cart</button> {/* Call addToCart */}
            </div>
        </div>
    );
};

export default ProductCard;
