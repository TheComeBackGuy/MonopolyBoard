// import { theBoard } from "./theBoardSpaces.mjs";
// const theBoard = theBoard;
// let currentRoll = ;
/***players**/
// include('./theBoardSpaces.mjs');

let playersLost = [];

let players = [
	{
		name: 'Dennis',
		piece: 'shoe',
		currentSpace: 1,
		isBankrupt: false,
		money: 1500,
		properties: [],
		propertyNameList: [],

		inJail: false,
		doubles: false,
		jailRoll: 0,

		/***board colors */
		brown: 0,
		lightBlue: 0,
		purple: 0,
		orange: 0,
		red: 0,
		yellow: 0,
		green: 0,
		blue: 0,

		railRoad: 0,
		utilities: 0,
		getOutOfJailFreeCard: 0,

		makeAChoice() {
			if (Math.random() * 1 < 0.5) {
				return true;
			} else {
				return false;
			}
		},

		buyProperty(thisProperty) {
			if (this.money >= thisProperty.value) {
				//pay for the property
				this.money -= thisProperty.value;
				//set purchased value to true
				thisProperty.purchased = true;
				//set this player as owner
				thisProperty.ownedBy = playerNumber;
				console.log(playerNumber);
				//push this into a list of properties owned by this player
				this.properties.push(thisProperty);
				// console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value);
				// console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
			} else {
				console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
			}
		},

		propertyNames() {
			for (let i = 0; i < this.properties.length; i++) {
				this.propertyNameList.push(this.properties[i].name);
				console.log(i);
			}
			return this.propertyNameList;
		},
	},
	{
		name: 'Amanda',
		piece: 'Dog',
		currentSpace: 1,
		isBankrupt: false,
		money: 1500,
		properties: [],
		propertyNameList: [],
		inJail: false,
		doubles: false,
		jailRoll: 0,

		/***board colors */
		brown: 0,
		lightBlue: 0,
		purple: 0,
		orange: 0,
		red: 0,
		yellow: 0,
		green: 0,
		blue: 0,

		railRoad: 0,
		utilities: 0,
		getOutOfJailFreeCard: 0,

		makeAChoice() {
			if (Math.random() * 1 < 0.5) {
				return true;
			} else {
				return false;
			}
		},

		buyProperty(thisProperty) {
			if (this.money >= thisProperty.value) {
				//pay for the property
				this.money -= thisProperty.value;
				//set purchased value to true
				thisProperty.purchased = true;
				//set this player as owner
				thisProperty.ownedBy = playerNumber;
				console.log(playerNumber);
				//push this into a list of properties owned by this player
				this.properties.push(thisProperty);
				// console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value);
				// console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
			} else {
				console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
			}
		},
	},
	{
		name: 'Snickers',
		piece: 'Top Hat',
		currentSpace: 1,
		isBankrupt: false,
		money: 1500,
		properties: [],
		propertyNameList: [],

		inJail: false,
		doubles: false,
		jailRoll: 0,

		/***board colors */
		brown: 0,
		lightBlue: 0,
		purple: 0,
		orange: 0,
		red: 0,
		yellow: 0,
		green: 0,
		blue: 0,

		railRoad: 0,
		utilities: 0,
		getOutOfJailFreeCard: 0,

		makeAChoice() {
			if (Math.random() * 1 < 0.5) {
				return true;
			} else {
				return false;
			}
		},

		buyProperty(thisProperty) {
			if (this.money >= thisProperty.value) {
				//pay for the property
				this.money -= thisProperty.value;
				//set purchased value to true
				thisProperty.purchased = true;
				//set this player as owner
				thisProperty.ownedBy = playerNumber;
				console.log(playerNumber);
				//push this into a list of properties owned by this player
				this.properties.push(thisProperty);
				// console.log(this.name+" just bought "+ thisProperty.name + " for $"+ thisProperty.value);
				// console.log(`${this.name} now owns ${thisProperty.name}! Enjoy!`);
			} else {
				console.log(`You can't afford ${thisProperty.name}, ${this.name}`);
			}
		},
	},
];

function handleRealEstate(player, space, modifier) {
	const cannotAffordRent = space.purchased && player.money - space.rent <= 0;
	const canAffordRent = space.purchased && player.money - space.rent > 0;
	const canPurchase = !space.purchased;

	switch (true) {
		case cannotAffordRent:
			return bankruptcy(player, space);
		case canAffordRent:
			return payRent(player, space);
		case canPurchase:
			debateBuying(player, space);
	}
}

function debateBuying(player, space) {
	if (player.makeAChoice) {
		player.buyProperty(space);
		console.log(`${player.name} bought ${space.name}`);
	} else {
		console.log(`${player.name} declined to buy ${space.name}`);
	}
}

/***Pays standard rent costs */
function payRent(player, space, modifier) {
	player.money -= space.rent;
	players[space.ownedBy].money += space.rent;
}

/***if player doesn't have enough money, there's more to do.
 * They may need to sell assets, etc. So, made a function for that.
 * For now, player's just hand over cash and lose.  */
function bankruptcy(player, space) {
	console.log(`${player.name} is broke and claims bankruptcy!`);
	players[space.ownedBy].money += player.money;
	player.money = 0;
	youLose(player);
}

// function handleRealEstate(player, this) {
// 	/*** If you can't afford rent */
// 	if (this.purchased && player.money - this.rent[0] <= 0) {
// 		youLose(player);
// 		/*** If you can afford the rent */
// 	} else if (this.purchased && player.money - this.rent[0] > 0) {
// 		console.log('THIS PROPERTY IS OWNED BY ' + players[this.ownedBy].name);
// 		/***subtract the rent from player */
// 		player.money -= this.rent[0];

// 		/***Pay the owner of the property */
// 		players[this.ownedBy].money += this.rent[0];
// 		console.log(
// 			`${player.name} had to pay $${this.rent[0]} in rent to ${
// 				players[this.ownedBy].name
// 			} for ${this.name}`
// 		);
// 		/***If it's for sale */
// 	} else if (!this.purchased) {
// 		//offer sale
// 		if (player.makeAChoice) {
// 			player.buyProperty(theBoard[players[playerNumber].currentSpace]);
// 		} else {
// 			console.log(`${player.name} declined to buy ${this.name}`);
// 		}
// 	}
// }

/***
 * A list of all the properties in the game.
 *
 * Since we are subtracting the board length from the player location + roll
 * to establish what space they land on after they pass GO,
 * we will never have a zero sum.
 *
 * Therefore, jail has been set to 0.
 */
const theBoard = [
	{
		name: 'Jail',

		spaceAction(player) {
			console.log(`It's $50 to get out of jail, or you can roll doubles.`);
		},
	},
	{
		name: 'GO!',

		spaceAction(player) {
			player.money += 200;
			console.log(`${player.name} collected $200!`);
		},
	},
	{
		name: 'Mediterranean Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 60,
		rent: [2, 10, 30, 90, 160, 250],
		mortgaged: 30,
		color: 'brown',
		count: 2,
		houseCost: 50,
		hotelCost: 50,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Community Chest',
		spaceAction(player) {
			console.log('Pick a card!');
			let randoCard = Math.random() * 3;
			if (randoCard <= 1) {
				//advance to GO!
				player.currentspace = 1;
				console.log('Advance to GO!');
			} else if (randoCard < 1 && randoCard <= 2) {
				//pay doctor's fee
				console.log("Doctor's Fee. Pay $50");
				player.money -= 50;
			} else if (randoCard < 2) {
				//inherit $100
				console.log('You inherit $100');
				player.money += 100;
			}
		},
	},
	{
		name: 'Baltic Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 60,
		rent: [4, 20, 60, 180, 320, 450],
		mortgaged: 30,
		color: 'brown',
		count: 2,
		houseCost: 50,
		hotelCost: 50,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Income Tax',

		spaceAction(player) {
			if (Math.floor(player.money * 0.1) > 200) {
				player.money -= 200;
			} else {
				player.money = Math.floor(player.money * 0.9);
			}
			console.log('Thanks for paying your taxes.');
		},
	},
	{
		name: 'Reading Railroad',
		purchased: false,
		ownedBy: undefined,
		value: 200,
		rent: 25,
		mortgaged: 30,
		color: 'railRoad',
		count: 4,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties
			handleRealEstate(player, this);
		},
	},
	{
		name: 'Oriental Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 100,
		rent: [6, 30, 90, 270, 400, 550],
		mortgaged: 50,
		color: 'lightBlue',
		count: 3,
		houseCost: 50,
		hotelCost: 50,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Chance',

		spaceAction() {
			console.log('Pick a card!');
		},
	},
	{
		name: 'Vermont Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 100,
		rent: [6, 30, 90, 270, 400, 550],
		mortgaged: 50,
		color: 'lightBlue',
		count: 3,
		houseCost: 50,
		hotelCost: 50,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Connecticut Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 100,
		rent: [8],
		mortgaged: 60,
		color: 'lightBlue',
		count: 3,
		houseCost: 50,
		hotelCost: 50,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Just Visiting',

		spaceAction(player) {
			console.log(
				`${player.name} looks through the cold bars to the empty cell.`
			);
		},
	},

	// LEFT SIDE OF BOARD
	{
		name: 'St. Charles Place',
		purchased: false,
		ownedBy: undefined,
		value: 140,
		rent: [10, 50, 150, 450, 625, 750],
		mortgaged: 70,
		color: 'purple',
		count: 3,
		houseCost: 100,
		hotelCost: 100,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Electric Company',
		purchased: false,
		ownedBy: undefined,
		value: 150,
		rent: [20],
		mortgaged: 50,
		color: 'utilities',
		count: 3,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'States Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 140,
		rent: [10, 50, 150, 450, 625, 750],
		mortgaged: 70,
		color: 'purple',
		count: 3,
		houseCost: 100,
		hotelCost: 100,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Virginia Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 150,
		rent: [12, 60, 180, 500, 700, 900],
		mortgaged: 80,
		color: 'purple',
		count: 3,
		houseCost: 100,
		hotelCost: 100,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Pennsylvania Railroad',
		purchased: false,
		ownedBy: undefined,
		value: 200,
		rent: 10,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'St. James Place',
		purchased: false,
		ownedBy: undefined,
		value: 180,
		rent: [14, 70, 200, 550, 750, 950],
		mortgaged: 90,
		color: 'orange',
		count: 3,
		houseCost: 100,
		hotelCost: 100,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Community Chest',

		spaceAction() {
			console.log('Pick a card!');
		},
	},
	{
		name: 'Tennessee Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 180,
		rent: [14, 70, 200, 550, 750, 950],
		mortgaged: 90,
		color: 'orange',
		count: 3,
		houseCost: 100,
		hotelCost: 100,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'New York',
		purchased: false,
		ownedBy: undefined,
		value: 200,
		rent: [16, 80, 220, 600, 800, 1000],
		mortgaged: 100,
		color: 'orange',
		count: 3,
		houseCost: 100,
		hotelCost: 100,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Free Parking!',

		spaceAction() {
			console.log("Enjoy the free parking. It won't be free forever.");
		},
	},
	// TOP ROW
	{
		name: 'Kentucky Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 200,
		rent: [18, 90, 250, 700, 875, 1050],
		mortgaged: 110,
		color: 'red',
		count: 3,
		houseCost: 150,
		hotelCost: 150,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Chance',

		spaceAction() {
			console.log('Pick a card!');
		},
	},
	{
		name: 'Indiana Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 220,
		rent: [18, 90, 250, 700, 875, 1050],
		mortgaged: 110,
		color: 'red',
		count: 3,
		houseCost: 150,
		hotelCost: 150,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'illinois Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 240,
		rent: [20, 100, 300, 750, 925, 1100],
		mortgaged: 120,
		color: 'red',
		count: 3,
		houseCost: 150,
		hotelCost: 150,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'B & O Railroad',
		purchased: false,
		ownedBy: undefined,
		value: 200,
		rent: 20,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Atlantic Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 260,
		rent: [22, 110, 330, 800, 975, 1150],
		mortgaged: 130,
		color: 'yellow',
		count: 3,
		houseCost: 150,
		hotelCost: 150,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Water Works',
		purchased: false,
		ownedBy: undefined,
		value: 260,
		rent: 20,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Ventnor Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 150,
		rent: [22, 110, 330, 800, 975, 1150],
		mortgaged: 130,
		color: 'yellow',
		count: 3,
		houseCost: 150,
		hotelCost: 150,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Marvin Gardens',
		purchased: false,
		ownedBy: undefined,
		value: 280,
		rent: [24, 120, 630, 850, 1025, 1200],
		mortgaged: 140,
		color: 'purple',
		count: 3,
		houseCost: 150,
		hotelCost: 150,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Go to jail!',

		spaceAction(player) {
			player.currentSpace = 0;
			console.log('Go directly to Jail! Do not pass GO! Don not collect $200');
			player.inJail = true;
		},
	},

	// RIGHT ROW
	{
		name: 'Pacific Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 300,
		rent: [26, 130, 390, 900, 1100, 1275],
		mortgaged: 150,
		color: 'green',
		count: 3,
		houseCost: 200,
		hotelCost: 200,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Community Chest',

		spaceAction() {
			console.log('Pick a card!');
		},
	},
	{
		name: 'North Carolina Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 300,
		rent: [26, 130, 390, 900, 1100, 1275],
		mortgaged: 1500,
		color: 'green',
		count: 3,
		houseCost: 200,
		hotelCost: 200,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Pennsylvania Avenue',
		purchased: false,
		ownedBy: undefined,
		value: 320,
		rent: [28, 150, 450, 1000, 1200, 1400],
		mortgaged: 160,
		color: 'purple',
		count: 3,
		houseCost: 200,
		hotelCost: 200,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Short Line Railroad',
		purchased: false,
		ownedBy: undefined,
		value: 200,
		rent: 25,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Chance',

		spaceAction() {
			console.log('Pick a card!');
		},
	},
	{
		name: 'Park Place',
		purchased: false,
		ownedBy: undefined,
		value: 350,
		rent: [35, 175, 500, 1100, 1300, 1500],
		mortgaged: 175,
		color: 'lightBlue',
		count: 2,
		houseCost: 200,
		hotelCost: 200,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
	{
		name: 'Luxury Tax',

		spaceAction(player) {
			console.log(`Pay your luxury tax, ${player.name}!`);
			player.money -= 75;
			if (player.money <= 0) {
				youLose(player);
				console.log(
					"you should lose here, but there's a loop that doesn't care."
				);
				return;
			}
		},
	},
	{
		name: 'Boardwalk',
		purchased: false,
		ownedBy: undefined,
		value: 400,
		rent: [50, 200, 600, 1400, 1700, 2000],
		mortgaged: 200,
		color: 'lightBlue',
		count: 2,
		houseCost: 200,
		hotelCost: 200,
		houses: 0,
		hotels: 0,

		//PROPERTY METHOD
		spaceAction(player) {
			//for properties

			handleRealEstate(player, this);
		},
	},
];

let playerNumber = 0;
let currentRoll = 0;

function youLose(player) {
	playersLost.push(player[playerNumber]);
	player.isBankrupt = true;
	player.money = 0;
	player.doubles = false;
	console.log(`${player.name}, you are broke. You lose.`);
	// players.splice(playerNumber, 1);
	console.log(players);
	return;
}

/*TYLER DICE
  let rollDice = (n) => {
  return new Array(n).fill(0).reduce((accumulator) => {
    return accumulator + Math.floor(Math.random() * 6 + 1);
  }, 0);
  };
  */

/***roll dice. Made  2 dice in case of expansion to graphics to match 2 die**/
let rollDice = () => {
	/***counting the number of doubles player rolls in a row */
	let doubles = 0;

	/***each die get a roll to establish doubles */
	let dieOne = Math.floor(Math.random() * 6 + 1);
	let dieTwo = Math.floor(Math.random() * 6 + 1);

	/***if we roll a double */
	if (dieOne === dieTwo) {
		console.log(`${players[playerNumber].name} rolled double ${dieOne}'s!"`);
		players[playerNumber].doubles = true;
		/***increase the doubles count by one */
		doubles++;

		/***if we roll 3 doubles in a row, we go to jail*/
		if (doubles >= 3) {
			console.log(
				`${players[playerNumber].name} rolled doubles 3 times and is going to jail!`
			);
			players[playerNumber].currentSpace = 0;
			players[playerNumber].inJail = true;
			theBoard.spaceAction(players[playerNumber]);
		}
	} else {
		/***If we don't roll doubles, set double to 0 */
		doubles = 0;
		players[playerNumber].doubles = false;
	}

	/***add combined roll */
	currentRoll = dieOne + dieTwo;

	console.log(`${players[playerNumber].name} rolled a ${currentRoll}`);

	return currentRoll;
};

/***takes result of diceRoll and moves the player**/
function movePlayer(player) {
	if (player.inJail) {
	}

	/***if the total is bigger than the board */
	if (player.currentSpace + currentRoll > theBoard.length - 1) {
		/***  player.currentSpace = the current player's space to  the result of
		 * subtracting the playerSpace+currentRoll - theBoard length
		 * This should result in the correct space number;
		 */
		player.currentSpace =
			player.currentSpace + currentRoll - (theBoard.length - 1);
		console.log(player.currentSpace);
	} else {
		/*** just add the roll to the space */
		player.currentSpace += currentRoll;
	}
}

function whichSpace(space) {
	space.spaceAction(players[playerNumber]);
}

function switchPlayer() {
	if (!players[playerNumber].doubles) {
		playerNumber++;
		if (playerNumber >= players.length) {
			playerNumber = 0;
			theBoard[players[playerNumber].currentSpace] =
				theBoard[players[playerNumber].currentSpace];
		} else {
			// players[playerNumber] = players[playerNumber];
			console.log(playerNumber);
			theBoard[players[playerNumber].currentSpace] =
				theBoard[players[playerNumber].currentSpace];
		}
	} else {
		console.log(`${players[playerNumber].name} gets another turn!`);
		playerTurn(players[playerNumber]);
	}
}

console.log(`It is ${players[playerNumber].name}'s turn!`);

/***takes the current space value of the player and uses it to find the name of the current space on the board
 **/
function playerTurn(player) {
	// let player = players[playerNumber];
	if (!player.inJail) {
		rollDice();
		movePlayer(player);
		whichSpace(theBoard[players[playerNumber].currentSpace]);
	} else {
		rollDice();
		player.jailRoll++;

		if (player.jailRoll === 4) {
			player.currentSpace = 11;
			player.money -= 50;
			console.log(
				`${player.name} has served their term in jail and paid their fine.`
			);
			player.doubles = false;
			return;
		}

		if (player.doubles) {
			player.currentSpace = 11;
			console.log(`${player.name} rolled doubles and is out of jail.`);
			player.doubles = false;
		}
	}
}

/***mimic player activity**/
for (let i = 0; i < 70; i++) {
	console.log(` `);
	console.log(`ITERATION ` + i + '------------------------------------');
	if (players[playerNumber].isBankrupt) {
		console.log(`No more turns for you, ${players[playerNumber].name}`);
	} else {
		console.log(
			`${players[playerNumber].name} is on ${
				theBoard[players[playerNumber].currentSpace].name
			} and has $${players[playerNumber].money}.`
		);
		// inJail(player)
		playerTurn(players[playerNumber]);
		// rollDice();
		// movePlayer(players[playerNumber]);
		// whichSpace(theBoard[players[playerNumber].currentSpace]);
		console.log(
			`${players[playerNumber].name} is on ${
				theBoard[players[playerNumber].currentSpace].name
			} and has $${players[playerNumber].money}.`
		);
	}
	switchPlayer();
}
