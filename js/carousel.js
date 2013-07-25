var carousel = document.getElementById('carousel');

// Buttons
var next = document.getElementById('next');
var previous = document.getElementById('previous');

carousel.style.marginLeft = 0;

// Create mouseoveer and mouseexit events for the buttons
// to change their opacity from .5 to .2

function dropOpacity(whichArrow) {
  whichArrow.style.opacity = 0.2;
}

function restoreOpacity(whichArrow) {
  whichArrow.style.opacity = 0.5;
}



next.onmouseover = function(event) {
  dropOpacity(next);
};

next.onmouseout = function(event) {
  restoreOpacity(next);
};

previous.onmouseover = function(event) {
  dropOpacity(previous);
};

previous.onmouseout = function(event) {
  restoreOpacity(previous);
};

// Create onclick events to advance the images
var imageWidth = 612;

function scrollPictureRight() {
  var imageCount = document.getElementsByTagName("img").length;
  var rightBookEnd = (imageWidth * (imageCount - 1)) * -1;
  if (parseInt(carousel.style.marginLeft) > rightBookEnd) {
    var currentLeftMargin = parseInt(carousel.style.marginLeft);
    currentLeftMargin -= imageWidth;
    carousel.style.marginLeft = currentLeftMargin + "px";
  } else {
    carousel.style.marginLeft = 0;
  }
}

// var crawlingCount = 0;

// function crawlRightTwoPixel() {


//     var currentLeftMargin = parseInt(carousel.style.marginLeft);
//     currentLeftMargin -= 2;
//     carousel.style.marginLeft = currentLeftMargin + "px";

//     crawlingCount += 1
// }

// function slideRight() {
//   crawlInterval = setInterval(crawlRightTwoPixel, 0.1);
// }

// function stopSliding() {
//   window.clearInterval(crawlInterval);
// }

function scrollPictureLeft() {
  var imageCount = document.getElementsByTagName("img").length;
  if (parseInt(carousel.style.marginLeft) < 0) {
    var leftMargin = parseInt(carousel.style.marginLeft);
    leftMargin += imageWidth;
    carousel.style.marginLeft = leftMargin + "px";
  } else {
    carousel.style.marginLeft = ((imageWidth * (imageCount - 1)) * -1) + "px";
  }
}

next.onclick = function(event) {
  scrollPictureRight();
};

previous.onclick = function(event) {
  scrollPictureLeft();
};

var playbutton = document.getElementById('playbutton');

playbutton.onclick = function(event) {
  interval = setInterval(scrollPictureRight, 1500);
};






