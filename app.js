const board = ['pink', 'blue', 'green', 'red', 'purple', 'orange'];
const myBoard = [];
const tempBoard = [
    1,1,1,1,1,1,1,1,1,1,
    1,2,3,2,2,2,2,2,2,1,
    1,2,1,1,1,1,1,1,2,1,
    1,2,2,2,2,2,2,2,2,1,
    1,2,1,1,1,1,1,1,2,1,
    1,2,2,2,2,2,2,2,2,1,
    1,2,1,1,1,1,1,1,2,1,
    1,2,2,2,2,2,2,2,2,1,
    1,2,2,2,2,2,2,2,2,1,
    1,1,1,1,1,1,1,1,1,1
];
const ghosts = [];
const g = {
    x: '', y: '', h: 100, size: 25, ghosts: 6, inplay:false
}

const player = {
    pos: 20, speed: 4, cool: 0, pause:false
}

document.addEventListener('DOMContentLoaded', () => {
    g.grid = document.querySelector('.grid'); // gameBoard
    g.pacman = document.querySelector('.pacman'); // pac-man
    g.eye = document.querySelector('.eye'); // reposition pac-man's eye while moving
    g.mouth = document.querySelector('.mouth'); // to make mouth wide/narrow
    g.ghost = document.querySelector('.ghost'); // to duplicate ghost
    g.ghost.style.display = 'none'; // hides ghost from the page
    createGame(); // create game board
    console.log(g);
})

function createGame () {
    tempBoard.forEach((cell) => {
        console.log(cell);
        createSquare(val);
    })
    for(let i = 0; i < g.size; i++){
        g.x += `${g.h}px`; //cell grid height
    }
    g.grid.style.gridTemplateColumns = g.x;
    g.grid.style.gridTemplateRows = g.x;
}

function createSquare(val) {
    const div = document.createElement('div');
    div.classList.add('box');
    if (val == 1) { div.classList.add('wall');} //add wall to element
    if (val == 2) { 
        const dot = document.createElement('div');        
        dot.classList.add('dot');
        div.append(dot);
    } //add dot
    if (val == 3) { 
        const dot = document.createElement('div');        
        dot.classList.add('superdot');
        div.append(dot);
    } //add superdot

    g.grid.append(div);
    myBoard.push(div);
}