
// Select grid and buttons
const grid = document.querySelector('#grid');

const applyButton = document.querySelector('#applyButton');
const slider = document.querySelector('#slider');
const clearButton = document.querySelector('#clearButton');

const eraser = document.querySelector('#eraserButton');
const colourPicker = document.querySelector("#colourPicker");
const pen = document.querySelector('#penButton');

let boxes;

// Generate grid of squares on screen
function generateGrid(number) {
    for (let i = 1; i <= number ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add("box");
        div.style.height = `${grid.clientHeight / number}px`;
        div.style.width = `${grid.clientWidth / number}px`;
        div.style.backgroundColor = 'white';
        grid.appendChild(div);
    }
  boxes = document.querySelectorAll(".box");
}


// Remove all squares from grid
function clearGrid(parent) {
  while(parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

// Update slider value when slided
let sliderValue = 10;

slider.onchange = function() {
    sliderValue = this.value;
}

// Update colour from colour picker when selected
let colour = "#4378EA";

colourPicker.addEventListener('change', (e) => {
  colour = e.target.value;
  shadeBoxes(colour);
})

// Shade squares with chosen colour or default colour on mouseover
function shadeBoxes() {
  boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.style.backgroundColor = `${colour}`;
    })
  })
}

// Remove colour from all boxes
function unshadeAllBoxes() {
  boxes.forEach(box => {
    box.style.backgroundColor = '#FFFFFF';
  })
}

// Unshade color from single box on mouseover
function unShadeBox() {
  boxes.forEach( box => {
    box.addEventListener('mouseenter', () => {
    box.style.backgroundColor = '#FFFFFF';
    })
  })
}


// Add functions to buttons
applyButton.addEventListener('click', () => {
    clearGrid(grid)
    generateGrid(sliderValue);
    shadeBoxes()
});

clearButton.addEventListener('click', unshadeAllBoxes)

eraser.addEventListener('click', unShadeBox);

pen.addEventListener('click', shadeBoxes);

generateGrid(10);
shadeBoxes();















