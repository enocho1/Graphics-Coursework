//just drawing a rectangle for now
function main(){
    var canvas = document.getElementById("example");
    if (!canvas){
        console.log("was unable to retrieve the canvas, sorry!!");
        return;
    }
    console.log("working...");
    //getting the rendering context for 2DCG
    var a = 0.1;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgba(255,255,0,0.8)";//sets the colour
    ctx.fillRect(10,10,100,100); //fills the rect with that colour
    ctx.fillStyle = "rgba(255,0,255, 0.8)";//sets the colour
    ctx.fillRect(90,10,100,100); //fills the rect with that colour
    ctx.fillStyle = "rgba(0,255,255, 0.8)";//sets the colour
    ctx.fillRect(50,90,100,100); //fills the rect with that colour
}
