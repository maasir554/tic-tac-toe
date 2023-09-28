import { getFillData, setFillData, reqBoxClass, updateShadowColor, RandomMove } from "./utils.js";
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

const ClkBoxEvent = (event, getTurnOf, setTurnOf, root, gameBoxes, indicator, getPlayingWithAI) => {
    let box = event.target;

    if (!getFillData(box)) {
        setFillData(box, true);
        
        box.style.cursor = 'default'

        box.style.opacity = '1';

        box.style.animation = 'st-anim 0.5s ease-out 1'

        box.innerText = getTurnOf(); // bug fixed

        // for AI :
        box.classList = ['play-box'] 
        box.classList.add( reqBoxClass( getTurnOf() ) ); 

        updateShadowColor(root, getTurnOf() )

        box.dataset.content = getTurnOf()

        getTurnOf() === 'X' ? setTurnOf('O') : setTurnOf('X');
        
        box.removeEventListener('mouseenter', evt => MEnterBoxEvent(evt, getTurnOf))
        box.removeEventListener('mouseout', evt => MOutBoxEvent(evt, getTurnOf))

        // for indicator functionality: 

        let indicatorBox = (box.parentElement.parentElement).children[0];

        indicatorMover(indicatorBox, getTurnOf, root)

        // for checking if someone has won and performing the game finish operations:

        WinCheck(gameBoxes, getTurnOf, indicator)

        // AI functionality:
        if(getPlayingWithAI() && getTurnOf() == getIsAI()){   
            RandomMove(gameBoxes);
        }

        // fixing small bug:
        gameBoxes.forEach(box => !getFillData(box) ? box.innerText = '' : null);

    }
    
}

// Function for resetting the game:
const ResetGame = (event, setTurnOf, gameBoxes, root, getTurnOf, bundeledCBE, sticks, getPlayingWithAI) => {
    setTurnOf('X');

    gameBoxes.forEach( box => {
        
        setFillData(box, false);
        
        box.dataset.content = '';

        box.style.animation = 'fade-out 0.5s ease-out 1'

        box.removeEventListener('click',bundeledCBE);
    
        box.style.backgroundColor = 'rgb(251, 251, 251)'

        setTimeout(() => {
            box.innerText = '';
            box.addEventListener('click',bundeledCBE); 
            // box.classList = ['play-box'] // transferred upwards
            
        }, 250);

        setTimeout(() => { box.style.animation = 'none' }, 500);


        box.style.cursor = 'pointer'
    });

    sticks.forEach( stick => stick.style.display = 'none' )

    let indicatorBox = (gameBoxes[0].parentElement.parentElement).children[0];

    indicatorBox.innerHTML = 
    `Turn of:  
    <div id="actp-encloser">
        <span class="active-player">X</span>
        <span class="">O</span>
        <div class="actp-slider"></div>
    </div>`
    
    indicatorBox.style.color = 'rgb(66, 66, 66)';

    indicatorMover(indicatorBox, getTurnOf, root); 

    // if AI is on:
    ( getPlayingWithAI() && getIsAI() == 'X') ? setTimeout( () => RandomMove(gameBoxes), 500) : null;
    

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

const ToggleAI = (evt, getPlayingWithAI, setPlayingWithAI, getTurnOf, gameBoxes) => {
    let AI_btn = evt.target;
    
    // setting the player which will be ai:
    
    setIsAI( getTurnOf() ) 

    if(getPlayingWithAI()) {
        setPlayingWithAI(false);
        // styling:
        AI_btn.style.backgroundColor = 'rgb(234, 234, 234)'
        AI_btn.style.setProperty('--fg-color','rgb(170, 170, 170)')
        AI_btn.style.setProperty('--border-color', 'rgb(170,170,170)')
        AI_btn.style.setProperty('--hover-color', 'gray')
        AI_btn.innerText = 'Play with AI'
    }

    else{
        setPlayingWithAI(true);
        //styling:
        AI_btn.style.backgroundColor = getIsAI() == 'O' ? 'rgb(239, 106, 106)' : 'rgb(97, 134, 222)';
        
        AI_btn.style.setProperty('--fg-color', 'rgb(230,230,230)')
        
        AI_btn.style.setProperty('--border-color',getIsAI() == 'O' ? 'rgb(149, 74, 74)' : 'rgb(63, 87, 141)')
        
        AI_btn.style.setProperty('--hover-color', getIsAI() == 'O' ? 'rgb(149, 67, 67)' : 'rgb(203, 215, 240)')
        
        AI_btn.innerText = 'Disable AI'
    }
    
    // - - -
    
    
    
    // first step of AI after clicking: 

    getPlayingWithAI() ? RandomMove(gameBoxes) : null;
}

//---------------------------------------------
let isAI = '' // either 'X' or 'O'

const getIsAI = () => { return isAI };

const setIsAI = (value) => { isAI = value }
//---------------------------------------------


export {MEnterBoxEvent, MOutBoxEvent, ClkBoxEvent, ResetGame, ToggleAI}
