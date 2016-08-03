"use strict";

function run() {
    var canvas = document.getElementById("main-canvas");
    var engine = new Engine(canvas);

    var road = new Road();
    road.start = {x: 10, y: 5};
    road.end = {x: 20, y: 50};

    engine.addRoad(road);

    var car = new Car();
    car.startRoad = road;
    car.style = "red";
    engine.addCar(car);

    car = new Car();
    car.startRoad = road;
    car.style = "green";
    car.position = 1/3;
    engine.addCar(car);

    car = new Car();
    car.startRoad = road;
    car.style = "blue";
    car.position = 2/3;
    engine.addCar(car);

    road = new Road();
    road.start = {x: 15, y: 5};
    road.end = {x: 35, y: 5};

    engine.addRoad(road);

    car = new Car();
    car.startRoad = road;
    car.style = "red";
    engine.addCar(car);

    road = new Road();
    road.start = {x: 35, y: 10};
    road.end = {x: 20, y: 30};

    engine.addRoad(road);

    car = new Car();
    car.startRoad = road;
    car.style = "yellow";
    engine.addCar(car);

    // multiple roads
    var roadA = new Road();
    roadA.start = {x: 50, y: 10};
    roadA.end = {x: 60, y: 20};
    engine.addRoad(roadA);

    var roadB = new Road();
    roadB.start = {x: 60, y: 20};
    roadB.end = {x: 60, y: 40};
    roadA.next = roadB;
    engine.addRoad(roadB);

    var roadC = new Road();
    roadC.start = {x: 60, y: 40};
    roadC.end = {x: 50, y: 50};
    roadB.next = roadC;
    engine.addRoad(roadC);

    car = new Car();
    car.startRoad = roadA;
    car.style = "orange";
    engine.addCar(car);

    engine.draw();
}