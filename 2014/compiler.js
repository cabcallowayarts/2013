var docCount = 0;
var css = document.getElementById("css").value;
var html = document.getElementById("html").value;
var js = document.getElementById("js").value;
var content = document.getElementById("content");

function insertAtCaret(areaId,text) {var txtarea = document.getElementById(areaId);var scrollPos = txtarea.scrollTop;var strPos = 0;var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? "ff" : (document.selection ? "ie" : false ) );if (br == "ie") {txtarea.focus();var range = document.selection.createRange();range.moveStart ('character', -txtarea.value.length);strPos = range.text.length;} else if (br == "ff") strPos = txtarea.selectionStart;var front = (txtarea.value).substring(0,strPos);var back = (txtarea.value).substring(strPos,txtarea.value.length);txtarea.value=front+text+back;strPos = strPos + text.length;if (br == "ie") {txtarea.focus();var range = document.selection.createRange();range.moveStart ('character', -txtarea.value.length);range.moveStart ('character', strPos);range.moveEnd ('character', 0);range.select();} else if (br == "ff") {txtarea.selectionStart = strPos;txtarea.selectionEnd = strPos;txtarea.focus();}txtarea.scrollTop = scrollPos;}

function updateContent(e, field){
	var css = document.getElementById("css").value;
	var html = document.getElementById("html").value;
	var js = document.getElementById("js").value;
	var key = window.event ? e.keyCode : e.which;
 	 if (key == 9) {
        e.preventDefault();
        insertAtCaret(field.id,"	");
  	}
	if(html != ""){
		content.innerHTML = "<!DOCTYPE html><html><title>Untitled Page</title><style>" + css + "</style></head><body>" + html + "<script>" + js + "</script></body></html>";
	}else{
		content.innerHTML = "<div id='filler'><h1>{Your content goes here}</h1></div>";
	}

}

function saveTextAsFile(){
	var css = document.getElementById("css").value;
	var html = document.getElementById("html").value;
	var js = document.getElementById("js").value;
	var textToWrite = "<!DOCTYPE html><html><title>Untitled Page</title><style>" + css + "</style></head><body>" + html + "<script>" + js + "</script></body></html>";
	var textFileAsBlob = new Blob([textToWrite], {type:'text/html'});
	var fileNameToSaveAs = "index" + docCount++;

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null){
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else{
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event){
	document.body.removeChild(event.target);
}
