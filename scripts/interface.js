document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

})


function handleClick(event) {
    let btn = document.getElementsByTagName('button')[0];

    let square = event.target;
    let position = square.id;

    if (handleMove(position) == true) {

        updateSquare();
        btn.style.display = 'inline-block';

        setTimeout(() => {
            alert('Fim de jogo,   jogador ' + (playerTime + 1) + ' foi campeão');
        }, 100)
    }

    updateSquare();


}

function updateSquare() {
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];


        if (symbol != '') {
            square.innerHTML = `<div class="${symbol}"></div>`
        }
    })

}