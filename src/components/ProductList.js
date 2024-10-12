import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.css'; // Correctly reference the CSS file in the styles folder
import image1 from './assets/image1.jpg'; // Import the images
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

const products = [
    { id: 1, name: 'Product 1', price: 100, image: image1 }, // Use the imported image
    { id: 2, name: 'Product 2', price: 150, image: image2 },
    { id: 3, name: 'Product 3', price: 200, image: image3 },
];

const ProductList = () => {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
