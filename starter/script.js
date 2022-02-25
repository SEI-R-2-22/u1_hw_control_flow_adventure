const intro = () => {
  let amount = 0
  alert(
    'You are a treasure hunter looking for long-lost pirate gold on the high seas!'
  )
  alert(
    'Your boat washes ashore on a deserted island. There is a long sandy beach and a dense jungle.'
  )

  let choice = prompt(
    'Where do you want to look? Choose beach (B) or jungle (J)'
  ).toLowerCase()

  while (choice !== 'j' && choice !== 'b') {
    choice = prompt('Choose either (B) for beach or (J) for jungle.')
  }

  if (choice === 'b') {
    alert('You have chosen the beach!')
    amount = beach()
  } else {
    alert('You have chosen the jungle!')
    amount = jungle()
  }
  return amount
}

const beach = () => {
  let amount = 0
  alert(
    "The waves at the water's edge are gentle, and there are many small tide pools. There are also dunes in the distance."
  )
  beachChoice = prompt(
    "Where do you want to look? Choose (T) for tide pools, (W) for water's edge, and (D) for dunes"
  ).toLowerCase()

  while (beachChoice !== 't' && beachChoice !== 'w' && beachChoice !== 'd') {
    beachChoice = prompt(
      "Choose either (T) for tide pools, (W) for water's edge, and (D) for dunes"
    ).toLowerCase()
  }

  if (beachChoice === 't') {
    alert('You have chosen the tide pools!')
    alert('On the edge of the tide pool, you spot a treasure chest!')
    amount = goldTreasure()
  } else if (beachChoice === 'w') {
    alert("You have chosen the water's edge!")
    alert('You walk for hours in the hot sun and feel yourself becoming faint.')
    alert(
      'It is safest if you continue your search in the jungle to get some shade.'
    )
    amount = jungle()
  } else {
    alert('You have chosen the dunes!')
    alert('Deep in the middle of the dunes, you spot a treasure chest!')
    amount = silverTreasure()
  }
  return amount
}

const jungle = () => {
  let amount = 0
  alert(
    'You walk past several tall trees as you search into the heart of the jungle.'
  )
  alert(
    'You approach a clearing where there is a meadow and a rocky hill with a cave.'
  )
  let jungleChoice = prompt(
    'Where do you want to search? Type (M) for meadow and (C) for cave.'
  ).toLowerCase()

  while (jungleChoice !== 'm' && jungleChoice !== 'c') {
    jungleChoice = prompt(
      'Choose either (M) for meadow and (C) for cave.'
    ).toLowerCase()
  }

  if (jungleChoice === 'm') {
    alert('You have chosen the meadow')
    alert('Beside a mossy patch, you notice loose dirt and begin clearing it.')
    alert('There is a treasure chest in the dirt!')
    amount = silverTreasure()
  } else {
    alert('You have chosen the cave')
    alert('Right at the mouth of the cave, you spot a treasure chest!')
    amount = goldTreasure()
  }

  return amount
}

const goldTreasure = () => {
  let openChest = confirm('Click OK to open the treasure chest')
  let coins = 0
  if (openChest) {
    alert(
      'The treasure chest is full of many gold coins! Decide how much of the plunder you want to take.'
    )
    let plunder = prompt(
      'Type "all", "most", or "some" to choose the amount to take.'
    ).toLowerCase()
    alert(`You have chosen to take ${plunder} of the coins!`)
    switch (plunder) {
      case 'all':
        coins += 75
        break
      case 'most':
        coins += 50
        break
      case 'some':
        coins += 25
        break
      default:
        coins += 5
    }
    alert(`You have taken ${coins} gold coins!`)
  } else {
    alert('You fool! Why come all this way and not even open it?')
    alert('You are a disgrace to treasure hunters everywhere!')
    alert('Go back to the beginning and try again!')
    coins = intro()
  }
  return coins
}

const silverTreasure = () => {
  alert('The treasure chest contains only 5 silver coins')
  let amount = prompt('How many would you like to take?')
  alert(`You have taken ${amount} silver coins.`)
  return amount
}

const story = () => {
  let amount = intro()
  alert(`You have collected ${amount} precious coins!`)
  alert(
    'As is treasure hunter custom, leave behind some of your coins on the beach for a future traveller.'
  )
  let leftBehind = parseFloat(
    prompt('How many coins do you want to leave behind?')
  )
  if (leftBehind < amount) {
    amount -= leftBehind
  } else if (leftBehind === amount) {
    amount -= 1
    alert("That's all your coins! Don't leave them all behind")
    alert('Just leave one coin behind instead')
  } else {
    alert("You don't have that many coins to leave!")
    alert('Leave about half your coins instead')
    amount /= 2
    amount = Math.ceil(amount)
  }
  alert(`You'll be returning home with ${amount} coins`)
  alert('Oh no!')
  alert('Right after you set sail, your boat is ransacked by smugglers!')
  alert('They take all of your coins :(')
  let redo = confirm(
    'Click OK if you want to search for another island, or click cancel to go home'
  )
  if (redo) {
    alert('Set sail for another island!')
    story()
  } else {
    alert('All right, go home empty-handed :(')
  }
}

story()
