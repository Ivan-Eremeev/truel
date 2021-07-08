// YandexMap
if ($('#yandexMap').length) {
  ymaps.ready(function () {
    initYandexMap();
  });
}
function initYandexMap(){     
  var myMap;
  myMap = new ymaps.Map("yandexMap", {
    center: [59.92034351022656, 30.34603594047543], // Центер карты
    zoom: 15, // Коэффициент масштаба карты
    controls: [ // Элементы управления
    'zoomControl',
    ]
  });
  myMap.behaviors.disable('scrollZoom'); // Отключить изменение масштаба скроллом мыши
  // Добавление метки
  myMap.geoObjects
    .add(new ymaps.Placemark([59.92034351022656, 30.34603594047543], {
      balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
    }));
}