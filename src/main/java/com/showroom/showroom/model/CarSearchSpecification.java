package com.showroom.showroom.model;

public class CarSearchSpecification {
    private String make;
    private String model;
    private Integer minYear;
    private Integer maxYear;
    private String color;
    private Integer minMileage;
    private Integer maxMileage;

    // Constructors, getters, setters...

    // Optional: You can create methods to build JPA Specification queries based on the criteria.
    // This example uses Spring Data JPA Specifications.

    // Example method to build a Specification based on the provided criteria
    public Specification<Car> buildSpecification() {
        return (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (make != null) {
                predicates.add(criteriaBuilder.equal(root.get("make"), make));
            }

            if (model != null) {
                predicates.add(criteriaBuilder.equal(root.get("model"), model));
            }

            if (minYear != null) {
                predicates.add(criteriaBuilder.greaterThanOrEqualTo(root.get("year"), minYear));
            }

            if (maxYear != null) {
                predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get("year"), maxYear));
            }

            // Similar logic for other criteria...

            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
        };
    }
}
