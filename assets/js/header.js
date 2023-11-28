// Header show/hide
initHeaderShowHide();

function initHeaderShowHide() {

    let lastScroll = 0;
    const defaultOffset = 65;
    const header = document.querySelector('#header-section');
  
    const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains('hide');
  
    window.addEventListener('scroll', () => {
      if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
      }
      else if (scrollPosition() < lastScroll && containHide()) {
        //scroll up
        header.classList.remove('hide');
      }
  
      lastScroll = scrollPosition();
    })
  }
  