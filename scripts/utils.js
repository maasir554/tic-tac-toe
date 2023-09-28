const getFillData = (elem) => {
    // string to bool is only available through json
    return JSON.parse(elem.dataset.filled)

}

const setFillData = (elem, val) => {
    elem.dataset.filled = val
}

const reqBoxClass = (turnOf) => {
    return (turnOf === 'X') ? 'pb-x' : 'pb-o';
}

const updateShadowColor = (root,turnOf) => {
    turnOf === 'X' ? root.style.setProperty('--active-shadow-color','blue') : root.style.setProperty('--active-shadow-color','red'); 
}

const finishGame = (gameBoxes, getTurnOf, indicator, itsTie = false) => {
    gameBoxes.forEach(box => {
        box.style.animation = 'disabling 0.5s ease-in 1';
        !getFillData(box) ? box.innerText = " " : {};
        box.style.cursor = 'default'
        box.dataset.filled = 'true';
    });
    
    if (itsTie){
        indicator.innerHTML = `Its a Tie!`
    }
    else{
        indicator.innerHTML = `${getTurnOf() == 'X' ? 'O' : 'X'} is the winner!`
        // just for styling:
        document.documentElement.style.setProperty('--winner-color', getTurnOf() == 'X' ? ' rgb(239, 106, 106)' : 'rgb(97, 134, 222)' )
        
        document.querySelector('#indicator').style.animation = 'text-win 0.5s ease-in-out 1';

        setTimeout( () => {
            document.querySelector('#indicator').style.animation = 'none';
            document.querySelector('#indicator').style.color = 'var(--winner-color)';
        } , 450)
    }
    
    return;

}

const RandomMove = (gameBoxes) => {
    let freeIndexes = [] ;
    
    for (let i = 0; i < 9; i++){
        if ( !getFillData(gameBoxes[i])) freeIndexes.push(i);
    }
    if (freeIndexes.length > 0) {
        let randomIndex = Math.floor(Math.random() * (freeIndexes.length) );
        setTimeout(()=>{gameBoxes[ freeIndexes[randomIndex] ].click()},250);
        return;
    }

    return;
}

export { getFillData, setFillData, reqBoxClass, updateShadowColor, finishGame, RandomMove }
