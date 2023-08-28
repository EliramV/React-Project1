// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ cartClicked, handleCartClick }) {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/" className="logoLink">
                    Online-Shop <i className="fas fa-mobile-alt logo-icon"></i>
                </Link>
            </div>
            <ul className="menu">
                <li className="menu-item"><Link to="/" className="LinkSetting">Home</Link></li>
                <li className="menu-item"><Link to="/catalog" className="LinkSetting">Catalog</Link></li>
                <li className="menu-item"><Link to="/about" className="LinkSetting">About</Link></li>
            </ul>
            <div className={`cart-icon ${cartClicked ? 'clicked' : ''}`} onClick={handleCartClick}>
                <Link to="/cart" className="cart-link">
                    <FaShoppingCart />
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
