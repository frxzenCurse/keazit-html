$(() => {
  const btns = $('[data-scroll]')
  if (btns.length) {
    btns.on('click', function(event) {
      event.preventDefault();
  
      const elementId = $(this).data('scroll');
      const elementOffset = $(elementId).offset().top;

      btns.removeClass('active')
      $(this).addClass('active')
  
      $('html, body').animate({
        scrollTop: elementOffset - 50
      }, 700);
    })
  }
})