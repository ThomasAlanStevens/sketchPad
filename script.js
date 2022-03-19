let gridSize = prompt('Select how big a # X # grid will be.')
let sizeOfPanels = 100/gridSize
let flexBasisPercent = `${sizeOfPanels}%`
const gridContainer = document.querySelector('.container')
const resetButton = document.querySelector('button')
resetButton.addEventListener('click', reset)


function promptUser(){
    gridSize = prompt('Select how big a # X # grid will be.')
    sizeOfPanels = 100/gridSize
    flexBasisPercent = `${sizeOfPanels}%`
}

function addPanels(){
    for(let i = 0; i < (gridSize * gridSize); i++){
    const panel = document.createElement('div')
    panel.style.flexBasis = flexBasisPercent
    panel.style.height = flexBasisPercent
    gridContainer.appendChild(panel)
    }
}

function addHoverClass(){
    let color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random()})`
    this.style.backgroundColor = color
}

function addEventListenerToPanels(){
    const divs = document.querySelectorAll('div')
    divs.forEach(div => div.addEventListener('mouseenter', addHoverClass))
}

function reset(){
    gridContainer.innerHTML = ''
    promptUser()
    addPanels()
    addEventListenerToPanels()
    addHoverClass()
}

while(gridSize > 100){
    promptUser()
}

addPanels()

addEventListenerToPanels()
