class Game {
    constructor() {
        this.fps = 30;
        this.board = new Board(self);
        this.currentPiece = new Piece();
    }

    run() {
        setInterval(() => {
            this.update();
            this.draw();
        }, 1000 / this.fps);
    }

    draw() {
        drawRect('#262626', [0, 0, _$canvas.width, _$canvas.height]);
        this.currentPiece.draw();
        this.board.draw();
    }

    update() {

    }
}