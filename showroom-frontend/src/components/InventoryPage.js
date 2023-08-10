import React, { useState } from 'react';
import Header from './Header';
import CarList from './CarList';
import SearchBar from './SearchBar';
import carData from './carData'; // You'll need to import your car data

const InventoryPage = () => {
  const [filteredCars, setFilteredCars] = useState(carData);

  const handleSearch = (searchTerm) => {
    const filtered = carData.filter(
      (car) =>
        car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.model.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  return (
    <div>
      <Header />
      <h1>Car Inventory</h1>
      <SearchBar onSearch={handleSearch} />
      <CarList cars={filteredCars} />
    </div>
  );
};

export default InventoryPage;