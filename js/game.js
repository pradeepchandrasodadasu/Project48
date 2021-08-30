class Game {
  constructor(){}

  //creates getState function
  getState(){
    //reads the value of gameState from database
    database.ref("gameState").on("value",function (data){
      gameState = data.val();

    });
  }

  //creates update function
  update(state){
    //update the gameState value in database
    database.ref("/").update({
      gameState : state
    });
  }

  //creates start function
  start(){
    //if gameState is equal to 0 -
    if(gameState === 0){ 
      //creates playerobject & call get count function of playerobject
      player = new Horse();
      player.getCount();

      //creates form object and call display function of form object
      form = new Form();
      form.display();

    }  

    //creates sprite objects and add Image to them
    horse1 = createSprite(player.x,player.y);
    horse1.addImage(player.image);
    horse2 = createSprite(player.x,player.y);
    horse2.addImage(player.image);
    //pushes the sprite objects into horses array
    horses = [horse1,horse2];
    
  }

  //creates play function
  play(){
    //calls hide function of form object
    form.hide();

    Horse.playersInfo();

    
    
    //if twoHorses is not equal to undefined -
    if(twoHorses !== undefined){
      horse1.x = twoHorses.player1.x;
      horse1.y = twoHorses.player1.y;
      horse2.x = twoHorses.player2.x;
      horse2.y = twoHorses.player2.y;

      //if right arrow pressed -
      if(keyDown(RIGHT_ARROW) && player.index !== null){
        //current player gets velocityX
        horses[player.index].x = 5;

        //changes animation for current player
        horses[player.index].changeAnimation = player.animation1;

        //gives the value of player.velocityX 
        player.x += 5;

        //call update function of player object
        player.update();

       

        //writes the text of "You" for the current player 
        if(horses[player.index-1] === player.index){
          fill("green");
          textSize(17);
          text("You",horses[player.index-1].x,horses[player.index-1].y);

          //player.addAnimation("running",player.animation1);
        }/*else{
          player.addImage(player.image);
        }*/

      }
    //draws sprite objects
    drawSprites();
    }
    
  }
}