const embark = () => {
  alert(
    'You are embarking on the magical journey of aging! It is your birthday, and we are planning a party.'
  )
  const age = prompt('How old are you?')
  const numericAge = parseInt(age)

  if (numericAge < 2) {
    alert("You're just an infant!")
    let flavor = prompt(
      'It is time to bake your very first birthday cake. Do you prefer rice pudding (R), mashed peas (P), or chocolate (C)?'
    )
    while (flavor !== 'R' && flavor !== 'P' && flavor !== 'C') {
      flavor = prompt(
        'Please enter the appropriate letter to choose the flavor of your cake!'
      )
    }
    switch (flavor) {
      case 'R':
        alert('Head to the grocery store to buy some jars of Gerber baby food!')
        break
      case 'P':
        const peasPreference = prompt(
          'Ew, mashed peas! Do you prefer sugar snap peas (S) or regular peas (R)?'
        )
        if (peasPreference === 'R') {
          alert('Head to your backyard garden!')
        } else {
          alert('Go to the grocery store!')
        }
        break
      case 'C':
        const chocolateChoice = prompt(
          'Do you prefer milk chocolate (M) or dark chocolate (D)?'
        )
        if (chocolateChoice === 'M') {
          alert("Buy some Hershey's chocolate for the cake!")
        } else {
          alert('Buy some Godiva chocolate for the cake!')
        }
        break
      default:
        alert('Pick a cake flavor')
    }
  } else if (numericAge < 5) {
    alert('You are a toddler!')
    let partyFavor = prompt(
      'It is time to pick party favors for your guests. Do you prefer toys (T) or books (B)?'
    )
    while (partyFavor !== 'T' && partyFavor !== 'B') {
      partyFavor = prompt('Please type T for toys or B for books!')
    }
    if (partyFavor === 'T') {
      let toyChoice = prompt(
        'Do you like building blocks (BB) or Lincoln logs (LL)?'
      )
      if (toyChoice === 'BB') {
        alert(
          'As a destructive toddler, you knocked over the tower of blocks in the toy store and broke them all.'
        )
      } else {
        alert('Your guests can build a cabin with toy Lincoln logs')
      }
    } else if (partyFavor === 'B') {
      let bookChoice = prompt(
        'Do you prefer to read Clifford (C) or Paddington (P)?'
      )
      if (bookChoice === 'C') {
        alert(
          'Unfortunately you are too young for Clifford since he runs away.'
        )
      } else {
        alert('Paddington gets lost easily. You can help him find his way!')
      }
    }
  } else if (numericAge > 15) {
    alert('You are a teenager or wise years beyond!')
    let activity = prompt(
      'It is time to pick an activity for your guests. Do you prefer going to a movie (M) or out to dinner (D)?'
    )
    if (activity === 'M') {
      let movieChoice = prompt('Do you prefer Titanic or Elf?')
      if (movieChoice === 'Titanic') {
        alert(
          'That is too sad for a birthday party. All of your guests will leave!'
        )
      } else if (movieChoice === 'Elf') {
        alert(
          'Elf is the perfect comedy for birthday parties and the holiday season!'
        )
      }
    } else if (activity === 'D') {
      let dinnerChoice = prompt(
        'Do you prefer deli (D) or delicious Italian (I) fare?'
      )
      if (dinnerChoice === 'D') {
        alert('Corned beef and pickles it is!')
      } else if (dinnerChoice === 'I') {
        alert('Spaghetti and meatballs it is!')
      }
    }
  } else {
    alert('Whoops, your birthday party plans fell through!')
  }
}

embark()
let startOver = ''
startOver = prompt('Would you like to play again? Y/N')
if (startOver === 'Y') {
  embark()
} else {
  alert('Bye for now!')
}
