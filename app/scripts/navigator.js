"use strict";

function Navigator(engine) {

    this.getNextRoad = function (targetPosition) {
        var index, len, road;
        for (index = 0, len = engine.roads.length; index < len; ++index) {
            road = engine.roads[index];
            if (road.end.x == targetPosition.x && road.end.y == targetPosition.y) {
                return road;
            }
        }
        return null; // not found
    }
}
