import { getFillData, getIdxData, setFillData, showStick, reqBoxClass, updateShadowColor } from "./utils.js";
import { WinCheck } from "./logics.js";

// for each box, hover event: 
const MEnterBoxEvent = (event,getTurnOf) => {
    let box = event.target;

    if (!getFillData(box)){
        box.classList = ['play-box'] // bug fix!
        
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

const ClkBoxEvent = (event, getTurnOf, setTurnOf, root, gameBoxes, indicator) => {
    let box = event.target;

    if (!getFillData(box)) {
        setFillData(box, true);
        
        box.style.cursor = 'default'

        box.style.opacity = '1';

        box.style.animation = 'st-anim 0.5s ease-out 1'

        box.innerText = getTurnOf(); // bug fixed

        updateShadowColor(root, getTurnOf() )

        box.dataset.content = getTurnOf()

        getTurnOf() === 'X' ? setTurnOf('O') : setTurnOf('X');
        
        box.removeEventListener('mouseenter', evt => MEnterBoxEvent(evt, getTurnOf))
        box.removeEventListener('mouseout', evt => MOutBoxEvent(evt, getTurnOf))

        // for indicator functionality: 

        let indicatorBox = (box.parentElement.parentElement).children[0];

        indicatorMover(indicatorBox, getTurnOf, root)

        // for checking if someone has won:

        WinCheck(gameBoxes, getTurnOf, indicator)

    }
}

// Function for resetting the game:
const ResetGame = (event, setTurnOf, gameBoxes, root, getTurnOf, bundeledCBE, sticks) => {
    setTurnOf('X');

    gameBoxes.forEach( box => {
        
        setFillData(box, false);
        
        box.dataset.content = '';

        box.style.animation = 'fade-out 0.5s ease-out 1'

        box.removeEventListener('click',bundeledCBE);

        sticks.forEach( stick => stick.style.display = 'none' )
    
        box.style.backgroundColor = 'rgb(251, 251, 251)'

        setTimeout(() => {
            box.innerText = '';
            box.addEventListener('click',bundeledCBE); 
            // box.classList = ['play-box'] // transferred upwards
            
        }, 250);

        setTimeout(() => { box.style.animation = 'none' }, 500);


        box.style.cursor = 'pointer'

        let indicatorBox = (box.parentElement.parentElement).children[0];

        indicatorBox.innerHTML = 
        `Turn of:  
        <div id="actp-encloser">
            <span class="active-player">X</span>
            <span class="">O</span>
            <div class="actp-slider"></div>
        </div>`
        
        indicatorBox.style.color = 'rgb(66, 66, 66)';

        indicatorMover(indicatorBox, getTurnOf, root)

        
    });

}

const indicatorMover = (indicatorBox, getTurnOf, root) => {
    let slider = indicatorBox.children[0].children[2];

   if( getTurnOf() === 'X') {
        root.style.setProperty('--active-bg-color', 'rgb(97, 134, 222)')
        slider.style.left = '0'}
    else {
        root.style.setProperty('--active-bg-color', 'rgb(239, 106, 106)')
        slider.style.left = '100px';
    }
}

export {MEnterBoxEvent, MOutBoxEvent, ClkBoxEvent, ResetGame}
