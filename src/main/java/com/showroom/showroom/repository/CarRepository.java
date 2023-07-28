package com.showroom.showroom.repository;

public interface CarRepository extends JpaRepository<Car, Integer> {
    Optional<Car> findByBrand(String brand);
}
