
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

  const swiperAbout = new Swiper('.about__slider', {
    spaceBetween: 30,
    slidesPerView: 2,
  
    navigation: {
      nextEl: '.about__next',
      prevEl: '.about__prev',
    },
  
  });

  const swiperGallery = new Swiper('.gallery__slider', {
    spaceBetween: 80,
    slidesPerView: 2,
  
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
    breakpoints: {
      1201: {
        slidesPerView: 4,
      }
    },
    breakpoints: {
      901: {
        slidesPerView: 3,
      }
    },
  
  });

  const swiperTestimonials = new Swiper('.testimonials__slider', {
    spaceBetween: 15,
    slidesPerView: 2,
  
    pagination: {
      el: '.testimonials-pagination',
    },

    navigation: {
      nextEl: '.testimonials__next',
      prevEl: '.testimonials__prev',
    },
    breakpoints: {
      701: {
        spaceBetween: 80,
      }
    },
  
  });

  const btnCards = document.querySelector('.minicards-btn');
  const miniCards = Array.from(document.querySelectorAll('.minicards-item'));
  const galleryCards = document.querySelector('.gallery__minicards')

  window.addEventListener('resize', event => {
    if (event.target.window.innerWidth > 700) {
      galleryCards.classList.add('hidden')
    };
    if (event.target.window.innerWidth <= 700) response(); 
  })

  function openCatalog() {
    btnCards.addEventListener('click', () => {
      miniCards.forEach(item => item.classList.remove('hidden'));
      btnCards.classList.add('hidden');
    })
  }
  
  
  function response() {
      if (window.innerWidth <= 700) {
        btnCards.classList.add('hidden');
        galleryCards.classList.remove('hidden')
  
        miniCards.forEach((item, index) =>{
          item.classList.add('hidden')
          if (index <= 3) {
            item.classList.remove('hidden')
          } else if (index > 3) {
            btnCards.classList.remove('hidden');
          }
          openCatalog();
        })
      }
  }
  response();



  const accordionLists = document.querySelectorAll('.accordion-list');
  
  accordionLists.forEach(el => {

    el.addEventListener('click', (e) => {

      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return
      e.preventDefault()
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null
      }
    })
  });

  const telInputs = document.querySelectorAll('input[type="tel"]');
  const im = new Inputmask('+7 (999) 999-99-99')
  im.mask(telInputs);

  const goTopBtn = document.querySelector('.about__btn-up');

  window.onscroll = () => {
    if (window.scrollY > 650) {
      goTopBtn.classList.add('about__btn-up--show');
    } else if (window.scrollY < 650) {
      goTopBtn.classList.remove('about__btn-up--show');
    }
    if (window.scrollY > 1350) {
      goTopBtn.classList.add('about__btn-up--right');
    } else if (window.scrollY < 1350) {
      goTopBtn.classList.remove('about__btn-up--right');
    }
    if (window.scrollY > 4000) {
      goTopBtn.classList.add('about__btn-up--foot');
    } else if (window.scrollY < 4000) {
      goTopBtn.classList.remove('about__btn-up--foot');
    }
    if (window.innerWidth < 900 && window.scrollY > 3750 ) {
      goTopBtn.classList.add('about__btn-up--foot');
    } else if (window.innerWidth > 900 && window.scrollY < 3750) {
      goTopBtn.classList.remove('about__btn-up--foot');
    }
    if (window.innerWidth < 700 && window.scrollY > 3550 ) {
      goTopBtn.classList.add('about__btn-up--foot');
    } else if (window.innerWidth > 700 && window.scrollY < 3550) {
      goTopBtn.classList.remove('about__btn-up--foot');
    }
    if (window.innerWidth < 600 && window.scrollY > 3420 ) {
      goTopBtn.classList.add('about__btn-up--foot');
    } else if (window.innerWidth > 600 && window.scrollY < 3420) {
      goTopBtn.classList.remove('about__btn-up--foot');
    }
    if (window.innerWidth < 493 && window.scrollY > 3400 ) {
      goTopBtn.classList.add('about__btn-up--foot');
    } else if (window.innerWidth > 493 && window.scrollY < 3400) {
      goTopBtn.classList.remove('about__btn-up--foot');
    }
    if (window.innerWidth < 477 && window.scrollY > 3380 ) {
      goTopBtn.classList.add('about__btn-up--foot');
    } else if (window.innerWidth > 477 && window.scrollY < 3380) {
      goTopBtn.classList.remove('about__btn-up--foot');
    }
    if (window.innerWidth < 447 && window.scrollY > 3360 ) {
      goTopBtn.classList.add('about__btn-up--foot');
    } else if (window.innerWidth > 447 && window.scrollY < 3360) {
      goTopBtn.classList.remove('about__btn-up--foot');
    }
    if (window.innerWidth < 432 && window.scrollY > 3340 ) {
      goTopBtn.classList.add('about__btn-up--foot');
    } else if (window.innerWidth > 432 && window.scrollY < 3340) {
      goTopBtn.classList.remove('about__btn-up--foot');
    }
    if (window.innerWidth < 392 && window.scrollY > 3320 ) {
      goTopBtn.classList.add('about__btn-up--foot');
    } else if (window.innerWidth > 392 && window.scrollY < 3320) {
      goTopBtn.classList.remove('about__btn-up--foot');
    }
  };

  
  goTopBtn.onclick = () => {
    window.scrollTo(0, 0);
  };

  const accordionListsFooter = document.querySelectorAll('.footer__accordion-list');
  
  accordionListsFooter.forEach(el => {

    el.addEventListener('click', (e) => {

      const accordionControlFooter = e.target.closest('.footer__accordion-control');
      if (!accordionControlFooter) return
      e.preventDefault()
      const accordionItemFooter = accordionControlFooter.parentElement;
      const accordionContentFooter = accordionControlFooter.nextElementSibling;

      accordionItemFooter.classList.toggle('footer__accordion-item--opened');

      if (accordionItemFooter.classList.contains('footer__accordion-item--opened')) {
        accordionContentFooter.style.maxHeight = accordionContentFooter.scrollHeight + 'px';
      } else {
        accordionContentFooter.style.maxHeight = null
      }
    })
  });
