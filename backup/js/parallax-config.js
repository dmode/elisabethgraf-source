$(document).ready(function(){

	
	RepositionNav();
	
	$(window).resize(function(){
		RepositionNav();
	});	
	
	
	//.parallax(xPosition, adjuster, inertia, outerHeight) options:
	//xPosition - Horizontal position of the element
	//adjuster - y position to start from
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$("#home").parallax("50%", 0, 0.1, true);
	$("#about").parallax("50%", 750, 0.1, true);
	$("#services").parallax("50%", 1500, 0.1, true);
	$("#folio1").parallax("50%", 2250, 0.1, true);
	$("#folio2").parallax("50%", 3000, 0.1, true);
	//$("#folio3").parallax("50%", 3750, 0.1, true);
	//$("#folio4").parallax("50%", 4500, 0.1, true);
	$("#gallery").parallax("50%", 3750, 0.1, true);
	$("#links").parallax("50%", 4500, 0.1, true);
	$("#contact").parallax("50%", 5250, 0.1, true);
	
	$("#home .pximage1").parallax("50%", 980, 2.0, true);
//	$("#home .pximage2").parallax("50%", 990, 1.8, true);
//	$("#home .pximage3").parallax("50%", 1170, 1.1, true);
//	$("#home .pximage4").parallax("50%", 1030, 1.3, true);
//	$("#home .pximage5").parallax("50%", 1000, 1.5, true);
	
	
	$("#about .pxarrows").parallax("50%", 2650, 0.5, true);
	$("#about .pxcircle1").parallax("50%", 2600, 0.5, true);
	$("#about .pxcircle2").parallax("50%", 6120, 0.1, true);
	$("#about .pxcircle3").parallax("50%", 2350, 0.7, true);
	$("#about .pxcircle4").parallax("50%", 2055, 1.3, true);
	$("#about .pximage").parallax("50%", 2000, 0.6, true);
	
	$("#gallery .pxphoto-left").parallax("50%", 5050, 0.5, true);
	$("#gallery .pxphoto-right").parallax("50%", 4680, 1.0, true);
	
	$("#contact .pxmyspace").parallax("50%", 6140, 0.7, true);
	$("#contact .pxmail").parallax("50%", 6250, 1.2, true);
	$("#contact .pxdribbble").parallax("50%", 6050, 0.5, true);
	
	//$("#kaktus .pxphoto-left").parallax("50%", 3150, 0.5, true);
	//$("#kaktus .pxphoto-right").parallax("50%", 2750, 1.0, true);

	$("#folio1 .pxphoto-left").parallax("50%", 3300, 0.5, true);
	$("#folio1 .pxphoto-right").parallax("50%", 2900, 1.0, true);

	$("#folio2 .pxphoto-left").parallax("50%", 3950, 0.5, true);
	$("#folio2 .pxphoto-right").parallax("50%", 4000, 1.0, true);


//	$("#services .pxcircles").parallax("50%", 2500, 0.6, true);
//	$("#services .pxcircle1").parallax("50%", 2750, 1.1, true);
//	$("#services .pxcircle2").parallax("50%", 3050, 0.6, true);
//	$("#services .pxcircle3").parallax("50%", 2760, 1.5, true);
//	$("#services .pxbrush").parallax("50%", 2900, 0.9, true);
//	$("#services .px3d").parallax("50%", 3650, 0.3, true);
//	$("#services .pxidea").parallax("50%", 2820, 1.6, true);
	
	
//	$("#folio1 .pximage-left").parallax("50%", 4100, 0.1, true);
//	$("#folio1 .pximage-right").parallax("50%", 3700, 0.4, true);
	
//	$("#folio2 .pximage-left").parallax("50%", 4750, 0.4, true);
//	$("#folio2 .pximage-right").parallax("50%", 6100, 0.1, true);
	
	
});