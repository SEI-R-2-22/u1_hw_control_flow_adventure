let game = () => {
  let name = prompt('What is your name?')
  alert('Welcome to the carnival,  ' + name + '!')

  let whereToGo = prompt(
    'You see three different booths set up just ahead. Would you like to play the ring toss, watch the sword swallower, or buy a snack? Type ring toss, sword swallower, or snack.'
  )
  // where does the player choose to go?
  if (whereToGo === 'ring toss') {
    // The player chose the ring toss!
    alert('You chose Ring Toss.')
    let ringToss = prompt(
      'The carny at the ring toss offers you 3 rings to toss on any bottle you see fit. If you make one ring onto the kneck of a bottle, you win a prize. Do you 1. Toss one ring at a time. 2. Toss all three rings at once and hope for the best. or 3. Try to give the carny $5 for the prize? Type 1, 2, or 3.'
    )
    if (ringToss === '1') {
      alert(
        'Awww, nuts. You missed all the rings. The carny sends you off without a prize.'
      )
      let tryAgain = prompt('do you want to try again? y/n')
      if (tryAgain === 'y') {
        alert('You won! Now you get to leave with a fun prize!!')
      } else {
        alert('ok')
      }
    } else if (ringToss === '2') {
      alert(
        'Congrats! All three rings miraculously landed on the same bottle neck. This has never happened before. The carny sheds a single tear.'
      )
    } else if (ringToss === '3') {
      alert('The carny punches you in the face.')
    } else {
      alert('You die....')
    }
  } else if (whereToGo === 'sword swallower') {
    // The player chose the sword swallower
    alert('You chose the Sword Swallower.')
    let swallowSwords = prompt(
      'You approach a man with several swords. He proves to you that they are in fact real. He asks you to decide which sword he swallows. Do you choose the 1. Small flaming sword? 2. Long and skinny sword? Or 3. The greatsword that looks like it wont even fit in his mouth? Type 1, 2, or 3.'
    )
    if (swallowSwords === '1') {
      alert(
        'The crazy sword guy sets the tiny blade on fire and slowly sticks it down his throat. NASTY!!!'
      )
    } else if (swallowSwords === '2') {
      alert(
        'The sword man unhinges his jaw like a snakey snake and and shoves that long skinny blade into his mouth!!!! You vomit.'
      )
    } else if (swallowSwords === '3') {
      alert(
        'The sword man cries as he attempts to put the gigantic sword in his mouth. Its very sad. Everyone beginds to throw rotten tomatoes at you.'
      )
    } else {
      alert('You die....')
    }
  } else if (whereToGo === 'snack') {
    // The player chose snack
    alert('You chose to buy a snack.')
    let getSnack = confirm(
      'You approach the snack booth and can see that they offer lots of yummy items!'
    )
    let snack = ''
    snack = prompt(
      'Choose an snack from the list: popcorn (P), cotton candy (CC), caramel apple (CA), nachos (N), corndog (CD)'
    )
    switch (snack) {
      case 'P':
        alert('You got Popcorn!')
      case 'CC':
        alert(
          'You got Cotton Candy. Enjoy being sticky for the rest of your life.'
        )
      case 'CA':
        alert(
          'Lookie there! You got a yummy caramel covered apple! Nice caramel mustache.'
        )
      case 'N':
        alert('I like your style ' + name + 'nachos are my favorite.')
      case 'CD':
        alert('HOT DOG! You got a corndog.')
    }
  } else {
    alert('You are destined to wander the carnival until your death.')
  }
}

game()
let restart = ''
restart = prompt('Do you want to restart? Y/N')
switch (restart) {
  case 'y':
    game()
  case 'n':
    alert('Bye!')
}
