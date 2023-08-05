import React from 'react';
import Header from './components/Header.js';
import CarList from './components/CarList.js';
import Footer from './components/Footer.js';

function App() {
    return (
        <div className="app">
            <Header />
            <CarList />
            <Footer />
        </div>
    );
}

export default App;