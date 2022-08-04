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

//---------------- https://stackoverflow.com/a/55963590 ------------------
function linedraw(x1, y1, x2, y2) {
	if (x2 < x1) {
		var tmp;
		tmp = x2 ; x2 = x1 ; x1 = tmp;
		tmp = y2 ; y2 = y1 ; y1 = tmp;
	}

	var lineLength = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
	var m = (y2 - y1) / (x2 - x1);

	var rad = Math.atan(m)
	var degree = rad * 180 / Math.PI;
	const lineHeightVh = 0.1;
	
	newLine = document.createElement('div');
	newLine.classList.add('game_line');
	
	newLine.style.transform = 'rotate(' + degree + 'deg)';
	newLine.style.width = lineLength + 'px';
	newLine.style.height = lineHeightVh + 'vh';
	
	var upVecDim = -vh(lineHeightVh / 2);
	upVec = {
		X: upVecDim * Math.sin(rad), 
		Y: upVecDim * Math.cos(rad)
	}
	newLine.style.top = (y1 + upVec.Y) + 'px';
	newLine.style.left = (x1 + upVec.X) + 'px';
	
	document.getElementById('sat_clicker').appendChild(newLine);
}
//---------------- https://stackoverflow.com/a/55963590 ------------------