function clearGrid(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function shadeBoxesNew() {
    boxes.forEach(box => {
      box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = `${colour}`;
      })
    })
  }