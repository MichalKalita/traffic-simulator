"use strict";

function Car() {

    this.startRoad = null;
    this.road = null;
    this.position = 0;
    this.target = null;

    this.width = 1.8; // meters
    this.length = 4.5; // meters
    this.speed = 70; // km per hours

    this.style = null;

    this.lastTime = null;
    var car = this;

    this.draw = function (context, time, engine) {
        var position, road;

        if (car.road == null)
            car.road = car.startRoad;
        if (car.lastTime != null) {
            var deltaTime = (time - car.lastTime) / 1000;
            car.position += (Calc.pxps(car.speed) * deltaTime) / car.road.getLength();
        }

        if (car.position > 1) { // car is on end of road
            if (car.road.next != null) { // road has continue
                var over = (car.position - 1) * car.road.getLength();
                car.road = car.road.next;
                car.position = over / car.road.getLength();
            } else if (car.target != null) { // car has target
                road = engine.navigator.getNextRoad(car.target);
                if (road != null && road != car.road) {
                    position = (car.position - 1) * car.road.getLength() / road.getLength();
                } else {
                    road = car.startRoad;
                    position = 0.0;
                }
                car.road = road;
                car.position = position;
            } else { // return car to start position
                car.position = 0.0;
                car.road = car.startRoad;
            }
        }

        position = car.road.getPosition(car.position);

        var width = Calc.px(car.width), length = Calc.px(car.length);
        context.translate(position.x, position.y);
        context.rotate(position.angle);
        context.fillStyle = car.style;
        context.fillRect(-length / 2, -width / 2, length, width);
        context.setTransform(1, 0, 0, 1, 0, 0);
        car.lastTime = time;
    }
}