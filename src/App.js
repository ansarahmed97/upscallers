import React, { useState, useRef } from 'react';
import Navbar from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import About from './components/About';
import Cart from './components/Cart';
import BuyNow from './components/BuyNow'; // Import your BuyNow component
import Footer from './components/Footer'; // Import your Footer component
import './styles/App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [activeSection, setActiveSection] = useState('home'); // Default to 'home'
    const [selectedProduct, setSelectedProduct] = useState(null); // State to hold selected product

    const homeRef = useRef(null);
    const productRef = useRef(null);

    const handleHomeClick = () => {
        setActiveSection('home');
        if (homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleProductsClick = () => {
        setActiveSection('products');
        if (productRef.current) {
            productRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAboutClick = () => {
        setActiveSection('about');
    };

    const handleCartClick = () => {
        setActiveSection('cart');
    };

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    const handleBuyNow = (product) => {
        setSelectedProduct(product); // Set the selected product for BuyNow
        setActiveSection('buy-now'); // Change the active section to 'buy-now'
    };

    return (
        <div className="App">
            <Navbar 
                cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)} // Calculate total items in cart
                onHomeClick={handleHomeClick}
                onProductsClick={handleProductsClick}
                onAboutClick={handleAboutClick}
                onCartClick={handleCartClick}
            />
            {(activeSection === 'home' || activeSection === 'products') && (
                <div>
                    <div ref={homeRef}>
                        <Home />
                    </div>
                    <div ref={productRef}>
                        <ProductList addToCart={addToCart} onBuyNow={handleBuyNow} /> 
                    </div>
                </div>
            )}
            {activeSection === 'about' && (
                <div>
                    <About />
                </div>
            )}
            {activeSection === 'cart' && (
                <div>
                    <Cart cartItems={cartItems} /> 
                </div>
            )}
            {activeSection === 'buy-now' && selectedProduct && (
                <div>
                    <BuyNow product={selectedProduct} /> 
                </div>
            )}
            <Footer />
        </div>
    );
}

export default App;
