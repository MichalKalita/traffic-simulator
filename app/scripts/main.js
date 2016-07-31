"use strict";

function run() {
    var canvas = document.getElementById("main-canvas");
    var engine = new Engine(canvas);

    var road = new Road();
    road.start = {x: engine.width / 2, y: 0};
    road.end = {x: engine.width / 2, y: engine.height};

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