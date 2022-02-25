// Author: Ryan Hatamosa
// Date: 02/24/2022

const gameSuccessfulEnd = () => {
    alert("You succesfully got out of the forest! Congratulations!");
}

const gameFailureEnd = () => {
    alert("You did not successfully get out of the forest");
}

// Introduction
console.log("Hello there wanderer! You, the main character of this story,"
+ " have woken up in a spooky forest and your main objective is to get out as safely as possible.");
let userName = prompt("First off, what is your name?");
alert(`Alright ${userName},let the story begin.`);

// Start of Story
let storyContinuation = true; // to continue the story unless the user decides not to
let answer; // used to answer if user wants to replay the game or not
let decision; // for questions that require a number
let yesLetterDecision; // for yes or no questions that require a letter
let nameCheck; // used in path 1
let Number = Math.floor(Math.random() * 6 + 1); // used in paths 2 & 3
while (storyContinuation === true){
    alert("As you woke up in the dark eerie forest,"
    + " confused and afraid on how you ended up being here, you notice there are 3 available paths around you. ");
    alert("The 1st path looks the safest, as you can see a light at the end of the path. Thinking to yourself, this might be the way out, but the oddly looking dirt path tells you otherwise.");
    alert("The 2nd path is a dark tunnel. Confused on how this path may help you, you figured that maybe it will be some type of train tunnel that at the end of it will eventually get you out of the forest.");
    alert("and 3rd path you can see a shadowy figure in a distance. You do not know if this entity may or may not harm you, but there is always a chance that you might get help from this entity to get out of the forest alive.");

    let path = prompt("Which path do you choose?(1/2/3)");

    path = parseInt(path);

    if (path === 1){
        alert("Picking path 1 seems the most obvious, and that any normal person would pick this path would expect to get out the forest easily…");
        alert("That is until the supposed dirt path was actually quicksand!");
        alert("As you slowly sunk into the quicksand, 3 options occur in your head…");
        decision = prompt("Do you struggle your way out, do nothing, or look around to find something you can pull on? (Enter 1 for first, 2 for second, 3 for third)");
        if (parseInt(decision) === 1){
            alert("As you struggled your way out of the quicksand, a flashback came your head and you remember watching a youtube video about quicksand, and that movement will make a victim sink faster. The moment you realized that, it was already too late.");
            gameFailureEnd();
            answer = prompt("Would you like to restart the game?(Y/N)")
            if (answer === 'N'){
                break;
            }
        } else if (parseInt(decision) === 2){
            alert("Doing nothing, you let yourself slowly get indulged into the quicksand, accepting your faith. A very honorable ending.");
            gameFailureEnd();
            answer = prompt("Would you like to restart the game?(Y/N)")
            if (answer === 'N'){
                break;
            }
        } else {
            alert("Looking around, you see a rock on your left side that you may be able to reach and a stick on your right side that you can grab on");
            decision = prompt("Do you grab on to the rock or the stick? (Enter 1 for first option or 2 for the second)");
            if (parseInt(decision) === 1){
                alert("You thought grabbing on to the rock was a good idea, until you realized that it was no help since it was the size of a pebble");
                gameFailureEnd();
                answer = prompt("Would you like to restart the game?(Y/N)")
                if (answer === 'N'){
                    break;
                }
            } else {
                alert("You grabbed on to the stick and used all your energy to get out of the quicksand!");
                alert("You finally got out and continued closer to path");
                alert("In order to win the game and reach end of the path, you must be able to enter the name you entered at the beginning of the game.");
                nameCheck = prompt("Please enter your name (CASE SENSITIVE)");
                if (nameCheck !== userName){
                    alert("Unfortunately, you did not spell the name right.");
                    gameFailureEnd();
                    answer = prompt("Would you like to restart the game?(Y/N)")
                    if (answer === 'N'){
                        break;
                    }
                } else {
                    gameSuccessfulEnd();
                    answer = prompt("Would you like to restart the game?(Y/N)")
                    if (answer === 'N'){
                        break;
                    }
                }
            }
        }


    } else if (path === 2){
        alert("Without looking back, you continued on path 2 and ventured into the dark tunnel.");
        alert("Walking in the tunnel for about a good 10 minutes now, you hear barking noises behind you, and it seems to get more and more louder…");
        decision = prompt("Do you turn back and find out what that noise is or continue deeper into the tunnel?(Enter 1 for the first option or 2 for the second)");
        if (parseInt(decision) === 1){
            alert("You turned back around and saw what seems to be rabid dogs running towards you! You tried running away but it was already too late to avoid them!");
            gameFailureEnd();
            answer = prompt("Would you like to restart the game?(Y/N)")
            if (answer === 'N'){
                break;
            }
        } else {
            alert("You continued into the tunnel, this time at a quicker pace to outrun those barking noises behind you and after a couple of minutes, the noises were gone.");
            alert(`Moments after, you hear your noises behind you again, this time it sounded like someone calling out your name, ${userName}`);
            decision = prompt("Do you turn back and find out who is calling you or continue deeper into the tunnel?(Enter 1 for the first option or 2 for the second)");
            if (parseInt(decision) ===1){
                alert("You turned back around and headed to the direction where you heard your name being called out." 
                + " Confused, you reached to a point that you realized that you had walk back to where you first started on path 2 and when you turned around the tunnel disappeared.");
                alert("You started going crazy and did not have the mentality to continue looking for a way out of the forest");
                gameFailureEnd();
                answer = prompt("Would you like to restart the game?(Y/N)")
                if (answer === 'N'){
                    break;
                }
            } else {
                alert("You ignored the sound of your name and finally stumbled some kind of wall blocking your path, and through the small cracks of the wall you can see sunlight! THis is your way out!");
                alert("The wall then started talking!");
                alert("The magical wall asked to guess a random number from 1 to 6, and if you guess what number the magical wall is thinking, the magical wall will crumble and you win the adventure game!");
                alert("However, if you guess wrong, you lose the adventure game!");
                alert("You thought to yourself that it's an unfair percentage of winning, but hey... you were the one who chose path 2");
                alert(`You guessed the number ${Number} and the magical wall revealed it's number to be ` + 3);
                if (Number !== 3){
                    gameFailureEnd();
                    answer = prompt("Would you like to restart the game?(Y/N)")
                    if (answer === 'N'){
                        break;
                    }
                } else {
                    gameSuccessfulEnd();
                    answer = prompt("Would you like to restart the game?(Y/N)")
                    if (answer === 'N'){
                        break;
                    }
                }
            }
        }


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
                alert(`Hello, ${userName}, he said`);
                alert("Startled that the strange man knows your name, you tried to ask how he knew your name but he interrupted you");
                alert(`I know you may have many questions, like how I knew your name was ${userName} or that your playing Ryan Hatamosa's text adventure game at the moment`);
                alert("But I only serve to answer your one goal, to get you out of this forest");
                alert("He smiles to you, asking you to play a game. “It’s simple” that man says while showing you a dice 'All you have to do is roll a value of 2, 4, or 6 and I shall grant you a way to get out of this forest."
                +" However, if you do not roll any of those values, you will lose the entire adventure game.'");
                yesLetterDecision = prompt("Hearing that, you nervously think about it to yourself and consider if you wanted to play this risky game. Do you play the game with the mysterious man? (Y/N)");
                if (yesLetterDecision == "Y"){
                    alert("You began to roll the dice and got the number " + Number);
                    switch(Number){
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
                    alert("You declined his offer and instead walk around him, like how you walked around the previous obstacles, and try to find a way out yourself." 
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

alert(`Goodbye ${userName}! I hope you enjoyed this adventure.`); // end of game


