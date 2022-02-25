const dungeonDan = () => {
  let playerName = prompt(
    'Choose your own dungeon adventure! Please enter your name.'
  )
  alert(`Welcome to the dungeon, ${playerName}`)

  let enter = parseInt(
    prompt(
      'You enter the dungeon and see three doors. Which one will you enter? Door 1 seems dark. Door 2 smells damp. Door 3 smells fresh. (1/2/3)'
    ),
    10
  )
  switch (enter) {
    case 1:
      if (
        confirm(
          'You enter the dark room. You are attacked in the dark and hurt. Do you drink your healing potion? (Ok for yes/Cancel for no)'
        ) === true
      ) {
        if (
          confirm(
            'You heal yourself. You see a hostile orc in the room. Do you attack? (Ok for yes/Cancel for no)'
          ) === true
        ) {
          if (
            confirm(
              'You defeat the orc. There is a prince held prisoner in the room. Do you free him? (Ok for yes/Cancel for no)'
            ) === true
          ) {
            alert(
              'The prince is freed and rewards you. But he returns to becoming a tyrant to the kingdom. Good for you.'
            )
          } else {
            alert(
              'You leave the prince to die and leave. The kingdom descends into anarchy. Good for you.'
            )
          }
        } else {
          if (
            confirm(
              'The orc is confused by your unwillingness to attack. Do you seek to reason with her? (Ok for yes/Cancel for no)'
            ) === true
          ) {
            alert(
              'You both parley and begin to understand each other. You connect your thoughts, feelings, and aspirations. You become friends. You win.'
            )
          } else {
            alert('You decide to keep fighting and you both end up dying.')
          }
        }
      } else {
        alert('You die.')
      }
      break
    case 2:
      let dampRoom = prompt(
        'You enter the damp room and see a pool of water. Do you (a) drink the water, (b) flip the switch by the pool, or (c) talk to the magic koi fish swimming in the pool? (a/b/c)'
      )
      switch (dampRoom) {
        case 'a':
          alert('The water was poisoned, you die')
          break
        case 'b':
          alert(
            'The pool drains to reveal treature and loot, and dead magic koi fish. You are now rich and win life'
          )
          break
        case 'c':
          alert(
            'The magic koi convinces you to not flip the switch, and give you the treasure and loot hidden in the pool. You are now rich, benevolent, and win.'
          )
          break
        default:
          alert('What did you do?')
        //^^ I needed to add this to get choice c to ask for a replay. Before, this switch was missing a default option.
      }
      break
    case 3:
      let freshRoom = prompt(
        'You enter the fresh door and unknowingly pass through a magic portal. You are transformed into a magical talking koi fish and now live in a pool of water. What is your koi name?'
      )
      alert(`Welcome to your new forever life, ${freshRoom}!`)
      break
    default:
      alert(
        'You do not go further into the dungeon. You leave, never to return. You will always regret this choice.'
      )
  }
}
dungeonDan()
//^^Had to put this before the replay function. Why? You invoke your function/game first, have it play through, then have the replay option.
const playAgain = confirm('Do you want to rethink your choices and play again?')
if (playAgain === true) {
  dungeonDan()
  //inspo from website: https://medium.com/@heoegema/coding-for-absolute-beginners-choose-your-own-adventure-tutorial-3613182c6097
}
