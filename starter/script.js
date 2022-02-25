
const gameSuccessfulEnd = () => {
    alert("You succesfully got out of the forest! Congratulations!");
}

const gameFailureEnd = () => {
    alert("You did not successfully get out of the forest");
}

// Introduction
console.log("Hello there wanderer! You, the main character of this story,"
+ " have woken up in a spooky forest and your main objective is to get out as safely as possible.");
let name = prompt("First off, what is your name?");
alert(`Alright ${name},let the story begin.`);

// Story Started
let storyContinuation = true; // to continue the story unless the user decides not to
let answer; // used to answer if user wants to replay the game or not
let numberDecision = 0; // for yes or no questions that require a number
let yesLetterDecision = "Y"; // for yes or no questions that require a letter
 // for dice game in path 3
while (storyContinuation === true){
    alert("As you woke up in the dark eerie forest,"
    + " confused and afraid on how you ended up being here, you notice there are 3 available paths around you. ");
    alert("The 1st path looks the safest, as you can see a  light at the end of the path. Thinking to yourself, this might be the way out, but the oddly looking dirt path tells you otherwise.");
    alert("The 2nd path is a dark tunnel. Confused on how this path may help you, you figured that maybe it will be some type of train tunnel that at the end of it will eventually get you out of the forest.");
    alert("and 3rd path you can see a shadowy figure in a distance. You do not know if this entity may or may not harm you, but there is always a chance that you might get help from this entity to get out of the forest alive.");

    let path = prompt("Which path do you choose?(1/2/3)");

    path = parseInt(path);

    if (path === 1){
    } else if (path === 2){
    } else if (path === 3){
        alert("Trusting that the visible entity you see from a distance will help you with your journey to get our of the forest, you chose to go on path 3");
        alert("As you get closer, you notice that some vines are blocking your way.");
        decision = prompt("Do you walk through it or walk around it? (Enter 1 for the first option or 2 for the second)");
        if (parseInt(decision) === 1){
            alert("After walking through the vines, you find out those vines contained a deadly poison! You slowly passed out in the dark forest...");
            gameFailureEnd();
            answer = prompt("Would you like to restart the game?(Y/N)")
            if (answer === 'N'){
                break;
            }
        } else {
            alert("You come across another set of vines blocking your way. This path seems to be consistent of them.");
            decision = prompt("Do you walk through it or walk around it? (Enter 1 for the first option or 2 for the second)");
            if (parseInt(decision) === 1) {
                alert("After walking through the vines, you find out those vines contained a deadly poison! You slowly passed out in the dark forest...");
                gameFailureEnd();
                answer = prompt("Would you like to restart the game?(Y/N)")
                if (answer === 'N'){
                    break;
                }
            } else {
                alert("You finally got to the entity and you finally realized that it was a man in a raggedy robe covering his whole body and half of his face, only revealing his mouth.");
                alert(`Hello, ${name}, he said`);
                alert("Startled that the strange man knows your name, you tried to ask how he knew your name but he interrupted you");
                alert(`I know you may have many questions, like how I knew your name was ${name} or that your playing Ryan Hatamosa's text adventure game at the moment`);
                alert("But I only serve to answer your one goal, to get you out of this forest");
                alert("He smiles to you, asking you to play a game. “It’s simple” that man says while showing you a dice 'All you have to do is roll a value of 2, 4, or 6 and I shall grant you a way to get out of this forest."
                +" However, if you do not roll any of those values, you will lose the entire adventure game.'");
                yesLetterDecision = prompt("Hearing that, you nervously think about it to yourself and consider if you wanted to play this risky game. Do you play the game with the mysterious man? (Y/N)");
                if (yesLetterDecision){
                    let diceNumber = Math.floor(Math.random() * 6 + 1);
                    alert("You began to roll the dice and got the number " + diceNumber);
                    switch(diceNumber){
                        case 1: case 3: case 5:
                            gameFailureEnd();
                            break;
                        case 2: case 4: case 6:
                            gameSuccessfulEnd();
                            break;
                        }
                    answer = prompt("Would you like to restart the game?(Y/N)")
                        if (answer === 'N'){
                            break;
                        }
                } else {
                    alert("You declined his offer and instead walk around him, like how you walk around the previous obstacles, and try to find a way out yourself." 
                    + " You can hear him behind you laugh, and as you turned around, he disappeared. Weeks, no, maybe months has passed by and you have yet to find yourself a way out of the forest. You realized that maybe you should’ve played that game with the strange man.");
                    gameFailureEnd();
                    answer = prompt("Would you like to restart the game?(Y/N)")
                    if (answer === 'N'){
                        break;
                    }
                }

            }

        }
    }
}

alert(`Goodbye ${name}, and I hope you enjoyed this adventure.`); // end of game


