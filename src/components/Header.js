import React, { useState } from 'react';
import '../styles/Header.css';

function Navbar({ cartCount, onPageChange }) { // Accept cartCount as a prop
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleNavbarToggle = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const handleNavigation = (page) => {
        setIsNavbarOpen(false);
        onPageChange(page);
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
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* Show count only if > 0 */}
            </div>
        </nav>
    );
}

export default Navbar;
