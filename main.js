function preload() {
}


function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on('pose' , gotposes)
}
function modelloaded() {
    console.log('PoseNet Is Initialized')
}

function draw() {
    image(video,0,0,300,300);
    fill(255,0,0);
    storke(255,0,0);
    
    
}

function take_snapshot(){
    save('myFilterImage.png')
}


