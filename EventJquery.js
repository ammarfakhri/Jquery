$(document).ready(function(){
	$("#hover").click(function(){
		$("img.Run").slideUp();
		$("#hover").slideUp();
	});
	$("#hover2").dblclick(function(){
		$("img.Walk1").slideDown();
	});
	$("#hover3").click(function(){
		$("img.Gun").fadeIn("slow");
	});
	$("#hoverhilang").click(function(){
		$("#hoverhilang").slideUp();
	});
	$("#hover22").mouseenter(function(){
		$("img.Walk2").animate({left: '100px'},"slow");
	});
	$("#hover22").mouseleave(function(){
		$("img.Walk2").animate({left: '7px'},"slow");
	});
});
