$(function () {
  $(".menu__link").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  window.onscroll = function showHeader() {
    var header = document.querySelector('.header__inner');
    if(window.pageYOffset > 600) {
      header.classList.add('header__fixed');
    } else{
      header.classList.remove('header__fixed');
    }
   }
   $('.clients__input--one').on('click', function () {
  $('.clients__item').toggleClass('clients__item--one')
});
   $('.clients__input--two').on('click', function () {
  $('.clients__item').toggleClass('clients__item--two')
});
   $('.clients__input--three').on('click', function () {
  $('.clients__item').toggleClass('clients__item--three')
});
 $('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active')
});
});