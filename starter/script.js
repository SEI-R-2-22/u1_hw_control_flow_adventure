
function tavernStory() {
    const username = prompt(`You're not from around here, are ya' What's your name?`)
    console.log(username)

    let firstChoice ;
    firstChoice= prompt(`You seem to be tired ${username} can I get ya anything to drink Y/N?`)
    console.log(firstChoice)

    let secondChoice;

    switch(firstChoice) {
        case 'N':
        alert(`How about something to eat? Surely you want something, right?`)
        secondChoice = prompt(`We have a homemade chicken soup for the day if you're interested? Y/N`)
        break;
        case 'Y':
        alert(`Great! we have a range of beverages to select from.`)
        secondChoice = prompt(`What would you like me to fetch ya? we have Ale, Mead, or Wine`)
    }

    console.log(secondChoice)

    let thirdChoice;

    switch(secondChoice) {
        case 'Ale': alert(`Great choice, I'll have that for ya in a jiffy.`)
        thirdChoice = prompt(`Would you like to rent a room tonight ${username} Yes/No`)
        break;
        case 'Mead': alert(`Alright then, I'll get right on that.`)
        thirdChoice = prompt(`Would you like to rent a room tonight ${username}Yes/No`)
        break;
        case 'Wine': alert(`${username}! I didn't take you for a wine drinker!`)
        thirdChoice = prompt(`Would you like to rent a room tonight ${username}Yes/No`)
        case 'Y': alert(`Right'o ${username} I'll have the Chef whip that up for ya`)
        thirdChoice = prompt(`Would you like to rent a room tonight ${username}Yes/No`)
        case 'N': alert(`Sorry to hear that, ${username} not much else I can offer you, except a room. `)
        thirdChoice = prompt(`Would you like to rent a room tonight ${username}Yes/No`)
    }

    
   console.log(thirdChoice)
   switch(thirdChoice) {
       case 'Yes': alert (`Alright ${username} Here're the keys to room 4, have a good nights sleep`)
       break;
       case 'No': alert (`Alright ${username} Guess I'll be seeing you around.`) 
       break;
   }

    let gameplay 
    gameplay = prompt('Do you want to start over? Y/N')
    if (gameplay === 'Y') {
       tavernStory()
    } else (alert('See you next time!'))}

tavernStory() 