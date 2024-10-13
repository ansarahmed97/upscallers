import React from 'react';
import '../styles/Cart.css';

function Cart({ cartItems }) {
    const getTotalAmount = (items) => {
        return items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    };

    const totalAmount = getTotalAmount(cartItems);
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-section">
            <h2>Cart Items: {totalItems}</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-summary">
                        <h3>Total Items: {totalItems}</h3>
                        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                        <button className="checkout-button">Proceed to Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
