const game = () => {
  const name = prompt('What is your name?')

  let area = prompt(
    `Hi ${name}, welcome to your Life! Where do you want to grow up? Please choose Rural or Urban (r/u)`
  )

  if (area === 'r') {
    let ruralLife = prompt(
      'You had a happy childhood! Now it is the time to choose what kind of life you want to live. Farming or Schooling (f/s)?'
    )
    if (ruralLife === 'f') {
      let specialize = prompt(
        'When you were 30 you owned a big farm! How do you want to specialize your farm? Animals or Crops (a/c)'
      )
      if (specialize === 'a') {
        alert(
          'You retired after 40 years opertaing your farm, and joined GA for fun!'
        )
      } else {
        alert(
          'There was a drought when you were 30, and you broke! You joined GA to start your career as a software engineer'
        )
      }
    }
    if (ruralLife === 's') {
      let study = prompt(
        'You did great job in your school work! What do you want to study, literature or science (l/s)?'
      )
      if (study === 'l') {
        alert(
          'You slept in your class and failed your final, and decided to join GA to start your career as a software engineer'
        )
      } else {
        alert('You became a software engineer, and joined GA as an instructor')
      }
    }
  }

  if (area === 'u') {
    let urbanLife = prompt(
      'You had a tough childhood with a lot of homework. Would you like to do research or sports? (r/s)?'
    )
    if (urbanLife === 'r') {
      let life = prompt('Do you want to specialize in finance or science (f/s)')
      if (life === 'f') {
        let investment = prompt(
          'In what year you invested in stock market? (1997/2008/2022)'
        )
        switch (investment) {
          case '1997':
            alert(
              'You met 1997 asian financial crisis, and you broke!you joined GA to start your career as a software engineer inorder to pay off your debt'
            )
            break
          case '2008':
            alert(
              'You met financial crisis, and you broke!You joined GA to start your career as a software engineer inorder to pay off your debt'
            )
            break
          case '2022':
            alert(
              'You became a millionaire. You then got bored of money, and you joined GA to start your career as a software engineer'
            )
            break
        }
      } else {
        alert('You became a software engineer, and joined GA as an instructor')
      }
    }
    if (urbanLife === 's') {
      let sports = prompt(
        'You became an athlete! What sports did you choose, basketball or ski? (b/s)'
      )
      if (sports === 'b') {
        alert(
          'You became a NBA player. After you retired from NBA, you joined GA to start your career as a software engineer'
        )
      } else {
        alert(
          'You won Olympic metal when you were 20. After you retired, you joined GA to start your career as a software engineer '
        )
      }
    }
  }
}

game()

let answer = prompt('Do you want to play again? (y/n)')

if (answer === 'y') {
  game()
}
