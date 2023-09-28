import { MEnterBoxEvent, MOutBoxEvent, ClkBoxEvent, ResetGame, ToggleAI } from "./events.js";

// the following function will add the required events to the gameBoxes:

let bundeledCBE; // bahar define isliye kya h kyuki dono functions mei use krna h.

const GameBoxesEvtAdder = (gameBoxes, getTurnOf, SetTurnOf, root, indicator, getPlayingWithAI) => {
    
    bundeledCBE = evt => ClkBoxEvent(evt, getTurnOf, SetTurnOf, root, gameBoxes, indicator, getPlayingWithAI);
    
    let bundeledMEBE = evt => MEnterBoxEvent(evt, getTurnOf); // bundle isiliye kra taki baad mei removeEventListener ka use kr saken.

    let bundeledMOBE =  evt => MOutBoxEvent(evt, getTurnOf);
   
    gameBoxes.forEach(e => {
        
        e.addEventListener('mouseenter',bundeledMEBE);

        e.addEventListener('mouseout', bundeledMOBE);

        e.addEventListener('click',bundeledCBE);

    })
}

const resetBtnEvtAdder = (resetBtn, SetTurnOf, gameBoxes, root, getTurnOf, sticks, getPlayingWithAI) => {
    resetBtn.addEventListener('click', e => ResetGame(e, SetTurnOf, gameBoxes, root, getTurnOf, bundeledCBE, sticks, getPlayingWithAI))
}

const playWithAIEvtAdder = (AI_btn, getPlayingWithAI, setPlayingWithAI, getTurnOf, gameBoxes) => {
    AI_btn.addEventListener('click', e =>  ToggleAI(e, getPlayingWithAI, setPlayingWithAI, getTurnOf, gameBoxes) )
}

export { GameBoxesEvtAdder, resetBtnEvtAdder, playWithAIEvtAdder }
