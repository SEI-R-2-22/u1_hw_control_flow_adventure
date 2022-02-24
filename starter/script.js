const game = () => {
  alert(`You are in a RPG`)
  let name = prompt('What is your name?')
  alert(`Welcome ${name}.`)

  let clazz = prompt('What is your role/class?')
  alert(`You are a ${clazz}.`)

  let lvl = prompt(
    'What level are you? (This is the last choice you will make)(1-10)'
  )
  alert(`You are level ${lvl}.`)
  let level = parseInt(lvl)
  switch (level) {
    case 1:
      alert(
        `You are a rookie. You went to slay the dragon. However, you lost and ended up dead.`
      )
      break
    case 2:
      alert(
        `You are a bit more than rookie. You went to slay the dragon and ended up severely wouneded. Your back is broken and had to stay on bed for the rest of your life.`
      )
      break
    case 3:
      alert(
        `You are a skilled adventurer. You went to slay the dragon and the fight ended as a tie. Your match spread throughout the kingdom and made a name for yourself.`
      )
      break
    case 4:
      alert(
        `You are a experenced adventurer. You went to slay the dragon and won the fight. But, the dragon fled while severely wounded and ended up destroy few villages. `
      )
      break
    case 5:
      alert(
        `You are a gold adventurer. You went to slay the dragon and won the fight. The dragon is dead and you married the princess of the kingdom.`
      )
      break
    case 6:
      alert(
        `You are a diamond adventurer. You went to slay the dragon and won the fight easily. However, you are not satisfied with the challenge. You went exploring the world, seeking for a more worthy opponent.`
      )
      break
    case 7:
      alert(
        `You are a legendary adventurer. You went to slay the dragon but instead of slaying it, it became your mount. You traveled together and continued exploring the mysterious world.`
      )
      break
    case 8:
    case 9:
    case 10:
      alert(
        `You are invincible. Instead of slaying the dragon, you went conquering the world.`
      )
      break
    default:
      alert(`You die anyway.`)
  }

  let replay = prompt('Would you like to replay?(y/n)')
  if (replay === 'y') game()
  else alert(`Your adventure has ended`)
}

game()
