
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header')

  // scroll
  if (header.classList.contains('header--blue')) {
    checkScroll()
  
    window.addEventListener('scroll', checkScroll)
  
    function checkScroll() {
      const scrollPos = window.scrollY

      if (scrollPos < 1) {
        header.classList.add('header--blue')
      } else {
        header.classList.remove('header--blue')
      }

      if (window.matchMedia(`(min-width: 1280px)`)) {
        const accordion = header.querySelector('[data-accordion].active')
  
        if (accordion) {
          const drop = accordion.querySelector('[data-accordion-dropdown]')
  
          accordion.classList.remove('active')
          $(drop).slideUp()
        }
      }
    }
  }

  // menu
  const menuBtn = header.querySelector('[data-header-btn]')

  menuBtn.onclick = function() {
    header.classList.toggle('header--menu')
    document.body.classList.toggle('body--hidden')
  }
})