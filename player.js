const gameboard = (function () {
    let board = [1,2,3,4,5,6,7,8,9];
    let xboard = []
    let oboard = [];
    let xsum = [];
    let osum = [];
    const x  = (v) => {
        xboard.push(board[v]);
        console.log("x moved: " + board[v])
        if (xboard.length > 2) {
            for (let i = 0; i < xboard.length-2; i++) {
                for (let j = i+1; j < xboard.length-1; j++) {
                    for (let k = j+1; k < xboard.length; k++) {
                        xsum = [xboard[i], xboard[j], xboard[k]];
                        xsum.sort(function(a, b){return a - b})
                        if (2*xsum[1] == xsum[0] + xsum[2]) {
                            console.log(xsum)
                        }
                    }   
                }
            }
        }
    }
    const o = (v) => {
        oboard.push(board[v]);
        console.log("o moved: " + board[v])
        if (oboard.length > 2) {
            for (let i = 0; i < oboard.length-2; i++) {
                for (let j = i+1; j < oboard.length-1; j++) {
                    for (let k = j+1; k < oboard.length; k++) {
                        osum = oboard[i] + oboard[j] + oboard[k];
                        if(osum == 12) {
                            console.log("o won");
                        }
                    }   
                }
            }
        }
    }
    return {x, o, board, xboard, oboard, xsum, osum}
})();

gameboard.x(2);
gameboard.o(3);
gameboard.x(5);
gameboard.o(8);
gameboard.x(0);
gameboard.o(1);
gameboard.x(4);
gameboard.o(7);
gameboard.x(6);

