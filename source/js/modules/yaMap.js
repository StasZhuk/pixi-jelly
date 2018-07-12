module.exports = function () {    
    // Yandex map load
    (function () {
		document.querySelector(".mapYa__preview.map-belgorod").addEventListener("click", () => {
			loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
				var a;
				ymaps.ready(function () {
					(a = new ymaps.Map("mapBelgorod", {
						center: [50.561312, 36.570954],
						zoom: 16,
						controls: ['default']
					})), (myPlacemark = new ymaps.Placemark([50.561312, 36.570954], {
						balloonContentHeader: "г. Белгород",
						balloonContentBody: "ул. Щорса 48а, 1 этаж",
						hintContent: "ГК «ВЕКОН»"
					})), a.geoObjects.add(myPlacemark), a.behaviors.disable("scrollZoom"), a.behaviors.disable("drag");
				}), (document.querySelector(".mapYa__preview.map-belgorod").style.display = "none");
			});
		});
	})();
}