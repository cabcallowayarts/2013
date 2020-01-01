$(document).ready(function(){
	var mdrop = true;
	//mobile animations
	$("#dropdown").click(function(){

		$("#sidebar").slideToggle();
		$("#cover").fadeToggle();
		if (mdrop) {
		$(".dd").addClass("ddClicked");
		mdrop = false;
	}
		else if (!mdrop) {
		$(".dd").removeClass("ddClicked");
		mdrop = true;
		}
	});
	$("#cover").click(function(){
		$("#sidebar").slideToggle();
		$("#cover").fadeToggle();
		$(".dd").removeClass("ddClicked");
		mdrop = true;
	});

	//media queries
	// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(min-width: 1100px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
     $("#logotext").html("augmented");
     $("#sidebar").show();
     $("#cover").hide();
  } else {
  var pageTitle = $("#this").html();
   $("#logotext").html(pageTitle);
   $("#sidebar").hide();
  }

}


	//slide in and out

	var dropped = false;
	var dropped1 = false;
	var dropped2 = false;
	var dropped3 = false;

	var clear = function(){
		$(".dropdesc").slideUp();
		$(".usCont").animate({left: "150vw"},"fast").hide();
		$(".techCont").animate({left: "150vw"},"fast").hide();
		$(".conCont").animate({left: "150vw"},"fast").hide();
		$(".benCont").animate({left: "150vw"},"fast").hide();
		$("#intro").delay("slow").hide();
		$("#sidebar ul li").children(':nth-child(1)').removeClass("rotated");

		dropped1 = false;
		dropped = false;

	};

	var allDropped = dropped || dropped1 || dropped3 || dropped2;
	//var open = 0;
	//mentById("reality").innerHTML = dropped;
	//mentById("logotext").innerHTML = dropped;

	/*if(open == 1){
		clear();
	}*/

	$(".uses").click(function(){

		//mentById("reality").innerHTML = allDropped;
		if (dropped) {
			clear();
			dropped = false;
			$(".intro").delay("150").fadeIn();

			//mentById("reality").innerHTML = dropped;


		}
		else if (!dropped){
		if(allDropped){
		dropped = true;
		$(this).children(':nth-child(4)').slideDown();
		$(this).children(':nth-child(1)').addClass("rotated");
		$(".intro").delay("150").fadeOut();
		$(".usCont").show();
		$(".usCont").delay("200").animate({left: "0vw"},"slow");
		//mentById("reality").innerHTML = dropped;}
		}else{
			clear();
			dropped = true;
			$(this).children(':nth-child(4)').slideDown();
			$(this).children(':nth-child(1)').addClass("rotated");
			$(".intro").delay("150").fadeOut();
			$(".usCont").show();
			$(".usCont").delay("200").animate({left: "0vw"},"slow");
		}
		}



	});

		$(".tech").click(function(){
		if (dropped1) {
			clear();
			dropped1 = false;
			$(".intro").delay("150").fadeIn();
			//mentById("reality").innerHTML = dropped;


		}
		else if (!dropped1){
		if(allDropped){
		dropped1 = true;
		$(this).children(':nth-child(4)').slideDown();
		$(this).children(':nth-child(1)').addClass("rotated");
		$(".intro").delay("150").fadeOut();
		$(".techCont").show();
		$(".techCont").delay("200").animate({left: "0vw"},"slow");
		//mentById("reality").innerHTML = dropped;}
		}else{
			clear();
			dropped1 = true;
			$(this).children(':nth-child(4)').slideDown();
			$(this).children(':nth-child(1)').addClass("rotated");
			$(".intro").delay("150").fadeOut();
			$(".techCont").show();
			$(".techCont").delay("200").animate({left: "0vw"},"slow");
		}
		}



	});

		$(".ben").click(function(){
		if (dropped2) {
			clear();
			dropped2 = false;
			$(".intro").delay("150").fadeIn();
			//mentById("reality").innerHTML = dropped;


		}
		else if (!dropped2){
		if(allDropped){
		dropped2 = true;
		$(this).children(':nth-child(4)').slideDown();
		$(this).children(':nth-child(1)').addClass("rotated");
		$(".intro").delay("150").fadeOut();
		$(".benCont").show();
		$(".benCont").delay("200").animate({left: "0vw"},"slow");
		//mentById("reality").innerHTML = dropped;}
		}else{
			clear();
			dropped2 = true;
			$(this).children(':nth-child(4)').slideDown();
			$(this).children(':nth-child(1)').addClass("rotated");
			$(".intro").delay("150").fadeOut();
			$(".benCont").show();
			$(".benCont").delay("200").animate({left: "0vw"},"slow");
		}
		}



	});

		$(".con").click(function(){
		if (dropped3) {
			clear();
			dropped1 = false;
			$(".intro").delay("150").fadeIn();
			//mentById("reality").innerHTML = dropped;


		}
		else if (!dropped3){
		if(allDropped){
		dropped3 = true;
		$(this).children(':nth-child(4)').slideDown();
		$(this).children(':nth-child(1)').addClass("rotated");
		$(".intro").delay("150").fadeOut();
		$(".conCont").show();
		$(".conCont").delay("200").animate({left: "0vw"},"slow");
		//mentById("reality").innerHTML = dropped;}
		}else{
			clear();
			dropped3 = true;
			$(this).children(':nth-child(4)').slideDown();
			$(this).children(':nth-child(1)').addClass("rotated");
			$(".intro").delay("150").fadeOut();
			$(".conCont").show();
			$(".conCont").delay("200").animate({left: "0vw"},"slow");
		}
		}



	});
});
