"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    initiateCanvas();
}

function initiateCanvas() {
    _$canvas = document.querySelector('canvas');
    _ctx = _$canvas.getContext('2d');
    _$canvas.width = 450;
    _$canvas.height = 900;
}
