const grid = document.querySelector('.grid');
let input = prompt("Enter a number");
let number = parseInt(input);


for (let i = 1; i <= number * number; i++) {
    const div = document.createElement('div');
    div.style.height = `${grid.clientHeight / number}px`;
    div.style.width = `${grid.clientWidth / number}px`;

    grid.appendChild(div);
}