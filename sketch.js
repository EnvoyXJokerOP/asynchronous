var Gamestate=0
var database
var playercount
var player
var game
var form

function setup(){
    database=firebase.database()
    createCanvas(500,500);
    game= new Game()
    game.getGamestate()
    game.start()
    
}

function draw(){
    background("white");
    if(playercount===4){
    game.updategamestate(1)
    }
if(Gamestate===1){
    clearl()
game.play()
}
    
}
 
