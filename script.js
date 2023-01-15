// shades boxes on grid

let boxes;

function shadeBoxes() {
  boxes.forEach(box => {
    box.addEventListener("mouseenter", (e) => {
      e.target.classList.add("shaded");
    });
  });
}



function generateGrid(number) {
    for (let i = 1; i <= number ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add("box");
        div.style.height = `${grid.clientHeight / number}px`;
        div.style.width = `${grid.clientWidth / number}px`;
        grid.appendChild(div);
    }
  
  boxes = document.querySelectorAll(".box");
}

function clearGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector('#slider');
const grid = document.querySelector('.grid');

const applyButton = document.querySelector('#applyButton');
const clearButton = document.querySelector('#clearButton');

let sliderValue;

slider.onchange = function() {
    sliderValue = this.value;
}

applyButton.addEventListener('click', () => {
    clearGrid(grid)
    generateGrid(sliderValue);
    shadeBoxes()

});

clearButton.addEventListener('click', () => {
    clearGrid(grid);
})

generateGrid(8);

shadeBoxes();







