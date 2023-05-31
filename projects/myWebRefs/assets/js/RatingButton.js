console.clear();
let h1 = document.querySelector('.heartOne');
let _svg1 = document.querySelector('svg.one');
let _svg2 = document.querySelector('svg.two');
let _svg3 = document.querySelector('svg.three');
let _svg4 = document.querySelector('svg#star');
h1.addEventListener('click',e=>{
  _svg1.classList.toggle('on');
},false);

_svg2.addEventListener('click',e=>{
  _svg2.classList.toggle('on');
},false);

_svg3.addEventListener('click',e=>{
  _svg3.classList.toggle('on');
},false);

_svg4.addEventListener('click',e=>{
  _svg4.classList.toggle('on');
},false);