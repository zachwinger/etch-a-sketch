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

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let sizeString = prompt("Enter a Size");
    size = parseInt(sizeString);
    makeGrid(size);
})

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
}