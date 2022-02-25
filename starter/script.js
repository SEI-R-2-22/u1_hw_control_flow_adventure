const hangingOut = () => {
  let userName = prompt(
    'We are going to be buddies starting today! What is your name?'
  )
  alert(`Hi, ${userName}! We're going to have lots of fun today!`)

  let activity = prompt(
    'There are so many things that we can do! Would you like to be active or be chill? (A/C)'
  ).toLowerCase()

  let active = ''
  let chill = ''

  if (activity === 'a') {
    active = prompt(
      'Okay I like that about you, let us be healthy then. Should we play volleyball, go to the gym, or go on a walk? (V/G/W)'
    ).toLowerCase()
  } else {
    chill = prompt(
      'You are a relaxed kind of person, I like that. Do you want to eat or watch a movie? (E/M)'
    ).toLowerCase()
  }

  let location = ''
  let exercise = ''
  let stroll = ''

  if (active === 'v') {
    location = prompt(
      'That is my favorite sport! Should we try indoor or outdoor? (I/O)'
    ).toLowerCase()
  } else if (active === 'g') {
    exercise = prompt(
      'I love the gym! I already hit back though, should we bench or squat? (B/S)'
    ).toLowerCase()
  } else if (active === 'w') {
    stroll = prompt(
      'I was hoping you chose this one! How many days should we walk? (1/365)'
    )
  }

  if (location === 'i') {
    alert(
      'I just checked and the indoor courts are closed, lets try something else...'
    )
    restartGame()
  } else if (location === 'o') {
    alert('Great! Let us go to the beach!')
  }

  if (exercise === 'b') {
    alert('Perfect, that is my favorite exercise!')
  } else if (exercise === 's') {
    alert('Oh god, let me get some tissues...')
  }

  if (stroll === '1') {
    alert('Why are we even walking...')
  } else if (stroll === '365') {
    alert('Alright! This is my kind of walk!')
  }

  let film = ''
  let food = ''

  if (chill === 'm') {
    film = prompt(
      'I love movies! Should we try action, comedy, drama, or horror? (A/C/D/H)'
    ).toLowerCase()
  } else if (chill === 'e') {
    food = prompt(
      'I am a great cook! Would you like to eat bananas or try centipedes? (B/C)'
    ).toLowerCase()
  }

  if (food === 'b') {
    alert('You are so boring, I do not think we can be friends anymore...')
  } else if (food === 'c') {
    alert(
      'That was a trick question, you are so gross! I definitely cannot be your friend!'
    )
  }

  console.log(film)

  switch (film) {
    case 'a':
      alert("Action movies are so cool, let's do it!")
      break
    case 'c':
      alert('You better choose a funny one then!')
      break
    case 'd':
      alert('I am prepared to cry!')
      break
    case 'h':
      alert('Oh my god, should we cuddle?')
  }
}

const restartGame = () => {
  hangingOut()
}

hangingOut()
