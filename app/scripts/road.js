"use strict";

function Road() {
    this.start = {x: 0, y: 0};
    this.end = {x: 0, y: 0};

    this._length = null;
    this.next = null;

    var road = this;

    /**
     * Return position
     * @param position number between 0.0 and 1.0
     * @returns {{x: number, y:number}}
     */
    this.getPosition = function (position) {
        return {
            x: Calc.px(road.start.x) * (1 - position) + (Calc.px(road.end.x) * position),
            y: Calc.px(road.start.y) * (1 - position) + (Calc.px(road.end.y) * position),
            angle: Math.atan2(road.end.y - road.start.y, road.end.x - road.start.x)
        }
    };

    this.getLength = function () {
        if (road._length == null) {
            road._length = Math.sqrt(
                Math.pow(road.start.x - road.end.x, 2) +
                Math.pow(road.start.y - road.end.y, 2)
            );
        }
        return Calc.px(road._length);
    };

    this.draw = function (context) {
        context.beginPath();
        context.moveTo(Calc.px(this.start.x), Calc.px(this.start.y));
        context.lineTo(Calc.px(this.end.x), Calc.px(this.end.y));
        context.lineWidth = Calc.px(3);
        context.strokeStyle = "#333";
        context.stroke();
    };
}