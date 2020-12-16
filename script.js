function preload() {
    btfly_img = loadImage('butterfly.jpg');
    flw_img = loadImage('https://media-public.canva.com/5iv30/MADh3W5iv30/2/tl.png');
}

function setup() {
    var canvas = createCanvas(640, 400);
    canvas.position(380, 150);
    video = createCapture(VIDEO);
    video.size(640, 400);
    video.hide();
    var posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function saveimg() {
    var vl = prompt('What file name do you want to save in?');
    if (vl!=null) {
        save(vl+'.png');
    }
}

function draw() {
    image(video, 0, 0, 640, 400);
    fill('#ffa6f2');
    rect(0, 0, 640, 10);
    fill('#b9ecf0');
    rect(10, 10, 630, 10);
    fill('#bcf79e');
    rect(20, 20, 620, 10);
    fill('#f7e19e');
    rect(30, 30, 610, 10);
    fill('#f7e19e');
    rect(0, 10, 10, 390);
    fill('#bcf79e');
    rect(10, 20, 10, 380);
    fill('#b9ecf0');
    rect(20, 30, 10, 370);
    fill('#ffa6f2');
    rect(30, 40, 10, 360);
    fill('#ffa6f2');
    rect(40, 360, 570, 10);
    fill('#b9ecf0');
    rect(40, 370, 580, 10);
    fill('#bcf79e');
    rect(40, 380, 590, 10);
    fill('#f7e19e');
    rect(40, 390, 600, 10);
    fill('#f7e19e');
    rect(630, 40, 10, 350);
    fill('#bcf79e');
    rect(620, 40, 10, 340);
    fill('#b9ecf0');
    rect(610, 40, 10, 330);
    fill('#ffa6f2');
    rect(600, 40, 10, 320);
    image(btfly_img, 5, 345, 50, 50);
    image(flw_img, 590, 5, 50, 50);
}

function gotPoses(results) {
    console.log(results);
}

function modelLoaded() {
    console.log('PoseNet Loaded!')
}
