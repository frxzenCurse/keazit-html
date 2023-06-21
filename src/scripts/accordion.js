
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('[data-accordion]')

  accordions.forEach(item => {
    const drop = item.querySelector('[data-accordion-dropdown]')
    const button = item.querySelector('[data-accordion-button]')
    const isHeader = item.hasAttribute('data-header-accordion')

    button.onclick = function() {
      if (isHeader) {
        const activeAccordion = document.querySelector('[data-header-accordion].active')

        if (activeAccordion && item !== activeAccordion) {
          $(activeAccordion.querySelector('[data-accordion-dropdown]')).slideUp()
          activeAccordion.classList.remove('active')
        }
      }
      $(drop).slideToggle()
      item.classList.toggle('active')
    }
  })
})

