video = ""
objects = []
status = ""
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
    document.getElementById("status").innerHTML = "STATUS: DETECTING OBJECTS";

}
function draw() {
  image(video,0,0,480,380);
  if(status != ""){
    objectDetector.detect(video,gotResult)
    for(i=0 ; i<objects.length ; i++) {
        document.getElementById("status").innerHTML = "STATUS: OBJECT DETECTED"
        document.getElementById("no_of_objects").innerHTML = "NO. OF OBJECTS DETECTED = " + objects.length;
        fill("#3b021e")
        
        percent = floor(objects[i].confiedence*100)
        text(objects[i].label + " " + percent + "%", objects[i].x + 15,objects[i].y + 15)
        noFill();
        stroke("#02063b")
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }
  }

}
function modelloaded() {
    console.log("model is initialised");
    video.speed(1)
    video.volume(1)
    video.loop()
}
function gotResult(results,error) {
    if(error){
        console.log(error)
    }
    else {
        console.log(results);
        objects = results;
    }

    
}
