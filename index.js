// const hide=()=>{let btn1=document.getElementsByTagName(`div`)[0];btn1.style.display=(`none`);document.body.style.overflowY=(`auto`)};
window.addEventListener('scroll', function () {let nav = document.querySelector('nav');nav.classList.toggle(`stickey`, window.scrollY > 240)});
let a=document.querySelector(`section`);
let htmlBar=a.querySelectorAll(`div`)[13];
let cssBar=a.querySelectorAll(`div`)[16];
let jsBar=a.querySelectorAll(`div`)[19];
window.addEventListener(`scroll`,function(){
    htmlBar.classList.toggle((`barswidth1`),window.scrollY>1078);
    cssBar.classList.toggle((`barswidth1`),window.scrollY>1138);
    jsBar.classList.toggle((`barswidth1`),window.scrollY>1200);
})
