var ball;
var database, position;

function setup(){
database = firebase.database();

    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var newball = database.ref('ball/position');

    newball.on("value", readPosition, showError);
}

function draw(){
    background("white");
      if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
      }
     else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
      }
     else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
      }
     else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
     }
    drawSprites();
}

/*function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
} */

function writePosition(x,y){
database.ref('ball/position').set({
    'x': position.x + x,
    'y': position.y + y})
}

function readPosition(mydata){
     position = mydata.val();
     ball.x = position.x;
     ball.y = position.y;
}

function showError(){
    console.log("There is an error.");
}
