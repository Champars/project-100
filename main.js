var speechRecognization = window.webkitSpeechRecognition;
var recognition = new speechRecognization;

function start() {
    document.getElementById("voiceoutput").innerHTML = " ";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("voiceoutput").innerHTML = content;
    if (content == "take my selfie") {
        say = "making your collage";
        speak();
        setTimeout(function() {
            take_snapshot();
        }, 5000);
    } else {
        say = document.getElementById("voiceoutput");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    var say = "";
    var utterthis = new SpeechSynthesisUtterance(say);
    synth.speak(utterthis);
    Webcam.attach(camera);
}
Webcam.set({
    width: 400,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
var camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result1").innerHTML = '<img id="selfie" src="' + data_uri + '">';
        document.getElementById("result2").innerHTML = '<img id="selfie" src="' + data_uri + '">';
        document.getElementById("result3").innerHTML = '<img id="selfie" src="' + data_uri + '">';
    });
}