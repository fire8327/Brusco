/*jshint esnext: true */
/* navigation */
$("#toggler, #overlay, .link").click(()=>{
  $("#menu").toggleClass("max-lg:-translate-y-full")
  $("#overlay").toggleClass("hidden")
  $("#toggler").toggleClass("h-5")
  $("#toggler > :nth-child(1)").toggleClass("rotate-45")
  $("#toggler > :nth-child(2)").toggleClass("opacity-0")
  $("#toggler > :nth-child(3)").toggleClass("-rotate-45")
  $("body").toggleClass("overflow-hidden")
})

/* scroll */
$('a[href^="#"]').on('click', function() {
  $("body").removeClass("overflow-hidden")
  let href = $(this).attr('href')
  $('html, body').animate({
      scrollTop: $(href).offset().top
  })
  return false
});

/* sliders */
const swiper = new Swiper('.examples-1', {
  loop: true,
  navigation: {
    nextEl: '.examples-1-next',
    prevEl: '.examples-1-prev',
  },
});
const swiper2 = new Swiper('.examples-2', {
  loop: true,
  navigation: {
    nextEl: '.examples-2-next',
    prevEl: '.examples-2-prev',
  },
});
const swiper3 = new Swiper('.examples-3', {
  loop: true,
  navigation: {
    nextEl: '.examples-3-next',
    prevEl: '.examples-3-prev',
  },
});
const swiper4 = new Swiper('.examples-4', {
  loop: true,
  navigation: {
    nextEl: '.examples-4-next',
    prevEl: '.examples-4-prev',
  },
});
const swiper5 = new Swiper('.examples-5', {
  loop: true,
  navigation: {
    nextEl: '.examples-5-next',
    prevEl: '.examples-5-prev',
  },
});
const swiper6 = new Swiper('.header-swiper', {
  loop: true,
  autoplay: {
    delay: 3500,
  },
});
