
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[data-tabs]')

  if (tabs.length) {
    tabs.forEach(item => {
      const tabItems = item.querySelectorAll('[data-tabs-item]')
      const blocks = item.querySelectorAll('[data-tabs-block]')

      tabItems.forEach((tab, index) => {
        tab.onclick = function() {
          if (!tab.classList.contains('active')) {
            const activeTab = item.querySelector('[data-tabs-item].active')
            const activeBlock = item.querySelector('[data-tabs-block].active')

            activeTab.classList.remove('active')
            activeBlock.classList.remove('active')
            tab.classList.add('active')
            blocks[index].classList.add('active')
          }
        }
      })
    })
  }
})

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelector('[data-filters]')

  if (tabs) {
    const tabItems = tabs.querySelectorAll('[data-filters-item]')
    const blocks = tabs.querySelectorAll('[data-filters-block]')

    tabItems.forEach((tab, index) => {
      tab.onclick = function() {
        if (!tab.classList.contains('active')) {
          const activeTab = tabs.querySelector('[data-filters-item].active')
          const activeBlock = tabs.querySelector('[data-filters-block].active')

          activeTab.classList.remove('active')
          activeBlock.classList.remove('active')
          tab.classList.add('active')
          blocks[index].classList.add('active')
        }
      }
    })
  }
})