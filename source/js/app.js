window.addEventListener('DOMContentLoaded', () => {

    const inputs = $('.we-can a')
    const labels = $('.we-can label')

    $(inputs).each((_, item) => {
        let hash = window.location.hash;

        if (hash.indexOf(item.id) >= 0) {
            console.log(item.id);

            $(labels).each((_, label) => {
                if ($(label).attr('data-id') === item.id)  {
                    $(label).trigger('click');
                }
            });
        }
    });
    // маска телефона
    $('input[type="tel"]').mask("+7 (999) 999-99-99");

    // анимация цифр секции hero
    $(".spincrement").each((idx, el) => {
        let delay = +el.getAttribute('data-delay') + 800;
        let to = el.getAttribute('data-to');
        let place = el.getAttribute('data-place');

        setTimeout(() => {
            $(el).spincrement({
                from: 0,                // Стартовое число
                to: to,              // Итоговое число. Если false, то число будет браться из элемента с классом spincrement, также сюда можно напрямую прописать число. При этом оно может быть, как целым, так и с плавающей запятой
                decimalPlaces: place,       // Сколько знаков оставлять после запятой
                decimalPoint: ",",      // Разделитель десятичной части числа
                // thousandSeparator: ",", // Разделитель тыcячных
                duration: 4000          // Продолжительность анимации в миллисекундах
            });
        }, delay)   
    });

    $('form').each((e, el) => {
        var $form = $(el);
        var formId = el.id;
        var formResultBlockId =  '.result';
        var submitBtn = $form.find('input[type="submit"]');
        
        $(submitBtn).on('click', (e) => {
            e.preventDefault();

            if (validateForm(formId)) AjaxFormRequest(`#${formId} ${formResultBlockId} `, formId, './sendform.php', submitBtn);
            return;
        });
    });


    function AjaxFormRequest(result_form, ajax_form, url, submitBtn) {
        jQuery.ajax({
            url: url,
            type: "POST",
            dataType: "html",
            data: jQuery("#" + ajax_form).serialize(),
            success: function (response) {
                console.log('send');
                $(submitBtn).val('Спасибо');
            },
            error: function (response) {
                document.querySelector(result_form).innerHTML = "Ошибка. Данные не отправленны.";
            }
        });
    }

    function validateForm(formSelector) {
        let form = document.getElementById(formSelector);
        let name = form.elements.name;
        let phone = form.elements.phone;

        if (name.value === '') name.style.borderColor = 'red';
        else name.style.borderColor = 'green';

        if (phone.value === '') phone.style.borderColor = 'red';
        else phone.style.borderColor = 'green';

        if (name.value && phone.value) return true;
        else return false;
    }

    // Yandex map load
    (function () {
		document.querySelector(".mapYa__preview.map-oskol").addEventListener("click", () => {
			loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
				var a;
				ymaps.ready(function () {
					(a = new ymaps.Map("mapOskol", {
						center: [51.313661, 37.891190],
						zoom: 16,
						controls: ['default']
					})), (myPlacemark = new ymaps.Placemark([51.313661, 37.891190], {
						balloonContentHeader: "Старый Оскол",
						balloonContentBody: "мкр. Жукова, 28",
						hintContent: "ГК «ВЕКОН»"
					})), a.geoObjects.add(myPlacemark), a.behaviors.disable("scrollZoom"), a.behaviors.disable("drag");
				}), (document.querySelector(".mapYa__preview.map-oskol").style.display = "none");
			});
		});
    })();
    
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

    // Функция плавного скролла к якорю
    (function () {
        var linkNav = document.querySelectorAll('[href^="#scroll"]'), //выбираем все ссылки к якорю на странице
            V = 0.1; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)

        for (var i = 0; i < linkNav.length; i++) {
            linkNav[i].addEventListener('click', function (e) { //по клику на ссылку
                e.preventDefault(); //отменяем стандартное поведение
                var w = window.pageYOffset, // производим прокрутка прокрутка
                    hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
                t = document.querySelector(hash).getBoundingClientRect().top, // отступ от окна браузера до id
                    start = null;
                requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
                function step(time) {
                    if (start === null) start = time;
                    var progress = time - start,
                        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                    window.scrollTo(0, r);
                    if (r != w + t) {
                        requestAnimationFrame(step)
                    } else {
                        // location.hash = hash // URL с хэшем
                    }
                }
            }, false);
        }
    })();

    // функция загрузки скриптов
	function loadScript(e, t) {
		var a = document.createElement("script");
		a.readyState ? (a.onreadystatechange = function () {
			("loaded" != a.readyState && "complete" != a.readyState) || ((a.onreadystatechange = null), t());
		}) : (a.onload = function () {
			t();
		}), (a.src = e), document.getElementsByTagName("head")[0].appendChild(a);
	}
});