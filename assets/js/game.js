class Game {
    constructor() {
        this.fps = 30;
        this.board = new Board();
        this.currentPiece = new Piece(this);
        this.addEventListeners();
    }

    run() {
        setInterval(() => {
            this.draw();
        }, 1000 / this.fps);
    }

    restart() {
        this.board.emptyBoard();
        this.currentPiece.reset();
    }

    draw() {
        drawRect(_ctx1, '#262626', [0, 0, _$canvas1.width, _$canvas1.height]);
        this.currentPiece.draw();
        this.board.draw();
    }

    handleKeyPress(key) {
        if (key === 'ArrowUp') {
            this.currentPiece.rotate();
        } else if (key === 'ArrowLeft') {
            this.currentPiece.moveLeft();
        } else if (key === 'ArrowRight') {
            this.currentPiece.moveRight();
        } else if (key === 'ArrowDown') {
            this.currentPiece.teleportDown();
        } else if (key === 'r') {
            this.restart();
        }
    }

    addEventListeners() {
        document.addEventListener('keydown', (e) => this.handleKeyPress(e.key));
    }
}