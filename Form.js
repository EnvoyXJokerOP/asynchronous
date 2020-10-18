class Form {
    constructor(){
     this.Title= createElement('h2')
     this.Input= createInput("Display Name:")
     this.Button= createButton('PLAY')
     this.Greeting= createElement('h3')
    }
  hide(){
    this.Input.hide()
    this.Button.hide()
    this.Greeting.hide()
    
  }
    display(){
   this.Title.html("LMAO Racer")
    this.Title.position(130,0)
    this.Input.position(130,160)
    this.Button.position(250,200)
    this.Button.mousePressed(() => {
       this.Input.hide()
        this.Button.hide()
         player.name= this.Input.value()
        playercount++
        player.index=playercount
        console.log(playercount)
        player.updateplayercount(playercount)
        player.update()
       this.Greeting.html("Aarav welcomes to u to the first multiplayer game developed by him: Aarav Mahan hai, "+player.name)
      this.Greetings.position(130,160)
    })
    }
}

