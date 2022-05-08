
// var myImage = document.getElementById('mainImage');
// var imageArray = ["img01.jpg",
// "img02.jpg",
// "img03.jpg",
// "img04.jpg",
// "img05.jpg",
// "img06.jpg",
// "img07.jpg",
// "img08.jpg",
// "img09.jpg",
// ];
// var imageIndex = 0;

// function showImage() { // pass it on diff blocks
  
//   function random_index() {
    
//   }
//   imageIndex = Math.floor(Math.random() * imageArray.length);
  
//   console.log(imageIndex);
//   myImage.setAttribute("src", imageArray[imageIndex]);
  
//   //document.getElementById("wrapper").appendChild("myImage");
// }

// $('button').on('click', function(){
//   $(".wrapper").append("<div> <img id='mainImage'></div>")  
// })



// TRY again

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


let img = document.querySelector('img');
let btn = document.querySelector('LI')

btn.addEventListener('click', () => {
    imageIndex = Math.floor(Math.random() * imageArray.length); // create random index
    img.src = imageArray[imageIndex];
    
    $(".wrapper").append("<div> <img id='mainImage'></div>")
})