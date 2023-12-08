nosex=0;
nosey=0;
wristxr=0;
wristxl=0;
difference=0;
function setup(){
canvas=createCanvas(550,550);
canvas.position(560,150)
v=createCapture(VIDEO);
v.size(550,500);
f=ml5.poseNet(v,modelLoaded);
f.on('pose',answer);
}
function modelLoaded(){
console.log("PoseNet Is Active")
}
function answer(result){
if (result.length>0) {
    console.log(result);
    wristxl=result[0].pose.leftWrist.x;
    wristxr=result[0].pose.rightWrist.x;
    difference=floor(wristxl-wristxr);
    console.log("the size of text",difference);
}

}
function draw(){
background("white");
document.getElementById("w").innerHTML="the size of the font -    "+difference+"px";
textSize(difference);
text("HADI",300,300);
}