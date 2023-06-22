import "./styles/app.scss";

import "./scripts/swiper";
import "./scripts/select2";
import "./scripts/tabs";
import "./scripts/header";
import "./scripts/accordion";
import "./scripts/no-transition";
import "./scripts/aos";
import "./scripts/gallery";

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[data-svg-tab]')

  if (tabs) {
    tabs.forEach(tab => {
      tab.onclick = function() {
        const id = this.getAttribute('data-svg-tab')
        const text = document.querySelector(`[data-tab-text="${id}"]`)
        const block = document.querySelector(`[data-svg-block="${id}"]`)
        console.log(id)
        document.querySelector('[data-svg-tab].active').classList.remove('active')
        document.querySelector('[data-tab-text].active').classList.remove('active')
        document.querySelector('[data-svg-block].active').classList.remove('active')
        this.classList.add('active')
        text.classList.add('active')
        block.classList.add('active')
      }
    })
  }
})