import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/BuyNow.css'; 

const BuyNow = ({ products }) => {
    const { productId } = useParams();
    const navigate = useNavigate();
    
    // Find the product based on the productId from URL params
    const product = products.find(p => p.id === parseInt(productId));

    const handleCheckout = () => {
        // Add logic for proceeding to checkout
        alert('Proceeding to checkout');
        // Here you could add further logic, like redirecting to a checkout page
    };

    // Log to check if the product is found correctly
    console.log(`Product ID from params: ${productId}`);
    console.log('Product found:', product);

    // Handle case where product is not found
    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div className="buy-now">
            <h2>Buy Now</h2>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p> {/* Format the price to two decimal places */}
            <button onClick={handleCheckout}>Proceed to Checkout</button>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export default BuyNow;
