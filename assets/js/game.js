class Game {
    constructor() {
        this.fps = 30;
        this.reset();
        this.addEventListeners();
    }

    run() {
        setInterval(() => {
            this.draw();
        }, 1000 / this.fps);
    }

    reset() {
        this.board = new Board();
        this.currentPiece = new Piece(this);
    }

    draw() {
        drawRect('#262626', [0, 0, _$canvas.width, _$canvas.height]);
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
            this.reset();
        }
    }

    addEventListeners() {
        document.addEventListener('keydown', (e) => this.handleKeyPress(e.key));
    }
}