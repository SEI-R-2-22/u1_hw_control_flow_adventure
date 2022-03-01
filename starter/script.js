let valueOfPrompt = prompt("Great, just your luck. You are being robbed by two masked individuals. One appears to have a knife, the other one is behind you, no idea if they are armed. What is your plan? GIVE up items, PLEAD with robbers, attempt DISARM.(Give, Plead, Disarm)");
console.log(valueOfPrompt)

switch(valueOfPrompt) {
case 'Give':
let give = prompt(" Smart. Now are you going to stay calm? (Yes/No)");

    if(give === 'Yes') {
        alert("They gather up your things, then proceed to run off. You handled the situation very well. Congrats! You live to see another day! VICTORY!!");

     } else  {
       alert("You're acting figgity, they notice, they believe you will snitch. They do what they see fit. GAME OVER");
        
    } 

break;

case 'Plead' :
  let plead =  prompt("You ask the robbers to not take anything. They laugh in your face, followed by a blunt object cracking the back of your skull. You drop to the ground and they begin to rummage through your pockets, do you STOP them or let them CONTINUE? (S/C) ");

    if( plead === 'S') {
        alert("The robbers don't want to hear anything from you, they start kicking and stomping you until you are unconscious. Leaving you for someone else to find. GAME OVER")
    } else {
        alert('You remain as calm as you possibly can, in hopes that it will be over quick. They tell you to keep your mouth shut, then run away. You gather yourself, then proceed to walk home. At least you get to go home tonight. CONGRATS! ');
  
      }
break;

case 'Disarm' :
    let disarm = prompt("Do you want to attack?(Y/N)");

    if(disarm  === 'Y') {
        alert("You lunge for the knife, only to get sliced across the face. They stab you a few times then run away. Leaving behind all of your posessions. Your wounds are fatal. You don't have much long- GAME OVER.")

    } else {
        alert("You remain completely calm, eyes locked with your mugger. The mugger cautiously sizes you up, puts away their blade, then bails. TRUE ENDING! CONGRATS! ")
    }
  //  default :
   // alert("I do not understand your input, please try again.");
}
