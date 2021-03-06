/* basic body style for the whole doc */
body {
	text-align: center;
	font-family: 'Roboto Condensed', sans-serif;
	color: #3c2a2a;
}

/* HEADING TAGS----------------- */
h1 {
	font-size: 1em;
}

h2 {
	font-size: 0.75em;
}

h3 {
	font-size: 0.5em;
	padding: 0.5em;
}

/* main container for the whole board */
.container {
	margin: 3em auto 0 auto;
	display: grid;
	grid-template-columns: 7em 36em 7em;
	grid-template-rows: 7em 36em 7em;
	background-color: #3c2a2a;
	padding: 1em;
	width: 50.5em;
	height: 50.5em;
	grid-gap: 0.2em;
	border-radius: 0.4em;
}

/* setting the cell bg color */
.corner,
.gameRow,
.center {
	background-color: #f3e7cd;
}

/* general space styles */
.chance {
	margin: 0.5em auto;
}

.rr {
	margin: 1.25em auto;
	width: 3.25em;
}

.parking {
	transform: rotate(135deg);
	margin: 0 0 0 1em;
	padding: 0.25em;
}

.space.notTax {
	text-align: center;
	display: grid;
	grid-template-rows: 2em auto;
}

.center {
	display: grid;
	grid-template-rows: 45% auto 35%;
	text-align: center;
}

.center .top {
	display: grid;
	grid-template-columns: 20% 80%;
}

.cChestCards {
	transform: rotate(45deg);
	transform-origin: 0 0;
	width: 7em;
	height: 9em;
	border: 3px dotted black;
	margin: 0.5em 0 0 7.5em;
}
.center .bottom {
	display: grid;
	grid-template-columns: 80% 20%;
}

.chanceCards {
	border: 10px solid transparent;
	border-image: url('border.png') 30 round;

	transform: rotate(45deg);
	transform-origin: 0 0;
	width: 7em;
	height: 9em;
	/* border: 3px dotted black; */
	margin: 0 0 0 1em;
}

.logo {
	width: 75%;
}

/* PROPERTY COLORS--------------- */
.property {
	border-bottom: 0.2em solid #3c2a2a;
}

.red {
	background-color: #ea6661;
}
.yellow {
	background-color: #efc76f;
}
.green {
	background-color: #90ae96;
}

.blue {
	background-color: #60789c;
}
.brown {
	background-color: rgb(134, 74, 24);
}
.purple {
	background-color: #89657f;
}
.lightBlue {
	background-color: #85929b;
}
.orange {
	background-color: #e08f60;
}

/* ICONS AND  IMAGE PROPERTIES ------*/
.electric {
	margin: 0.75em auto 0 auto;
	padding: 0;
	width: 2.5em;
}

.luxury {
	margin: 1em auto 0 auto;
	padding: 0;
	width: 3em;
}

.income {
	margin: 2em auto 0 auto;
	padding: 0;
	width: 0.75em;
}

.chance {
	margin: 0.25em auto 0 auto;
	padding: 0;
	width: 2em;
}

.chest {
	margin: 1.5em auto 0 auto;
	padding: 0;
	width: 3.25em;
}

.goToJail {
	margin: -0.75em;
	transform: rotate(225deg);
}

.policeMan {
	display: block;
	margin: -0.25em auto -0.5em auto;
	padding: 0;
	width: 5.25em;
}

.prisoner {
	margin: 1em auto;
	width: 4em;
	transform: rotate(45deg);
}

.parkingCar {
	margin: -0.5em auto -0.25em auto;
	width: 4em;
}

.start {
	margin: -1.25em -1em 0 0;
	transform: rotate(-45deg);
}

.goSvg {
	margin: -0.25em 2.25em 0.75em 0;
	width: 6em;
}

/* BASE ROW PROPERTIES */
.row {
	width: 36em;
	height: 7em;
	display: grid;
	grid-template-columns: repeat(9, 4em);
}

.row .space {
	text-align: center;
	display: grid;
	grid-template-rows: 1.5em 3.5em 0.5em;
}

.row .space:nth-child(n + 2) {
	border-left: 0.15em solid #3c2a2a;
}

.gameRow.top {
	transform: rotate(180deg);
}

.gameRow.left .row {
	transform: rotate(90deg);
	transform-origin: 0 0;
	margin-left: 7em;
}

.gameRow.right .row {
	transform: rotate(-90deg);
	transform-origin: 0 0;
	margin-top: 36em;
}

/* JAIL GRID PROPERTIES ---- */
.jail {
	display: grid;
	grid-template-rows: 80% 20%;
	grid-template-columns: 20% 80%;
	grid-gap: 0.001em;
}

.jailBlock {
	background-color: #df7042;
	border-left: 0.2em solid #3c2a2a;
	border-bottom: 0.2em solid #3c2a2a;
}

.jail .h1down {
	transform: rotate(90deg);
	transform-origin: 0 0;
	margin: 2em 2.25em 2.25em 1.25em;
}

.jail .visit {
	display: block;
	margin: 0 auto 0 auto;
	grid-column: 1 / span 2;
	grid-row: 2;
}
