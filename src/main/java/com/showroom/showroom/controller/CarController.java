package com.showroom.showroom.controller;

@RestController
@RequestMapping("/cars")
public class CarController {
    // Implement CRUD operations for Car entity
}

@RestController
@RequestMapping("/dealerships")
public class DealershipController {
    // Implement CRUD operations for Dealership entity

    @GetMapping("/by-zipcode")
    public List<Dealership> getDealershipsByZipCode(@RequestParam String zipCode) {
        // Implement logic to get dealerships within a certain zip code and radius
    }

    @GetMapping("/by-cars")
    public List<Dealership> getDealershipsByCarMake(@RequestParam String carMake) {
        // Implement logic to get dealerships by the kinds of cars they sell
    }

    @GetMapping("/{dealershipId}/reviews")
    public List<Review> getDealershipReviews(@PathVariable Long dealershipId) {
        // Implement logic to get consumer ratings and reviews of a dealership by its ID
    }
}

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    // Implement CRUD operations for Review entity

    @GetMapping("/by-cars-and-zipcode")
    public List<Review> getReviewsByCarMakeAndZipCode(@RequestParam String carMake, @RequestParam String zipCode) {
        // Implement logic to get consumer ratings and reviews of dealerships by their car makes and the zip code they’re in
    }
}