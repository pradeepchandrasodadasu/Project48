class Form {
    constructor(){
       //create properties
       this.input = createInput("Name");
       this.title = createElement("h1");
       this.start = createButton("Start");
       this.resetButton = createButton("Reset")
       this.greeting = createElement('h3')
    }

    //creates display function
    display(){
       //gives text to this.title & sets it position
       this.title.html("Horse Race");
       this.title.position(windowWidth/2-50,0);

       //sets position of this.input
       this.input.position(width/2,height/2-50);

       //sets position of this.button
       this.start.position(width/2+120,height/2);

       /*****written by SANIA ******/
       this.resetButton.position(displayWidth - 100, 50);
       this.resetButton.mousePressed(function(){
           database.ref('/').set({
               gameState : 0,
               playerCount : 0
           })
       })

       this.start.mousePressed(()=>{
           //hides input,title and start
           this.input.hide();
           this.title.hide();
           this.start.hide();
           
           //increases playerCount
           playerCount += 1;

           //gives value to player.index
           player.index = playerCount ; // made changes by SANIA

           //calls updateCount of player class
           player.updateCount(playerCount);

           //gives value to player.name
           player.name = this.input.value();

           //calls update function of player class
           player.update();


           this.greeting.html("Welcome to Horse Race - "+ player.name)
           this.greeting.position(width/2-100, height/4)
           
       });
    }

    //creates hide function
    hide(){
        this.input.hide();
        this.title.hide();
        this.start.hide();
        this.greeting.hide();
    }
}
