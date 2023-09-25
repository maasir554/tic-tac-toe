import { getFillData, getIdxData, setFillData, showStick } from "./utils.js";

import './events.js'
import { MEnterBoxEvent, MOutBoxEvent, ClkBoxEvent } from "./events.js";

const root = document.documentElement

let turnOf = 'X'; // or 'O'

const SetTurnOf = (XO) => {
    turnOf = XO;
}

let finished = false;

let gameBoxes = document.querySelectorAll('.play-box');

let sticks = document.querySelectorAll('.stick');

// root.style.setProperty('--stick-shadow-color', 'blue')

gameBoxes.forEach(e => {
    e.addEventListener('mouseenter', evt => MEnterBoxEvent(evt, turnOf))
    e.addEventListener('mouseout', evt => MOutBoxEvent(evt, turnOf))
    e.addEventListener('click',evt => ClkBoxEvent(evt, turnOf, SetTurnOf, root))
})

