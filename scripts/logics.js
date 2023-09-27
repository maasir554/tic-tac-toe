const WinCheck = (gameBoxes) => {
    let content = (gameBox) => {
        if ( gameBox && gameBox.dataset.content) return gameBox.dataset.content;
        else return null;
    }
    
    // horizontal:
    
    for (let i = 0; i <= 6; i += 3 ){
        
        if
        (
            content(gameBoxes[i]) != null &&
            content(gameBoxes[i]) == content(gameBoxes[i+1]) && content(gameBoxes[i+1]) == content(gameBoxes[i+2])
        )
        {
            console.log("Koi jeet gaya!");
            break;
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
            console.log("Koi jeet gaya!");
            break;
        }
    }

    // diagonals:

    [0,2].forEach(n => {
        if ( 
            content(gameBoxes[n]) != null &&

            content(gameBoxes[n]) == content(gameBoxes[4] ) && 

            content(gameBoxes[n]) == content(gameBoxes[ 8 - n] )
        ){
            console.log("diagonally jeeta Re!");
            
            console.log(n);
            
            console.log(content(gameBoxes[n]));
            
            console.log(content(gameBoxes[4]));
            
            console.log(content(gameBoxes[8-n]));
        }
    })
}

export { WinCheck }
