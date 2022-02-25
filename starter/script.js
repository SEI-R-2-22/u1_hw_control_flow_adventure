const invalid = () => {
  alert('Please follow the promps correctly')
}

const playAgain = () => {
  let answer = confirm('Play again?')
  if (answer) {
    playGame()
  }
}

const playGame = () => {
  alert(
    'General Assembly is putting together a sports league, and they need you!'
  )

  let sport = prompt("Pick your sport. Type 'f' for football or 't' for track.")

  if (sport === 'f') {
    let pos = prompt(
      "Would you like to play on the offense ('o') or the defense ('d')?"
    )
    if (pos === 'o') {
      let opos = prompt(
        "Are you a quarterback ('q'), a runningback ('r'), or a wide receiver ('w')?"
      )
      if (opos === 'q') {
        alert(
          "You were sacked 15 times in GA's first game and lost the game :("
        )
        playAgain()
      } else if (opos === 'r') {
        alert(
          "You're a future Adrian Peterson. You ran for 400 yards and 8 touchdowns and led GA to their first victory!"
        )
        playAgain()
      } else if (opos === 'w') {
        alert(
          "You were open, but your quarterback is blind. You've lost the game :("
        )
        playAgain()
      } else {
        invalid()
        playAgain()
      }
    } else if (pos === 'd') {
      let dpos = prompt(
        "Are you a lineman ('l'), a linebacker ('b'), or a defensive back ('d')?"
      )
      if (dpos === 'l') {
        alert(
          "You're looking like Aaron Donald out there! You're 8 sacks have won the game!"
        )
        playAgain()
      } else if (dpos === 'b') {
        alert(
          'You own the field! You had 20 tackles and an interception to clinch the victory for GA!'
        )
        playAgain()
      } else if (dpos === 'd') {
        alert(
          "You're not very quick on your feet. You let the other team's receivers burn you for over 1,000 yards and completely blew the game :("
        )
        playAgain()
      } else {
        invalid()
        playAgain()
      }
    } else {
      invalid()
      playAgain()
    }
  } else if (sport === 't') {
    let pos = prompt("Are you on the track ('t') or the field ('f')?")
    if (pos === 't') {
      let tpos = prompt("Are you a sprinter ('s') or a distance runner ('d')?")
      if (tpos === 's') {
        let length = prompt('Do you run the 100 or the 400?')
        length = parseInt(length)
        switch (length) {
          case 100:
            alert(
              'The audience blinked and missed you! You won that race easily!'
            )
            playAgain()
            break
          case 400:
            alert(
              "In the sport' hardest event, you somehow managed a time of 50 seconds and won! Congrats!"
            )
            playAgain()
            break
          default:
            invalid()
            playAgain()
        }
      } else if (tpos === 'd') {
        alert(
          'Although nobody in the audience stayed to watch it happen, you won!'
        )
        playAgain()
      } else {
        invalid()
        playAgain()
      }
    } else if (pos === 'f') {
      let fpos = prompt("Do you jump ('j') or throw ('t')?")
      if (fpos === 'j') {
        alert(
          "Great decision! Even though you lost, you're still the coolest at the meet"
        )
        playAgain()
      } else if (fpos === 't') {
        alert(
          'Your 300 pound frame enabled you to throw the shotput 60 meters. Congratulations on your BIG victory!'
        )
        playAgain()
      } else {
        invalid()
        playAgain()
      }
    } else {
      invalid()
      playAgain()
    }
  } else {
    invalid()
    playAgain()
  }
}

playGame()
