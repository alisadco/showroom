package com.showroom.showroom.repository;

public interface DealershipRepository extends JpaRepository<Dealership, Integer> {
    Optional<Dealership> findByAddress(String address);
}
