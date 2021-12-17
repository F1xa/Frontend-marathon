const BUTTONS_TABS = document.querySelectorAll('.weather__button');
const TABS = document.querySelectorAll('.weather__content__item');





BUTTONS_TABS.forEach((button, index) => {

  button.addEventListener('click', ()=> {
    
    BUTTONS_TABS.forEach(item => {
      item.classList.remove('active')
    });

    TABS.forEach(item => {
      item.classList.remove('active')
    });

    TABS[index].classList.add('active');
    button.classList.add('active');

  })
})



