"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    initiateCanvas();
    startGame();
}

function initiateCanvas() {
    _$canvas = document.querySelector('canvas');
    _ctx = _$canvas.getContext('2d');
    _$canvas.width = 450;
    _$canvas.height = 900;
}

function startGame() {
    const game = new Game();
    game.run();
}
