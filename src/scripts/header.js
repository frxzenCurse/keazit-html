
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header')

  // menu
  const menuBtn = header.querySelector('[data-header-btn]')

  menuBtn.onclick = function() {
    header.classList.toggle('header--menu')
    document.body.classList.toggle('body--hidden')
  }
})