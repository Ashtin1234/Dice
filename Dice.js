const mybutton= document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
let random;
let random2;
let random3;

mybutton.onclick = function(){
random = Math.floor(Math.random() * max) + min; 
random2 = Math.floor(Math.random() * max) + min; 
random3 = Math.floor(Math.random() * max) + min; 
mylabel.textContent = random;
mylabel2.textContent = random2;
mylabel3.textContent = random3;
}

const min= 1;
const max= 6;