import React from 'react';
import CarCard from './CarCard';

function CarList() {
    // Assuming you have an array of cars to display
    const cars = [
        { id: 1, make: 'Toyota', model: 'Camry', price: '$25,000', imageUrl: 'path/to/image' },
        { id: 2, make: 'Honda', model: 'Civic', price: '$22,000', imageUrl: 'path/to/image' },
        // Add more cars here...
    ];

    return (
        <div className="car-list">
            {cars.map(car => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    );
}

export default CarList;