'use strict';

document.addEventListener('mousemove', (e)=>{
    let body = document.querySelector('body');
    let particles = document.createElement('span');

    let x = e.offsetX;
    let y = e.offsetY;

    particles.style.left = `${x}px`;
    particles.style.top = `${y}px`;

    let size = Math.random() * 5;
    particles.style.width = 2+ size + 'px';
    particles.style.height = 2+ size + 'px';



    body.appendChild(particles);

    setTimeout( ()=>{
        particles.remove();
    },2000);

});













