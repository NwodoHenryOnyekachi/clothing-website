var i = 0;
var images = [];
var time = 3000;
images[0] = 'images/HP2.jpg';
images[1] = 'images/HP1.jpg';
images[2] = 'images/HP5.jpg';
images[3] = 'images/NL2.jpg';


function changeimg(){
    document.slider.src = images[i];
    if(i < images.length){
        i++;

    }else{
        i = 0;

    }

    setTimeout("changeimg()", time);
}
window.onload = changeimg;

let Nav = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => { 
    Nav.classList.toggle('active');
}
window.onscroll = () => {
    Nav.classList.remove('active');
}
const ul  = document.querySelector('ul');
const fa_bars= document.querySelector('.fas fa-bars');
const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');
const sec3 = document.querySelector('.sec3');
const sec4 = document.querySelector('.sec4');
const sec5 = document.querySelector('.sec5');
const sec6 = document.querySelector('.sec6');
const h1 = document.querySelector('h1');
const cont = document.querySelector('.cont')
const form = document.querySelector('form');
const icon = document.querySelector('.icon');
const icon2 = document.querySelector('icon2')

const t1 = new TimelineMax();

t1.fromTo(ul, 1, { height: "0%" },{ height: "100%", ease: Power2.easeInOut })
.fromTo(ul, 1.2, { width: "100%"},{ width: "80%", ease: Power2.easeInOut})
.fromTo(sec1,1.2,{x:"-100%"},{x:"0%",ease : Power2.easeInOut},"-=1.2")
.fromTo(sec2,1.2,{x:"-100%"},{x:"0%",ease : Power2.easeInOut},"-=1.2")
.fromTo(sec3,1.2,{x:"-100%"},{x:"0%",ease : Power2.easeInOut},"-=1.2")
.fromTo(sec4,1.2,{x:"-100%"},{x:"0%",ease : Power2.easeInOut},"-=1.2")
.fromTo(sec6,1.2,{x:"-100%"},{x:"0%",ease : Power2.easeInOut},"-=1.2")
.fromTo(fa_bars,0.5,{opacity:0,x:30},{opacity:1,x:0,},"-=0.5")
.fromTo(headline,0.5,{opacity:0,x:30},{opacity:1,x:0,},"-=0.5");

