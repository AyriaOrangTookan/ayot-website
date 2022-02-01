// jQuery v3.3.1 is supported

$("#slider").roundSlider({ 
	radius: 72,
	circleShape: "half-top",
  sliderType: "min-range",
	mouseScrollAction: true,
  value: 19,
	handleSize: "+5",
	min: 10,
	max: 50
});

$('#slider').on('DOMSubtreeModified', function(){
	target = document.querySelector('#slider');
	x = target.innerText;
	if (x == '') { return }
	swtch = document.querySelector('#switch');
	var fanState = swtch.checked;
	if (x > 25 && !fanState) {
		swtch.checked = true;
		globalThis.fanState = true;
		return
	} else if (x < 25 && fanState) {
		console.log(x);
		swtch.checked = false;
		fanState = false;
	}
  });
