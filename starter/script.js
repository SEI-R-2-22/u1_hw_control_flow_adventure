
const playGame = () => {
    let name = prompt('Welcome to choose your adventure. What is your name?')
    alert(`Well, ${name}, It doesnt really matter, because you have anmesia and do not know who you are.`)
    choice1();
}

const choice1 = () => {
    let a = prompt('You wake up in a dark room with a headache. You see two doors, do you choose the Left or Right door? (Left/Right)')
    switch (a) {
        case 'Right':
        case 'right':
            alert('The door was booby trapped. You died.')
            replay();
            break;
        case 'Left':
        case 'left':
            shop();
            break;
    }
}

const shop = () => {
    let b = prompt('You open the door and enter a shop. You were in the storeroom. The shopkeeper looks at you and asks, "How many arrows do you want to buy?" You notice the bow and empty quiver on your back. (0/3/10)' )
    switch (b) {
        case '0':
            alert('The shopkeeper gets mad and hits you on your head knocking you out and drags you back into the storeroom. You lose.')
            replay();
            break;
        case '3':
            alert('You leave with three arrows and run into a roving gang of bandits. You kill three, but the others surround and kill you. You Died.')
            replay();
            break;
        case '10':
            bridge();
            break;
    }
}

const bridge = () => {
    alert('you leave the shop and come across a roving gang of bandits. You kill five and scare the rest away.')
    let b = prompt('You come across a rickety old bridge. It looks like it might support your weight. You also see a vine that you might be able to use to swing across. What do you do? Cross the bridge or Shoot the vine? (Cross/Shoot)')
    switch (b) {
        case 'Cross':
        case 'cross':
            alert('You start crossing the bridge and halfway, it gives out. You fall and hit your hit head on the rocks below. The river carries your body downstream, where the shopkeeper finds your body and puts you back into the storage room. You Lose.')
            replay();
            break;
        case 'Shoot':
        case 'shoot':
            castle();
            break;
    }
}

const castle = () => {
    alert('You shoot at the vine, missing a couple times, but you eventually hit it and dislodge it. You swing across the river and see a castle.')
    let c = prompt('You walk up to the castle and see someone in the tower. "Help!" They scream! you rush in to see a dragon. The dragon turns, sees you, and gets ready to breathe fire. Do you Run away, Hide, or Fight?(Run/Hide/Fight)')
    switch (c) {
        case 'Run':
        case 'run':
            alert('You try running away only to be cosumed by the flames. The dragon gets to enjoy BBQ. You Died.')
            replay();
            break;
        case 'Fight':
        case 'fight':
            alert('You grab an arrow and shoot it, lodging it in mouth of the dragon. The dragon retaliates by swinging its tail and hitting you. You fly into wall and die. You Died.')
            replay();
            break;
        case 'Hide':
        case 'hide':
            alert('You hide behind a pillar, barely dodging the flames. As the dragon rears for another blast of fire, you see the weak spot on the dragon. You try hitting dragon with an arrow and miss. The dragon swings its tail and you dodge. With your last arrow, you take aim and hit the dragon killing it.')
            alert('You rescue the person and you live happily ever after.')
            alert('Thank you for playing!')
            replay();
            break;
    }
}

function replay () {
    let d = prompt('Do you want to replay?(Yes/No)')
    switch (d) {
        case 'yes':
        case 'Yes':
            playGame();
        case 'no':
        case 'No':
            alert('Thank you for playing!')
    }
}

playGame();