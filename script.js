const container = document.querySelector('#container');

for (let i = 0; i < (16 * 16); i++){
    const content = document.createElement('div');
    content.classList.add('content');
    //content.textContent = i;
    container.appendChild(content);
}

let size = 16;
let width = 500/size;

container.style.cssText = `grid-template-columns: repeat(${size}, ${width}px); grid-template-rows: repeat(${size}, ${width}px);`