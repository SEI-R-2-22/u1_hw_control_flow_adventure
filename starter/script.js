let startGame = () => {
  let name = prompt("Hey, you! What's your name again?")
  alert(`Oh right, ${name}. Good to see you.`)
  let favoriteNumber = Number(prompt("And what's your favorite number?"))
  alert(
    `Oh, perfect. ${favoriteNumber} is the lucky number of the day. You'll do well on this quest.`
  )

  let answer1 = prompt(
    `Where do you want to go? \n
  a. The Beach \n
  b. The Bar \n
  c. The Tower \n
  (Answer a, b, or c )`
  )

  if (answer1 === 'a') {
    alert(
      "We're at the beach! It is sunny and warm. In the water you spot a fin. "
    )
    let answer2 = prompt(
      `Where do you do? \n
    a. Jump in the water and ride the shark \n
    b. Run away back to the hotel bar \n  
    (Answer a or b)`
    )
    if (answer2 === 'a') {
      alert(
        'This shark ride is awesome! In the distance you see an island, but it is getting late. '
      )
      let answer3 = prompt(
        `Where do you want to go next? \n
      a. Ride onward to the island \n
      b. Turn around and head back to your resort \n  
      (Answer a or b)`
      )
      if (answer3 === 'a') {
        alert(`
       The shark brings you to a secret island. \nYou meet a mermaid and fall in love. \n You live out your days in paradise.`)
        let again = prompt('play again? yes or no')
        if (again === 'yes') {
          startGame()
        }
      } else {
        alert(`You head back to your hotel room. \n
         It's been a long day. You quickly fall asleep.`)
        let again = prompt('play again? yes or no')
        if (again === 'yes') {
          startGame()
        }
      }
    } else {
      alert("We're at the bar")
      let answer3 = prompt(
        `What do you want to do next? \n
    a. You're getting tired. You drink your beer and then head to the hotel lobby. \n
    b. You chat up a friendly looking bearded man. \n  
    (Answer a or b)`
      )
      if (answer3 === 'a') {
        alert(`You head back to your hotel room. \n
         It's been a long day. You quickly fall asleep.`)
        let again = prompt('play again? yes or no')
        if (again === 'yes') {
          startGame()
        }
      } else {
        alert(`He takes you into a back room filled with pirate treasure \n
      He let's you have a giant gold coin \n
      You spend the rest of the afternoon reading through old pirate logs.`)
        let again = prompt('play again? yes or no')
        if (again === 'yes') {
          startGame()
        }
      }
    }
  } else if (answer1 === 'b') {
    alert("We're at the bar")
    let answer2 = prompt(
      `What do you want to do? \n
    a. Talk to Strangers \n
    b. Go on Phone and swipe on dating apps \n  
    (Answer a or b)`
    )
    if (answer2 === 'a') {
      alert('Talking with Strangers')
      let answer3 = prompt(
        `What do you want to do next? \n
      a. You're getting tired. You drink your beer and then head to the hotel lobby. \n
      b. You chat up a friendly looking bearded man. \n  
      (Answer a or b)`
      )
      if (answer3 === 'a') {
        alert(`You head back to your hotel room. \n
         It's been a long day. You quickly fall asleep.`)
        let again = prompt('play again? yes or no')
        if (again === 'yes') {
          startGame()
        }
      } else {
        alert(`He takes you into a back room filled with pirate treasure \n
      He let's you have a giant gold coin \n
      You spend the rest of the afternoon reading through old pirate logs.`)
        let again = prompt('play again? yes or no')
        if (again === 'yes') {
          startGame()
        }
      }
    } else {
      alert('Sitting with our phone')
      let answer3 = prompt(
        `Who do you want to match with? \n
    a. Bob \n
    b. Gina \n  
    (Answer a or b)`
      )
      if (answer3 === 'a') {
        alert(
          `You marry Bob. He takes you back to his hometown in Idaho. The two of you start a potato farm.`
        )
        let again = prompt('play again? yes or no')
        if (again === 'yes') {
          startGame()
        }
      } else {
        alert(
          `You end up marrying Gina. The two of you buy a house and Hawaii and live out your days in paradise `
        )
        let again = prompt('play again? yes or no')
        if (again === 'yes') {
          startGame()
        }
      }
    }
  }

  //Tower
  else {
    alert("We're at the tower")
    let answer2 = prompt(
      `What now? \n
    a. Sit in couch by front door and go on Cellphone to swipe on dating apps \n
    b. Get in the elevator and explore \n  
    (Answer a or b)`
    )
    if (answer2 === 'a') {
      alert('On our phone')
      let answer3 = prompt(
        `Who do you want to match with? \n
      a. Bob \n
      b. Gina \n  
      (Answer a or b)`
      )
      if (answer3 === 'a') {
        alert(
          `You marry Bob. He takes you back to his hometown in Idaho. The two of you start a potato farm.`
        )
        let again = prompt('play again? yes or no')
        if (again === 'yes') {
          startGame()
        }
      } else {
        alert(
          `You end up marrying Gina. The two of you buy a house and Hawaii and live out your days in paradise `
        )
        let again = prompt('play again? yes or no')
        if (again === 'yes') {
          startGame()
        }
      }
    } else {
      alert('The elevator arrives at floor 99')
      let answer3 = prompt(
        `Where do you want to go next? \n
          a. Leave the tower and go back to the resort \n
          b. You see the CEO's office. You go meet the CEO \n
          c. Climb the ladder to the roof \n
          (Answer a, b, or c )`
      )

      switch (answer3) {
        case 'a':
          alert(`You head back to your hotel room. \n
         It's been a long day. You quickly fall asleep.`)
          let again = prompt('play again? yes or no')
          if (again === 'yes') {
            startGame()
          }

        case 'b':
          alert(`You knock on the CEO's door. He welcomes you in and you start chatting. \n You strike up a quick and easy friendship. He invites you onto his yacht, which the two of you plan to sail to Florida.
                 `)
          let more = prompt('play again? yes or no')
          if (more === 'yes') {
            startGame()
          }

        default:
          alert(
            `You make it to the roof and find KING KONG! \n He abducts you and takes you to the Empire State Building. This is a tricky situation...`
          )
          let creplay = prompt('play again? yes or no')
          if (play === 'yes') {
            startGame()
          }
      }
    }
  }
}
startGame()
