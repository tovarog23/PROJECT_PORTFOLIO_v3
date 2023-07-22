//FUNCTION TO MAKE THE GRID

function makeGrid(a, b) {
    const container = document.querySelector('#screen');
    let divRow = undefined;

    for (i = 0; a > i; i++) {
        divRow = document.createElement('div')
        container.appendChild(divRow);
    }

    const containers = document.querySelectorAll('#screen div');
    let divColumn = undefined;

    containers.forEach(function (div) {
        for (i = 0; b > i; i++) {
            divColumn = document.createElement('div');
            div.appendChild(divColumn)
        }
    })
}
makeGrid(30, 50);



// TO MAKE THE RANDOM COLORS

  const squares = document.querySelectorAll('#screen div div');

function randomValue() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}

function changeBackground() {
    let opacity = 0;
this.style.backgroundColor = randomColor();
//console.log(randomColor());
}

squares.forEach(function(element) {
    element.addEventListener('mouseover', changeBackground, {once: true});
});





// Start from here!!!

// EVENTS: HOVERING AND CLICKING THE BUTTONS


const container = document.getElementById('container') 
const backgroundDiv = document.createElement('div');
backgroundDiv.setAttribute('id', 'background')
/*Up here it's how I tryed to set a div for a new background
that should appear when you press the change grid button in order to 
darken everything but the popup*/

const btnChangeGrid = document.getElementById('change-grid');
const btnRefresh = document.getElementById('refresh');
const popup = document.querySelector('#popup');
let body = document.getElementsByTagName('body');

btnChangeGrid.addEventListener('mouseenter', function() {this.classList.add('hover-style')});
btnChangeGrid.addEventListener('mouseleave', function() {this.classList.remove('hover-style')});
btnRefresh.addEventListener('mouseenter', function() {this.classList.add('hover-style')});
btnRefresh.addEventListener('mouseleave', function() {this.classList.remove('hover-style')});

btnChangeGrid.addEventListener('mousedown', openPopUp);
btnChangeGrid.addEventListener('mouseup', function() {
  this.classList.remove('click-style');
});
btnRefresh.addEventListener('mousedown', resetBackground);
btnRefresh.addEventListener('mouseup', function() {this.classList.remove('click-style')});

function openPopUp() {
    this.classList.add('click-style');
    popup.classList.add('opened-popup');
    container.appendChild(backgroundDiv); // <--- The new div background 
}

function resetBackground() {
    const squares = document.querySelectorAll('#screen div div');
    squares.forEach(element => element.style.setProperty('background-color', null));
    this.classList.add('click-style');
}

function addBackdrop() {
  document.getElementById('body').classList.add('backdrop');
}