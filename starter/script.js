// Create playerName variable
let playerName;


// Function prompts player to enter name
function enterName() {
    playerName = prompt("Give your warrior a name!");
    if (playerName === "" || playerName === null) {    // Will keep asking until something is entered
        enterName();  
    } else {
        alert(`${playerName}! The king needs your help! Someone stole all of his gold last night!`);
    }
};  

// Calls function asking for name
enterName();

// Function  asks player how to proceed using switch and number inputs
function whatToDo() {
   let choice = prompt(`${playerName}, what would you like to do? [1]Investigate the castle! [2]Go find the gold! [3]Go to the tavern! (1, 2, 3)`);
   switch(parseInt(choice)) {  //changes the strings "1" and "2" into integers
       case 1:
           investigate();
           break;
       case 2:
           goGetGold();
           break;
       case 3 :
           goToTavern();
           break;    
       default:
            alert("Please enter 1, 2, or 3. Let's try that again...") //Alerts player to enter correct choices
            whatToDo(); //Will keep asking until a correct choice is entered


   }
};

//Function to investigate using if/else

function investigate() {
    alert(`Okay ${playerName}! Let's go look for clues inside the Castle!`);
    let witness = prompt(`Inside the Castle, you see a [g]uard, a [h]andmaid, and [j]ake. ${playerName}, who do you want to ask? (g, h, j)`);
    if (witness === "g") {
        alert(`The guard says, "I swear I saw a dragon fly towards the mountains with it in the middle of the night! ${playerName}, you have to believe me!"`);
        
    } else if (witness === "h") {
        alert(`The Handmaid says "I didn't hear anything...I was with the ki...I mean I was asleep all night..."`);
       
    } else if (witness === "j") {
        alert(`Jake from State Farm says, "State Farm offers everyone surprisingly great rates for situations like this!"`);
        } else {
            alert("Please enter g, h, or j. Let's try that again..."); // Alerts player to enter correct choices
            investigate(); // Repeats question until a correct choice is enter
            } whatToDo(); 
};

// Function for going to find the gold using if/else
function goGetGold() {
    alert(`Okay ${playerName}! Let's go look for the gold!`);
    let whereToGo = prompt(`Outside of the Castle, there are two roads that go opposite directions...the first road leads to the [m]ountains and the second leads to the [t]avern. Which road will you take? ${playerName} (m, t)`)
    if (whereToGo === "t") {
        goToTavern();
    } else if (whereToGo === "m") {
        alert(`Look out ${playerName}! We've found the dragon's lair...`);
        dragon(); 
    } else {
        alert("Please enter m or t..."); // Alerts player to enter correct choices
        goGetGold(); // Repeats question until a correct choice is enter
    }    
};


// Function for fighting dragon using if/else
function dragon() {
    let fightDragon = prompt(`${playerName}, the dragon looks kinda scary...which weapon are you going to use? [p]unch, [s]word, or [b]lack arrow? (p, s, b)`)
if (fightDragon === "p") {
    alert(`Well...that didn't work...your name is ${playerName} not Saitama...`);
    if (confirm("Wanna try again? Cancel to start over...")){  //Asks player to try again or start over
        dragon();
    } else {
        enterName();
    }  
} else if (fightDragon === "s") {
    alert(`It sounded like a good idea...until the dragon used it as a toothpick...`);
    if (confirm(`Let's try something else...Kirito! Cancel to start over...`)) {   //Asks player to try again or start over
        dragon();
    } else {
        enterName();
    }
} else if (fightDragon === "b") {
    alert(`Nice work ${playerName}!!! You've defeated the dragon and found the gold!!! Can we go to the tavern now?1?`);
    if (confirm(`Want to play again?`)) {  //Ask player to play again
        enterName();
    }
    } else { 
        alert(`Please enter p, s, or b`); //// Alerts player to enter correct choices
        dragon(); // Repeats question until a correct choice is enter
    }
};

// Function for going to tavern

function goToTavern() {
    alert(`Good choice ${playerName}!!! First round on me!!!`);
    if (confirm(`Want to play again?`)) {     //Asks player to play again
        enterName(); 
}
};

// Calls function asking player how to proceed
whatToDo();


















