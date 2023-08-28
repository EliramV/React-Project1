// Home.js
import React from 'react';
import '../HomePage.css';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <div className="title"><br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="header">Welcome to Online Shop</div>
                <div className="subheader">Your destination for the latest smartphones!</div>
                <br/>
                <Link className="shop-button" to="/catalog">Shop Now</Link>
            </div>
            <div className="background-image"></div>
            <div className="cards-container">
                <Link to="/catalog" className="card">
                    <img src="/images/logo.png" alt="Phone Model 1"/>
                    <h2>Phone Model 1</h2>
                    <p>Powerful features and elegant design.</p>
                </Link>
                <Link to="/catalog" className="card">
                    <img src="/images/logo.png" alt="Phone Model 2"/>
                    <h2>Phone Model 2</h2>
                    <p>Capture your moments with the best camera.</p>
                </Link>
                <Link to="/catalog" className="card">
                    <img src="/images/logo.png" alt="Phone Model 2"/>
                    <h2>Phone Model 3</h2>
                    <p>Capture your moments with the best camera.</p>
                </Link>
                {/* Add more cards */}
            </div>
            <div className="h1-products"><h1>Our Products</h1></div>
        </div>
    );
}

export default Home;
