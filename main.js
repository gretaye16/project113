function preload() {
}

function setup() {
    canvas=createCanvas(640,480);
    canvas.position(100,230);

    video=createCapture(VIDEO);
    video.hide();

    color="";
}

function draw() {
image(video,0,0,640,480);
fill("red");
stroke("red");
rect(90,40,460,20);
rect(90,420,460,20)
rect(40,90,20,300)
rect(580,90,20,300)
}

function take_snapshot() {
save("cynthia.png")
}


