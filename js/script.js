let varmensal = document.getElementById('mensal');
let varanual = document.getElementById('anual');


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

// BTN toglle
function btnplanos(){
  varmensal.classList.toggle("off");
  varmensal.classList.toggle("on");
  
  varanual.classList.toggle("on");
  varanual.classList.toggle("off");
}