// src/components/Item.js
import React from 'react';

const Item = ({ item, addToCart }) => {
    return (
        <div className="item">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
    );
};

export default Item;
