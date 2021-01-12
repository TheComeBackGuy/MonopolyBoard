// import { theBoard } from "./theBoardSpaces.mjs";

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
        rrOwned:0,

        makeAChoice(){
            if (Math.random()*1 < .5){
                return true;

            }else {
                return false;
            }
        },

        buyProperty(thisProperty){
            //pay for the property
            this.money -= thisProperty.value;
            //set purchased value to true
            thisProperty.purchased = true;
            //set this player as owner
            thisProperty.ownedBy = playerNumber;
            console.log(playerNumber)
            //push this into a list of properties owned by this player
            this.properties.push(thisProperty);
            // console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value);
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
        rrOwned:0,

        makeAChoice(){
            if (Math.random()*1 < .5){
                return true;

            }else {
                return false;
            }
        },

        buyProperty(thisProperty){
            //pay for the property
            this.money -= thisProperty.value;
            //set purchased value to true
            thisProperty.purchased = true;
            //set this player as owner
            thisProperty.ownedBy = playerNumber;
            console.log(playerNumber)
            //push this into a list of properties owned by this player
            this.properties.push(thisProperty);
            // console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value);
        },
    },
    {
        name: "Snickers",
        piece: "Top",
        currentSpace: 1,
        money: 1500,
        properties:[],
        rrOwned:0,
      
        makeAChoice(){
            if (Math.random()*1 < .5){
                return true;

            }else {
                return false;
            }
        },

        buyProperty(thisProperty){
            //pay for the property
            this.money -= thisProperty.value;
            //set purchased value to true
            thisProperty.purchased = true;
            //set this player as owner
            thisProperty.ownedBy = playerNumber;
            console.log(playerNumber)
            //push this into a list of properties owned by this player
            this.properties.push(thisProperty);
            // console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value);
        },
    },
        
]

//theBoard
const theBoard = [
    {
        name: "Jail",

        spaceAction(player){
            console.log(`It's $50 to get out of jail, ${player.name}` )
            player.currentSpace =0;
            player.money -=50;
        }
    },
    {
        name: "GO!",

        spaceAction(player){
            player.money += 200;
            console.log(`${player.name} collected $200!`)
        },
    },
    {
        name: "Mediterranean Avenue",
        propType: "brown",
        purchased: false,
        ownedBy:undefined,
        value: 60,
        rent:2,

        //PROPERTY METHOD
        spaceAction(player){
            //for properties
            if(player.money > this.value){
                if (this.purchased){
                    //charge Rent
                    console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
                    player.money -= this.rent;
                    players[this.ownedBy].money +=this.rent;
                    console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
                } else {
                    //offer sale
                    if (player.makeAChoice){
                        player.buyProperty(spaceLandedOn)
                        console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
                    }else{
                        console.log(`${player.name} declined to buy ${this.name}`)
                    }
                }
            } else {
                console.log(`${player.name} doesn't have enough money to buy this.`)
            }
        }

    },
    {
        name: "Community Chest",
        propType: false,

        spaceAction(player){
            console.log("Pick a card!")
            let randoCard = Math.random()*3;
            if(randoCard <= 1){
                //advance to GO!
                player.currentspace = 1;
                console.log("Advance to GO!")
            }  else if (randoCard <1 && randoCard <=2){
                //pay doctor's fee
                console.log("Doctor's Fee. Pay $50")
                player.money -= 50;
            } else if (randoCard <2){
                //inherit $100
                console.log("You inherit $100")
                player.money  +=100;
            }
        }
    },
    {
        name: "Baltic Avenue",
        propType: "brown",
        purchased: false,
        ownedBy:undefined,
        value: 60,
        rent:4,


       //PROPERTY METHOD
       spaceAction(player){
        //for properties
        if (this.purchased){
            //charge Rent
            console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
            player.money -= this.rent;
            players[this.ownedBy].money +=this.rent;
            console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
        } else {
            //offer sale
            if (player.makeAChoice){
                player.buyProperty(spaceLandedOn)
                console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
            }else{
                console.log(`${player.name} declined to buy ${this.name}`)
            }
        }
    }

        
    },
    {
        name: "Income Tax",
        propType: "tax",

        spaceAction(player){
            if (Math.floor(player.money * .1) > 200){
                player.money -= 200;
            } else {
                player.money *= .90 ;
            }
        console.log("Thanks for paying your taxes.");
        },
    

    },
    {
        name: "Reading Railroad",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 200,
        rent:25,


       //PROPERTY METHOD
       spaceAction(player){
        //for properties
        if (this.purchased){
            //charge Rent
            console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
            player.money -= this.rent;
            players[this.ownedBy].money +=this.rent;
            console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
        } else {
            //offer sale
            if (player.makeAChoice){
                player.buyProperty(spaceLandedOn)
                console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
            }else{
                console.log(`${player.name} declined to buy ${this.name}`)
            }
        }
    }
    },
    {
        name: "Oriental Avenue",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 100,
        rent:0,

       //PROPERTY METHOD
       spaceAction(player){
        //for properties
        if (this.purchased){
            //charge Rent
            console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
            player.money -= this.rent;
            players[this.ownedBy].money +=this.rent;
            console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
        } else {
            //offer sale
            if (player.makeAChoice){
                player.buyProperty(spaceLandedOn)
                console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
            }else{
                console.log(`${player.name} declined to buy ${this.name}`)
            }
        }
    }
    },
   {
        name: "Chance",
        propType: "card",
        
        spaceAction(){
            console.log("Pick a card!")
        }
    },
    {
        name: "Vermont Avenue",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 100,
        rent:0,

 
       //PROPERTY METHOD
       spaceAction(player){
        //for properties
        if (this.purchased){
            //charge Rent
            console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
            player.money -= this.rent;
            players[this.ownedBy].money +=this.rent;
            console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
        } else {
            //offer sale
            if (player.makeAChoice){
                player.buyProperty(spaceLandedOn)
                console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
            }else{
                console.log(`${player.name} declined to buy ${this.name}`)
            }
        }
    }
    },
    {
        name: "Connecticut Avenue",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 100,
        rent:0,


       //PROPERTY METHOD
       spaceAction(player){
        //for properties
        if (this.purchased){
            //charge Rent
            console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
            player.money -= this.rent;
            players[this.ownedBy].money +=this.rent;
            console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
        } else {
            //offer sale
            if (player.makeAChoice){
                player.buyProperty(spaceLandedOn)
                console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
            }else{
                console.log(`${player.name} declined to buy ${this.name}`)
            }
        }
    }
    },
    {
        name: "Just Visiting",
        propType: "visiting",

        spaceAction(player){
            console.log(`${player} looks through the cold bars to the empty cell.`)
        }
    },

    // LEFT SIDE OF BOARD
    {
        name: "St. Charles Place",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 140,
        rent:0,

               //PROPERTY METHOD
               spaceAction(player){
                //for properties
                if (this.purchased){
                    //charge Rent
                    console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
                    player.money -= this.rent;
                    players[this.ownedBy].money +=this.rent;
                    console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
                } else {
                    //offer sale
                    if (player.makeAChoice){
                        player.buyProperty(spaceLandedOn)
                        console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
                    }else{
                        console.log(`${player.name} declined to buy ${this.name}`)
                    }
                }
            }
    },
    {
        name: "Electric Company",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 150,
        rent: 0,

        //PROPERTY METHOD
        spaceAction(player){
         //for properties
         if (this.purchased){
             //charge Rent
             console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
             player.money -= this.rent;
             players[this.ownedBy].money +=this.rent;
             console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
         } else {
             //offer sale
             if (player.makeAChoice){
                 player.buyProperty(spaceLandedOn)
                 console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
             }else{
                 console.log(`${player.name} declined to buy ${this.name}`)
             }
         }
     }
       },
    {
        name: "States Avenue",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 140,
        rent:0,

        //PROPERTY METHOD
        spaceAction(player){
         //for properties
         if (this.purchased){
             //charge Rent
             console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
             player.money -= this.rent;
             players[this.ownedBy].money +=this.rent;
             console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
         } else {
             //offer sale
             if (player.makeAChoice){
                 player.buyProperty(spaceLandedOn)
                 console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
             }else{
                 console.log(`${player.name} declined to buy ${this.name}`)
             }
         }
     }
    },
    {
        name: "Virginia Avenue",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 150,
        rent: 0,

        //PROPERTY METHOD
        spaceAction(player){
         //for properties
         if (this.purchased){
             //charge Rent
             console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
             player.money -= this.rent;
             players[this.ownedBy].money +=this.rent;
             console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
         } else {
             //offer sale
             if (player.makeAChoice){
                 player.buyProperty(spaceLandedOn)
                 console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
             }else{
                 console.log(`${player.name} declined to buy ${this.name}`)
             }
         }
     }
       },
    {
        name: "Pennsylvania Railroad",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 200,
        rent:0,

        //PROPERTY METHOD
        spaceAction(player){
         //for properties
         if (this.purchased){
             //charge Rent
             console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
             player.money -= this.rent;
             players[this.ownedBy].money +=this.rent;
             console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
         } else {
             //offer sale
             if (player.makeAChoice){
                 player.buyProperty(spaceLandedOn)
                 console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
             }else{
                 console.log(`${player.name} declined to buy ${this.name}`)
             }
         }
     }
    },
    {
        name: "St. James Place",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 180,
        rent: 0,

        //PROPERTY METHOD
        spaceAction(player){
         //for properties
         if (this.purchased){
             //charge Rent
             console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
             player.money -= this.rent;
             players[this.ownedBy].money +=this.rent;
             console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
         } else {
             //offer sale
             if (player.makeAChoice){
                 player.buyProperty(spaceLandedOn)
                 console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
             }else{
                 console.log(`${player.name} declined to buy ${this.name}`)
             }
         }
     }
       },
    {
        name: "Community Chest",
        propType: "card",

        spaceAction(){
            console.log("Pick a card!")
        }
    },
    {
        name: "Tennessee Avenue",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 180,
        rent: 0,

        //PROPERTY METHOD
        spaceAction(player){
         //for properties
         if (this.purchased){
             //charge Rent
             console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
             player.money -= this.rent;
             players[this.ownedBy].money +=this.rent;
             console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
         } else {
             //offer sale
             if (player.makeAChoice){
                 player.buyProperty(spaceLandedOn)
                 console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
             }else{
                 console.log(`${player.name} declined to buy ${this.name}`)
             }
         }
     }
       },
    {
        name: "New York",
        propType: "property",
        purchased: false,
        ownedBy:undefined,
        value: 200,
        rent:0,

        //PROPERTY METHOD
        spaceAction(player){
         //for properties
         if (this.purchased){
             //charge Rent
             console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
             player.money -= this.rent;
             players[this.ownedBy].money +=this.rent;
             console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
         } else {
             //offer sale
             if (player.makeAChoice){
                 player.buyProperty(spaceLandedOn)
                 console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
             }else{
                 console.log(`${player.name} declined to buy ${this.name}`)
             }
         }
     }
    },
    {
        name: "Free Parking!",
        propType: "parking",

        spaceAction(){
            console.log("Enjoy the free parking. It won't be free forever.")
        }
       },
// TOP ROW
{
    name: "Kentucky Avenue",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 200,
    rent:0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
},
{
    name: "Chance",
    propType: "card",
    
    spaceAction(){
        console.log("Pick a card!")
    }
},
{
    name: "Indiana Avenue",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 220,
    rent:0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
},
{
    name: "illinois Avenue",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 240,
    rent: 0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
   },
{
    name: "B & O Railroad",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 200,
    rent:0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
},
{
    name: "Atlantic Avenue",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 260,
    rent: 0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
   },
{
    name: "Water Works",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 260,
    rent: 0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
},
{
    name: "Ventnor Avenue",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 150,
    rent: 0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
   },
{
    name: "Marvin Gardens",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 280,
    rent:0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
},
{
    name: "Go to jail!",
    propType: "goToJail",

    spaceAction(){
        currentPlayer.currentspace = 0;
        console.log("Go directly to Jail! Do not pass GO! Don not collect $200")
    }
   },
   
// RIGHT ROW
{
    name: "Pacific Avenue",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 300,
    rent:0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
},
{
    name: "Community Chest",
    propType: "card",
    
    spaceAction(){
        console.log("Pick a card!")
    }
},
{
    name: "North Carolina Avenue",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 300,
    rent:0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
},
{
    name: "Pennsylvania Avenue",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 320,
    rent: 0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
   },
{
    name: "Short Line Railroad",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 200,
    rent:0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
},
{
    name: "Chance",
    propType: "card",

    spaceAction(){
        console.log("Pick a card!")
    }
},
{
    name: "Park Place",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 350,
    rent: 0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
},
{
    name: "Luxury Tax",
    propType: "tax",

    spaceAction(player){
        console.log(`Pay your luxury tax, ${player.name}!`);
        player.money -= 75;
    }
},
{
    name: "Boardwalk",
    propType: "property",
    purchased: false,
    ownedBy:undefined,
    value: 400,
    rent:0,

    //PROPERTY METHOD
    spaceAction(player){
     //for properties
     if (this.purchased){
         //charge Rent
         console.log("THIS PROPERTY IS OWNED BY "+players[this.ownedBy].name)
         player.money -= this.rent;
         players[this.ownedBy].money +=this.rent;
         console.log(`${player.name} had to pay $${this.rent} in rent to ${players[this.ownedBy].name} for ${this.name}`)
     } else {
         //offer sale
         if (player.makeAChoice){
             player.buyProperty(spaceLandedOn)
             console.log(`${players[this.ownedBy].name} now owns ${this.name}! Enjoy!`)
         }else{
             console.log(`${player.name} declined to buy ${this.name}`)
         }
     }
 }
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
    // currentRoll = 1;

    console.log(`${currentPlayer.name} rolled a ${currentRoll}`)

    return currentRoll;
};

//takes result of diceRoll and moves the player
function movePlayer(player){
    // console.log("I'm about to move this piece");
    // console.log(`they're at ${player.currentSpace}`)   
    // player.currentSpace += currentRoll;
    // console.log(`they're at ${player.currentSpace}`)  


    // player.currentSpace +=currentRoll;
    // console.log(`${player.name} should end up at ${player.currentSpace}`)

    if(player.currentSpace + currentRoll > theBoard.length-1){
        console.log(`${player.name} should end up at ${theBoard[(player.currentSpace + currentRoll) - (theBoard.length-1)].name}`)
        player.currentSpace = theBoard[(player.currentSpace + currentRoll) - (theBoard.length-1)];
        spaceLandedOn = player.currentSpace;
        theBoard[1].spaceAction(player) 
    } else {
        player.currentSpace +=currentRoll;
        spaceLandedOn = theBoard[players[playerNumber].currentSpace]

    }
    console.log(`${currentPlayer.name} landed on ${spaceLandedOn.name}`)

    // console.log("there! I moved it. It should be at "+ player.currentSpace)
    
    // console.log("there! I moved it. It should be at "+ spaceLandedOn.name)
};


function whichSpace(space) {
    space.spaceAction(currentPlayer)    
};


function switchPlayer(){
    playerNumber++;
    if (playerNumber >= players.length){
        playerNumber = 0;
        spaceLandedOn = theBoard[players[playerNumber].currentSpace];

    }else{
    currentPlayer = players[playerNumber]
    console.log(playerNumber);
    spaceLandedOn = theBoard[players[playerNumber].currentSpace];
}
}

console.log(`It is ${players[playerNumber].name}'s turn!`)
// takes the current space value of the player and uses it to find the name of the current space on the board


//mimic player activity
for(let i=0;i< 30; i++){
    console.log(`ITERATION `+i)
    console.log(`${currentPlayer.name} is on ${spaceLandedOn.name} and has $${currentPlayer.money}.`)
    rollDice();
    movePlayer(currentPlayer)
    whichSpace(spaceLandedOn)
    console.log(`${currentPlayer.name} is on ${spaceLandedOn.name} and has $${currentPlayer.money}.`)
    switchPlayer()
};