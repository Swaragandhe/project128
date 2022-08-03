leftWristX=0;
leftWristY=0;
scoreLeftwrist=0;
scoreRightWrist=0;
rightWristX=0;
rightWristY=0;

function setup() {
    canvas = createCanvas(600 , 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log("Posenet is loaded");
}
function gotPoses(results) {
if(results.length > 0) {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("Left wrist  X =  " + leftWristX);
    console.log("Left wrist  Y =  " + leftWristY);
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("Right wrist  X = "  +  rightWristX);
    console.log("Right wrist  X =  " + rightWristY);


}
}
song1="";
song2="";
song1_status="";
song2_status="";

function draw() {
    image(video , 0 , 0 , 600 , 500)
    fill("#f50505");
    stroke("#f50505");
    circle(leftWristX . leftWristY , 20)
}

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function play() {
    song1.play();
}
