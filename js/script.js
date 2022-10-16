"use strict"

const guessColor = document.querySelector('.guess-color');
const button = document.querySelectorAll('.button');
const items = document.querySelectorAll('.colors__item');
const buttonCreate = document.querySelector('.button-create');

items.forEach(item => {
    item.addEventListener('click', (e) => {
        let backgroundStyle = getComputedStyle(e.target).backgroundColor;
        if (backgroundStyle === guessColor.textContent) {
            alert('plus miska risa')
        } else {
            alert('wrong color, please restart game')
        }
        console.log(backgroundStyle);
    });
});

buttonCreate.addEventListener('click', newColors);

function newColors () {
    let red = null;
    let green = null;
    let blue = null;
    let colors = null

    items.forEach(item => {
        red = Math.floor(Math.random() * 256);
        green = Math.floor(Math.random() * 256);
        blue = Math.floor(Math.random() * 256);

        item.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        colors = getComputedStyle(item).backgroundColor;

        guessColor.textContent = `${colors}`;
    });
}