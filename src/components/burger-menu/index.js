export function initBurgerMenu () {
  const burgerButton = document.getElementById('burger-button');
  const closeBurgerButton = document.getElementById('close-burger-button');
  const burgerMenu = document.getElementById('burger-menu');
  
  const switchBurger = (mode) => {
    if (mode === 'open') {
      burgerMenu.classList.add('burger-menu-open');
    } else if (mode === 'close') {
      burgerMenu.classList.remove('burger-menu-open');
    } else {
      burgerMenu.classList.toggle('burger-menu-open');
    }
  }  

  burgerButton.addEventListener('click', (e) => {
    switchBurger();
  });

  closeBurgerButton.addEventListener('click', () => {
    switchBurger('close');
  })
  
  document.body.addEventListener('click', (e) => {
    if (!burgerButton.contains(e.target) && !burgerMenu.contains(e.target)) {
      switchBurger('close');
    }
  })
}
