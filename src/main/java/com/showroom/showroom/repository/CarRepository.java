package com.showroom.showroom.repository;

public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByYearAndMileageAndFeatureAndOptions(int year, int mileage, String feature, String options);
    // Other custom queries
}