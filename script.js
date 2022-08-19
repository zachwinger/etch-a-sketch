const container = document.querySelector('#container');
let size = 16;
let width = 500/size;

const button = document.querySelector('button');

button.addEventListener('click', () => {
    sizeString = prompt("Enter a Size");
    size = parseInt(sizeString);
    console.log(size);
})

for (let i = 0; i < (size * size); i++){
    const content = document.createElement('div');
    content.classList.add('content');
    //content.textContent = i;
    container.appendChild(content);
}

container.style.cssText = `grid-template-columns: repeat(${size}, ${width}px); grid-template-rows: repeat(${size}, ${width}px);`

const squares = document.querySelectorAll('.content');

squares.forEach((square) => {
    square.addEventListener('mouseenter', () => {
        square.classList.add('shading');
    });
});
