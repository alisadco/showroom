import React from 'react';
import Header from './components/Header';
import CarList from './components/CarList';
import Footer from './components/Footer';

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