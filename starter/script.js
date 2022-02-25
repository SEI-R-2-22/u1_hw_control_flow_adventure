const game = () => {

let userName = prompt('Hello! What is your name?');

alert(`Hi ${userName}! Are you ready for great adventure?`)

let exploreArea = prompt(`Great! You crash landed on a alien planet.
 Your ship  is badly damaged. What do you do? Type 'e' for exploration,
  'c' for call for help, or 'l' to look for food`)
 if ( exploreArea === 'e') {
     alert(`You walk into a wild jungle. 
     The flora and fauna is  pumping with life. You hear a loud noise. 
     A giant lizard jumps out and chases you back to the ship `) 
} else if ( exploreArea === 'c') {
     alert(`You stayed and you're trying to fix your ship`)
 } else if ( exploreArea === 'l') {
     alert(`It's not dinner time yet!`)
 }


 let fixingShip = prompt(`You noticed that your ship's radio is fixable.
  You just need to find a Chystreolcamutenitusolarisumnet 
  Crystal. Where do you go? Choose jungle, desert, or mountains`)
  switch (fixingShip) {
      case 'jungle':
          alert(`You fight and kill the Lizard with your bare hands!!!`)
          break;
       case 'desert':
           alert(`It's too hot, you went back to the ship!`)
           break;
        case 'mountains':
            alert(`The Crystal is not here, but the views are nice!`) 
            
}

let help = prompt(`You kick your ship's radio out of anger
 and it starts working! Who do you call for help? For base type: 0123, 
 to call Mom type: 7890`)
 if (parseInt(help) === 0123) {
     alert(`Sorry no signal! you forgot to pay your Space Radio Bill!`) 
 } else if (parseInt(help) === 7890) {
     alert(`Nah! You decide to stay! it's much nicer anyway!`)
 }

}

game();

const restart = prompt(`Would you like to play again? y/n`) 
if (restart === 'y') {
    game()
}