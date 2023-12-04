let ham_burger=document.querySelectorAll(`i`)[0];
let menu=document.getElementsByTagName(`span`)[4];
let button1=document.querySelectorAll(`button`)[0];
let button2=document.querySelectorAll(`button`)[1];
let button3=document.querySelectorAll(`button`)[2];
let button4=document.querySelectorAll(`button`)[3];
let button5=document.querySelectorAll(`button`)[4];
let button6=document.querySelectorAll(`button`)[5];
let width=`640px`;
let buttonsLength=document.querySelectorAll(`button`).length
let a=document.querySelector(`section`);let htmlBar=a.querySelectorAll(`div`)[13];let cssBar=a.querySelectorAll(`div`)[16];let jsBar=a.querySelectorAll(`div`)[19];
const hide=()=>{let btn1=document.getElementsByTagName(`div`)[0];btn1.style.display=(`none`);document.body.style.overflowY=(`auto`)};
window.addEventListener('scroll', function () {let nav = document.querySelector('nav');nav.classList.toggle(`stickey`, window.scrollY > 240)});
window.addEventListener(`scroll`,()=>{htmlBar.classList.toggle((`barswidth1`),window.scrollY>1078);cssBar.classList.toggle((`barswidth1`),window.scrollY>1138);jsBar.classList.toggle((`barswidth1`),window.scrollY>1200);});
ham_burger.addEventListener(`click`,()=>{if(menu.style.display!=`block`){menu.style.display=`block`}else{menu.style.display=`none`}})
const upDown=(hb,b1,b2,b3,b4,b5,b6)=>{hb.addEventListener(`mousedown`,()=>{if(hb.style.scale!=`0.9`){hb.style.scale=`0.9`}else{hb.style.scale=`1`}});hb.addEventListener(`mouseup`,()=>{if(hb.style.scale!=`1`){hb.style.scale=`1`}else{hb.style.scale=`0.9`}});b1.addEventListener(`mousedown`,()=>{if(b1.style.scale!=`0.9`){b1.style.scale=`0.9`}else{b1.style.scale=`1`}});b1.addEventListener(`mouseup`,()=>{if(b1.style.scale!=`1`){b1.style.scale=`1`}else{b1.style.scale=`0.9`}});b2.addEventListener(`mousedown`,()=>{if(b2.style.scale!=`0.9`){b2.style.scale=`0.9`}else{b2.style.scale=`1`}});b2.addEventListener(`mouseup`,()=>{if(b2.style.scale!=`1`){b2.style.scale=`1`}else{b2.style.scale=`0.9`}});b3.addEventListener(`mousedown`,()=>{if(b3.style.scale!=`0.9`){b3.style.scale=`0.9`}else{b3.style.scale=`1`}});b3.addEventListener(`mouseup`,()=>{if(b3.style.scale!=`1`){b3.style.scale=`1`}else{b3.style.scale=`0.9`}});b4.addEventListener(`mousedown`,()=>{if(b4.style.scale!=`0.9`){b4.style.scale=`0.9`}else{b4.style.scale=`1`}});b4.addEventListener(`mouseup`,()=>{if(b4.style.scale!=`1`){b4.style.scale=`1`}else{b4.style.scale=`0.9`}});b5.addEventListener(`mousedown`,()=>{if(b5.style.scale!=`0.9`){b5.style.scale=`0.9`}else{b5.style.scale=`1`}});b5.addEventListener(`mouseup`,()=>{if(b5.style.scale!=`1`){b5.style.scale=`1`}else{b5.style.scale=`0.9`}});b6.addEventListener(`mousedown`,()=>{if(b6.style.scale!=`0.9`){b6.style.scale=`0.9`}else{b6.style.scale=`1`}});b6.addEventListener(`mouseup`,()=>{if(b6.style.scale!=`1`){b6.style.scale=`1`}else{b6.style.scale=`0.9`}});};upDown(ham_burger,button1,button2,button3,button4,button5,button6)