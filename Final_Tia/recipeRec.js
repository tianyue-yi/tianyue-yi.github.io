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
    meatChecked = false;
  } 
  console.log(meatChecked);
});


// ----------------------add a couple of boxes while clicking ingredients-----------------------------------------

var nameArray= [
  "Strawberry Shortcake Pancakes",
  "Sri Lankan Bibikkan",
]
var imageArray = [
  "img01.png",
  "img02.png",
  "img03.png",
  "img04.png",
  "img05.png",
  "img06.png",
  "img07.png",
  "img08.png",
  "img09.png",
  "img10.png",
  "img12.png",
  "img13.png",
  "img20.png",
];
var imageIndex = 0;

function recipeDisplay() {
  var myImage = document.createElement("IMG");

  imageIndex++;
  if (imageIndex > imageArray.length-1) {
    imageIndex = 0;
  }
  
  myImage.setAttribute("src", imageArray[imageIndex]);
  myImage.setAttribute("width", "300");
  myImage.setAttribute("height", "230");
  
  document.getElementById("myRec").appendChild(myImage);
  $("IMG").wrap("<a href='https://tasty.co/' ></a>");

  // Check if the element is selected/checked
  checkBox = document.querySelector('.dropdown-content_veggie');
  console.log(checkBox);
  // remove an image when clicking on a checked box
  if(checkBox.classList.contains('checked_veggie')) {
    //alert("Checkbox checked!");
    document.getElementById("myRec").removeChild(myImage);
  }
}

// add name to pic
function addName(){
  document.querySelectorAll("img").innerHTML = nameArray[imageIndex]
}

// ---------------------click and increase the number------------------------------------------------------------
const totalCount = document.getElementById("total-count");
var count = 0;
totalCount.innerHTML = count;
// Add JS function for Increment functionality
function increment() {
  count++;
  totalCount.innerHTML = count;
}

$("LI").click (function() {
  increment();
})


