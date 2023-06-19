
document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('[data-accordion]')

  accordions.forEach(item => {
    const drop = item.querySelector('[data-accordion-dropdown]')
    const button = item.querySelector('[data-accordion-button]')
    const isCatalog = item.hasAttribute('data-catalog-accordion')

    button.onclick = function() {
      if (isCatalog) {
        const activeAccordion = document.querySelector('[data-catalog-accordion].active')

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

