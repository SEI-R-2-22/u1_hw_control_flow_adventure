
function storyline(){
    const username = prompt(`I'm Ryan, nice to meet you! What's your name?`)
    console.log(username)

    let firstChoice ;
    firstChoice= prompt(`Looks like you're low on groceries, ${username}, want to head to the store? We could make some food for ourselves. (yes or no answers only, please)`)
    console.log(firstChoice)

    let secondChoice;

    switch(firstChoice) {
        case 'no':
        secondChoice = prompt(`Do you want to go to a coffee shop or a restaurant?`)
        break;
        case 'yes':
        alert(`Wonderful, let's head to the grocery store.`)
        secondChoice = prompt(`Which section do you want to go to? (dairy), (meat), or (veggie) aisle?`)
    ;
    }

    console.log(secondChoice)

    switch(secondChoice) {
        case 'coffee': prompt(`I love coffee! Do you want (1) or (2) shots of espresso?`)
        break;
        case 'restaurant': prompt(`Are you in the mood for (Thai) or (Indian)?`)
        break;
        case 'meat': alert(`${username}, let's get 2 steaks.`)
        break;
        case 'dairy': alert(`Sweet, let's get some yogurt.`)
        break;
        case 'veggie': alert(`Let's make a salad.`)
        break;
    }

    let gameplay 
    gameplay = prompt('Do you want to play again?')
    if (gameplay === 'yes') {
       storyline()
    } else (alert('Get me out!'))

}  


storyline()


