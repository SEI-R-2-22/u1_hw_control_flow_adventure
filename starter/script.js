const game = () => {
  let playerName = prompt(
    'Hello there, I am the Mirror of Erised. What is your name?'
  )

  if (playerName === 'Harry Potter') {
    let searchItem = prompt(
      'Nice to meet you, Harry Potter. What are you searching for?'
    )

    if (searchItem === 'Friends') {
      let friendName = prompt(
        'What friends would you be searching for today, Master Potter?'
      )

      if (friendName === 'Ron') {
        let ronValue = confirm(
          'Unfortunately, Ron is useless and cannot help you. Please return to start'
        )

        if (ronValue) {
          game()
        }
      } else if (friendName === 'Hermoine') {
        let hermoineLocation = prompt(
          'Where would you like to look for Hermoine?'
        )
        if (hermoineLocation === 'Aritmancy Class') {
          let hermoineAritmancy = confirm(
            'Unfortunately Master Potter, Hermoine is not here. Please return to beginning'
          )
          if (hermoineAritmancy) {
            game()
          }
        } else if (hermoineLocation === 'Library') {
          alert('Hermoine to the rescue! Follow Hermoine to find the Horcrux')
        } else if (hermoineLocation === 'Gryffindor Common Room') {
          let hermoineGryffindor = confirm(
            'Hermoine is not here. Please return to beginning'
          )
          if (hermoineGryffindor) {
            game()
          }
        } else {
          let restartGame = confirm(
            'Unfortunately, I am unable to search this location. Please return to start'
          )
          if (restartGame) {
            game()
          }
        }
      } else if (friendName === 'Neville') {
        let nevilleLocation = prompt('Where could neville be?')
        if (nevilleLocation === 'Herbology Class') {
          let nevilleHerbology = confirm(
            'Unfortunately, the class is empty and Neville is not here. Please return to start'
          )
          if (nevilleHerbology) {
            game()
          }
        } else if (nevilleLocation === 'Room of requirement') {
          alert("Join Neville in training for Dumbledore's army")
        } else {
          let nevilleEnd = confirm(
            'Neville cannot be reached in this location. Please return to start'
          )
          if (nevilleEnd) {
            game()
          }
        }
      }
    } else if (searchItem === 'Horcruxes') {
      let horcruxCount = prompt('How many Horcruxes are left to find?')
      let horcruxInt = parseInt(horcruxCount)
      switch (horcruxInt) {
        case 3:
          let horcruxResult = prompt(
            'What horcrux are you searching for, master Potter?'
          )
          switch (horcruxResult) {
            case 'Nagini':
              let naginiLocation = prompt(
                'Where would you like to search for Nagini, Master Potter?'
              )
              switch (naginiLocation) {
                case 'Little Rangleton Cemetary':
                  let rangletonValue = confirm(
                    'Nangini slithered away. Please return to start'
                  )
                  if (rangletonValue) {
                    game()
                  }
                  break
                case 'Hogwarts':
                  alert('Nagini is at Hogwarts! Draw your swords!!!')
                  break
                default:
                  let noNagini = confirm(
                    'Nagini cannot be reached in this location. Please return to start'
                  )
                  if (noNagini) {
                    game()
                  }
              }
              break
            case "Tom Riddle's Diary":
              let riddleLocation = prompt(
                "Where would you like to search for Riddle's diary, Master Potter?"
              )
              switch (riddleLocation) {
                case 'library':
                  let libraryLocation = confirm(
                    "Tom Riddle's diary has been moved. Please return to start"
                  )
                  if (libraryLocation) {
                    game()
                  }
                  break
                case 'Chamber of Secret':
                  let chamberLocation = confirm(
                    'The diary was already destroyed in the Chamber of Secret'
                  )
                  if (chamberLocation) {
                    game()
                  }
                  break
                  break
                case 'Secret Horcrux':
                  let secretLocation = prompt(
                    'Where do you think the secret horcrux is, Mater Potter?'
                  )
                  switch (secretLocation) {
                    case 'Hogwarts':
                      alert('You are it, Master Potter! AVADA KEDAVRA!')
                      break
                    default:
                      let secretHorcruxEnd = confirm(
                        'This is a dead-end. Please return to start, Master Potter'
                      )
                      if (secretHorcruxEnd) {
                        game()
                      }
                  }
                  break
                default:
                  let wrongHorcrux = confirm(
                    'This is a dead-end. Please return to start, Master Potter'
                  )
                  if (wrongHorcrux) {
                    game()
                  }
              }
              break
            default:
              let wrongNumber = confirm(
                'You have chosen the wrong number of horcrux. Please return to start and try again.'
              )
              if (wrongNumber) {
                game()
              }
          }
      }
    } else {
      alert('I am sorry I cannot help you. Please return to start')
    }
  } else {
    alert('You are not Harry Potter. Please exit and begin game again')
  }
}
game()
