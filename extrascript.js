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

$(document).ready(function() {
		
	
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
			swtch.checked = false;
			fanState = false;
		}
	});

	$('#slider2').on('DOMSubtreeModified', function(){
		target = document.querySelector('#slider2');
		x = target.innerText;
		if (x == '') { return }
		swtch = document.querySelector('#switch2');
		var fanState = swtch.checked;
		if (x > 25 && !fanState) {
			swtch.checked = true;
			globalThis.fanState = true;
			return
		} else if (x < 25 && fanState) {
			swtch.checked = false;
			fanState = false;
		}
	});

	$('#lamp-toggle').change(function(e) {
		var ll = $('#lamp-light')
		var tog = e.target
		if (tog.checked) {
			ll.addClass('lamp-light')
		}else {
			ll.removeClass('lamp-light')
		}
	})

})