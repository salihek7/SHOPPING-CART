// src/components/Cart.js
import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, removeFromCart }) => {
    const [quantities, setQuantities] = useState({});

    const updateQuantity = (id, quantity) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: quantity,
        }));
    };

    // Calculate total price and itemized breakdown
    const itemizedBreakdown = cartItems.map(item => {
        const quantity = quantities[item.id] || 1;
        const subtotal = item.price * quantity;
        return { ...item, quantity, subtotal };
    });

    const totalPrice = itemizedBreakdown.reduce((total, item) => total + item.subtotal, 0);

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {itemizedBreakdown.map(item => (
                        <CartItem 
                            key={item.id} 
                            item={item} 
                            removeFromCart={removeFromCart} 
                            updateQuantity={updateQuantity} 
                        />
                    ))}
                    <div className="cart-summary">
                        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
                        <h3>YOUR ORDERS:</h3>
                        <ul>
                            {itemizedBreakdown.map(item => (
                                <li key={item.id}>
                                    {item.title} x {item.quantity} = ${(item.subtotal).toFixed(2)}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => alert('Order placed!')}>Place Order</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
