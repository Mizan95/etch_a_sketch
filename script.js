const grid = document.querySelector('.grid');
const boxes = document.querySelectorAll('.box');
let input = document.querySelector('#myRange');
// let number = parseInt(input);

function generateGrid(number) {
    for (let i = 1; i <= number * number; i++) {
        const div = document.createElement('div');
        div.classList.add("box");
        div.style.height = `${grid.clientHeight / number}px`;
        div.style.width = `${grid.clientWidth / number}px`;
    
        grid.appendChild(div);
    }
}

console.log(input);

// generateGrid(number);




