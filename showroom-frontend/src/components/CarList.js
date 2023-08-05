import React from 'react';
import CarCard from './CarCard.js';

function CarList() {
    // Assuming you have an array of cars to display
    const cars = [
        { id: 1, make: 'Toyota', model: 'Camry', price: '$25,000', imageUrl: 'https://www.carscoops.com/wp-content/uploads/2023/07/2024-Toyota-Camry.jpg' },
        { id: 2, make: 'Honda', model: 'Civic', price: '$22,000', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/2017_Honda_Civic_SR_VTEC_1.0_Front.jpg' },
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