"use strict";

function Road() {
    this.start = {x: 0, y: 0};
    this.end = {x: 0, y: 0};
    this.maximalSpeed = 0; // unlimited

    var road = this;

    /**
     * Return position
     * @param position number between 0.0 and 1.0
     * @returns {{x: number, y:number}}
     */
    this.getPosition = function (position) {
        return {
            x: road.start.x * (1 - position) + (road.end.x * position),
            y: road.start.y * (1 - position) + (road.end.y * position)
        }
    };

    this.draw = function (context) {
        context.beginPath();
        context.moveTo(this.start.x, this.start.y);
        context.lineTo(this.end.x, this.end.y);
        context.stroke();
    };
}