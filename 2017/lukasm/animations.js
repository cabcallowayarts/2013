$(document).ready(function(){
	var rotate = true;
	var rotate1 = true;
	$("#head1").click(function(){
		$("#osc1").slideToggle().css("display","flex");
	});
	$("#head2").click(function(){
		$("#osc2").slideToggle().css("display","flex");
	});
	$(".heading").click(function(){
		if (rotate) {
			$(this).children(':nth-child(2)').addClass("rotated");
			rotate = false;
		}else if (!rotate) {
			$(this).children(':nth-child(2)').removeClass("rotated");
			rotate = true;
		}
	});
});
