// map
initMap();

function initMap() {
  let myMap;
  let myPlacemark;

  const init = () => {
    myMap = new ymaps.Map("map", {
      center: [55.752004, 37.576133],
      zoom: 14,
      controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      iconLayout: 'default#image',
      iconImageHref: '/assets/svg/bycars-favicon.svg',
      iconImageSize: [40, 40],
      iconImageOffset: [-5, -38]
    }),
      myMap.geoObjects.add(myPlacemark);
  };
  ymaps.ready(init);
}