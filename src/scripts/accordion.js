
// document.addEventListener('DOMContentLoaded', () => {
//   const accordions = document.querySelectorAll('[data-accordion]')

//   accordions.forEach(item => {
//     const drop = item.querySelector('[data-accordion-dropdown]')
//     const button = item.querySelector('[data-accordion-button]')
//     const isHeader = item.hasAttribute('data-header-accordion')

//     button.onclick = function() {
//       if (isHeader) {
//         const activeAccordion = document.querySelector('[data-header-accordion].active')

//         if (activeAccordion && item !== activeAccordion) {
//           $(activeAccordion.querySelector('[data-accordion-dropdown]')).slideUp()
//           activeAccordion.classList.remove('active')
//         }
//       }
//       $(drop).slideToggle()
//       item.classList.toggle('active')
//     }
//   })
// })


function accordionDropdown(e, root) {
  const accordion = $(root)
  const target = $(e.target)

  if (target.closest('[data-accordion-button]').length) {
    const item = target[0].closest('[data-accordion]')
    const isHeader = item.hasAttribute('data-header-accordion')

    if (isHeader) {
      const activeAccordion = document.querySelector('[data-header-accordion].active')

      if (activeAccordion && item !== activeAccordion) {
        $(activeAccordion.querySelector('[data-accordion-dropdown]')).slideUp()
        activeAccordion.classList.remove('active')
      }
    }

    target.closest(accordion).toggleClass('active');
    target.closest(accordion).find('[data-accordion-dropdown]').eq(0).slideToggle()
  }
}

// $(() => {
//   if ($('[data-accordion]').length) {
//     window.addEventListener('click', (e) => {
//       accordionDropdown(e, '[data-accordion]')
//     })
//   }
// })

$(() => {
  if ($('[data-accordion]')) {

    window.addEventListener('click', (e) => {
      accordionDropdown(e, '[data-accordion]')

      const target = $(e.target).closest('[data-accordion]')
      
      if (!target.length) {
        
        $('[data-accordion]').find('[data-accordion-dropdown]').slideUp()
        $('[data-accordion]').removeClass('active')
      }
    })
  }
})