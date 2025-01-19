let varmensal = document.getElementById('mensal');
let varanual = document.getElementById('anual');

function NavigationMobile(){
  let navMobile = document.getElementById('navMobile');
  let btnNavMobile = document.getElementById('btn_navMobile');

  btnNavMobile.addEventListener('click',function(){
    if(btnNavMobile.classList.contains('bi-list')){
      navMobile.style.left = '0';
      btnNavMobile.classList.add('bi-x-lg');
      btnNavMobile.classList.remove('bi-list');
      btnNavMobile.style.position = 'fixed';
    }
    else{
      navMobile.style.left = '-60vw';
      btnNavMobile.classList.remove('bi-x-lg');
      btnNavMobile.classList.add('bi-list');
      btnNavMobile.style.position = 'absolute';
    }
  });
}

NavigationMobile();

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

  function ControleCard(){
    let cardAberto = document.querySelectorAll('.card_aberto');
    let cardSeta = document.querySelectorAll('.card_seta');
  
    for(let i=0;i<cardAberto.length;i++){
      cardSeta[i].addEventListener('click', function(){
        if(cardAberto[i].classList.contains('fechado')){
          cardAberto[i].classList.add('aberto');
          cardAberto[i].classList.remove('fechado');
          cardSeta[i].classList.add('bi-chevron-up');
          cardSeta[i].classList.remove('bi-chevron-down');
        }
        else{
          cardAberto[i].classList.remove('aberto');
          cardAberto[i].classList.add('fechado');
          cardSeta[i].classList.remove('bi-chevron-up');
          cardSeta[i].classList.add('bi-chevron-down');
        }
      });
    }
  }
  
  ControleCard();

  // BTN toglle
function btnplanos(){
  varmensal.classList.toggle("off");
  varmensal.classList.toggle("on");
  
  varanual.classList.toggle("on");
  varanual.classList.toggle("off");
}