class Game {
    constructor() {
        this.fps = 30;
        this.board = new Board(this);
        this.currentPiece = new Piece(this);
        this.addEventListeners();
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

    handleKeyPress(key) {
        if (key === 'ArrowUp') {
            this.currentPiece.rotate();
        }
    }

    addEventListeners() {
        document.addEventListener('keydown', (e) => this.handleKeyPress(e.key));
    }
}