'use strict';

document.addEventListener('mousemove', (e)=>{
    let body = document.querySelector('body');
    let particles = document.createElement('span');

    let x = e.offsetX;
    let y = e.offsetY;

    body.appendChild(particles);

    setTimeout( ()=>{
        particles.remove();
    },2000);

});













