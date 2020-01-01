/*
Process to add images:
1: Create new function called lightbox + number
2: Add variable clicked + number
3: Copy function and variable from other function and replace neccessary variables
4: In the function closeLight, add 'if' statement with corresponding variables
*/
var zdex = 10000;
var clickedy = false;
function lightboxy(obj){
	if(clickedy == false){
		obj.style.position = "fixed";
		obj.style.left = (window.innerWidth/2) - (obj.offsetWidth+150) + 200 + "px";
		obj.style.top = (window.innerHeight/2) - (obj.offsetHeight+150) - 50 + "px";
		obj.style.width = "400px";
		obj.style.height = "400px";
		obj.style.border = "10px #DDD solid";
		obj.style.zIndex = zdex++;
		clickedy = true;
		cover.style.width = "100%";
		cover.style.height = "100%";
		cover.style.opacity= ".7";
		cover.style.zIndex = "900";
	}else{
		obj.style.position = "relative";
		obj.style.top = "auto";
		obj.style.left = "auto";
		obj.style.width = "16%";
		obj.style.height = "auto";
		obj.style.border = "none";
		obj.style.zIndex = 17;
		clickedy = false;
		cover.style.width = "0%";
		cover.style.height = "0%";
		cover.style.opacity= "0";
	}
}
function lightboxyTwo(evt,obj){
	if(evt.which == 27){
	if(clickedy == true){
		obj.style.position = "relative";
		obj.style.top = "auto";
		obj.style.left = "auto";
		obj.style.width = "16%";
		obj.style.height = "auto";
		obj.style.border = "none";
		obj.style.zIndex = 17;
		clickedy = false;
		cover.style.width = "0%";
		cover.style.height = "0%";
		cover.style.opacity= "0";
	}
	}
}
