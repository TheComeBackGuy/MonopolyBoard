// import {theBoard} from "theBoardSpaces.mjs";

// let currentRoll = ;
///players
let players = [
    {
        name: "Dennis",
        piece: "shoe",
        currentSpace: 1,
        money: 1500,
        properties:[],
        propertyNameList: [],

        buyProperty(thisProperty){
            this.money -= thisProperty.value;
            thisProperty.purchased = true;
            this.properties.push(thisProperty);
            this.propertyNameList.push(thisProperty.name);
            console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value);
        },

        propertyNames(){
            for(let i=0;i<this.properties.length; i++){
                this.propertyNameList.push(this.properties[i].name)
                console.log(i)
            }
            return this.propertyNameList
        }
    },
    {
        name: "Amanda",
        piece: "Dog",
        currentSpace: 1,
        money: 1500,
        properties:[],

        buyProperty(thisProperty){
            this.money -= thisProperty.value;
            thisProperty.purchased = true;
            this.properties.push(thisProperty);
            console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value)
        }
    },
    {
        name: "Snickers",
        piece: "Top",
        currentSpace: 1,
        money: 1500,
        properties:[],

        buyProperty(thisProperty){
            this.money -= thisProperty.value;
            thisProperty.purchased = true;
            this.properties.push(thisProperty.name);
            console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value)
        }
    },
        
]

//theBoard
const theBoard = [
    {
        name: "Jail",
        spaceType: "jail",

        spaceAction(player){
            console.log(`It's $50 to get out of jail, ${player.name}` )
            player.currentSpace =0;
            player.money -=50;
        }
    },
    {
        name: "GO!",
        spaceType: "GO",

        spaceAction(player){
            player.money += 200;
            console.log(`${player.name} collected $200!`)
        },
    },
    {
        name: "Mediterranean Avenue",
        spaceType: "property",
        purchased: false,
        value: 60,
        rent:0
    },
    {
        name: "Community Chest",
        spaceType: false,

        spaceAction(){
            console.log("Pick a card!")
        }
    },
    {
        name: "Baltic Avenue",
        spaceType: "property",
        purchased: false,
        value: 60,
        rent:0
    },
    {
        name: "Income Tax",
        spaceType: "tax",

        spaceAction(player){
            if (player.money * .1 > 200){
                player.money -= 200;
            } else {
                player.money *= .90 ;
            }
        console.log("Thanks for paying your taxes.");
        },


    },
    {
        name: "Reading Railroad",
        spaceType: "property",
        purchased: false,
        value: 200,
        rent:0
    },
    {
        name: "Oriental Avenue",
        spaceType: "property",
        purchased: false,
        value: 100,
        rent:0
    },
   {
        name: "Chance",
        spaceType: "card",
        
        spaceAction(){
            console.log("Pick a card!")
        }
    },
    {
        name: "Vermont Avenue",
        spaceType: "property",
        purchased: false,
        value: 100,
        rent:0
    },
    {
        name: "Connecticut Avenue",
        spaceType: "property",
        purchased: false,
        value: 100,
        rent:0
    },
    {
        name: "Just Visiting",
        spaceType: "visiting",
    },

    // LEFT SIDE OF BOARD
    {
        name: "St. Charles Place",
        spaceType: "property",
        purchased: false,
        value: 140,
        rent:0
    },
    {
        name: "Electric Company",
        spaceType: "property",
        purchased: false,
        value: 150,
        rent: 0
       },
    {
        name: "States Avenue",
        spaceType: "property",
        purchased: false,
        value: 140,
        rent:0
    },
    {
        name: "Virginia Avenue",
        spaceType: "property",
        purchased: false,
        value: 150,
        rent: 0
       },
    {
        name: "Pennsylvania Railroad",
        spaceType: "property",
        purchased: false,
        value: 200,
        rent:0
    },
    {
        name: "St. James Place",
        spaceType: "property",
        purchased: false,
        value: 180,
        rent: 0
       },
    {
        name: "Community Chest",
        spaceType: "card",

        spaceAction(){
            console.log("Pick a card!")
        }
    },
    {
        name: "Tennessee Avenue",
        spaceType: "property",
        purchased: false,
        value: 180,
        rent: 0
       },
    {
        name: "New York",
        spaceType: "property",
        purchased: false,
        value: 200,
        rent:0
    },
    {
        name: "Free Parking!",
        spaceType: "parking",
       },
// TOP ROW
{
    name: "Kentucky Avenue",
    spaceType: "property",
    purchased: false,
    value: 200,
    rent:0
},
{
    name: "Chance",
    spaceType: "card",
    
    spaceAction(){
        console.log("Pick a card!")
    }
},
{
    name: "Indiana Avenue",
    spaceType: "property",
    purchased: false,
    value: 220,
    rent:0
},
{
    name: "illinois Avenue",
    spaceType: "property",
    purchased: false,
    value: 240,
    rent: 0
   },
{
    name: "B & O Railroad",
    spaceType: "property",
    purchased: false,
    value: 200,
    rent:0
},
{
    name: "Atlantic Avenue",
    spaceType: "property",
    purchased: false,
    value: 260,
    rent: 0
   },
{
    name: "Water Works",
    spaceType: "property",
    purchased: false,
    value: 260,
    rent: 0
},
{
    name: "Ventnor Avenue",
    spaceType: "property",
    purchased: false,
    value: 150,
    rent: 0
   },
{
    name: "Marvin Gardens",
    spaceType: "property",
    purchased: false,
    value: 280,
    rent:0
},
{
    name: "Go to jail!",
    spaceType: "goToJail",

    spaceAction(){
        currentPlayer.currentspace = 0;
        console.log("Go directly to Jail! Do not pass GO! Don not collect $200")
    }
   },
   
// RIGHT ROW
{
    name: "Pacific Avenue",
    spaceType: "property",
    purchased: false,
    value: 300,
    rent:0
},
{
    name: "Community Chest",
    spaceType: "card",
    
    spaceAction(){
        console.log("Pick a card!")
    }
},
{
    name: "North Carolina Avenue",
    spaceType: "property",
    purchased: false,
    value: 300,
    rent:0
},
{
    name: "Pennsylvania Avenue",
    spaceType: "property",
    purchased: false,
    value: 320,
    rent: 0
   },
{
    name: "Short Line Railroad",
    spaceType: "property",
    purchased: false,
    value: 200,
    rent:0
},
{
    name: "Chance",
    spaceType: "card",

    spaceAction(){
        console.log("Pick a card!")
    }
},
{
    name: "Park Place",
    spaceType: "property",
    purchased: false,
    value: 350,
    rent: 0
},
{
    name: "Luxury Tax",
    spaceType: "tax",

    spaceAction(player){
        console.log(`Pay your luxury tax, ${player.name}!`);
        player.money -= 75;
    }
},
{
    name: "Boardwalk",
    spaceType: "property",
    purchased: false,
    value: 400,
    rent:0
}
]


let playerNumber = 0;
let currentPlayer = players[playerNumber];
let spaceLandedOn = theBoard[players[playerNumber].currentSpace];
let currentRoll = 0;

//roll dice. Made  2 die in case of expansion to graphics to match 2 die
let rollDice = () =>{
    let dieOne = Math.floor(Math.random()*6 + 1);
    let dieTwo = Math.floor(Math.random()*6 + 1);
    currentRoll = dieOne+dieTwo;

    return currentRoll;
};

//takes result of diceRoll and moves the player
function movePlayer(player){

    // players[player].currentSpace += rollDice();
//   /  spaceLandedOn = theBoard[players[playerNumber].currentSpace]

    if(currentPlayer.currentspace + currentRoll > theBoard.length){
        spaceLandedOn = theBoard.length - currentPlayer.currentSpace;
        theBoard[1].collectTwoHundred(player) 
    } else {
        currentPlayer.currentSpace +=currentRoll;
    }
};

function startSpaceAction(space) {
    spaceAction(currentPlayer)    
};

function switchPlayer(){
    playerNumber++;
    if (playerNumber >= players.length){
        playerNumber = 0;
    }
    currentPlayer = players[playerNumber]
    console.log(playerNumber);
}

console.log(`It is ${players[playerNumber].name}'s turn!`)
// takes the current space value of the player and uses it to find the name of the current space on the board

for(let i=0;i< 30; i++){
console.log(`${players[playerNumber].name} is on ${spaceLandedOn.name} and has $${players[playerNumber].money}.`)
rollDice();
console.log(`${currentPlayer.name} rolled a ${currentRoll}`)
movePlayer(playerNumber)
whichSpace(spaceLandedOn)
console.log(`${players[playerNumber].name} is now on ${theBoard[players[playerNumber].currentSpace].name} and has $${players[0].money}.`)
switchPlayer()
};