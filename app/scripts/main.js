"use strict";

function run() {
    var canvas = document.getElementById("main-canvas");
    var engine = new Engine(canvas);

    var road = new Road();
    road.start = {x: 10, y: 1};
    road.end = {x: 10, y: 50};

    engine.addRoad(road);

    var car = new Car();
    car.road = road;
    car.style = "red";
    engine.addCar(car);

    car = new Car();
    car.road = road;
    car.style = "green";
    car.position = 1/3;
    engine.addCar(car);

    car = new Car();
    car.road = road;
    car.style = "blue";
    car.position = 2/3;
    engine.addCar(car);

    engine.draw();
}