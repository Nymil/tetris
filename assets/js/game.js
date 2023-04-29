class Game {
    constructor() {
        this.fps = 30;
        this.score = 0;
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
        this.score = 0;
        this.board.emptyBoard();
        this.currentPiece.nextType = Math.floor(Math.random() * Piece.pieceCount);
        this.currentPiece.reset();
    }

    draw() {
        drawRect(_ctx1, '#262626', [0, 0, _$canvas1.width, _$canvas1.height]);
        this.currentPiece.draw();
        this.currentPiece.displayNextPiece();
        this.board.draw();
        this.updateScore();
    }

    updateScore() {
        document.querySelector('p#score').innerText = `score: ${this.score}`;
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