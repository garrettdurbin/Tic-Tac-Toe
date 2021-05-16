/*
Got stuck and I think I'll be leaving this project for 
awhile. 

If I come back, the part I couldn't get this time around is how to
check for a win. I can read the text contents of 3 cells in a row if I
place my array checker outside the main function playerMove() and 
set the text to "XXX" myself before the game starts, but 
i can't get the array checker to work inside that main function.
*/


var heading = document.getElementById("heading1");
//heading.style.color = "blue";
function test() {
    heading.style.color = "blue";
}

//test();


var cell1 = document.getElementById("1")
var cell2 = document.getElementById("2")
var cell3 = document.getElementById("3")
var cell4 = document.getElementById("4")
var cell5 = document.getElementById("5")
var cell6 = document.getElementById("6")
var cell7 = document.getElementById("7")
var cell8 = document.getElementById("8")
var cell9 = document.getElementById("9")




//heading.onclick = goBlue;
cell1.setAttribute("onclick", "playerMove('1');");
cell2.setAttribute("onclick", "playerMove('2');");
cell3.setAttribute("onclick", "playerMove('3');");
cell4.setAttribute("onclick", "playerMove('4');");
cell5.setAttribute("onclick", "playerMove('5');");
cell6.setAttribute("onclick", "playerMove('6');");
cell7.setAttribute("onclick", "playerMove('7');");
cell8.setAttribute("onclick", "playerMove('8');");
cell9.setAttribute("onclick", "playerMove('9');");


var x = "X";
var o = "O";


var cellsList = [cell1, cell2, cell3, cell4, cell5, cell6, cell7,
    cell8, cell9];


    
/*The following array works. 
//But I couldn't read the statement: winList[0].innerHTML;   
//The following array is unused in my playerMove function...
//if I keep working on this project I could try and find a way to use it.
I'm guessing there's a way to clean up the code I used for all my win1-win8
variables...maybe it's the jquery thing the tutorial guy was using...
but I don't remember or know it yet...and I'm also pretty proud I think I 
can make this thing work on my own even though mine is more fundamental
and repetative.
*/ 
var winList = [
    [cell1.innerHTML, cell2.innerHTML, cell3.innerHTML],
    [cell4, cell5, cell6],
    [cell7, cell8, cell9],
    [cell1, cell4, cell7],
    [cell2, cell5, cell8],
    [cell3, cell6, cell9],
    [cell1, cell5, cell9],
    [cell7, cell5, cell3]
    ];



/*
The following list of variables works for reading the contents
of the cells when they are already set, but not always when I click
them to change the value of that cell.
The array list right afterwards also seems to work.
*/








/*Now I need a for loop to go around this next if statement to check
and see if player 1 has any wins.
The for loop below works if I place Xs before I start the game, but 
not during the game.*/

/*
    for (var i = 0; i <= 8; i++) {
        if (winList2[i] === "XXX") {
            test();
        }
    }
*/







//I can console.log the array winList. I just can't stick .innerHTML after
//console.log(winList[0]);



/*The next function gets called every time there is a click on a cell.
I think it will also contain all my other important functions.*/
function playerMove(cellId) {

    var numOfXs = 0;
    /*The next for statement counts the number of Xs*/
    for (var i = 0; i <= 8; i++) {
        if (cellsList[i].innerText === "X") {
            numOfXs++;
        }
    }
    //console.log("Number of Xs = " + numOfXs);
    

    var numOfOs = 0;
    /*The next for statement counts the number of Os*/
    for (var i = 0; i <= 8; i++) {
        if (cellsList[i].innerText === "O") {
            numOfOs++;
        }
    }
    //console.log("Number of Os = " + numOfOs);


    /*The next if statement changes variable x to X or O*/
    if (numOfXs <= numOfOs) {
        x = "X";  
    }
    else {
        x = "O";
    }
    

    /*This statement sets the innerHTML of the argument of the 
    function playerMove() to the variable x */
    document.getElementById(cellId).innerHTML = x;


    
    //New stuff I'm messing with as of January 20.
    /*
    if (cell1.innerText == "X" && cell2.innerText == "X" && cell3.innerText == "X") {
        console.log("X wins!");
    }
    */

    var win1 = cell1.innerHTML + cell2.innerHTML + cell3.innerHTML;
    var win2 = cell4.innerHTML + cell5.innerHTML + cell6.innerHTML;
    var win3 = cell7.innerHTML + cell8.innerHTML + cell9.innerHTML;
    var win4 = cell1.innerHTML + cell4.innerHTML + cell7.innerHTML;
    var win5 = cell2.innerHTML + cell5.innerHTML + cell8.innerHTML;
    var win6 = cell3.innerHTML + cell6.innerHTML + cell9.innerHTML;
    var win7 = cell1.innerHTML + cell5.innerHTML + cell9.innerHTML;
    var win8 = cell7.innerHTML + cell5.innerHTML + cell3.innerHTML;

    var winList2 = [
        win1,
        win2,
        win3,
        win4,
        win5,
        win6,
        win7,
        win8
    ];

   
    for (i = 0; i <= winList2.length; i++) {
        if (winList2[i] == "XXX") {
            console.log("X Wins!");
            winSound();
        }
    }

    for (i = 0; i <= winList2.length; i++) {
        if (winList2[i] == "OOO") {
            console.log("O Wins!");
            winSound();
            }
        }
    }
    

    function winSound() {
        var audio = new Audio('mlg-airhorn.mp3');
        audio.play();
    }









