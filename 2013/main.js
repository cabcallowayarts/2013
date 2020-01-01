$(window).resize(function(){
	$('ul#menu').css('top',(($(window).height()-$('#menu').outerHeight())/2));
	$('.content').css({width:'100%',height:'100%'});

	if ($(window).width() < 480 )
	{
		$('.content').each(function(index){ $(this).css('top',0) });
	}

	$('h3').hide();
	// hide timeline menu labels


	});

$(document).ready(function(){
	$('.content').each(function(index){ $(this).css('top',$(this).outerHeight() * index); });
	// stack every .content div, one after the other, extending down page

	$('#arrowone').fadeOut(1000);
	// hide up arrow on page load

	$(window).resize();

	$('h3').hide();
	// hide timeline menu labels

	$('#arrowone').fadeOut(1000);
	// hide up arrow on page load

	$('#test').html($(window).width());

	var activeContent = 1;	arrows(activeContent);
	// do arrows function so top arrow will fade out when page first loads

	var time = 600;
	var moveEase = "easeOutBack";
	$('ul#menu li img').mouseover(function(){ $(this).siblings('h3').fadeIn(200,moveEase).animate({left:90},{queue:false, duration:time, easing:moveEase});	});
	$('ul#menu li img').mouseout(function(){ $(this).siblings('h3').stop().fadeOut(200,moveEase).animate({left:180},{queue:false, duration:time, easing:moveEase});	});
	// mouseover animations for timeline menu

	$('#menu li:nth-child(1)').click(function(){	layerOrder($('#sec1'));		});
	$('#menu li:nth-child(2)').click(function(){	layerOrder($('#sec2'));		});
	$('#menu li:nth-child(3)').click(function(){	layerOrder($('#sec3'));		});
	$('#menu li:nth-child(4)').click(function(){	layerOrder($('#sec4'));		});
	$('#menu li:nth-child(5)').click(function(){	layerOrder($('#sec5'));		});
	$('#menu li:nth-child(6)').click(function(){	layerOrder($('#sec6'));		});

	$('#menu li').each(function(index){
		$(this).click(function(){ arrows(index); });
	});
	// navigation of .content divs via timeline menu

	$('#arrow1').click(function(){
		var sel = $('.active').attr('id');
		if ( sel == "sec2" ) { layerOrder($('#sec1')); }
		else if ( sel == "sec3" ) { layerOrder($('#sec2')); }
		else if ( sel == "sec4" ) { layerOrder($('#sec3')); }
		else if ( sel == "sec5" ) { layerOrder($('#sec4')); }
		else if ( sel == "sec6" ) { layerOrder($('#sec5')); }
	});
	$('#arrow2').click(function(){
		var sel = $('.active').attr('id');
		if ( sel == "sec1" ) { layerOrder($('#sec2')); }
		else if ( sel == "sec2" ) { layerOrder($('#sec3')); }
		else if ( sel == "sec3" ) { layerOrder($('#sec4')); }
		else if ( sel == "sec4" ) { layerOrder($('#sec5')); }
		else if ( sel == "sec5" ) { layerOrder($('#sec6')); }
	});
	// navigation of .content divs via arrows


	$('img').load(function(){ $(window).resize(); });
	// align timeline menu after images have loaded




}); // end document.ready function


function layerOrder(e) {
	var timing = 500;
	var easing = "easeInOutExpo";
	e.prevAll().each(function(index){ $(this).animate({top:-($(this).height()*(index+1))},{queue:true,duration:timing,easing:easing}); }).removeClass('active');
	e.animate({top:0},{queue:true,duration:timing,easing:easing}).addClass('active');
	e.nextAll().each(function(index){ $(this).animate({top:$(this).height()*(index+1)},{queue:true,duration:timing,easing:easing}); }).removeClass('active');
	var activeContent = $('.active').index();
	arrows(activeContent);
}
// change sections

function arrows(e) {
	var time = 1500;
if ( e==0 ) {
	$('#arrowtwo').fadeIn(time);
	$('#arrowone').fadeOut(time);
	}
else if ( e==5 ) {
	$('#arrowone').fadeIn(time);
	$('#arrowtwo').fadeOut(time);
	}
else {
	$('#arrowone').fadeIn(time);
	$('#arrowtwo').fadeIn(time);
	}
}
// function to get rid of up arrow when on first section, and get rid of down arrow when on last section















//$('#test').html($('#sec1').offset().top + ', ' + $('#sec1').offset().left);

//function layerOrder(e) {
//		e.offset({top:0,left:0}).css('z-index','5000').siblings('.content').not(this).css('z-index','500');
//	}


/*
window.onscroll = updateContent;
arrow.onclick = goDown;
var top = document.getElementById("top");
var left = document.getElementById("left");
var background = document.getElementById("bg");
var arrow = document.getElementById("arrow");
var timeline = document.getElementById("timeline");
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;
function goDown(){
	window.scrollBy(0,winHeight);
}
function updateContent(){
	var scrollX = document.body.scrollLeft;
	var scrollY = document.body.scrollTop;
	left.innerHTML = "Left: " + scrollX;
	top.innerHTML = "Top: " + scrollY;
	if(scrollY >= winHeight){
		background.style.backgroundColor = "#F00";
		background.style.color = "#F00";
		arrow.src = "arrow.png";
		if(scrollY >= winHeight*2){
			background.style.backgroundColor = "#F90";
			background.style.color = "#F90";
			if(scrollY > winHeight*3){
				background.style.backgroundColor = "#FF0";
				background.style.color = "#FF0";
				if(scrollY >= winHeight*4){
					background.style.backgroundColor = "#3b0d4a";
					background.style.color = "#3b0d4a";
					if(scrollY >= winHeight*5){
						background.style.backgroundColor = "#00F";
						background.style.color = "#00F";
					}
				}
			}
		}
	}else{
		background.style.backgroundColor = "#FFF";
		background.style.color = "#FFF";
		arrow.src = "arrow2.png";
	}
}
*/
