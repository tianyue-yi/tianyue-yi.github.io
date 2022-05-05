
// $(document).ready(function() {
  
//   $('button').on('click', function(){
//     $(".wrapper").append("<div id = 'images'> test it out </div>")  
//   })

// })


// var myImages = ["img01.jpg",
// "img02.jpg",
// "img03.jpg",
// "img04.jpg",
// "img05.jpg"];
// var index = 0;

// function makeImage() {
//   document.getElementsByClassName("images").src = image[index];
//   //  var img = document.createElement('img')
//   //  img.src = image[index];
//   //  document.getElementsByClassName('images').src = image[2];
// }

// function nextImage(){
//   var img = document.getElementById('content').getElementsByTagName('img')[0]
//   index++;
//   index = index % images.length; 
//   img.src = images[index];
// }

// function myFunction() {
//   alert("Page is loaded");
// }
 //-------------------------------------------------------------------------
var myImage = document.getElementById('mainImage');
var imageArray = ["img01.jpg",
"img02.jpg",
"img03.jpg",
"img04.jpg",
"img05.jpg"];
var imageIndex = 0;

function changeImage() {


  myImage.setAttribute("src", imageArray[imageIndex]);
  imageIndex++;
  if (imageIndex > 4) {
    imageIndex = 0;
  }
}

$('button').on('click', function(){
  $(".wrapper").append("<div id = 'mainImage'> test it out </div>")  
})