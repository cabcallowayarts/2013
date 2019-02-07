var main = document.getElementById("main");
var peek = document.getElementById("peek");
var sidebar = document.getElementById("sidebar");
var toggleC = document.getElementById("last").firstChild;
var compiler = document.getElementById("comp");
var goMain = document.getElementById("goMain");
var searchList = document.getElementById("searches");
var searchBar = document.getElementById("search");
var headerBar = document.getElementById("header");
var headerLinks = document.getElementById("headerLinks");
var overlay = document.getElementById("overlay");

var html = document.getElementById("html");
var css = document.getElementById("css");
var design = document.getElementById("design");
var tech = document.getElementById("tech");

var lastWindow;

var subjectArray = new Array("Beginning HTML","More Elements","Attributes","Links","What Not to Do HTML","References HTML","Beginning CSS","Box Model","More Styles","Ids and Classes","What Not to Do CSS","References CSS",
							"First Steps in Design","Layouts","Colors","What Not to Do Design","References Design","The Next Step","How to Get Online","Other Languages",
							"What Not to Do Technical","References Technical");

function replaceAll(find, replace, str) {
	return str.replace(new RegExp(find, 'g'), replace);
}

function updateSearch(val){
	searchList.innerHTML= "";
	var arrayCount = 0;
	var colorArray = new Array();
	var resultArray = new Array();
	var testString = val.toLowerCase();
	testString = replaceAll(" ","_",testString);
	if(val != ""){
	for(var i = 0;i<subjectArray.length;i++){
		var compareString = subjectArray[i].toLowerCase();
		compareString = replaceAll(" ","_",compareString);
		if(compareString.indexOf(testString) != -1){
			if(i<=5){
				colorArray[arrayCount] = "html";
			}else if(i>5 && i<12){
				colorArray[arrayCount] = "css";
			}else if(i>11 && i<17){
				colorArray[arrayCount] = "design";
			}else{
				colorArray[arrayCount] = "tech";
			}
			resultArray[arrayCount++] = subjectArray[i];
		}
	}

	for(var i = 0;i<resultArray.length;i++){
		var finalLink = resultArray[i].toLowerCase();
		var finalColor;
		finalLink = replaceAll(" ","_",finalLink);
		switch(colorArray[i]){
			case "html":
				finalColor = "#C43770";
				break;
			case "css":
				finalColor = "#409230";
				break;
			case "design":
				finalColor = "#D96B2F";
				break;
			case "tech":
				finalColor = "#588DDE";
				break;
		}
		searchList.innerHTML += "<a onmousedown='openSection(\"sections/" + finalLink + "\");'><li style='background-color:" + finalColor + ";' >" + resultArray[i] + "</li></a>";
	}
	}
}

function sizeThings(){
	if(window.innerWidth > 800){
		var sideWidth = html.offsetHeight + "px";
		var bannerHeight = header.offsetHeight;
		sidebar.style.width = sideWidth;
		sidebar.style.height = window.innerHeight - bannerHeight + "px";
		sidebar.style.top =  bannerHeight + "px";
		peek.style.left = sideWidth;
		main.style.left = sideWidth;
		main.style.top = bannerHeight + "px";
		main.style.height = window.innerHeight - bannerHeight + "px";
		main.style.width = window.innerWidth - html.offsetHeight - 12 + "px";
		compiler.style.left = sideWidth;
		compiler.style.top = bannerHeight + "px";
		compiler.style.height = window.innerHeight - bannerHeight + "px";
		compiler.style.width = window.innerWidth - html.offsetHeight + "px";
		searchList.style.right = (window.innerWidth/20) + "px";
	}else{
		var sideWidth = html.offsetWidth + "px";
		var bannerHeight = window.innerHeight/10;
		sidebar.style.width = "100%";
		sidebar.style.height = sideWidth;
		main.style.left = "0%";
		main.style.width = "100%";
		main.style.top = html.offsetWidth + bannerHeight + "px";
		main.style.height = (window.innerHeight * .9) - html.offsetWidth + "px";
		compiler.style.left = "0%";
		compiler.style.width = "100%";
		compiler.style.top = html.offsetWidth + bannerHeight + "px";
		compiler.style.height = (window.innerHeight * .9) - html.offsetWidth + "px";
		searchList.style.right = (window.innerWidth * .1) + 6 + "px";
	}
	overlay.style.opacity = 0;
	setTimeout(function(){overlay.style.top = "-100%"},1000);
}

function peekOut(color){
	if(window.innerWidth > 800){
		peek.style.width = "1%";
		peek.style.backgroundColor = color;
	}
}

function peekIn(){
	peek.style.width = "0%";
}

function openSection(section){
	if(compilerShown == true){
		main.src = section + ".html";
		toggleComp();
	}
	main.src = section + ".html";
}

function openChapter(section){
	main.src = "chapter/" + section + ".html";
}

function openSchool(section){
	main.src = "school/" + section + ".html";
}

var compilerShown = false;

function toggleComp(){
	if(compilerShown == false){
		compiler.style.display = "block";
		compilerShown = true;
		toggleC.innerHTML = "Go Back";
	}else{
		compiler.style.display = "none";
		compilerShown = false;
		toggleC.innerHTML = "Test Your Code";
	}
}
