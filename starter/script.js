function playGame(){

    let playerName = prompt('What is your name?')
    let playerChoice = prompt(`Nice to meet you ${playerName} enter 
    the past, future, or present?`)
    if (playerChoice === 'past') { 
        let plChoice1 = prompt('Choose a system: N64, Xbox, or PS1?')
        if (plChoice1 === 'N64'){
            let plChoice2 = prompt('mario or zedla?')
            if (plChoice2 === 'mario') {
                alert('Its a me ... mario!!');
            } else if (plChoice2 === 'zelda') {
                alert('Ocarina of Time is a classic fershner!!');
            }  else {
                alert('please insert a valid option');
            } 
        }else if (plChoice1 === 'Xbox') {
            let plChoice3 = prompt('CS or Halo?')
            if (plChoice3 === 'CS') {
                alert('CS has come a long way');
            } else if (plChoice3 === 'Halo') {
                alert('I miss the OP jump effect in the original halo games');
            }else {
                alert('please enter a valid option');
            }
        } else if(plChoice1 === PS1) {
            let plChoice4 = prompt('which PS was ur fav? 1,2,3,4?')
            if (plChoice4 === 1) {
                alert('Arguably the worst console out at this time');
            }else if (plChoice4 === 2) {
                alert('Definately had some classics');
            }else if (plChoice4 === 3) {
                alert('The beauty of free PSN!!!');
            }else if(plChoice4 === 4){
                alert('Ive not used that system yet');
            }else {
                alert('please enter a proper number');
            }
        } 
    }else if (playerChoice === 'future') {
        let plChoice21 = prompt('If you were launched into space what would you take? gas to get home, extra food, or a tv')
        switch(plChoice21) {
            case 'gas to get home':
                alert('Smart move!!!');
                break;
            case 'extra food':
                alert('Food over life? Ouch');
                break;
            case 'a tv':
                alert('Your brain is being consumed by the system, wake up Mr. sheep');
                break;
            default:
                alert('please enter a proper answer');
        }
    }else if (playerChoice === 'present') {
        let daysLeft = prompt('In todays world exactly as is, how many days before the next global crisis?');
        if (daysLeft > 1000 && daysLeft < 5000) {
            alert('Some would consider that a lifetime. Everyday is a blessing');
        }else if(daysLeft < 1000 && daysLeft > 500) {
            alert(`The End is Nigh. They can't all be winners can they? `);
        }else if(daysLeft < 500 && daysLeft > 100) {
            alert('Better get you affairs in order.');
        }else if(daysLeft < 100) {
            alert('Why would you choose these options? Not smart bucko!!!');
        }else {
            alert('please insert a proper answer');
        }
    }else {
    alert('please enter a valid response')
    }

}
playGame();
let playAgain = prompt('Would you like to play again, Y/N?')
if(playAgain === 'Y'){
    playGame();
}else {
    alert('Farewell!!');
}