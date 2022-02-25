
const player = () => {
    let name = prompt('Whats your name?');
    alert(`Welcome to Prison Break Adventure ${name}! `);
    escapee();
}


const escapee = () => {
    let decision = yourChoice();
    if (decision === 'yes') {
        guards();
    } else if (decision === 'no'){
        martialArts();
    }  
}  

const yourChoice = () => {
    let choice = prompt('Your brother Lincoln came up with a plan to get you out of prison. Do you want to break out? (yes/no)');
    return choice;
}

const guards = () => {
    let choice = prompt("You have been caught by the guards. What will you do? Would you bribe, kill, or negotiate? (bribe/kill/negotiate)");
    switch (choice) {
        case 'kill':
            alert("The guard dies. You have successfully broke out of prison");
            replay();
            break;
        case 'negotiate':
            alert("You negotiated with the guard and both you and the guard escapes. You have successfully broke out of prison");
            replay();
            break;
        case 'bribe':
            let money = prompt("How much money do you have in prison? (enter a number)"); //the guard is not-bribable, money cannot buy the guard unfortunately
            alert(`You have offered ${money}! The guard does not want your money. The guard kills you. You have died`);
            replay();
            break;
    }
}

const martialArts = () => {
    let choice = prompt("You did not escape! Now you have to deal with bad cell mates!!! Do you know you any Martial Arts? (yes/no)")
    if (choice === 'yes'){
        alert("Great You know Martial arts! You have defeated all your cell mates. You are now the king of the prison");
        replay();
    } else {
        let learn = prompt(`Oh no! Do you want to learn Martial Arts? (yes/no)`);
        if (learn === "yes") {
            alert("You did not learn Martial Arts enough, you have died fighting for your life");
            replay();
        } else if (learn === "no"){
            let die = prompt("You did not do anything in prison. Because of your crimes and of inaction, you will have to die regardless. Do you want to die by suicide or electric chair? (suicide/electric chair)")
            if (die === "suicide") {
                alert("You have died in your cell");
                replay();
            } else {
                alert('You have died in front of everyone');
                replay();
            }
        }
        
    }
}


const replay = () => {
    let play = prompt("Do you want to play again? (yes/no)")
    if (play === 'yes'){
        player();
    } else {
        alert("Okay, Good bye!");
    }
}

player();