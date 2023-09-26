import { MEnterBoxEvent, MOutBoxEvent, ClkBoxEvent } from "./events.js";

// the following function will add the required events to the gameBoxes:

const GameBoxesEvtAdder = (gameBoxes, getTurnOf, SetTurnOf, root) => {
    gameBoxes.forEach(e => {
        
        e.addEventListener('mouseenter', evt => MEnterBoxEvent(evt, getTurnOf));

        e.addEventListener('mouseout', evt => MOutBoxEvent(evt, getTurnOf));

        e.addEventListener('click',evt => ClkBoxEvent(evt, getTurnOf, SetTurnOf, root));

    })
}

export { GameBoxesEvtAdder }
