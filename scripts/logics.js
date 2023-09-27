const WinCheck = (gameBoxes) => {
 
    let content = (gameBox) => {
        if ( gameBox && gameBox.dataset.content) return gameBox.dataset.content;
        else return null;
    }
    
    let lineToShow;
    
    // horizontal:
    
    for (let i = 0; i <= 6; i += 3 ){
        
        if
        (
            content(gameBoxes[i]) != null &&
            content(gameBoxes[i]) == content(gameBoxes[i+1]) && content(gameBoxes[i+1]) == content(gameBoxes[i+2])
        )
        {
            lineToShow = document.querySelector(`#st-hz${(i+3)/3}`)
            console.log((i+3)/3);
            lineToShow.style.display = 'block';

            return true;
        }

    }

    // vertical: 

    for (let i = 0; i <= 2; i++) {
        if
        (
            content(gameBoxes[i]) != null &&
            content(gameBoxes[i]) == content(gameBoxes[i+3]) && content(gameBoxes[i+3]) == content(gameBoxes[i+6])
        )
        {
            lineToShow = document.querySelector(`#st-vt${i+1}`)
            lineToShow.style.display = 'block';
            return true;
        }
    }

    // diagonals:

    [0,2].forEach(n => {
        if ( 
            content(gameBoxes[n]) != null &&

            content(gameBoxes[n]) == content(gameBoxes[4] ) && 

            content(gameBoxes[n]) == content(gameBoxes[ 8 - n] )
        ){
            lineToShow = document.querySelector(`#st-d${(n+2)/2}`)
            lineToShow.style.display = 'block';
            console.log("won!");
            return true
        }
    })
}

export { WinCheck }
