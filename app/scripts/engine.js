"use strict";

// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial
function Engine(canvasElement) {
    console.log(canvasElement);

    if (canvasElement == null) {
        throw "Cannot run engine, missing canvas element";
    }

    var engine = this;

    this.context = canvasElement.getContext("2d");

    this.resize = function () {
        this.width = canvasElement.width = window.innerWidth;
        this.height = canvasElement.height = window.innerHeight;
    };
    window.addEventListener("resize", this.resize);
    this.resize();

    this.zoom = 10; // px per meter
    this.getSizeInPx = function (meters) {
        return meters * this.zoom;
    };
    this.getSizeInMeters = function (px) {
        return px / this.zoom;
    };

    this.roads = [];
    this.addRoad = function (road) {
        this.roads.push(road);
    };

    /**
     *
     * @type Car
     */
    this.cars = [];
    this.addCar = function (car) {
        this.cars.push(car);
    };

    this.draw = function () {
        window.requestAnimationFrame(engine.draw);
        console.log("main draw");
        engine.context.clearRect(0, 0, engine.width, engine.height);

        engine.context.save();
        engine.roads.forEach(function (road) {
            road.draw(engine.context);
            engine.context.restore();
        });

        engine.cars.forEach(function (car) {
            car.draw(engine.context);
            engine.context.restore();
        });
    };
}