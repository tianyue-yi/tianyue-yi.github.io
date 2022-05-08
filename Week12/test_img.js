// Add a "checked" symbol when clicking on a list item
var veggieChecked = false;
var dairyChecked = false;
var meatChecked = false;

$( ".dropdown-content_veggie" ).click(function() {
  veggieChecked = true;
  if (veggieChecked) {
    $('LI').click(function() {
      $(this).toggleClass('checked_veggie');
    })
  } else {
    veggieChecked = false;
  }
  console.log(veggieChecked);
});

$( ".dropdown-content_dairy" ).click(function() {
  dairyChecked = true;
  if (dairyChecked) {
    $('LI').click(function() {
      $(this).toggleClass('checked_dairy');
    })
  } else {
    dairyChecked = false;
  }
  console.log(dairyChecked);
});

$( ".dropdown-content_meat" ).click(function() {
  meatChecked = true;
  if (meatChecked) {
    $('LI').click(function() {
      $(this).toggleClass('checked_meat');
    })
  } else {
    meatChecked = false;
  }
  console.log(meatChecked);
});

// $('LI').click(function() {
//    $(this).toggleClass('checked');
// })

// ----------------------add a couple of boxes while clicking ingredients-----------------------------------------

var myImage = document.querySelector('img');
//var myImage = new Image();
var imageArray = ["img01.jpg",
"img02.jpg",
"img03.jpg",
"img04.jpg",
"img05.jpg",
"img06.jpg",
"img07.jpg",
"img08.jpg",
"img09.jpg",
];
var imageIndex = 0;

$('LI').on('click', function(){
  imageIndex = Math.floor(Math.random() * imageArray.length); // create random index
  selectedImage = imageArray[imageIndex];
  console.log(imageIndex);

  myImage.setAttribute("src", imageArray[imageIndex]);
  $(".wrapper").append("<div>" + myImage +"</div>");
  //$(".wrapper").append("<div><img id='mainImage'/>test it out</div>")  
})


// console.log ('about to fetch an image')
// fetch ("EvanRoth.jpg").then(response => {
//   console.log(response);
//   return response.blob();
// })
// .then (blob => {
//   console.log();
//   document.getElementById('img_test').src = URL.createObjectURL(blob);
// })

// fetch ("cat.jpg").then(response => {
//   console.log(response);
//   return response.blob();
// })
// .then (blob => {
//   console.log();
//   document.getElementById('cat').src = URL.createObjectURL(blob);
// })
