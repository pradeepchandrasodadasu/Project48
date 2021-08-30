class Horse {
    constructor(){
        //creates properties of player
        this.name = null;
        this.index = null;
        this.x = 70;
        this.y = 447;
        this.image = loadImage("animations/standing.png");
        this.animation1 = loadAnimation("animations/running/running_1.png",
        "animations/running/running_2.png",
        "animations/running/running_3.png",
        "animations/running/running_4.png",
        "animations/running/running_5.png",
        "animations/running/running_6.png",
        "animations/running/running_7.png",
        "animations/running/running_8.png",
        "animations/running/running_9.png",
        "animations/running/running_10.png",
        "animations/running/running_11.png",
        "animations/running/running_12.png");
        this.animation1.frameDelay = 2;

        this.animation2 = loadAnimation("animations/jumping/jumping_1.png",
        "animations/jumping/jumping_1.png",
        "animations/jumping/jumping_1.png",
        "animations/jumping/jumping_1.png",
        "animations/jumping/jumping_1.png");
        this.animation2.frameDelay = 2;

    }
 
    //creates getCount function
    getCount(){
        //reads the value of player count from database
        database.ref("playerCount").on("value",function (value){
            playerCount = value.val();
        });
    }

    //creates updateCount function
    updateCount(value){
        //updates the playerCount value in database
        database.ref("/").update({
            playerCount : value
        });
    }

    //creates update function
    update(){
        //updates the database by setting a new node for each player
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            x : this.x,
            y : this.y
        });
    }

    static playersInfo(){
        database.ref("players").on("value",function (data){
            twoHorses = data.val();
        });
    }
}