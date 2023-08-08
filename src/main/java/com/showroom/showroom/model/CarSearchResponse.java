package com.showroom.showroom.model;


import java.util.List;

public class CarSearchResponse {
    private CarSearchSpecification searchSpecification;
    private List<Car> matchingCars;

    public CarSearchResponse() {
    }

    public CarSearchResponse(CarSearchSpecification searchSpecification, List<Car> matchingCars) {
        this.searchSpecification = searchSpecification;
        this.matchingCars = matchingCars;
    }

    public CarSearchSpecification getSearchSpecification() {
        return searchSpecification;
    }

    public void setSearchSpecification(CarSearchSpecification searchSpecification) {
        this.searchSpecification = searchSpecification;
    }

    public List<Car> getMatchingCars() {
        return matchingCars;
    }

    public void setMatchingCars(List<Car> matchingCars) {
        this.matchingCars = matchingCars;
    }
}