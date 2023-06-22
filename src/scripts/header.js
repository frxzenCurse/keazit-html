
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header')

  console.log(header.classList.contains('header--blue'))
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
    }
  }

  // menu
  const menuBtn = header.querySelector('[data-header-btn]')

  menuBtn.onclick = function() {
    header.classList.toggle('header--menu')
    document.body.classList.toggle('body--hidden')
  }
})