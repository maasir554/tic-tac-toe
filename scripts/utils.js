const getFillData = (elem) => {
    // string to bool is only available through json
    return JSON.parse(elem.dataset.filled)

}

const setFillData = (elem, val) => {
    elem.dataset.filled = val
}

const getIdxData = (elem) => {

    return parseInt(elem.dataset.idx)

}

const showStick = (elem) => {
    elem.style.display = 'flex'
}

const reqBoxClass = (turnOf) => {
    return (turnOf === 'X') ? 'pb-x' : 'pb-o';
}

const updateShadowColor = (root,turnOf) => {
    turnOf === 'X' ? root.style.setProperty('--active-shadow-color','blue') : root.style.setProperty('--active-shadow-color','red'); 
}

export { getFillData, getIdxData, setFillData, showStick, reqBoxClass, updateShadowColor }

// for indicating turn:

