
    function hoverOn() {
    const spanElement = document.getElementById('hero__title-span');
if (document.getElementById("hero__title-span")) {
  spanElement.innerHTML = 'Cokteil';
} 
  }
    function hoverOff() {
    const spanElement = document.getElementById('hero__title-span');
  spanElement.innerHTML = 'Cocteil';
  }

  const swiperGallery = new Swiper('.gallery__slider', {
    spaceBetween: 80,
    slidesPerView: 4,
  
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
  
  });

  const swiperTestimonials = new Swiper('.testimonials__slider', {
    spaceBetween: 80,
    slidesPerView: 2,
  
    navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
    },
  
  });

  const accordionLists = document.querySelectorAll('.accordion-list');
  
  accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      accordionItem.classList.toggle('.accordion-list__item--opened');

      if (accordionItem.classList.contains('.accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null
      }
    })
  })