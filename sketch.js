var database,form,player,game;
var car1,car2,car3,car4,cars;
var gameState=0,playerCount=0;
var allPlayers;
var distance=0;
function setup(){
    createCanvas(displayWidth,displayHeight-50);
    database=firebase.database();
   game=new Game()
   game.getState();
   game.start();
}

function draw(){
    background("white");
  if(playerCount===4){
      game.update(1);
      
  }
  if(gameState===1){
      clear ();
      game.play();
  }
   }

