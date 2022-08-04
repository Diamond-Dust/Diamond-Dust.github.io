function vh(v) {
	cHeight = document.documentElement.clientHeight;
	iHeight = window.innerHeight;
	if (cHeight == "undefined") {
		cHeight = 0;
	}
	if (iHeight == "undefined") {
		iHeight = 0;
	}
	if (cHeight > iHeight) {
		h = cHeight;
	} else {
		h = iHeight;
	}
	return (v * h) / 100
}

function vw(v) {
	cWidth = document.documentElement.clientWidth;
	iWidth = window.innerWidth;
	if (cWidth == "undefined") {
		cWidth = 0;
	}
	if (iWidth == "undefined") {
		iWidth = 0;
	}
	if (cWidth > iWidth) {
		w = cWidth;
	} else {
		w = iWidth;
	}
	return (v * w) / 100
}