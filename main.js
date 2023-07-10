function preload()
{

}

function setup()
{
    canvas= createCanvas(500, 400);
    canvas.position(70, 200);
    video=createCapture(VIDEO);
    video.hide();
    
}

function draw()
{
    image(video, 100, 80, 290 , 200);
   
    stroke(168, 10, 10);
    fill(168, 10, 10);

    circle(40, 40, 50);
    circle(460, 40, 50,);
    circle(40, 300, 50);
    circle(460, 300, 50);

    stroke(50, 168, 82);
    fill(50, 168,82);

    rect(63, 25, 375, 25);
    rect(63, 295, 373, 25);
    rect(27, 63, 25, 215);
    rect(448, 63, 25, 215);
}

function take_snapshot()
{
    save('avneet.png');
}
