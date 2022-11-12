noseX=0;
noseY=0;

leftWristX=0;
rightWristX=0;
difference=0;



function setup(){
    video=createCapture(VIDEO);
    video.size(600,500);

    canvas=createCanvas(600,500);
    canvas.position(650,100);
    
    poseNet=ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses);
}

function modalLoaded(){
    console.log('poseNet is initialise');
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX=" + noseX + "noseY=" + noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
    }
}


function draw(){
    background("cyan");
    document.getElementById("square_size").innerHTML="Width and height of the square will be= " + difference + "px";
fill("yellow");
stroke("yellow");
textSize(difference);
text('ATHARV',50,400);

}
