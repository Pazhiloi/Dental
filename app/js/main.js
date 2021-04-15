$(function () {
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