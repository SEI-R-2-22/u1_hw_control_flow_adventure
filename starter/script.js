const game = () => {
  let userName = prompt("What's your name?")

  let scaredOf = prompt(
    `Why hello there tasty human... I mean ${userName}. What are you more scared of: Bears or Sharks?`
  )

  if (scaredOf === 'Bears') {
    let seasonAsk = prompt(
      "Really, we're so cuddly... I mean. What season is it? Summer, Fall, Winter, Spring?"
    )
    switch (seasonAsk) {
      case 'Summer':
        let playAgain = confirm(
          'Little summer bbq in my den tonight boys! Sorry, you turned into bear bits. Want to play again?'
        )
        break
      case 'Fall':
        alert('Oh yeah! You better be scared, papa bear is HUUUUNNNGRY!!!')
      case 'Winter':
        alert("Ugg, don't worry we're all sleeping. Unless its midnight ;)")
      case 'Spring':
        alert('You know what the most important meal of the year is, right???')
    }
  } else if (scaredOf === 'Sharks') {
    let bateSize = prompt(
      "Very interesting, don't like swimming I see. Well, how much do you weigh? ...hmm in pounds please."
    )
    if (bateSize <= 100) {
      alert('Little fish, dont bother swimming.')
    } else if (bateSize > 100 && bateSize < 200) {
      alert('Perfect, I think its a great day to swim dont you?')
    } else {
      alert('Oh yeah, party at my place. Jump in, the waters great!')
    }
  }
}

game()

const restart = confirm('restart message')

if (restart) {
  game()
} else {
  alert('Have a good day.')
}
