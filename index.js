// const hide=()=>{let btn1=document.getElementsByTagName(`div`)[0];btn1.style.display=(`none`);document.body.style.overflowY=(`auto`)};
let ham_burger=document.querySelectorAll(`i`)[0];
let menu=document.getElementsByTagName(`span`)[2];
window.addEventListener('scroll', function () {let nav = document.querySelector('nav');nav.classList.toggle(`stickey`, window.scrollY > 240)});
let a=document.querySelector(`section`);let htmlBar=a.querySelectorAll(`div`)[13];let cssBar=a.querySelectorAll(`div`)[16];let jsBar=a.querySelectorAll(`div`)[19];
window.addEventListener(`scroll`,function(){htmlBar.classList.toggle((`barswidth1`),window.scrollY>1078);cssBar.classList.toggle((`barswidth1`),window.scrollY>1138);jsBar.classList.toggle((`barswidth1`),window.scrollY>1200);});
const clickin=()=>{ham_burger.style.scale=(`0.9`);};const clickout=()=>{ham_burger.style.scale=(`1`);}
ham_burger.addEventListener(`click`,()=>{if(menu.style.display!=`block`){menu.style.display=`block`}else{menu.style.display=`none`}})


