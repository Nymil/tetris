class Board {
    constructor(game) {
        this.game = game;
        this.cols = 10;
        this.rows = 20;
        this.cellSize = _$canvas.width / this.cols;
        this.solidBoard = new Array(this.rows).fill(0).map(() => new Array(this.cols).fill(0));
    }

    draw() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                drawRect('white', [col * this.cellSize, row * this.cellSize, this.cellSize, this.cellSize], 1);
            }
        }
    }
}