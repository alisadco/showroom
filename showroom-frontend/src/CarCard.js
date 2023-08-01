import React from 'react';

function CarCard({ car }) {
    const { make, model, price, imageUrl } = car;

    return (
        <div className="car-card">
            <img src={imageUrl} alt={make + ' ' + model} />
            <h2>{make} {model}</h2>
            <p>{price}</p>
            {/* Add more car details here */}
        </div>
    );
}