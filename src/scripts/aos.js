import AOS from 'aos';

window.addEventListener('load', () => {
  AOS.init({
    once: true,
    offset: 100,
    duration: 1000,
  });
})