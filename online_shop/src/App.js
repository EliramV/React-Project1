// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/pages/HomePage";
import Navbar from "./components/Navbar";
import Catalog from "./components/pages/Catalog";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";



function App() {
    const [cartClicked, setCartClicked] = useState(false);
    const handleCartClick = () => {
        setCartClicked(!cartClicked);
    };

    return (
        <Router>
            <div className="App">
                <Navbar cartClicked={cartClicked} handleCartClick={handleCartClick} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
