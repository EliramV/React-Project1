import React, { useState } from 'react';

const Cart = () => {
    // State to manage cart items

    const [cartItems, setCartItems] = useState([]);
    // Function to add an item to the cart

    const addToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeFromCart = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
    };
    // Function to remove an item from the cart

    return (
        <div>
            <h1>Cart</h1>
            <div>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={index}>
                                {item.name} - ${item.price}
                                <button onClick={() => removeFromCart(index)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {/* Implement code to add items to the cart */}
            {/* For example, a button that calls addToCart(item) */}
        </div>
    );
};
export default Cart;
