var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: window.innerWidth < 700 ? 2 : 4,
    freeMode: true,
    watchSlidesProgress: true,
    
  });

  window.addEventListener("resize", function() {
    swiper.params.slidesPerView = window.innerWidth < 700 ? 2 : 4; // Actualiza el número de imágenes cuando cambie el tamaño de la pantalla
    swiper.update(); // Actualiza Swiper después de cambiar la configuración
  });

var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    thumbs: {
      swiper: swiper,
    },
    simulateTouch: false,  // Desactiva el deslizamiento táctil (touch)
    grabCursor: false,     // Desactiva el cursor de agarre al hacer hover sobre el slider
    touch: false,
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
    breakpoints: {
      // Configuración cuando el ancho de la ventana es igual o menor a 400px
      300: {
          slidesPerView: 1,
          centeredSlides: false,
          spaceBetween: 20, // Espacio entre los slides
      },
      500: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 20, // Espacio entre los slides
    },
    900: {
      slidesPerView: 3,
      centeredSlides: false,
      spaceBetween: 20, // Espacio entre los slides
  },
  1200: {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 20, // Espacio entre los slides
},
simulateTouch: true, // Permitir el deslizamiento táctil
grabCursor: true,     // Desactiva el cursor de agarre al hacer hover sobre el slider
    touch: true
}
  });

  var swiper4 = new Swiper(".mySwiper4", {
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });