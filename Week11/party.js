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

    //
    $('#btn1').click(function (e) {
        e.stopPropagation();
        $('#img1').show();
        $('#img2').hide();
        $('#img3').hide();
    });
    $('#btn2').click(function (e) {
        e.stopPropagation();
        $('#img2').show();
        $('#img1').hide();
        $('#img3').hide();
    });
    $('#btn3').click(function (e) {
        e.stopPropagation();
        $('#img3').show();
        $('#img2').hide();
        $('#img1').hide();
    });
    $('body').click(function () {
        $('#img1,#img2,#img3').hide();
    });

    $('#btn4').click(function (e) {
        e.stopPropagation();
        $('#img4').show();
        $('#img5').hide();
        $('#img6').hide();
    });
    $('#btn5').click(function (e) {
        e.stopPropagation();
        $('#img5').show();
        $('#img4').hide();
        $('#img6').hide();
    });
    $('#btn6').click(function (e) {
        e.stopPropagation();
        $('#img6').show();
        $('#img5').hide();
        $('#img4').hide();
    });
    $('body').click(function () {
        $('#img4,#img5,#img6').hide();
    });

    $('#btn7').click(function (e) {
        e.stopPropagation();
        $('#img7').show();
        $('#img8').hide();
        $('#img9').hide();
    });
    $('#btn8').click(function (e) {
        e.stopPropagation();
        $('#img8').show();
        $('#img7').hide();
        $('#img9').hide();
    });
    $('#btn9').click(function (e) {
        e.stopPropagation();
        $('#img9').show();
        $('#img8').hide();
        $('#img7').hide();
    });
    $('body').click(function () {
        $('#img7,#img8,#img9').hide();
    });
    $('#btn10').click(function (e) {
        e.stopPropagation();
        $('#img10').show();
    });
    $('body').click(function () {
        $('#img10').hide();
    });
});
