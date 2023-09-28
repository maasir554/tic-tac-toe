import { GameBoxesEvtAdder, resetBtnEvtAdder, playWithAIEvtAdder } from "./use-event.js";

const root = document.documentElement

let turnOf = 'X'; // or 'O'

const SetTurnOf = XO => { turnOf = XO }
// the following getter function is very important. as it can reference the turnOfvariable globaly.
const getTurnOf = () => { return turnOf }

let playingWithAI = false;

const setPlayingWithAI = value => { playingWithAI = value }

const getPlayingWithAI = () => {return playingWithAI }

let gameBoxes = document.querySelectorAll('.play-box');

let sticks = document.querySelectorAll('.stick');

let resetBtn = document.querySelector('#reset-game')

let indicator = document.querySelector('#indicator')

let AI_btn = document.querySelector('#AI_btn')

GameBoxesEvtAdder(gameBoxes, getTurnOf, SetTurnOf, root, indicator, getPlayingWithAI);

resetBtnEvtAdder(resetBtn, SetTurnOf, gameBoxes, root, getTurnOf, sticks, getPlayingWithAI);

playWithAIEvtAdder(AI_btn, getPlayingWithAI, setPlayingWithAI, getTurnOf, gameBoxes)
