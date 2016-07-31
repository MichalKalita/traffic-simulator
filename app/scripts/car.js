"use strict";

function Car() {

    this.road = null;
    this.position = 0;

    this.width = 1.8; // meters
    this.length = 4.5; // meters

    this.style = null;

    var car = this;

    this.draw = function (context) {
        car.position += 0.005;

        var width = Calc.px(car.width), length = Calc.px(car.length);

        if (car.position > 1) {
            car.position = 0.0;
        }

        var position = car.road.getPosition(car.position);

        context.fillStyle = car.style;
        context.fillRect(
            position.x - width / 2,
            position.y - length / 2,
            width,
            length
        );
    }
}