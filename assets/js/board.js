class Board {

    static emptyValue = -1;

    constructor(game) {
        this.game = game;
        this.cols = 10;
        this.rows = 20;
        this.cellSize = _$canvas.width / this.cols;
        this.solidBoard = new Array(this.rows).fill(Board.emptyValue).map(() => new Array(this.cols).fill(Board.emptyValue));
    }

    draw() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.drawCell(col, row);
            }
        }
    }

    drawCell(col, row) {
        const part = this.solidBoard[row][col];
        if (part !== Board.emptyValue) {
            const color = Piece.getColorByType(part);
            drawRect(color, [col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize]);
        }
        drawRect('white', [col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize], 1);
    }
}