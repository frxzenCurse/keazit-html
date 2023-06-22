import Swiper from "swiper/bundle";

const BREAKPOINT = 1280;

export function swiperInit() {
  const slider = $("[data-slider-id]");

  if (slider.length) {
    slider.each(function () {
      const slider_el = $(this);
      const slider_id = slider_el.data("slider-id");
      const slider_prev_id = slider_el.data("slider-prev");
      const slider_next_id = slider_el.data("slider-next");
      const slider_prev = $(`[data-slider-button="${slider_prev_id}"]`);
      const slider_next = $(`[data-slider-button="${slider_next_id}"]`);
      const slider_buttons = $('[data-slider-buttons]')
      let thumbsSlider
      let slider_swiper
      
      if (slider_buttons.length) {
        const slides_count = slider_el.find('.swiper-slide').length
        const min_count = slider_buttons.data('slider-buttons')

        if (slides_count < +min_count) {
          slider_buttons.addClass('hidden')
        }
      }

      if (slider_el[0].hasAttribute('data-thumbs-slider')) {
        const thumbsSliderEl = $(`[data-thumbs-id="${slider_id}"]`)
        thumbsSlider = new Swiper(thumbsSliderEl[0], {
          direction: 'vertical',
          slidesPerView: 'auto',
          on: {
            init: function(swiper) {
              const thumbs = swiper.el.querySelectorAll('[data-thumb]')

              thumbs.forEach((thumb, i) => {
                thumb.onclick = function() {
                  slider_swiper.slideTo(i)
                }
              })
            },
          }
        })
      }

      let slider_options = {
        slidesPerView: "auto",

        spaceBetween: 12,
        speed: 500,

        breakpoints: {
          [BREAKPOINT]: {
            spaceBetween: 40,
          },
        },
      };

      switch (slider_id) {
        case 2:
          slider_options = {
            ...slider_options,
            loop: true,
          };
          break;
        case 'info':
          slider_options = {
            slidesPerView: "auto",

            spaceBetween: 18,
            speed: 500,
          };
          break;
        case 'docs':
        case 'card':
        case 'team':
          slider_options = {
            slidesPerView: "auto",
            spaceBetween: 0,
            speed: 500,
          };
          break;
        case 'main':
          slider_options = {
            slidesPerView: "auto",
            spaceBetween: 0,
            speed: 1000,
            pagination: {
              el: '.swiper-pagination',
            },
            on: {
              init: function() {
              },
              slideChange: function(event) {
                const fraction = document.querySelector('[data-slider-fraction]')
                const index = event.realIndex + 1

                fraction.textContent = index < 10 ? `0${index}` : index
              },
            }
          };
          break;
        case 'clients':
          slider_options = {
            slidesPerView: "auto",
            spaceBetween: 3,
            speed: 500,
          };
        break;
      }

      slider_swiper = new Swiper(slider_el[0], slider_options);
      
      slider_prev.on("click", () => {
        slider_swiper.slidePrev();
      });
      slider_next.on("click", () => {
        slider_swiper.slideNext();
      });
    });
  }
}



// swiper
{
  
  $(window).on("load", () => {
    swiperInit();
  });
}
