import { MEnterBoxEvent, MOutBoxEvent, ClkBoxEvent, ResetGame } from "./events.js";

// the following function will add the required events to the gameBoxes:

const GameBoxesEvtAdder = (gameBoxes, getTurnOf, SetTurnOf, root) => {
    gameBoxes.forEach(e => {
        
        e.addEventListener('mouseenter', evt => MEnterBoxEvent(evt, getTurnOf));

        e.addEventListener('mouseout', evt => MOutBoxEvent(evt, getTurnOf));

        e.addEventListener('click',evt => ClkBoxEvent(evt, getTurnOf, SetTurnOf, root));

    })
}

const resetBtnEvtAdder = (resetBtn, SetTurnOf, gameBoxes, root, getTurnOf) => {
    resetBtn.addEventListener('click', e => ResetGame(e, SetTurnOf, gameBoxes, root, getTurnOf))
}

export { GameBoxesEvtAdder, resetBtnEvtAdder }
