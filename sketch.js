var bgI
var bg

function preload(){
  getBg()
 
}


function setup() {
  createCanvas(800,400);
 
}

function draw() {
  //getBg()
if(bgI){
  background(bgI)
} 
  drawSprites();
}
async function getBg(){
  var responce=await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata")
  var responsJson=await responce.json()
  var dateAndTime=responsJson.datetime
  var hour=dateAndTime.slice(11,13)
      if(hour>6&&hour<18){
       bg="images/morning.webp"
      }
        if(hour>18&&hour<19){
         bg1="images/sunSet.jpg"
        }
            if(hour>19&&hour<6){
             bg2="images/night.jpg"
            }
          // bgI=loadImage(bg)
           //bgI=loadImage(bg1)
           //bgI=loadImage(bg2)
}  
  

     
 