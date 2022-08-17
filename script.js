"use strict";

const x_class = 'x';
const o_class = 'circle';
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const restartBtn = document.getElementById('restartButton');
let circleTurn;

startGame();

restartBtn.addEventListener('click', startGame);

function startGame() {
  circleTurn = false;
  cellElements.forEach(cell => {
    cell.classList.remove(x_class);
    cell.classList.remove(o_class);
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, {once: true})
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove('show');
}

function handleClick(e) {
  // check for draw
  const cell = e.target;
  const currentClass = circleTurn ? o_class : x_class;
  // placeMark
  placeMark(cell, currentClass)
  // check for win
  if(checkWin(currentClass)) {
    endGame(false)
  } else if(isDraw()) {
    endGame(true)
  } else {
    // switch turns
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
  }
  winningMessageElement.classList.add('show');
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(x_class) || cell.classList.contains(o_class)
   })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

function swapTurns() {
  circleTurn = !circleTurn
}

function setBoardHoverClass() {
  board.classList.remove(x_class)
  board.classList.remove(o_class)
  if(circleTurn) {
    board.classList.add(o_class)
  } else {
    board.classList.add(x_class)
  }
}

function checkWin(currentClass) {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}