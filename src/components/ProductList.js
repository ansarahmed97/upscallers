import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';
import image1 from './assets/image1.jpg'; 
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';
import image6 from './assets/image6.jpg';
import image7 from './assets/image7.jpg';
import image8 from './assets/image8.jpg';
import image9 from './assets/image9.jpg';

// Product data
const products = [
    { id: 1, name: 'Product 1', price: 100, image: image1 },
    { id: 2, name: 'Product 2', price: 150, image: image2 },
    { id: 3, name: 'Product 3', price: 200, image: image3 },
    { id: 4, name: 'Product 4', price: 250, image: image4 },
    { id: 5, name: 'Product 5', price: 300, image: image5 },
    { id: 6, name: 'Product 6', price: 350, image: image6 },
    { id: 7, name: 'Product 7', price: 400, image: image7 },
    { id: 8, name: 'Product 8', price: 450, image: image8 },
    { id: 9, name: 'Product 9', price: 500, image: image9 },
];

// ProductList component
const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default ProductList;
