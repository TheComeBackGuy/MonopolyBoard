* {
    margin:0;
    padding:0;
}

body{
    background-color: grey;
    text-align: center;

}

h3{
    font-family: Arial, Helvetica, sans-serif;
    font-size:.5em;
    margin: .5em;
}


/*13 row items*/
.container{
    width: 50em;
    height: 50em;
    margin: 2em auto 0 auto;
    border: .5em solid rgb(53, 49, 49);
    grid-template-columns: 10em 30em 10em;
    grid-template-rows: 10em 30em 10em;
    background-color:#F3E7CD;
    border-radius: .5em;

    /* grid-template-columns: repeat(11, 5em);
    grid-template-rows: repeat(11, 5em); */

}

.property{
    width:100%;
    height:20%;
    border-bottom: .25em solid rgb(53, 49, 49);
    background-color: greenyellow;
}

.row{
    display:inline-flex;
    width:100%;
    height:15%;
    border: .25 solid rgb(53, 49, 49);
    
}

.row.top .space{
    transform:rotate(180deg);
    border-right: .25em solid rgb(53, 49, 49);

}



.space{
    width: 10%;
    border-right: .25em solid rgb(53, 49, 49);
}

.row.top .space:first-child{
    border:none;
}.row.bottom .space:last-child{
    border: none;
}

.top .space:first-child, .top .space:last-child,.bottom .space:first-child, .bottom .space:last-child{
    width: 20%;
}

.centerArea {
    display: inline-flex;
    width:100%;
    height: 70%;
    /* border: 1px solid mediumspringgreen; */
    /* transform: rotate(90deg); */
}


.col{
    /* border: 1px solid goldenrod; */
    width:15%;
    height:100%;
}

.col .space{
    border-bottom: .25em solid rgb(53, 49, 49);
    width:100%;
    height: 10%;
}

.centerArea .center{
    background-color: mediumspringgreen;
    border: .25em solid rgb(53, 49, 49);

    width: 70%;
    height:100%;
}





 /* .row.left{

    transform: rotate(90deg);
}

.row.right{
    transform: rotate(-90deg);
} */
