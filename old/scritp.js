window.onload = function(){
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClass("silde");
	for(var i in objs) {
		objs[i].style.width = slidewidth;
	}
}