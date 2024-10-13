import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation
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
    const navigate = useNavigate(); // Initialize useNavigate hook
    const location = useLocation(); // Initialize useLocation hook

    // Function to handle scroll to Home section
    // eslint-disable-next-line
    const handleHomeClick = () => {
        setActiveSection('home');
        navigate('/'); // Update URL to home
        if (homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to handle scroll to Products section
    // eslint-disable-next-line
    const handleProductsClick = () => {
        setActiveSection('products');
        navigate('/products'); // Update URL to products
        if (productRef.current) {
            productRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to handle About section
    const handleAboutClick = () => {
        setActiveSection('about');
        navigate('/about'); // Update URL to about
    };

    // Function to handle Cart section
    const handleCartClick = () => {
        setActiveSection('cart');
        navigate('/cart'); // Update URL to cart
    };

    // Add to cart logic
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

    // Handle Buy Now functionality
    const handleBuyNow = (product) => {
        setSelectedProduct(product); // Set the selected product for BuyNow
        setActiveSection('buy-now'); // Change the active section to 'buy-now'
        navigate('/buy-now'); // Update URL to Buy Now
    };

    // Track URL changes to scroll to the right section
    useEffect(() => {
        if (location.pathname === '/') {
            handleHomeClick();
        } else if (location.pathname === '/products') {
            handleProductsClick();
        } else if (location.pathname === '/about') {
            setActiveSection('about');
        } else if (location.pathname === '/cart') {
            setActiveSection('cart');
        } else if (location.pathname === '/buy-now' && selectedProduct) {
            setActiveSection('buy-now');
        }
        // eslint-disable-next-line
    }, [location.pathname]); // React to URL changes

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
