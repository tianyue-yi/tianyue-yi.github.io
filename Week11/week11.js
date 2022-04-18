//

$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'Pick_Up.wav');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);

    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });

    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });

    $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });

    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });

    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
    

// blur images after clicking on drinks

$('#drink').click(function (e) {
    e.stopPropagation();
    $('#drunk').show();
});
$('body').click(function () {
    $('#drunk').hide();
});

//copy and pasting

$('#friend').click(function (e) {
    e.stopPropagation();
    $('#play_1').show();
});
$('body').click(function () {
    $('#play_1').hide();
});

$('#stranger').click(function (e) {
    e.stopPropagation();
    $('#smallTalk').show();
});
$('body').click(function () {
    $('#smallTalk').hide();
});

$('#chair').click(function (e) {
    e.stopPropagation();
    $('#kiss').show();
});
$('body').click(function () {
    $('#kiss').hide();
});

$('#picture').click(function (e) {
    e.stopPropagation();
    $('#mona').show();
});
$('body').click(function () {
    $('#mona').hide();
});

$('#drink').click(function (e) {
    e.stopPropagation();
    $('#drunk').show();
});
$('body').click(function () {
    $('#drunk').hide();
});

$('#lamp').click(function (e) {
    e.stopPropagation();
    $('#lessDrunk').show();
});
$('body').click(function () {
    $('#lessDrunk').hide();
});

//swich on and off
// if ($('#myBottle').hide()) {
// $('#myBottle').show();
//     } else {
//         $('#myBottle').hide();
//     }
// }

// $("#myBottle").click(function()) {
//     $("#myBottle").hide("slow", function() {
//         $("#myBottle").css("-webkit-filter", "blur(15px)");    
//     })
// }

});