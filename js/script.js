"use strict"

const guessColor = document.querySelector('.guess-color');
const button = document.querySelectorAll('.button');
const items = document.querySelectorAll('.colors__item');
const buttonCreate = document.querySelector('.button-create');
const buttondiff = document.querySelectorAll('.button-diff');

let togglediff = {easy: true, hard: false,};
let attempts = 3;
let arrColor = [];


items.forEach(item => {
    item.addEventListener('click', (e) => {
        let backgroundStyle = getComputedStyle(e.target).backgroundColor;
        if (backgroundStyle === guessColor.textContent) {
            alert('you win');
            newColors();

        } else {
            alert('wrong color, please restart game');
            attempts--;
        }

        if (attempts == 0) {
            alert('you lose');
            newColors();
        }
    });
});

//кнопки выбора сложностей
buttondiff.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (index == 0) {
            newColorsEasy();

        } else if (index == 1) {
            newColorsHard();
        }
        
    });
})

buttonCreate.addEventListener('click', newColors);


function newColors () {
    if (togglediff.easy == true) {
        newColorsEasy();
    } else if (togglediff.hard == true) {
        newColorsHard();
    }
}

function newColorsHard () {
    togglediff.easy = false;
    togglediff.hard = true;

    items.forEach((item, index) => {
        let red = Math.floor(Math.random() * 40);
        let green = Math.floor(Math.random() * 100);
        let blue = Math.floor(Math.random() * 100);

        item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        let colors = getComputedStyle(item).backgroundColor;

        arrColor.push(colors);
        if (arrColor.length > 6) {
            arrColor.splice(0, 6)
        }

        guessColor.textContent = `${arrRandom(arrColor)}`;
    });
}

function newColorsEasy () {
    togglediff.easy = true;
    togglediff.hard = false;

    items.forEach((item, index) => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        let colors = getComputedStyle(item).backgroundColor;

        arrColor.push(colors);
        if (arrColor.length > 6) {
            arrColor.splice(0, 6)
        }

        guessColor.textContent = `${arrRandom(arrColor)}`;
    });
}

function arrRandom (arr) {
    return arr[Math.floor(Math.random()*arr.length)]
}