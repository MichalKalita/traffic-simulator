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

    this.showGrid = true;
    this.drawGrid = function () {
        var widthM = Calc.m(engine.width), heightM = Calc.m(engine.height);

        var context = engine.context;

        context.strokeStyle = "#ddd";
        context.lineWidth = 1;

        for (var left = 0; left < widthM; left += 5) {
            context.beginPath();
            context.moveTo(Calc.px(left), 0);
            context.lineTo(Calc.px(left), engine.height);
            context.stroke();
        }

        for (var top = 0; top < heightM; top += 5) {
            context.beginPath();
            context.moveTo(0, Calc.px(top));
            context.lineTo(engine.width, Calc.px(top));
            context.stroke();
        }
    };

    this.draw = function () {
        window.requestAnimationFrame(engine.draw);
        console.log("main draw");
        engine.context.clearRect(0, 0, engine.width, engine.height);

        engine.context.save();

        if (engine.showGrid)
            engine.drawGrid();

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