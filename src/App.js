import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change from Switch to Routes
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes> {/* Correctly using Routes */}
                    <Route path="/" element={<ProductList />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
