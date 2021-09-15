leftX = 0;
leftY = 0;
rightX = 0;
rightY = 0;
scoreLeft = 0;
statusSong = "";
faded = "";
mem = "";

function preload() {
    faded = loadSound("songFaded.mp3");
    mem = loadSound("songMem.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    PoseNet = ml5.poseNet(video, modelLoaded)
    PoseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log("Model Loaded!")
}

function gotPoses(result) {
    if (result.lenght > 0) {
        leftX = result[0].pose.leftWrist.x;
        leftY = result[0].pose.leftWrist.y;
        rightX = result[0].pose.rightWrist.x;
        rightY = result[0].pose.rightWrist.y;
    }
}