const embark = () => {
  alert(
    'You are embarking on the magical journey of aging! It is your birthday, and we are planning a party.'
  )
  const age = prompt('How old are you?')
  const numericAge = parseInt(age)

  if (numericAge < 2) {
    alert("You're just an infant!")
    let flavor = prompt(
      'It is time to bake your very first birthday cake! Do you prefer rice pudding (R), mashed peas (P), or chocolate (C) filling?'
    )
    while (flavor !== 'R' && flavor !== 'P' && flavor !== 'C') {
      flavor = prompt(
        'Please enter the appropriate letter (R, P, or C) to choose the flavor of your cake!'
      )
    }
    switch (flavor) {
      case 'R':
        alert(
          'Yuck, rice pudding! Head to the grocery store to buy some jars of Gerber baby food.'
        )
        break
      case 'P':
        const peasPreference = prompt(
          'Ew, mashed peas! Do you prefer regular homegrown peas (R) or sugarsnap peas (S)?'
        )
        if (peasPreference === 'R') {
          alert('Head to your backyard garden to harvest some homegrown peas!')
        } else if (peasPreference === 'S') {
          alert("Head to your local farm's vegetable patch!")
        }
        break
      case 'C':
        const chocolateChoice = prompt(
          'Do you prefer milk chocolate (M) or dark chocolate (D)?'
        )
        if (chocolateChoice === 'M') {
          alert("Ok, buy some sweet Hershey's chocolate for the cake!")
        } else if (chocolateChoice === 'D') {
          alert('Ok, buy some bittersweet Godiva chocolate for the cake!')
        }
        break
      default:
        alert(
          "Could not find that cake flavor. Let's go with a plain spongecake."
        )
    }
  } else if (numericAge < 5) {
    alert('You are a tantrum-throwing toddler!')
    let partyFavor = prompt(
      'It is time to pick party favors for your guests. Do you prefer toys (T) or books (B)?'
    )
    while (partyFavor !== 'T' && partyFavor !== 'B') {
      partyFavor = prompt('Please type T for toys or B for books.')
    }
    if (partyFavor === 'T') {
      let toyChoice = prompt(
        'Do you like building blocks (BB) or Barbie dolls (BD)?'
      )
      if (toyChoice === 'BB') {
        alert(
          'As a destructive toddler, you knocked over the tower of blocks in the toy store and broke them all.'
        )
      } else if (toyChoice === 'BD') {
        alert('You gave your Barbie doll an unsightly haircut.')
      }
    } else if (partyFavor === 'B') {
      let bookChoice = prompt(
        'Do you prefer to read The Canterbury Tales (C) or Paddington (P)?'
      )
      if (bookChoice === 'C') {
        alert('Unfortunately, you are too young for Chaucer.')
      } else if (bookChoice === 'P') {
        alert('A childhood classic!')
      }
    }
  } else if (numericAge > 15) {
    alert('You are a teenager or well beyond those years!')
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
        'Do you prefer deli (D) or delicious Italian fare (I)?'
      )
      if (dinnerChoice === 'D') {
        alert('Corned beef and pickles it is!')
      } else if (dinnerChoice === 'I') {
        alert('Ravioli and chicken parmesan it is!')
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
  alert('Thanks for playing. Bye for now!')
}
