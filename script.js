'use strict';

/*
1. download img for 0 and X
2. define 2 players
3. have 1 btn: 
   a) new game - set initial state
4. a) player 1 clicks the box it gets 0, 
   b) player 2 clicks it should always X then.
   c) have a playing mode to true and false when there is a winner
5. class, style for winner
*/

const cellsArr = document.getElementsByClassName('.cell');
console.log(cellsArr);
const cell0 = document.querySelector('#cell0');
const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');
const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');
const cell6 = document.querySelector('#cell6');
const cell7 = document.querySelector('#cell7');
const cell8 = document.querySelector('#cell8');

cell8.classList.remove('hidden');

let player1, player2;
let playing = true;

// cellsArr.addEventListener('click', function(e) {

// })

// Starting the game
//  if(cell0 === clickFromPlayer 1 ) {
//     show X ;
// } else {
//     show O ;
// }

// Continue playing
// if(cell0 === x) {
//     the next cell should be 0
// }

// Winning conditions:
/*  if(cell0 till cell2 clicked by the same player) {
    the player wins;
} else if (cell3 till cell5 clicked by the same player) {
    player wins;
} else if */

// if(3 cells by hor, vert, diag clicked by the same player) {
//     the same player wins
// } else {
//     nobody wins
// }

