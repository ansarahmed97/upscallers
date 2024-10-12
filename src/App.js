import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; // Import the Home component
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Footer from './components/Footer'; // Import the Footer component
import './styles/App.css';

const App = () => {
    const [cartCount, setCartCount] = useState(0); // State to manage cart count

    const addToCart = () => {
        setCartCount(prevCount => prevCount + 1); // Function to increment cart count
    };

    return (
        <Router>
            <div className="App">
                <Header cartCount={cartCount} /> {/* Pass cartCount to Header */}
                <Home /> {/* Keep Home component below the Header */}
                <Routes>
                    <Route path="/" element={<ProductList addToCart={addToCart} />} />
                    <Route path="/products" element={<ProductList addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer /> {/* Add Footer component at the end */}
            </div>
        </Router>
    );
};

export default App;
