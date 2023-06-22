
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-modal]')
  const modalButtons = document.querySelectorAll('[data-btn-modal]')
  console.log(333)
  modalButtons.forEach(btn => {
    btn.onclick = function() {
      console.log(123)
      document.body.classList.toggle('body--hidden')
      modal.classList.toggle('active')
    }
  })
})