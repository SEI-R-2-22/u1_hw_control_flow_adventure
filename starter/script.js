const game = () => {
  const userName = prompt(`Oh, hello! What's your name?`)
  console.log(userName)

  alert(
    `Nice to meet you, ${userName}. It seems you've entered an enchanted forest!`
  )

  let gameIntro = alert('A forked path lies ahead ...')
  let pathChoice = prompt(
    'Would you like to go down the first (1) path or the second (2)?'
  )

  // const forkedPath = () => {
  if (parseInt(pathChoice) === 1) {
    alert(
      "You've come to Psychic River where the water reflects your future ..."
    )
  } else if (parseInt(pathChoice) === 2) {
    alert("You've reached Mermaid Lake ...")
  } else {
    alert("Hmm. I'm not familiar with this place. Try again.")
  }
  // }

  // forkedPath()

  let stayCont = prompt('Would you like to stay (S) here or continue (C)?')
  stayCont.toLowerCase

  if (stayCont === 's') {
    if (pathChoice === '1') {
      alert(
        'Oh no, your reflection pulled you into the future! No going back now ...'
      )
    } else if (pathChoice === '2') {
      alert(
        "The mermaids have lured you into the underwater cavern, Crystal Cave! Oh, well. At least there's treasure..."
      )
    } else {
      alert("Hmm. I'm not familiar with this place. Try again.")
    }
  } else {
    alert('Is it getting a little hazy?')
  }

  let mistyMeadow = prompt(
    'Look! Misty Meadow lies ahead. Do you want to go through (T) or around (A)?'
  )
  mistyMeadow.toLowerCase

  if ((mistyMeadow = 't')) {
    alert(
      "Oh, no! Forest spirits are hiding in the mist! They've taken you with them indefinitely..."
    )
  } else {
    alert('Probably the safest bet.')
  }
}

// *Add one more if/else chain here*

game()

let restart = prompt('Would you like to restart?')
restart.toLowerCase

switch (restart) {
  case 'y':
    game()
  case 'n':
    alert('Until next time ...')
}

// I've tried if/else chains, looping through arrays, and nesting conditionals in functions ... whenever I enter an exact match to my conditional, I still get the wrong result :(

// PS- The commented out code below was my array loop attempt (my original if/else chain was too confusing to salvage). This code worked, but any answers after [0] had to correlate to the user's path choice.

// So if the user chooses to go right for the first question, they reach Mermaid Lake. However, if they choose stay to stay at Mermaid Lake, they get an alert for Psychic River because the answer for choosing "s" relates to Psychic River only. I didn't know where/how to nest another conditional in order to correlate specific questions to specific outcomes ($$ or || maybe?).

// const adventureChoices = [
//   {
//     question: 'Would you like to go left (L) or right (R)?',
//     firstA: 'l',
//     secondA: 'r',
//     firstR:
//       "You've come to Psychic River where the water reflects your future ...",
//     secondR: "You've reached Mermaid Lake ..."
//   },
//   {
//     question: 'Would you like to stay (S) here or continue (C)?',
//     firstA: 's',
//     secondA: 'c',
//     firstR:
//       'Oh no, your reflection pulled you into the future! No going back now ...',
//     secondR:
//       'The mermaids have enticed you into Crystal Cave, an underwater cavern ...'
//   }
// ]

// for (let i = 0; i < adventureChoices.length; i++) {
//   let answer = prompt(adventureChoices[i].question)
//   answer.toLowerCase
//   if (answer === adventureChoices[i].firstA) {
//     alert(adventureChoices[i].firstR)
//   } else {
//     alert(adventureChoices[i].secondR)
//   }
// }
