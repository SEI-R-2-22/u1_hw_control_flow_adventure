function game() {
  let playerName = prompt(
    'Hello there, I am the Mirror of Erised. Only "Harry Potter" can enter. Identify yourself?'
  )

  if (playerName === 'Harry Potter') {
    let searchItem = prompt(
      'Nice to meet you, Harry Potter. I can only help you find your friends or the remaining horcruxes. Are you searching for your "Friends" or the "Horcruxes" today?'
    )

    if (searchItem === 'Friends') {
      let friendName = prompt(
        'Would you be searching for "Ron", "Hermoine" or "Neville" today, Master Potter?'
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
          'Where would you like to look for Hermoine? We can look in "Aritmancy Class", "Library", or in the "Gryffindor Common Room"'
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
            'Hermoine already left, unfortunately. Please return to beginning'
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
        let nevilleLocation = prompt(
          'We could search for Neville in "Herbology Class", or in the "Room of requirement". Where would you like to look?'
        )
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
      let horcruxCount = prompt(
        'There are 3 left. You either have to find all remaining horcruxes, or no horcruxes at all. How many Horcruxes wouldyou be seeking today, Master Potter?'
      )
      let horcruxInt = parseInt(horcruxCount)

      switch (horcruxInt) {
        case 3:
          let horcruxResult = prompt(
            'Are you searching for "Nagini", "Tom Riddle`s diary", or the "Secret Horcrux", master Potter?'
          )
          switch (horcruxResult) {
            case 'Nagini':
              let naginiLocation = prompt(
                'Would you like to search for Nagini in "Little Rangleton Cemetary" or in "Hogwarts", Master Potter?'
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

            case "Tom Riddle's Diary":
              let riddleLocation = prompt(
                'You can choose to search for Tom Riddle`s diary either in the "Chamber of Secrets", or in the "Library". Where would you like to look, Master Potter?'
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
                case 'Chamber of Secrets':
                  let chamberLocation = confirm(
                    'The diary was already destroyed in the Chamber of Secret'
                  )
                  if (chamberLocation) {
                    game()
                  }
                  break
                default:
                  let noRiddle = confirm(
                    'Nagini cannot be reached in this location. Please return to start'
                  )
                  if (noRiddle) {
                    game()
                  }
              }

            case 'Secret Horcrux':
              let secretLocation = confirm(
                'The secret horcrux is at Hogwarts. Would you like to go there, Mater Potter?'
              )
              if (secretLocation) {
                alert('You are it, Master Potter! AVADA KEDAVRA!')
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
    } else {
      alert('I am sorry I cannot help you. Please return to start')
    }
  } else {
    alert('You are not Harry Potter. Please exit and begin game again')
  }
}
document.getElementById('startGame').onclick = game

// function game() {
//   let playerName = prompt(
//     'Hello there, I am the Mirror of Erised. Only "Harry Potter" can enter. Identify yourself?'
//   )

//   if (playerName === 'Harry Potter') {
//     let searchItem = prompt(
//       'Nice to meet you, Harry Potter. I can only help you find your friends or the remaining horcruxes. Are you searching for your "Friends" or the "Horcruxes" today?'
//     )

//     if (searchItem === 'Friends') {
//       let friendName = prompt(
//         'Would you be searching for "Ron", "Hermoine" or "Neville" today, Master Potter?'
//       )

//       if (friendName === 'Ron') {
//         let ronValue = confirm(
//           'Unfortunately, Ron is useless and cannot help you. Please return to start'
//         )

//         if (ronValue) {
//           game()
//         }
//       } else if (friendName === 'Hermoine') {
//         let hermoineLocation = prompt(
//           'Where would you like to look for Hermoine? We can look in "Aritmancy Class", "Library", or in the "Gryffindor Common Room"'
//         )
//         if (hermoineLocation === 'Aritmancy Class') {
//           let hermoineAritmancy = confirm(
//             'Unfortunately Master Potter, Hermoine is not here. Please return to beginning'
//           )
//           if (hermoineAritmancy) {
//             game()
//           }
//         } else if (hermoineLocation === 'Library') {
//           alert('Hermoine to the rescue! Follow Hermoine to find the Horcrux')
//         } else if (hermoineLocation === 'Gryffindor Common Room') {
//           let hermoineGryffindor = confirm(
//             'Hermoine already left, unfortunately. Please return to beginning'
//           )
//           if (hermoineGryffindor) {
//             game()
//           }
//         } else {
//           let restartGame = confirm(
//             'Unfortunately, I am unable to search this location. Please return to start'
//           )
//           if (restartGame) {
//             game()
//           }
//         }
//       } else if (friendName === 'Neville') {
//         let nevilleLocation = prompt(
//           'We could search for Neville in "Herbology Class", or in the "Room of requirement". Where would you like to look?'
//         )
//         if (nevilleLocation === 'Herbology Class') {
//           let nevilleHerbology = confirm(
//             'Unfortunately, the class is empty and Neville is not here. Please return to start'
//           )
//           if (nevilleHerbology) {
//             game()
//           }
//         } else if (nevilleLocation === 'Room of requirement') {
//           alert("Join Neville in training for Dumbledore's army")
//         } else {
//           let nevilleEnd = confirm(
//             'Neville cannot be reached in this location. Please return to start'
//           )
//           if (nevilleEnd) {
//             game()
//           }
//         }
//       }
//     } else if (searchItem === 'Horcruxes') {
//       let horcruxCount = prompt(
//         'There are 3 left. You either have to find all remaining horcruxes, or no horcruxes at all. How many Horcruxes wouldyou be seeking today, Master Potter?'
//       )
//       let horcruxInt = parseInt(horcruxCount)
//       switch (horcruxInt) {
//         case 3:
//           let horcruxResult = prompt(
//             'Are you searching for "Nagini", "Tom Riddle`s diary", or the "Secret Horcrux", master Potter?'
//           )
//           switch (horcruxResult) {
//             case 'Nagini':
//               let naginiLocation = prompt(
//                 'Would you like to search for Nagini in "Little Rangleton Cemetary" or in "Hogwarts", Master Potter?'
//               )
//               switch (naginiLocation) {
//                 case 'Little Rangleton Cemetary':
//                   let rangletonValue = confirm(
//                     'Nangini slithered away. Please return to start'
//                   )
//                   if (rangletonValue) {
//                     game()
//                   }
//                   break
//                 case 'Hogwarts':
//                   alert('Nagini is at Hogwarts! Draw your swords!!!')
//                   break
//                 default:
//                   let noNagini = confirm(
//                     'Nagini cannot be reached in this location. Please return to start'
//                   )
//                   if (noNagini) {
//                     game()
//                   }
//               }
//               break
//             case "Tom Riddle's Diary":
//               let riddleLocation = prompt(
//                 'You can choose to search for Tom Riddle`s diary either in the "Chamber of Secrets", or in the "Library". Where would you like to look, Master Potter?'
//               )
//               switch (riddleLocation) {
//                 case 'library':
//                   let libraryLocation = confirm(
//                     "Tom Riddle's diary has been moved. Please return to start"
//                   )
//                   if (libraryLocation) {
//                     game()
//                   }
//                   break
//                 case 'Chamber of Secrets':
//                   let chamberLocation = confirm(
//                     'The diary was already destroyed in the Chamber of Secret'
//                   )
//                   if (chamberLocation) {
//                     game()
//                   }
//                   break
//                   break
//                 case 'Secret Horcrux':
//                   let secretLocation = confirm(
//                     'The secret horcrux is at Hogwarts. Would you like to go there, Mater Potter?'
//                   )
//                   if (secretLocation) {
//                     alert('You are it, Master Potter! AVADA KEDAVRA!')
//                   }
//                   break
//                 //   default:
//                 //     let secretHorcruxEnd = confirm(
//                 //       'This is a dead-end. Please return to start, Master Potter'
//                 //     )
//                 //     if (secretHorcruxEnd) {
//                 //       game()
//                 //     }
//                 // }
//                 // break
//                 default:
//                   let wrongHorcrux = confirm(
//                     'This is a dead-end. Please return to start, Master Potter'
//                   )
//                   if (wrongHorcrux) {
//                     game()
//                   }
//               }
//               break
//             default:
//               let wrongNumber = confirm(
//                 'You have chosen the wrong number of horcrux. Please return to start and try again.'
//               )
//               if (wrongNumber) {
//                 game()
//               }
//           }
//       }
//     } else {
//       alert('I am sorry I cannot help you. Please return to start')
//     }
//   } else {
//     alert('You are not Harry Potter. Please exit and begin game again')
//   }
// }
// document.getElementById('startGame').onclick = game
