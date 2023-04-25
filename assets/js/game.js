class Game {
    constructor() {
        this.fps = 30;
        this.board = new Board();
    }

    run() {
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / this.fps);
    }

    draw() {
        drawRect('black', [0, 0, _$canvas.width, _$canvas.height]);
    }

    update() {

    }
}