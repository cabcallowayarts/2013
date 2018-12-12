var imgArray = new Array("imageOne.jpg","imageTwo.jpg","imageThree.jpg");
var imgWrapper = document.querySelector(".main");
var imgCount = 0;

setInterval(cycleImages,5000);

function cycleImages(){
    imgCount++;
    if(imgCount >= imgArray.length){
        imgCount = 0;
    }
    imgWrapper.style.backgroundImage = "url(\ " + imgArray[imgCount] + ")";
}
