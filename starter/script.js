function adventure()

const beastName = "Riley";
alert(`Hello Dragon, what is your name?  ${adventureName}`);

switch(adventureName){
    case"Riley":
    alert("Welcome! We have been waiting for safe passage.");
break;
case"Dragon 1":
alert("Yes I will!")
break;
case"Warrior":
alert("Off we go!")
}

adventure()

kingdom()
  
{
let age = prompt('How old of a dragon are you?')
// ES5 Version
alert('You are ' + age + ' years old.')
let decison = prompt(`Due to your age, You may enter City of Java, Kingdom Mocha. Do you wish to continue?yes/no?`)
let decison = `yes`;
if (decison === `yes`) 
    alert(`You are on your way.`);

else if (decison === `no`) 
    alert(`You may choose another Kingdom.`);
}

const decision2 = () => {
let decison2 = prompt(`You have been asked to start protecting now, do you want to begin?yes/no?`)
let decison2 = `yes`;
if (decison2 === `yes`) 
alert(`You have now begun, good luck Riley the Dragon.`);

else if (decison2 === `no`) 
    alert(`You have neglected the kingdom, Please leave.`);
} 

const Option = () => {
let Option = prompt('You have been given a Warrior to help you protect our Kingdom, Do you wish to have his help?yes/no?');
let Option = `yes`;
if (Option === `yes`) 
alert(`Hooray! You have a Warrior to rise with you!`);

else if (Option === `no`)
alert(`Suit yourself, Good luck on your journey Riley.`);
}


const choice = () => {
let choice = prompt(`Here are the materials you will need to keep this Kingdom safe from the Dementors. Please pick your items.`);
if (choice === 'Sword, Armor, Daggers, Axes and Archery')
    alert(`WONDERFUL CHOICES! I am so glad you are here to protect us!`);
    
else if (choice === `no armor`) 
alert(`What a bold choice you have made, let's hope your fire breath will be enough for this kingdom...`);
}

const decison3 = () => {
let decison3 = prompt (`Ok. Now that you have your choice made up, lets move along to protection. Where will you be protecting us from? tower/ground/sky/nowhere`);
if (decison3 === true `Tower/Ground/Sky`)
alert(`WOW. Where would we be without you and your braveness?!`);
confirm (`Tower is your option? Ok, Here is a map to get there! Thanks!`);
confirm (`Ground you say? My solider will lead you to our field gate. Thanks!`);
confirm (`Sky?! Alright then! I will have to keep an eye out for poo!`);

 (decison === `nowhere`)
alert(`Ok. Harsh. Going to ask you to leave now.`);
alert(`Wasn't expecting a no! You are now an indoor pet.`);
alert(`TOO BAD!!! You said yes! So you will be our protector!`);
}


const change = () => {
let change = prompt (`Would you like to change your Character? Human/Dog/King/Queen/`);
if (change === true `Human/Dog/King/Queen`)
confirm (`Human`);
confirm (`Dog`);
confirm (`King`);
confirm (`Queen`);

(change === `no`);
alert (`Save your database!`);
}


const replay = () => {
let replay = prompt(`Would you like to play again? Select 1 for Y or 2 for N`);
 parseInt(replay);
 (parseInt (replay) === 1) 
 alert (`Good to hear! Let's do this!`);
 
 (replay === 2) 
 alert ("Okay, Good bye!");
    confirm (`Exit Game`);
}



kingdom();


