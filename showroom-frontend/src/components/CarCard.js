import React from 'react';

const CarCard = ({ car }) => {
    return (
        <div className="car-card">
            <img src={car.image} alt={`${car.make} ${car.model}`} />
            <h3>{car.make} {car.model}</h3>
            <p>Price: ${car.price}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default CarCard;