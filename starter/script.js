//Prompt user about where they are and ask for their name

let name = prompt(
  'Hello, welcome to Noahs Arcade.  Can I please have your name?',
  'Justice Silverbeard'
)

//Dungeon Crawler Game
const dungeonCrawler = () => {
  const endGame = () => {
    let decision = prompt(
      'Would you like to play this game again, or go back to the game select screen?  Press A to play again, or B for the game select screen.'
    )
    decision = decision.toLowerCase()
    if (decision === 'a') {
      dungeonCrawler()
    } else if (decision === 'b') {
      getChoice()
    } else {
      alert('That is not a valid option.  Please choose again.')
      endGame()
    }
  }
  const bossAttack = () => {
    let action = prompt(
      'You steel your nerves, gather up all of your courage, and act.  Press A to attack Nosgoth or B to yell back to them.'
    )
    action = action.toLowerCase()
    if (action === 'a') {
      alert(
        'You rush at Nosgoth and surprise them with your speed.  They were not expecting this, and your sword steals Nosgoths head from their body.'
      )
      alert(
        'You have saved the day and brought peace back to the land for all!'
      )
      endGame()
    }
    if (action === 'b') {
      alert(
        'As you open your mouth to retort, Nosgoth hurls a massive ball of lightning at you, instantly turning you into dust.  Better luck next time.'
      )
      endGame()
    }
  }
  const dungeonCrawlerTwo = () => {
    alert(
      'You continue down the hall and enter a large room.  There was an epic battle fought here.  There are casualties from both sides all around the room.'
    )
    alert(
      `You see a trusted companion lying wounded against a column towards the back of the room.  You quickly make your way over to them.  "It is good to see you are still alive ${name}.  Hurry, Nosgoth is through that door.  You are the only one who can stop them.  Please, save our world."`
    )
    alert(
      'You check your companions injuries and feel confident that they shall survive...if you survive.  You tell them to stay alive, you are going to go end this.'
    )
    alert(
      'You go through the door into the altar room.  Nosgoth is standing in front of it with his arms raised.'
    )
    alert(
      `"So nice of you to join me, ${name}.  Please come and lie on the altar.  Your sacrifice will complete the ritual and bring doom to the land."`
    )
    alert(
      'With this, Nosgoth laughs menacingly sending terror through your body.'
    )
    bossAttack()
  }
  const skeletonAttack = () => {
    let action = prompt(
      `As you walk through the winding corridors, you come upon a skeleton wielding a sword.  They do not look friendly.  What do you do?  Press A for attack, B for Defend, C for run away`
    )
    action = action.toLowerCase()
    if (action === 'a') {
      alert(
        'You swing your sword and feel it connect with the skeletons bones.  They collapse in front of you.'
      )
      dungeonCrawlerTwo()
    } else if (action === 'b') {
      alert(
        'You hold up your shield and brace yourself.  You feel the skeletons hands beat against your shield.  In the next instant, you push forward with all of your might bashing the skeleton in the skull with your shield.  They stumble backwards leaving you an opening to attack.  You take the chance and fell the skeleton with one swing of your sword.'
      )
      dungeonCrawlerTwo()
    } else if (action === 'c') {
      alert(
        'You turn to run and instantly feel the skeleton grab you.  They drag you down the hall never to be seen again.'
      )
      endGame()
    } else {
      alert('That is not a valid option.  Please choose again.')
      skeletonAttack()
    }
  }
  alert(
    'You are in a dark, dank dungeon deep in the mountain Agalorn.  These are the fabled Shrines of Nosgoth.  All sorts of vile creatures lurk here.  Though you have a sword and shield, be wary.  You can feel danger all around you.'
  )
  skeletonAttack()
}

//Spy Game
const spyGame = () => {
  const endGame = (name) => {
    let decision = prompt(
      'Would you like to play this game again, or go back to the game select screen?  Press A to play again, or B for the game select screen.'
    )
    decision = decision.toLowerCase()
    if (decision === 'a') {
      spyGame()
    } else if (decision === 'b') {
      getChoice()
    } else {
      alert('That is not a valid option.  Please choose again.')
      endGame()
    }
  }
  const superSecretLair = () => {
    alert(
      `You make your way through the EDPs super secret lair.  It sucks that the EDP is a villain, you both have similar decorating styles.  If you make it out of this alive, you are stealing some of this furniture.  You make your way down a hallway, and enter into a rather large room.  There, in the middle, is Bames Jond.  They are tied to a surgical table, and a comically large circular saw is spinning incredibly fast and slowly lowering towards them.`
    )
    alert(
      `"Ah, so nice of you to join us ${name}.  We have been waiting for you, haven't we, Bames?"  EDP steps out of the shadows.  They are holding a gun aimed at you.  "You stupid good spies.  When will you realize its so much more fun to be evil?  No matter, I will dispose of both of you and proceed with my plan to take over the world.`
    )
    alert(
      'But first, let us play a little game?  If you answer my riddle correctly, I will let you leave here alive to fight another day?  That sounds nice, yes?'
    )
    let riddleAnswer = prompt(
      `"Riddle me this ${name}. What walks on four legs in the morning, two legs at noon, and three legs in the evening?`
    )
    riddleAnswer = riddleAnswer.toLowerCase()
    if (riddleAnswer === 'a human') {
      alert(
        `"Very good, ${name}.  I am impressed.  That is correct."  Of course its correct, you think to yourself.  Thats one of the most well known riddles ever.  It also gave Bames Jond enough time to get out of his shackles and sneak up on EDP, capturing him.  Huzzah!  You have won the day!`
      )
      endGame()
    } else {
      alert(
        `"I'm sorry, ${name}.  That is not the correct answer."  And with that, EDP pulls the trigger.  Try again!`
      )
      endGame()
    }
  }
  const infiltration = () => {
    let infiltrationChoice = confirm(
      'So what are you going to do?  Sneak by choosing ok, or try and fight your way in with cancel.'
    )
    if (infiltrationChoice === true) {
      let sneak = Math.floor(Math.random() * 8)
      switch (sneak) {
        case 0:
        case 1:
        case 2:
          alert('Oh no, you were caught!  Try again!')
          endGame()
          break
        case 3:
        case 4:
        case 5:
          alert(
            'You were able to sneak by half of the guards, but were spotted.  Luckily, you were able to run away without getting caught.  You lay low for a bit and regroup.'
          )
          infiltration()
          break
        case 6:
        case 7:
        case 8:
          alert(
            'You were able to sneak past all of the guards!  You are in the super secret lair!'
          )
          superSecretLair()
      }
    } else if (infiltrationChoice === false) {
      alert(
        'Did you really think you could just go in guns blazing against the EDP and their henchman?  This did not work out well for you.  You were invited inside for a warm cooked meal, and when I say invited, I mean captured.  And when I say warm cooked meal, I mean you were fed to the EDPs sharks that have laser beams on their heads.  Better luck next time!'
      )
      endGame()
    }
  }
  alert(
    `You find yourself in the ultra secret headquarters of the Super Spy League.  You are in your bosses office.  They are sitting at their desk in front of you.  "Thank you for coming in on such short notice ${name}.  We have a serious issue.  Our top spy, Bames Jond, has been captured by the Evil Doctor Professor.  Damn it, ${name}, we cant lose Bames.  They are the best spy that has ever lived.  We need you to go rescue them.  You leave in the morning.`
  )
  alert(
    "The next day you fly to the even more super secret headquarters of the Evil Doctor Professor.  You ponder to yourself, how exactly do we know exactly where EDP is?  There isn't enough time to think too much on the subject, because you arrive quite quickly."
  )
  alert(
    'Doing a quick survey of the exterior of the hideout, you see that there are about eight henchmen patrolling the area.  You think you might be able to sneak past all of them, but you are also highly trained in hand to hand combat.'
  )
  infiltration()
}
//Fast Driver
const fastDriver = () => {
  const endGame = () => {
    let decision = prompt(
      'Would you like to play this game again, or go back to the game select screen?  Press A to play again, or B for the game select screen.'
    )
    decision = decision.toLowerCase()
    if (decision === 'a') {
      fastDriver()
    } else if (decision === 'b') {
      getChoice()
    } else {
      alert('That is not a valid option.  Please choose again.')
      endGame()
    }
  }
  const letsRace = (laps) => {
    let userDistance = 0
    let compDistance = 0
    let fuel = 100
    while (laps > 0 && fuel > 0) {
      alert(
        `There are ${laps} laps left.  You have ${fuel} fuel left.  You can drive fast, which will increase your distance but use more fuel or you can stay at a steady pace, which will give you average distance and average fuel consumption.  There are no pit stops in this game, and you can run out of fuel, so be wary.`
      )
      if (userDistance === compDistance) {
        alert('The race is currently tied.  You can win this!')
      } else if (userDistance < compDistance) {
        alert(`Come on, ${name}. You are losing!  Put the pedal to the metal!`)
      } else if (userDistance > compDistance) {
        alert('You are in the lead.  Keep it up!')
      }
      let choice = confirm(
        'Would you like to drive fast or steady?  Ok for fast, Cancel for Steady'
      )
      if (choice === true) {
        userDistance += 10
        fuel -= 25
      } else {
        userDistance += 5
        fuel -= 5
      }
      compDistance = compDistance + Math.floor(Math.random() * 10)
      console.log(compDistance)
      laps--
    }
    if (fuel <= 0) {
      alert('You ran out of fuel!  You lose!')
      endGame()
    } else if (userDistance > compDistance) {
      alert(`Congratulations ${name}, you won the race!  Nice driving!`)
      endGame()
    } else if (userDistance < compDistance) {
      alert('You lost.  Better luck next time.')
      endGame()
    }
  }

  let laps = prompt(
    `Welcome to Fast Driver, ${name}. Get ready to experience the ultimate text based racing sim!  In this game you will be racing against a computer car.  How many laps would you like to race?`,
    'Enter a number between 1 and 10'
  )
  laps = parseInt(laps, 10)
  if (laps > 10) {
    alert('That is too many laps.  Please choose between 1 and 10.')
    fastDriver()
  }
  letsRace(laps)
}
//Captain Awesome Game
const superHero = () => {
  const endGame = () => {
    let decision = prompt(
      'Would you like to play this game again, or go back to the game select screen?  Press A to play again, or B for the game select screen.'
    )
    decision = decision.toLowerCase()
    if (decision === 'a') {
      superHero()
    } else if (decision === 'b') {
      getChoice()
    } else {
      alert('That is not a valid option.  Please choose again.')
      endGame()
    }
  }

  const awesomeChoice = () => {
    let choice = prompt(
      'Do you want to go do awesome things?  Press Y for yes or N for no.'
    )
    choice = choice.toLowerCase()
    if (choice === 'y') {
      alert(
        'Wow!  You just did so many awesome things!  You are the awesomest!'
      )
      endGame()
    } else if (choice === 'n') {
      alert(
        'Stop it.  You are Captain Awesome.  Oh, wait, are you joking?  You are hilarious, Captain Awesome.  Why dont we try that again.'
      )
      awesomeChoice()
    } else {
      alert('That is not a valid option.  Please try again')
      awesomeChoice()
    }
  }

  alert('You are Captain Awesome.  The most awesome super hero of all time.')
  awesomeChoice()
}

//Get game choice from player
const getChoice = () => {
  let gameChoice = prompt(
    `Which game would you like to play?  D for Dungeon Crawler IV: The Buried Shrines of Nosgoth, B for Bames Jond:  Live Another Day to Die Again, F for Fast Driver, C for Captain Awesome`
  )
  gameChoice = gameChoice.toLowerCase()
  if (gameChoice === 'd') {
    dungeonCrawler()
  } else if (gameChoice === 'b') {
    spyGame()
  } else if (gameChoice === 'f') {
    fastDriver()
  } else if (gameChoice === 'c') {
    superHero()
  } else {
    alert('That is not a valid choice, please choose again.')
    getChoice()
  }
}

alert(`Thank you, ${name}.  We have been expecting you.  We hope you enjoy your time here.  You purchased the unlimited package, 
so feel free to play whatever you want for however long you want!`)

getChoice()
