/*
Process to add images:
1: Create new function called lightbox + number
2: Add variable clicked + number
3: Copy function and variable from other function and replace neccessary variables
4: In the function closeLight, add 'if' statement with corresponding variables
*/
var clickedOne = false;
function lightbox(){
	if(clickedOne == false){
		clicker.style.left = (window.innerWidth/2) - (clicker.offsetWidth+150) + "px";
		clicker.style.top = (window.innerHeight/2) - (clicker.offsetHeight+150) + "px";
		clicker.style.width = "400px";
		clicker.style.height = "400px";
		clicker.style.border = "10px #DDD solid";
		clicker.style.zIndex = "10001";
		clickerThree.style.zIndex = "9999";
		clickerTwo.style.zIndex = "9999";
		clickedOne = true;
		cover.style.width = "100%";
		cover.style.height = "100%";
		cover.style.opacity= ".7";
		cover.style.zIndex = "10000";
	}else{
		clicker.style.left = "0px";
		clicker.style.top = "0px";
		clicker.style.width = "100px";
		clicker.style.height = "100px";
		clicker.style.border = "none";
		clickedOne = false;
		cover.style.width = "0%";
		cover.style.height = "0%";
		cover.style.opacity= "0";

	}
}
var clickedTwo = false;
function lightboxTwo(){
	if(clickedTwo == false){
		clickerTwo.style.left = (window.innerWidth/2) - (clickerTwo.offsetWidth+150) + "px";
		clickerTwo.style.top = (window.innerHeight/2) - (clickerTwo.offsetHeight+150) + "px";
		clickerTwo.style.width = "400px";
		clickerTwo.style.height = "400px";
		clickerTwo.style.border = "10px #DDD solid";
		clickerTwo.style.zIndex = "10001";
		clicker.style.zIndex = "9999";
		clickerThree.style.zIndex = "9999";
		clickedTwo = true;
		cover.style.width = "100%";
		cover.style.height = "100%";
		cover.style.opacity= ".7";
		cover.style.zIndex = "10000";
	}else{
		clickerTwo.style.left = "100px";
		clickerTwo.style.top = "0px";
		clickerTwo.style.width = "100px";
		clickerTwo.style.height = "100px";
		clickerTwo.style.border = "none";
		clickedTwo = false;
		cover.style.width = "0%";
		cover.style.height = "0%";
		cover.style.opacity= "0";
	}
}
var clickedThree = false;
function lightboxThree(){
	if(clickedThree == false){
		clickerThree.style.left = (window.innerWidth/2) - (clickerThree.offsetWidth+150) + "px";
		clickerThree.style.top = (window.innerHeight/2) - (clickerThree.offsetHeight+150) + "px";
		clickerThree.style.width = "400px";
		clickerThree.style.height = "400px";
		clickerThree.style.border = "10px #DDD solid";
		clickerThree.style.zIndex = "10001";
		clicker.style.zIndex = "9999";
		clickerTwo.style.zIndex = "9999";
		clickedThree = true;
		cover.style.width = "100%";
		cover.style.height = "100%";
		cover.style.opacity= ".7";
		cover.style.zIndex = "10000";
	}else{
		clickerThree.style.left = "200px";
		clickerThree.style.top = "0px";
		clickerThree.style.width = "100px";
		clickerThree.style.height = "100px";
		clickerThree.style.border = "none";
		clickedThree = false;
		cover.style.width = "0%";
		cover.style.height = "0%";
		cover.style.opacity= "0";
	}
}
function closeLight(){
	if(clickedOne == true){
		clicker.style.left = "0px";
		clicker.style.top = "0px";
		clicker.style.width = "100px";
		clicker.style.height = "100px";
		clicker.style.border = "none";
		clickedOne = false;
		cover.style.width = "0%";
		cover.style.height = "0%";
		cover.style.opacity= "0";
	}
	if(clickedTwo == true){
		clickerTwo.style.left = "100px";
		clickerTwo.style.top = "0px";
		clickerTwo.style.width = "100px";
		clickerTwo.style.height = "100px";
		clickerTwo.style.border = "none";
		clickedTwo = false;
		cover.style.width = "0%";
		cover.style.height = "0%";
		cover.style.opacity= "0";
	}
	if(clickedThree == true){
		clickerThree.style.left = "200px";
		clickerThree.style.top = "0px";
		clickerThree.style.width = "100px";
		clickerThree.style.height = "100px";
		clickerThree.style.border = "none";
		clickedThree = false;
		cover.style.width = "0%";
		cover.style.height = "0%";
		cover.style.opacity= "0";
	}
}
