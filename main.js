img=""
Status=""
Objects= [ ]
function preload() {
    img=loadImage("dog_cat.jpg")
}
function setup() {
canvas=createCanvas(380,380)
canvas.center();
}
function start() 
{
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Object Detection"

}
function modelLoaded(){
    console.log('model is loaded')
    Status=true
    objectDetector.detect(video,gotResult)
}
function gotResult(error,results){
if (error){
    console.log(error)
}
console.log(results)
Objects=results
}
function draw(){
    image(img,0,0,380,380)
    if(Status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video , gotResult);
        for (let i= 0; i < Objects.length; i++) {
            document.getElementById("status").innerHTML="Status; Object Detected"()
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+ objects.length;
            fill(r,g,b);
            percent=floor(Objects[i].confidence * 100)
            text(Objects[i].label+" " + percent + "%", Objects[i].x , Objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(Objects[i].x , Objects[i].y , Objects[i].width+15 , Objects[i].height-15)
        }
    }
}

