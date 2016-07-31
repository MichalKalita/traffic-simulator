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
        context.translate(position.x, position.y);
        context.rotate(position.angle);
        context.fillStyle = car.style;
        context.fillRect(-length / 2, -width / 2, length, width);
        context.setTransform(1, 0, 0, 1, 0, 0);
        car.lastTime = time;
    }
}