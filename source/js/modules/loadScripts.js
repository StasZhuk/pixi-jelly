module.exports = function() {
    // функция загрузки скриптов
	function loadScript(e, t) {
		var a = document.createElement("script");
		a.readyState ? (a.onreadystatechange = function () {
			("loaded" != a.readyState && "complete" != a.readyState) || ((a.onreadystatechange = null), t());
		}) : (a.onload = function () {
			t();
		}), (a.src = e), document.getElementsByTagName("head")[0].appendChild(a);
	}
}