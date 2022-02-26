const decideToRock = () => {
  const alertGoodbye = () => {
    alert('Thanks for visiting! Have a great day!')
  }
  let initialRockerVerify = prompt(
    'Would you like to play an instrument?',
    'yes'
  )
  if (initialRockerVerify === 'yes') {
    let stringVerify = prompt(
      'Would you like an instrument with strings?',
      'yes'
    )
    if (stringVerify === 'yes') {
      let stringNumber = prompt(
        'How many strings would you like to play, four or six?',
        'six'
      )
      if (stringNumber === 'six') {
        let checkGuitar = prompt(
          'The right instrument for you is the Electric Guitar! Would you like to like to find another instrument?',
          'yes'
        )
        if (checkGuitar === 'yes') {
          decideToRock()
        } else {
          alertGoodbye()
        }
      } else {
        let checkBass = prompt(
          'The right instrument for you is the Bass Guitar! Would you like to like to find another instrument?',
          'yes'
        )
        if (checkBass === 'yes') {
          decideToRock()
        } else {
          alertGoodbye()
        }
      }
    } else {
      const bangCheck = 'hit things'
      switch (bangCheck) {
        case 'hit things':
          let bangDecide = prompt(
            'Would you rather hit things with rhythm or melody?',
            'rhythm'
          )
          if (bangDecide === 'rhythm') {
            let checkDrums = prompt(
              'The right instrument for you is the Drums! Would you like to like to find another instrument?',
              'yes'
            )
            if (checkDrums === 'yes') {
              decideToRock()
            } else {
              alertGoodbye()
            }
          } else {
            let checkPiano = prompt(
              'The right instrument for you is the Piano! Would you like to like to find another instrument?',
              'yes'
            )
            if (checkPiano === 'yes') {
              decideToRock()
            } else {
              alertGoodbye()
            }
          }
          break
        case 'sing':
          let checkVox = prompt(
            'The right instrument for you is the Vocals! Would you like to like to find another instrument?',
            'yes'
          )
          if (checkVox === 'yes') {
            decideToRock()
          } else {
            alertGoodbye()
          }
          break
        case 'breathe on people':
          let checkWind = prompt(
            'The right instrument for you is in the Windsection! Would you like to like to find another instrument?',
            'yes'
          )
          if (checkWind === 'yes') {
            decideToRock()
          } else {
            alertGoodbye()
          }
          break
      }
    }
  } else {
    let giveUpCheck = prompt(
      'Do you believe you can play an instrument?',
      'yes'
    )
    if (giveUpCheck === 'yes') {
      decideToRock()
    } else {
      let makeYouBelieve = prompt(
        "Aw, you're so wrong. All you need to do is find a place to start. Would you like to find it together?",
        'yes'
      )
      if (makeYouBelieve === 'yes') {
        decideToRock()
      } else {
        alertGoodbye()
      }
    }
  }
}
decideToRock()
