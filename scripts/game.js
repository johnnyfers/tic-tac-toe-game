let board = ['', '', '', '', '', '', '', '', ''];

let playerTime = 0;

let symbols = ['playerX', 'playerO'];

let gameOver = false;


function handleMove(position) {

    if (gameOver) {
        return;
    }


    if (board[position] == '') {
        board[position] = symbols[playerTime];

        gameOver = matchEND();

        if (gameOver == false) {
            if (playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    }
    return gameOver;
}

function matchEND() {
    let winState = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winState.length; i++) {
        let sequence = winState[i];

        let p1 = sequence[0];
        let p2 = sequence[1];
        let p3 = sequence[2];

        if (board[p1] == board[p2] &&
            board[p1] != '' &&
            board[p1] == board[p3]) {

            return true;


        }

    }
    return false;
}