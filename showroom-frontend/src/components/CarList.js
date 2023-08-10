import React from 'react';
import CarCard from './CarCard';

const CarList = ({ cars }) => {
    return (
        <div className="car-list">
            {cars.map((car, index) => (
                <CarCard key={index} car={car} />
            ))}
        </div>
    );
};

export default CarList;