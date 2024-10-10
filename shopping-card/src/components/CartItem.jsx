// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <div>
                <h3>{item.title}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <label>
                    Quantity:
                    <input 
                        type="number" 
                        value={item.quantity} 
                        min="1" 
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))} 
                    />
                </label>
                <p>Subtotal: ${(item.subtotal).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;
