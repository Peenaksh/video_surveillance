video = ""

function setup(){
    canvas = createCanvas(480,380)
    canvas.center()
    video.hide()

}
function preload() {
    video = createVideo("video.mp4")
}

function start() {
    objectDetector = ml5.objectDetector('cocoSSD',modelloaded)
    document.getElementById("status").innerHTML = "STATUS: DETECTING OBJECTS"

}
function draw() {
  image(video,0,0,480,380);

}
function modelloaded() {
    console.log("model is initialised");
    video.speed(1)
    video.volume(0)
    video.loop()
}