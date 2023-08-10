import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/inventory">Inventory</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </nav>
            <div className="logo">Car Dealership Logo</div>
        </header>
    );
};

export default Header;