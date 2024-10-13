import React, { useState, useRef } from 'react';
import Navbar from './components/Header';
import Home from './components/Home';
import ProductList from './components/ProductList';
import About from './components/About';
import Cart from './components/Cart';
import Footer from './components/Footer'; // Import your Footer component
import './styles/App.css';

function App() {
    const [cartItems, setCartItems] = useState([]);
    const [activeSection, setActiveSection] = useState('home'); // Default to 'home'

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

    // Function to add items to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // If the item already exists, update the quantity
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // If it's a new product, add it to the cart
            return [...prevItems, { ...product, quantity: 1 }];
        });
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
            {/* Render Home and Product sections when activeSection is 'home' or 'products' */}
            {(activeSection === 'home' || activeSection === 'products') && (
                <div>
                    <div ref={homeRef}>
                        <Home />
                    </div>
                    <div ref={productRef}>
                        <ProductList addToCart={addToCart} /> {/* Show ProductList only when activeSection is 'products' */}
                    </div>
                </div>
            )}
            {/* Show About Section only when activeSection is 'about' */}
            {activeSection === 'about' && (
                <div>
                    <About />
                </div>
            )}
            {/* Show Cart Section only when activeSection is 'cart' */}
            {activeSection === 'cart' && (
                <div>
                    <Cart cartItems={cartItems} /> {/* Pass cartItems to Cart */ }
                </div>
            )}
            {/* Footer always visible */}
            <Footer />
        </div>
    );
}

export default App;
