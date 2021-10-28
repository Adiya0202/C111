Webcam.set({
width:400,
height:290,
image_format:"png",
png_quality: 200
});
var cam=document.getElementById("camera");

Webcam.attach(cam);
function take_pic(){
    Webcam.snap(function(data_uri){
        document.getElementById("pic").innerHTML='<img id="captured_img" src="'+data_uri+'">';
    });
}
console.log("ml5version",ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/W_NPSZUdD/model.json",modelLoaded);

function modelLoaded(){
console.log("model is intialised");
}