import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart, onBuyNow }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => onBuyNow(product)}>Buy Now</button> {/* Trigger onBuyNow with the product */}
        </div>
    );
};

export default ProductCard;
