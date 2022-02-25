const tangled = () => {
    let intro = confirm('Want to play an adventure game?')
    if (intro === true) {
        let player = prompt('What is your name?')
        let greet = confirm(`Hello ${player}! Welcome to Kingdom Corona. Mother Gothel stole the king and queen's daughter, Rapunzel, and now Rapunzel needs to find her way to see the lights and return home. Would you like to help her?`)
        if (greet === true) {
            let start = prompt('Awesome! You will be playing as Rapunzel! Mother Gothel is away and Flynn Rider is asking if you would like to leave the tower. Would you like to leave? Type yes or no.')
            if (start === 'yes') {
                let next = prompt('You are now in the woods. Mother Gothel is looking for you and Fynn Rider is asking where you want to go next. Choose between \'get food\', \'take a nap\', or \'go into the city\'.')
                switch(next) {
                    case 'get food':
                        alert('Mother Gothel found you! You lose!');
                        break;
                    case 'take a nap':
                        alert('Mother Gothel found you! You lose!');
                        break;
                    case 'go into the city':
                        let final = prompt('You are in the festival and so close to seeing the lights near the kingdom! There is a boat up ahead. Flynn Rider is asking if you want to go into the boat. Choose 1 for Y and 2 for N.');
                        parseInt(final)
                        if (parseInt(final) === 1) {
                            alert('You see the lights! You are home! You win!')
                        } else {
                            alert('Mother Gothel found you in the city! You lose!')
                        }
                        break;
                    default:
                        alert('That is not an option. You lose!')
                }
            } else {
                alert('You lose! You are stuck in the tower forever!')
            }
        } else {
            alert('How selfish!')
        }
    } else {
        alert('See you next time!')
    }

}

tangled();

let replay = prompt('Do you want to play again? Y/N')
if (replay === 'Y') {
    tangled();
}