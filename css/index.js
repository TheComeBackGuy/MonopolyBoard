body{
    text-align: center;
}

h3{
    font-size:.8em;
    padding:.5em;
    /* transform: rotate(90deg); */
    /* border: 1px solid red; */
}

.container {
    margin: 3em auto 0 auto;
    display: grid;
    grid-template-columns: 12% repeat(9,7.9%) 12%;
    grid-template-rows: 12% repeat(9,7.9%) 12%;
    background-color: #3c2a2a;
    padding: 10px;
    width:50em;
    height:50em;
    grid-gap:.25rem;
  }

.leftSide{
    border:1px solid royalblue;
    /* margin: 3em auto 0 auto; */
    display: grid;
    grid-template-columns: repeat(9,7.9%);
    grid-template-rows: repeat(9,12%);
    /* background-color: #3c2a2a; */
    padding: 10px;
    width:50em;
    height:50em;
    grid-gap:.25rem;
}

  .space {
    background-color: #F3E7CD;
    /* border: 1px solid rgba(0, 0, 0, 0.8); */
    text-align: center;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: .5em;
  }
.space.top{
    transform:rotate(180deg)
}
/* 
.side.left {
    transform:rotate(90deg);
} */

.property{
    /* border: 1px solid green; */
    display:block;
    width:100%;
    height:20%;
    background-color: red;
    border-bottom: .25rem solid #3c2a2a;
}
 
.space.left {
    /* border:1px solid rgb(91, 195, 255); */
    display: grid;
    grid-template-columns: auto 25%;
}

.space.right{
    /* background-color:grey;  */
    display: grid;
    grid-template-columns: 25% auto;
}

.textLeft{
    background-color: none;
}

.leftProperty{
background-color:red;
border-left:  .25rem solid #3c2a2a ;
}

.textRight{

}

.rightProperty{
background-color:red;
border-right:  .25rem solid #3c2a2a ;
}

  .center{
    background-color: #F3E7CD;

      grid-column-start: 2;
      grid-column-end: 11;
      grid-row-start:2;
      grid-row-end: 11;

  }

