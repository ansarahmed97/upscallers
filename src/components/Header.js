import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Navbar({ cartCount, onHomeClick, onProductsClick, onAboutClick, onCartClick }) {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const handleNavigation = (page) => {
        setIsNavbarOpen(false);
        if (page === 'home') {
            onHomeClick(); // Trigger scroll to Home section
        } else if (page === 'products') {
            onProductsClick(); // Trigger scroll to Product List section
        } else if (page === 'about') {
            onAboutClick(); // Trigger About section to open
        } else if (page === 'cart') {
            onCartClick(); // Trigger Cart section to open
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">Upscallers</div>
            <div className={`navbar-menu ${isNavbarOpen ? 'show' : ''}`}>
                <ul className="navbar-nav">
                    <li className="nav-item" onClick={() => handleNavigation('home')}>
                        <span>Home</span>
                    </li>
                    <li className="nav-item" onClick={() => handleNavigation('products')}>
                        <span>Products</span>
                    </li>
                    <li className="nav-item" onClick={() => handleNavigation('about')}>
                        <span>About</span>
                    </li>
                    <li className="nav-item" onClick={() => handleNavigation('cart')}>
                        <span>Cart</span>
                    </li>
                </ul>
            </div>
            <div className={`navbar-toggle ${isNavbarOpen ? 'active' : ''}`} onClick={handleNavbarToggle}>
                <i className={`fa-solid ${isNavbarOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
            <div className="cart-icon">
                <i className="fa-solid fa-shopping-cart"></i>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </div>
        </nav>
    );
}

export default Navbar;
