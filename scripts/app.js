import { GameBoxesEvtAdder, resetBtnEvtAdder } from "./use-event.js";

const root = document.documentElement

var turnOf = 'X'; // or 'O'

const SetTurnOf = (XO) => {
    turnOf = XO;
}
// the following getter function is very important. as it can reference the turnOfvariable globaly.
const getTurnOf = () => {
    return turnOf;
}

let finished = false;

let gameBoxes = document.querySelectorAll('.play-box');

let sticks = document.querySelectorAll('.stick');

let resetBtn = document.querySelector('#reset-game')

GameBoxesEvtAdder(gameBoxes, getTurnOf, SetTurnOf, root);

resetBtnEvtAdder(resetBtn, SetTurnOf, gameBoxes);
