// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Customize from './pages/Customize';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]); // State to manage cart items
  const [isVeg, setIsVeg] = useState(true); // State to track Veg/Non-Veg selection

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem._id === item._id);
      if (existingItemIndex > -1) {
        // Item already in cart, increment the count
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].count += 1; // Increment count
        return updatedItems;
      } else {
        // Item not in cart, add it with count 1
        return [...prevItems, { ...item, count: 1 }];
      }
    });
  };

  return (
    <div className="App">
      <Header />
      <Navbar setIsVeg={setIsVeg} cartItems={cartItems} isVeg={isVeg} /> {/* Pass setIsVeg and cartItems to Navbar */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu addToCart={addToCart} cartItems={cartItems} isVeg={isVeg} />} /> {/* Pass props to Menu */}
          <Route path="/customize" element={<Customize />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;