const gameboard = document.querySelector("#gameboard")
const playerDisplay = document.querySelector("#player")
const infoDisplay = document.querySelector("#info-display")

const WIDTH = 8

let playerTurn = 'white'
playerDisplay.textContent = playerTurn

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
]

function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.setAttribute('square-id', i)
        square.innerHTML = startPiece

        const row = Math.floor((63 - i) / 8) + 1
        if (row % 2 === 0) {
            square.classList.add((i % 2 === 0) ? 'beige' : 'brown')
        }
        else {
            square.classList.add((i % 2 === 0) ? 'brown' : 'beige')
        }

        if (startPiece != '') {
            square.firstElementChild.setAttribute('draggable', true)
            if (i <= 15) {
                square.firstElementChild.firstElementChild.classList.add('black')
            }
            if (i >= 48) {
                square.firstElementChild.firstElementChild.classList.add('white')
            }
        }

        gameboard.append(square)
    })
}

createBoard()

const allSquares = document.querySelectorAll("#gameboard .square")
console.log(allSquares)
allSquares.forEach((square) => {
    console.log('addListener')
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)
})

let startPos;
let dragElement;

function dragStart(e) {
    //console.log('Drag Event')
    startPos = e.target.parentNode.getAttribute('square-id')
    dragElement = e.target
}

function dragOver(e) {
    e.preventDefault()
}

function getOpponent(player) {
    return player === 'white' ? 'black' : 'white'
}

function swapTurns(){
    playerTurn = getOpponent(playerTurn)
    playerDisplay.textContent = playerTurn
}

function dragDrop(e) {
    e.stopPropagation()

    const rightPlayer = dragElement.firstElementChild.classList.contains(playerTurn)
    const taken = e.target.classList.contains('piece')

    //console.log(rightPlayer)
    //console.log(taken)

    if (rightPlayer) {
        if (taken) {
            const byOpponent = e.target.firstElementChild.classList.contains(getOpponent(playerTurn))
            if (byOpponent) {
                e.target.parentNode.append(dragElement)
                e.target.remove()
                swapTurns()
            }
        }
        else{
            e.target.append(dragElement)
            swapTurns()
        }
    }

}