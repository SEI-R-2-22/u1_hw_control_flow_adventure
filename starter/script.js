
const player = () => {
    let name = prompt('Enter you name below:');
    alert(`Well howdy there, ${name}! Welcome to the town of Pepperrock! Let's be friends!`);
    guarded();
}


const guarded = () => {
    let decision = yourChoice();
    if (decision === 'yes') {
        bigMad();
    } else if (decision === 'no'){
        somethingElse();
    }  
}  

const yourChoice = () => {
    let choice = prompt('The town guards are looking at you weird. Did you do something to make them angry? (yes/no)');
    return choice;
}

const bigMad = () => {
    let choice = prompt("Uh-oh the guards are approching, what did you do? (stole/lied/cheated)");
    switch (choice) {
        case 'stole':
            alert("You stole an ice cream?! They're going to lock you away for that");
            replay();
            break;
        case 'lied':
            alert("You lied on you tax forms? Oh that's no big deal, you'll be fine, but...");
            replay();
            break;
        case 'cheated':
            let bigTest = prompt("You cheated on a test?! What subject was it? ");
            alert(`You cheated on a(n) ${bigTest} test?! You'll never learn that way. You should feel ashamed!`);
            replay();
            break;
    }
}

const somethingElse = () => {
    let choice = prompt("Well they're approching, how come? (I am also a guard/I just slayed a dragon")
    if (choice === 'I am also a guard'){
        alert('Oh... guards killed my best friend.');
        replay();
    } else {
        let learn = prompt(`Wait, are you one of those adventurer types? (yes/no)`);
        if (learn === "yes") {
            alert("Oh so you've probably got to move on soon...");
            replay();
        } else if (learn === "no"){
            let dragon = prompt("If you're not an adventurer, how did you slay a dragon? (dark magic/with my charms)")
            if (dragon === "dark magic") {
                alert("You practice dark magic?");
                replay();
            } else {
                alert('Oh.. uh well...');
                replay();
            }
        }
        
    }
}


const replay = () => {
    alert('I dont think its a good idea for us to be friends...')
    let play = prompt('Did you want to try to be different this time? (yes/no)')
    if (play === 'yes'){
        player();
    } else {
        alert('Okay, well have a good life.');
    }
}

player();