'use strict'

let btnUp = document.querySelector('.arrow-up');
let btnDown = document.querySelector('.arrow-down');
let sidebar = document.querySelector('.sidebar');
let mainSlider = document.querySelector('.main-slider');
let itemLength = document.querySelectorAll('.sidebar__item').length;
let container = document.querySelector('.container');

let activSlide = 0;

sidebar.style.top = `-${(itemLength - 1) * 100}vh`;

btnUp.addEventListener('click', () => {
    clickDots('up')
});

btnDown.addEventListener('click', () => {
    clickDots('down')
});

let heigth = container.clientHeight;
console.log(heigth);
function clickDots(e){
    if(e === 'up'){
        activSlide++
        console.log(activSlide);
        if(activSlide === itemLength){
            activSlide = 0;   
        }
    } else if(e === 'down'){
        activSlide--
        console.log(activSlide);
        if(activSlide < 0){
            activSlide = itemLength - 1;
        }
    }

    mainSlider.style.transform = `translateY(-${heigth * activSlide}px)`
    sidebar.style.transform = `translateY(${heigth * activSlide}px)`
}