window.Cmdity = window.Cmdity || {};
Cmdity.toggleOverlay = function(state) {
	Cmdity._overlayEl = Cmdity._overlayEl || document.getElementById('overlay');
	if (typeof state === "undefined")
		state = false;
	if (!Cmdity._overlayEl)
		return;
	Cmdity._overlayEl.style.display = state ? "block" : "none";
}

window.addEventListener('pageshow', function() {
	Cmdity.toggleOverlay(false);
});
