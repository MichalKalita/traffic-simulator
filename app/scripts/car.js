"use strict";

function Car() {

    this.road = null;
    this.position = 0;

    this.width = 20; // px
    this.height = 30; // px

    this.style = null;

    var car = this;

    this.draw = function (context) {
        car.position += 0.005;

        if (car.position > 1) {
            car.position = 0.0;
        }

        var position = car.road.getPosition(car.position);

        context.fillStyle = car.style;
        context.fillRect(
            position.x - car.width / 2,
            position.y - car.height / 2,
            car.width,
            car.height
        );
    }
}