let menuBtn = document.querySelector('.menu-box');
let sidenav = document.querySelector('.sidebar');

menuBtn.addEventListener('click', ()=> {
   if(sidenav.classList.contains('active')){
    sidenav.classList.remove('active');
   }else{
    sidenav.classList.add('active');
   }
});
window.onscroll = () => {
   if(scrollY > 300){
    sidenav.classList.remove('active');
   }
}