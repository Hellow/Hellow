document.getElementById('english-flag').addEventListener('click', function () {
	var enListElements = document.querySelectorAll("p:lang(en), h1:lang(en), figure:lang(en)");
	for (var i = 0; i < enListElements.length; ++i) {
		enListElements[i].classList.remove('fadeOut');
		enListElements[i].classList.add('fadeIn');
	}

	var frListElements = document.querySelectorAll("p:lang(fr), h1:lang(fr), figure:lang(fr)");
	for (var i = 0; i < frListElements.length; ++i) {
	   frListElements[i].classList.remove('fadeIn');
	   frListElements[i].classList.add('fadeOut');
	}
	window.setTimeout(() => { document.body.className='en'; }, 500);
});

document.getElementById('french-flag').addEventListener('click', function () {
	var frListElements = document.querySelectorAll("p:lang(fr), h1:lang(fr), figure:lang(fr)");
	for (var i = 0; i < frListElements.length; ++i) {
		frListElements[i].classList.remove('fadeOut');
		frListElements[i].classList.add('fadeIn');
	}
	var enListElements = document.querySelectorAll("p:lang(en), h1:lang(en), figure:lang(en)");
	for (var i = 0; i < enListElements.length; ++i) {
	   enListElements[i].classList.remove('fadeIn');
	   enListElements[i].classList.add('fadeOut');
	}
	window.setTimeout(() => { document.body.className='fr'; }, 500);
});

/*window.onscroll = function(ev) {
	if(window.scrollY==0){
		alert("you're at the TOP of the page");
	}
};*/