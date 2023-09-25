import { getFillData, getIdxData, setFillData, showStick, reqBoxClass, updateShadowColor } from "./utils.js";

// for each box, hover event: 
const MEnterBoxEvent = (event,turnOf) => {
    let box = event.target;

    if (!getFillData(box)){
        box.classList.add(reqBoxClass(turnOf)); 

        box.style.opacity = '0.5'

        box.innerText = turnOf;
    }
    
}

const MOutBoxEvent = (event,turnOf) => {
    let box = event.target;
    // first, make sure that the box hasn't registered any value.
    if (!getFillData(box)){
        box.classList.remove(reqBoxClass(turnOf)); 

        box.style.opacity = '1';

        box.innerText = ''; 
    }
    
}

// Click handeler:

const ClkBoxEvent = (event, turnOf, setTurnOf, root) => {
    let box = event.target;

    if (!getFillData(box)) {
        setFillData(box, true);
        
        box.style.cursor = 'default'

        box.style.opacity = '1';

        box.style.animation = 'st-anim 0.5s ease-out 1'

        updateShadowColor(root, turnOf)

        box.dataset.content = turnOf

        turnOf === 'X' ? setTurnOf('O') : setTurnOf('X');
        
    }
}


export {MEnterBoxEvent, MOutBoxEvent, ClkBoxEvent}
