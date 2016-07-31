"use strict";

function Car() {

    this.road = null;
    this.position = 0;

    this.width = 1.8; // meters
    this.length = 4.5; // meters
    this.speed = 70; // km per hours

    this.style = null;

    this.lastTime = null;
    var car = this;

    this.draw = function (context, time) {
        if (car.lastTime != null) {
            var deltaTime = (time - car.lastTime) / 1000;
            car.position += (Calc.pxps(car.speed) * deltaTime) / car.road.getLength();
        }

        if (car.position > 1) {
            car.position = 0.0;
        }

        var position = car.road.getPosition(car.position);

        var width = Calc.px(car.width), length = Calc.px(car.length);
        context.fillStyle = car.style;
        context.fillRect(
            position.x - width / 2,
            position.y - length / 2,
            width,
            length
        );
        car.lastTime = time;
    }
}