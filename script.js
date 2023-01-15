const grid = document.querySelector('.grid');
const slider = document.querySelector('#slider');
const applyButton = document.querySelector('#applyButton');
const clearButton = document.querySelector('#clearButton');

let sliderValue = "";

slider.onchange = function() {
    sliderValue = this.value;
}


function generateGrid(number) {
    for (let i = 1; i <= number ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add("box");
        div.style.height = `${grid.clientHeight / number}px`;
        div.style.width = `${grid.clientWidth / number}px`;
        grid.appendChild(div);
    }
}

function clearGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}






applyButton.addEventListener('click', () => {
    generateGrid(sliderValue);
});

clearButton.addEventListener('click', () => {
    clearGrid(grid);
})





