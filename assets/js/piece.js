class Piece {

    static pieceCount = 7;
    static rotationCount = 4;
    type;
    shape;
    rotation;
    pos;

    constructor() {
        this.reset();
    }

    reset() {
        this.type = Math.floor(Math.random() * Piece.pieceCount);
        this.shape = this.getShape();
        this.rotation = 0;
        this.pos = {col: 4, row: 0};
    }

    rotate() {
        this.rotation = (this.rotation + 1) % Piece.rotationCount;
    }

    draw() {
        // draw de ting
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