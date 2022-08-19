let size = 16;
let width = 500/size;

const container = document.querySelector('#container');
for (let i = 0; i < (size * size); i++){
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content);
}

container.style.cssText = `grid-template-columns: repeat(${size}, ${width}px); grid-template-rows: repeat(${size}, ${width}px);`

const squares = document.querySelectorAll('.content');
squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.classList.add('shading');
    });
});

const resizeGrid = document.querySelector('#resizeGrid');
resizeGrid.addEventListener('click', () => {
    let sizeString = prompt("Enter a number to resize the grid");
    size = parseInt(sizeString);
    makeGrid(size);
})

const erase = document.querySelector('#erase');
erase.addEventListener('click', () => {
    squares.forEach((square) => {
        square.classList.remove('shading');
    });
});

function makeGrid(size) {
    let width = 500 / size;

    const list = document.getElementById("container");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    for (let i = 0; i < (size * size); i++){
        const content = document.createElement('div');
        content.classList.add('content');
        content.setAttribute('id', 'content');
        container.appendChild(content);
    }
    container.style.cssText = `grid-template-columns: repeat(${size}, ${width}px); grid-template-rows: repeat(${size}, ${width}px);`

    const squares = document.querySelectorAll('.content');
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            square.classList.add('shading');
        });
    });

    const erase = document.querySelector('#erase');
    erase.addEventListener('click', () => {
        squares.forEach((square) => {
            square.classList.remove('shading');
        });
    });
}