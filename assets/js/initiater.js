"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    initiateCanvas();
    startGame();
}

function initiateCanvas() {
    _$canvas = document.querySelector('canvas');
    _ctx = _$canvas.getContext('2d');
}

function startGame() {
    const game = new Game();
    game.run();
}
