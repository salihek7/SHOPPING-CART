// src/App.js
import React, { useState } from 'react';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart ({cartItems.length})</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            </Routes>
        </Router>
    );
};

export default App;
