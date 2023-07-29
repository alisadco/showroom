package com.showroom.showroom.model;

@Entity
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int year;
    private int mileage;
    // Other car attributes, getters, and setters
}