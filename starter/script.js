let game = () => {
    let userName = prompt ('Lets get started! What is your name?')
    console.log('userName')
    alert(`Your going to have a fun time traveling to your destination ${userName}!`)
    
    let destination = prompt ('Are you sure you want to go? y or n')
    
    if (destination === 'y') {
        let cave = prompt ('You have entered a dangerous cave. Would you like to fight the dragon? f (fight)')
    alert( 'you have defeated the dragon')
        } 
    
    if (destination === 'n') {
        let cave = prompt ('The dragon will defeat you if you dont fight! type n to countinue...')
    alert('Your dead!')
    }
    
    
    }
    
    game ()
    let restart = ""
    restart = prompt ("Would you like to restart game? Y/N")
    switch (restart) {
        case 'y':
            game()
        case 'n':
    }
    
