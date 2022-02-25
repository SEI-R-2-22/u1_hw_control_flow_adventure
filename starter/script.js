const game = () => {
  let user = prompt("Hello, what's your name?")
  console.log(user)

  alert('Nice to meet you, ' + user + '. Welcome to the Grand Prairie.')

  let firstPath = prompt(
    'You have some choices ahead of you. Would you like to head toward the Crowned Castle, Light-filled Lake, or the Cold Cave?'
  )
  console.log(firstPath)

  alert(user + ', you are off to ' + firstPath + '.')

  let crownedCastle = 'Crowned Castle'
  let coldCave = 'Cold Cave'
  let lightFilledLake = 'Light-filled Lake'

  switch (firstPath) {
    case crownedCastle:
      alert('The decaying Crowned Castle looms above you.')
      break
    case coldCave:
      alert('A freezing wind comes from the Cold Cave.')
      break
    case lightFilledLake:
      alert('You are at the edge of a light-filled lake.')
      break
    default:
      alert('You are on your own ' + user + '.')
      break
  }

  let finalChoice = prompt(
    'Would you like to enter or return home? Enter 0 to return home or 1 to continue.'
  )

  if (finalChoice == 0) {
    alert('Returning home!')
  } else if (finalChoice == 1) {
    prompt('Very brave choice my friend! What did you find?')
  }

  alert(
    user + ', go forth and continue to be the author of your own adventure!'
  )
}

game()

let replay = prompt('Do you want to play again? y/n')
if (replay === 'y') {
  game()
}
