
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

    (function () {
      document.addEventListener('click', burgerInit)
      const menuOpened = document.querySelector('.header__top-menu-active-bg')
      menuOpened.addEventListener('click', burgerClosed)

        function burgerInit(e) {
          const burgerIcon = e.target.closest('.header__top-menu-img');
          const burgerIconBottom = e.target.closest('.bottom__menu-link-burger');
          const burgerNavLink = e.target.closest('.header__top-menu-link');
          const img = document.querySelector('.hero__img-1');
          const title = document.querySelector('.hero__title');
          const text = document.querySelector('.hero__text');

          if (!burgerIcon && !burgerNavLink && !burgerIconBottom) return
          if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu');
            img.classList.add('hero__img-1-hidden');
            title.classList.add('hero__title-hidden');
            text.classList.add('hero__text-hidden');
          } else {
            document.body.classList.remove('body--opened-menu');
            img.classList.remove('hero__img-1-hidden');
            title.classList.remove('hero__title-hidden');
            text.classList.remove('hero__text-hidden');
        }
        }

        function burgerClosed(e) {
          e.preventDefault()
          const img = document.querySelector('.hero__img-1');
          const title = document.querySelector('.hero__title');
          const text = document.querySelector('.hero__text');

          if (e.target.classList.contains('header__top-menu-active-bg')) {
            document.body.classList.remove('body--opened-menu');
            img.classList.remove('hero__img-1-hidden');
            title.classList.remove('hero__title-hidden');
            text.classList.remove('hero__text-hidden');
        }
          }
    })();

    (function () {
      document.addEventListener('click', personInit)
      const personOpened = document.querySelector('.header__top-person')
      personOpened.addEventListener('click', personClosed)

      function personInit(e) {
        e.preventDefault()
        const personIcon = e.target.closest('.header__nav-link-person')
        const personMenuLink = e.target.closest('.person__menu-link')
        const personBtn = e.target.closest('.person-btn')
        const personIconBottom = e.target.closest('.bottom__menu-link-person')

        if (!personIcon && !personMenuLink && !personBtn && !personIconBottom) return
        if (!document.body.classList.contains('body--opened-person')) {
          document.body.classList.add('body--opened-person');
        } else {
          document.body.classList.remove('body--opened-person');
        }
      }
      function personClosed(e) {
        e.preventDefault()
        if (e.target.classList.contains('header__top-person')) {
          document.body.classList.remove('body--opened-person');
        }
      }
    })();

    (function() {
      document.addEventListener ('click', loginInit)
      const loginOpened = document.querySelector('.header__top-login')
      loginOpened.addEventListener('click', loginClosed)

      function loginInit(e) {
        e.preventDefault()
        const loginBtn = e.target.closest('.person-btn')
        

        if (!loginBtn) return
        if (!document.body.classList.contains('body--opened-login')) {
          document.body.classList.add('body--opened-login');
        } else {
          document.body.classList.remove('body--opened-login');
        }
      };
      function loginClosed(e) {
        e.preventDefault()
        const closedBtn = e.target.closest('.closed-btn')
        const btns = e.target.closest('.login-btn')
        const loginPass = e.target.closest('.login-pass')

        if (e.target.classList.contains('header__top-login') || closedBtn || btns || loginPass) {
          document.body.classList.remove('body--opened-login');
        }
      }
    })();

  const swiperAbout = new Swiper('.about__slider', {
    spaceBetween: 30,
    slidesPerView: 2,
    loop: true,
  
    navigation: {
      nextEl: '.about__next',
      prevEl: '.about__prev',
    },
  
  });

  const swiperGallery = new Swiper('.gallery__slider', {
    spaceBetween: 80,
    slidesPerView: 'auto',
    loop: true,
  
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    breakpoints: {
      901: {
        slidesPerView: 2,
      }
    },
    breakpoints: {
      1101: {
        slidesPerView: 3,
      }
    },
    breakpoints: {
      1201: {
        slidesPerView: 4,
      }
    },
  });

  const swiperTestimonials = new Swiper('.testimonials__slider', {
    spaceBetween: 15,
    slidesPerView: 2,
    loop: true,
  
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

      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
      const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

      const accordionControl = e.target.closest('.accordion-list__control');
      if (!accordionControl) return
      e.preventDefault()
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }

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
