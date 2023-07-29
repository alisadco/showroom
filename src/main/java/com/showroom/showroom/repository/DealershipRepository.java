package com.showroom.showroom.repository;

public interface DealershipRepository extends JpaRepository<Dealership, Long> {
    List<Dealership> findByZipCode(String zipCode);
    // Other custom queries
}