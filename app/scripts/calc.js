"use strict";

function Calc() {
    // nothing, this class is only static
}

Calc.pixelPerMeter = 10;

Calc.px = function (meters) {
    return meters * Calc.pixelPerMeter;
};

Calc.m = function (px) {
    return px / Calc.pixelPerMeter;
};

Calc.kmph = function (pxps) {
    return pxps * 3.6 / Calc.pixelPerMeter;
};

Calc.pxps = function (kmph) {
    return kmph / 3.6 * Calc.pixelPerMeter;
};
