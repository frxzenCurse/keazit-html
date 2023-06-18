
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