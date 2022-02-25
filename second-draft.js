const game = () => {
  const userName = prompt(`Oh, hello! What's your name?`)
  console.log(userName)
  alert(
    `Nice to meet you, ${userName}. It seems you've entered an enchanted forest!`
  );

  let firstChoice = prompt(
    `A forked path lies ahead ... would you like to go right (R) or left (L)?`).toLowerCase;

    const adventureChoices = [{
      question: 'Would you like to go left or right? (L/R)',
      answer: 'l',
      firstR: 'You\ve come to Psychic River where the water reflects your future ...',
      secondR: 'You\'ve reached Mermaid Lake ...'
    },
    {
      question: 'Where would you like to go? (R/L)',
      answer: 'r',
      firstR: 'Oh no, you\'ve been pulled into the future! No going back now ...',
      secondR: 'The mermaids have enticed you into the underwater cavern, Crystal Cave ... 
    }
    ]
}

for (i = 0; i < adventureChoices.length; i++) {
  let answer = prompt(adventureChocies[i].question).toLowerCase;
  if (answer === adventureChoices[i].answer) {
    alert(adventureChoices[i].firstR);
  } else {
    alert(adventureChoices[i].secondR);
  }
}

game()