import { getFillData, getIdxData, setFillData, showStick, reqBoxClass, updateShadowColor } from "./utils.js";

// for each box, hover event: 
const MEnterBoxEvent = (event,getTurnOf) => {
    let box = event.target;

    if (!getFillData(box)){
        box.classList.add( reqBoxClass( getTurnOf() ) ); 

        box.style.opacity = '0.5'

        box.innerText = getTurnOf();

    }
    
}

const MOutBoxEvent = (event,getTurnOf) => {
    let box = event.target;
    // first, make sure that the box hasn't registered any value.
    if (!getFillData(box)){
        box.classList.remove(reqBoxClass(getTurnOf)); 

        box.style.opacity = '1';

        box.innerText = ''; 
    }
    
}

// Click handeler for gameBox:

const ClkBoxEvent = (event, getTurnOf, setTurnOf, root) => {
    let box = event.target;

    if (!getFillData(box)) {
        setFillData(box, true);
        
        box.style.cursor = 'default'

        box.style.opacity = '1';

        box.style.animation = 'st-anim 0.5s ease-out 1'

        updateShadowColor(root, getTurnOf() )

        box.dataset.content = getTurnOf()

        getTurnOf() === 'X' ? setTurnOf('O') : setTurnOf('X');
        
        box.removeEventListener('mouseenter', evt => MEnterBoxEvent(evt, getTurnOf))
        box.removeEventListener('mouseout', evt => MOutBoxEvent(evt, getTurnOf))

    }
}

// Function for resetting the game:
const ResetGame =  (event, setTurnOf, gameBoxes) => {
    setTurnOf('X');

    gameBoxes.forEach((box) => {
        
        setFillData(box, false);
        
        box.dataset.content = '';

        box.style.animation = 'fade-out 0.5s ease-out 1'

        setTimeout(() => {
            box.innerText = '';
            box.classList = ['play-box']
        }, 250);

        setTimeout(() => { box.style.animation = 'none' }, 500);


        box.style.cursor = 'pointer'

        
    });

}

export {MEnterBoxEvent, MOutBoxEvent, ClkBoxEvent, ResetGame}
