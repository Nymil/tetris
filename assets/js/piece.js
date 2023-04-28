class Piece {

    static pieceCount = 7;
    static rotationCount = 4;
    type;
    shapes;
    rotation;
    pos;

    constructor(game) {
        this.game = game;
        this.reset();
    }

    static getColorByType(part) {
        switch (part) {
            case 0:
                return '#a12cdb';
            case 1:
                return '#951bab';
            case 2:
                return '#741bab';
            case 3:
                return '#8332d9';
            case 4:
                return '#b31fd1';
            case 5:
                return '#6700ff';
            case 6:
                return '#b56cd4';
        }
    }

    draw() {
        const shape = this.shapes[this.rotation];
        for (let row = 0; row < shape.length; row++) {
            for (let col = 0; col < shape[0].length; col++) {
                console.log(this.shapes[this.rotation][row][col]);
                if (shape[row][col] === 'x') {
                    const color = Piece.getColorByType(this.type);
                    drawRect(color, [(this.pos.col + col) * this.game.board.cellSize, (this.pos.row + row) * this.game.board.cellSize, this.game.board.cellSize, this.game.board.cellSize]);
                }
            }
        }
    }

    reset() {
        this.type = Math.floor(Math.random() * Piece.pieceCount);
        this.shapes = this.getShape();
        this.rotation = 0;
        this.pos = {col: 4, row: 0};
    }

    rotate() {
        this.rotation = (this.rotation + 1) % Piece.rotationCount;
    }

    getShape() {
        switch (this.type) {
            case 0:
                return [["....",
                         "xxxx",
                         "....",
                         "...."],
                        ["..x.",
                         "..x.",
                         "..x.",
                         "..x."],
                        ["....",
                         "....",
                         "xxxx",
                         "...."],
                        [".x..",
                         ".x..",
                         ".x..",
                         ".x.."]]
            case 1:
                return [["x..",
                         "xxx",
                         "..."],
                        [".xx",
                         ".x.",
                         ".x."],
                        ["...",
                         "xxx",
                         "..x"],
                        [".x.",
                         ".x.",
                         "xx."]]
            case 2:
                return [["..x",
                         "xxx",
                         "..."],
                        [".x.",
                         ".x.",
                         ".xx"],
                        ["...",
                         "xxx",
                         "x.."],
                        ["xx.",
                         ".x.",
                         ".x."]]
            case 3:
                return [["xx",
                         "xx"],
                        ["xx",
                         "xx"],
                        ["xx",
                         "xx"],
                        ["xx",
                         "xx"]]
            case 4:
                return [[".xx",
                         "xx.",
                         "..."],
                        [".x.",
                         ".xx",
                         "..x"],
                        ["...",
                         ".xx",
                         "xx."],
                        ["x..",
                         "xx.",
                         ".x."]]
            case 5:
                return [[".x.",
                         "xxx",
                         "..."],
                        [".x.",
                         ".xx",
                         ".x."],
                        ["...",
                         "xxx",
                         ".x."],
                        [".x.",
                         "xx.",
                         ".x."]]
            case 6:
                return [["xx.",
                         ".xx",
                         "..."],
                        ["..x",
                         ".xx",
                         ".x."],
                        ["...",
                         "xx.",
                         ".xx"],
                        [".x.",
                         "xx.",
                         "x.."]]
        }
    }
}