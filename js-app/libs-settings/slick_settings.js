// Slick Slider
function slider(slider) {
  if (slider.length) {
    slider.slick({
      slidesToShow: 1, // Сколько слайдов показывать на экране
      slidesToScroll: 1, // Сколько слайдов пролистывать за раз
      dots: false, // Пагинация
      arrows: false, // Стрелки
      focusOnSelect: true, // Выбрать слайд кликом
      infinite: false, // Зацикленное пролистывание
      adaptiveHeight: true, // Подгоняет высоту слайдера под элемент слайда
      swipe: false, // Перелистывание пальцем
      draggable: false, // Перелистывание мышью
    });

    $('.modal__btn-next').on('click', function () {
      slider.slick('slickNext');
    })
    $('.modal__btn-prev').on('click', function () {
      slider.slick('slickPrev');
    })

  }
}
slider($('.modal__slider'));