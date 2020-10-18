class Game {
    constructor(){
 
    }
    getGamestate(){
    var  Gamestateref= database.ref('/')
    Gamestateref.on("value",(data)=>{
        Gamestate=data.val()
    })
    }
    updategamestate(state){
     database.ref('Gamestate').update({
        Gamestatet:state

     })
    }
     async start(){
         if(Gamestate===0){
        player=new Player()
        var playercountref=await database.ref('playercount').once("value")
       if(playercountref.exists()){
      playercount=playercountref.val()
      player.getplayercount()
       }

       
        form= new Form()
        form.display()
         }
        }
    play(){
    form.hide()
    textSize=30
    text("gameStart",100,120)
    Player.getplayerinfo()
    if(allplayers!==undefined){
    var display_p=130
    for(var plr in allplayers){
        if(plr==="player"+player.index){
      fill("red")
        }
        else{
fill("black")
        }
        display_p=display_p+20
        textSize(15)
        text(allplayers[plr].name + ": " + allplayers[plr].distance, 120,display_p)
    }
    }

   if(keyDown("up")&&player.index!==null){
player.distance=player.distance+50
player.update()
   }
    }

    }
