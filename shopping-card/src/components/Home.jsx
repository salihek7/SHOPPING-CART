// src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';

const Home = ({ addToCart }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            setItems(response.data);
        };
        fetchItems();
    }, []);

    return (
        <div className="home">
            <h1>Available Products</h1>
            <div className="item-list">
                {items.map(item => (
                    <Item key={item.id} item={item} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default Home;
