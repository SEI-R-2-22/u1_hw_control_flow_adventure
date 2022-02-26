const game = () => {
  alert(`You are in a RPG`)
  let name = prompt('What is your name?')
  alert(`Welcome ${name}.`)

  let clazz = prompt('What is your role/class?')
  alert(`You are a ${clazz}.`)

  choice()
  // switch (level) {
  //   case 1:
  //     alert(
  //       `You are a rookie. You went to slay the dragon. However, you lost and ended up dead.`
  //     )
  //     break
  //   case 2:
  //     alert(
  //       `You are a bit more than rookie. You went to slay the dragon and ended up severely wouneded. Your back is broken and had to stay on bed for the rest of your life.`
  //     )
  //     break
  //   case 3:
  //     alert(
  //       `You are a skilled adventurer. You went to slay the dragon and the fight ended as a tie. Your match spread throughout the kingdom and made a name for yourself.`
  //     )
  //     break
  //   case 4:
  //     alert(
  //       `You are a experenced adventurer. You went to slay the dragon and won the fight. But, the dragon fled while severely wounded and ended up destroy few villages. `
  //     )
  //     break
  //   case 5:
  //     alert(
  //       `You are a gold adventurer. You went to slay the dragon and won the fight. The dragon is dead and you married the princess of the kingdom.`
  //     )
  //     break
  //   case 6:
  //     alert(
  //       `You are a diamond adventurer. You went to slay the dragon and won the fight easily. However, you are not satisfied with the challenge. You went exploring the world, seeking for a more worthy opponent.`
  //     )
  //     break
  //   case 7:
  //     alert(
  //       `You are a legendary adventurer. You went to slay the dragon but instead of slaying it, it became your mount. You traveled together and continued exploring the mysterious world.`
  //     )
  //     break
  //   case 8:
  //   case 9:
  //   case 10:
  //     alert(
  //       `You are invincible. Instead of slaying the dragon, you went conquering the world.`
  //     )
  //     break
  //   default:
  //     alert(`You die anyway.`)
  // }

  let replay = prompt('Would you like to replay?(y/n)')
  if (replay === 'y') game()
  else alert(`Your adventure has ended`)
}

const choice = () => {
  let choice2 = ''
  let choice3 = ''
  let choice1 = prompt(
    'You see a mountain at your north, a lake on your east, and a desert on your west. Which way would you go? (north,east,west)'
  )

  switch (choice1) {
    case 'north':
      choice2 = prompt(
        'On your right, there is a walking skeleton. On your left, there is a treasure chest. Which way would you walk? (right/left)'
      )
      alert('You went north')
      switch (choice2) {
        case 'right':
          alert(
            'You slaugtered the walking skeleton and gained an old necklace'
          )

          choice3 = prompt(
            'On north, there is a cave. At east, it is a forest. Which way would you go? (north/east)'
          )
          switch (choice3) {
            case 'north':
              alert('In the cave you found a treasure filled with gold.')
              break
            case 'east':
              alert('In the forest, you found nothing but dirt')
              break
            default:
              alert('you died')
          }
          break
        case 'left':
          alert('you opened the treasure chest but found only one coin')

          choice3 = prompt(
            'On north, there is the ocean. At east, it is a village. Which way would you go? (north/east)'
          )
          switch (choice3) {
            case 'north':
              alert('You went on boat and traveled the world by sea.')
              break
            case 'east':
              alert(
                'You met your partner at the village and lived a happy life.'
              )
              break
            default:
              alert('you died')
          }

          break
        default:
          alert('you died')
      }
      break

    case 'east':
      alert('You went east, arriving to a lake.')
      choice2 = prompt(
        'You found two paths, north to a desert, west to a mountain'
      )
      switch (choice2) {
        case 'north':
          alert('you went north into the desert')
          choice3 = prompt(
            'You see a walking mummy on north, and a lion at south'
          )

          switch (choice3) {
            case 'north':
              alert('you slayed the mummy and found a treasure.')
              break
            case 'south':
              alert('you slayed a lion and gained fame')
              break
            default:
              alert('You died')
          }
          break
        case 'west':
          alert('you went west into the mountain')
          choice3 = prompt('You have two path. East to a farm. West to a town')

          switch (choice3) {
            case 'east':
              alert('You went to the farm and decided to become a farmer')
              break
            case 'west':
              alert('You went to a town, just to find it is a ghost town')
              break
            default:
              alert('You died')
          }

          break
        default:
          alert('You died')
      }
      break

    case 'west':
      choice2 = prompt(
        'You arrived at the desert and find a pyramid on north and a forest at south'
      )
      switch (choice2) {
        case 'north':
          choice3 = prompt(
            'You arrived to the pyramid and find a mummy at north, a walking skeleton at south'
          )

          switch (choice3) {
            case 'north':
              alert(
                'You slaughtered the mummy but got lost in the pyramid forever'
              )
              break
            case 'south':
              alert('You slayed the skeleton and find the room to the treasure')
              break
            default:
              alert('You died')
          }
          break
        case 'south':
          choice3 = prompt('You found a pond at north and mud at south')
          switch (choice3) {
            case 'north':
              alert(
                'You found a mystical deer near the pond which lead you to a castle, there lived a princess'
              )
              break
            case 'south':
              alert('You arrived at the pond and dug up some treasure')
              break
            default:
              alert('You died')
          }
          break
        default:
          alert('you die')
      }
      break
    default:
      alert('you stayed here for the rest for your life')
  }
}

game()
