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
    /* border: 2px solid #382626; */
    border-radius: .5em;
    /* font-size: 10px; */
}


.row{
    /* border:2px solid #382626; */
    width: 100%;
    height: 15%;
    /* background-color: hotpink; */
    list-style-type: none;
    display: inline-flex;
}

.top li{
    transform: rotate(180deg);
    border-left: .25em solid #382626;


}

.top li:last-child{
    border-left:0;
}

.space:last-child, .space:first-child{
    width:20%;
}




.middle{    
    /* border: 2px solid blue; */
    /* background-color: orange; */
    width: 100%;
    height: 70%;
    list-style-type: none;
    display: inline-flex;
    border-top: .25em solid #382626;
    border-bottom: .25em solid #382626;

}

.middle:first-child{
    flex-flow: row nowrap;
    transform: rotate(90deg);
    background-color:blanchedalmond;
}



/* 
.parking{
    transform: rotate(180deg)
} */

.space{
    border-left: .25em solid #382626;

    width:10%;
    height: 100%;
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
}

.space .property{
    display:inline-block;
    width:100%;
    height: 20%;
    background-color:red;
        border-bottom: .25em solid #382626;

}

/* .container ul{
    width: 100%;
    height: 30%;
    padding:0;
    margin: 0;
    display: inline-block;
    border: 1px solid red;
    list-style-type: none;
}

.container ul li{
    display: inline-flex;
    width:10%;
    height: 100%;
    border: 2px dotted greenyellow;
} */
