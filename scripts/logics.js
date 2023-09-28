import { finishGame, getFillData } from './utils.js'; 

const WinCheck = (gameBoxes, getTurnOf, indicator) => {
 
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

            finishGame(gameBoxes,getTurnOf,indicator)
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

            finishGame(gameBoxes,getTurnOf,indicator)
            return true;
        }
    }

    // diagonals:

    for (let n of [0,2]) {  // forEach was causing trouble with `return`
        if ( 
            content(gameBoxes[n]) != null &&

            content(gameBoxes[n]) == content(gameBoxes[4] ) && 

            content(gameBoxes[n]) == content(gameBoxes[ 8 - n] )
        ){
            
            lineToShow = document.querySelector(`#st-d${(n+2)/2}`)
            lineToShow.style.display = 'block';

            finishGame(gameBoxes,getTurnOf,indicator)
            return true
        }
    }

    //Tie:

    // the code interpreter will reach here here only if the above blocks return nothing(i.e., no one has one )
    const itsTie = () => {
        let totalBoxesFilled = 0;
        
        gameBoxes.forEach(box => getFillData(box) ? totalBoxesFilled++ : null);
    
        return totalBoxesFilled == 9 ? true : false;
    }

    if ( itsTie(gameBoxes) ) finishGame(gameBoxes,getTurnOf,indicator, itsTie());

    return false;

}

export { WinCheck }

// copyright (c) Mohammad Maasir 2023
// SPDX identifier: MIT License
// 28 Sep 2023 | 00:14
