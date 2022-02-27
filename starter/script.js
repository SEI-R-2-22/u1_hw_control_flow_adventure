const game = () => {
  let user = prompt('Greetings friend! What is your name?')
  console.log(user)

  alert(`${user}, hope you are ready for the adventure!`)

  // Path Question
  let pathChoice = ''
  pathChoice = prompt(
    'You get in a car with your friends, they take a shortcut to your destination. Unfortunately, they take the wrong turn and end up at a dead end. Your friend parks the car and says, check this out! (pointing to the entrance of a tunnel). Everyone agrees to go through...In the distance, you can see a market and bath house. Which one do you go towards? (M/B)'
  )

  // Path Decisions
  let market = ''
  let bath = ''
  if (pathChoice === 'M') {
    market = prompt(
      `It smells good... you must be hungry! Each stall in the market has food laid out on the counters. Weird, there are no people around. Your stomach starts to grumble. ${user}, do you eat the food and pay later? (Y/N)`
    )
  } else if (pathChoice === 'B') {
    bath = prompt(
      `There are three paths to the bath house. The signs point in different directions. You are unable to read the characters, but see that they are numbered. ${user}, do you choose path 1, 2, or 3?`
    )
  }
  // Path - Market
  let marketYes = ''
  let marketNo = ''
  if (market === 'Y') {
    marketYes = prompt(
      `Yum! It is a buffet. ${user}, you are eyeing the the fried chicken and noodles. Which one will you eat first? (F/N)`
    )
  } else if (market === 'N') {
    marketNo = prompt(
      `You have made a wise choice! Your friends who ate the food are turning into pigs. There must be someone who could help! On the left is the river and straight ahead is the bath house. ${user}, where will you go to find help? (R/B)`
    )
  }

  // Market Choice - Yes
  let foodChoice = ''

  if (marketYes === 'F') {
    foodChoice = prompt(
      `It tastes sooo good! You start to get thristy. ${user}, will you have some beer or tea? (B/T)`
    )
  } else if (marketNo === 'N') {
    foodChoice = prompt(
      `Slurping those noodles. It tastes delicious! You start to get thristy. ${user},will you have beer or tea? (B/T)`
    )
  }

  let drinkChoice = ''
  if (foodChoice === 'B') {
    drinkChoice = prompt(
      `Ahhh...oh so refreshing. ${user}, your hands are starting to change into hoves! Do you keep eating and drinking? (Y/N)`
    )
  } else if (foodChoice === 'T') {
    drinkChoice = prompt(
      `The tea is warming your soul. ${user}, your hands are starting to change into hoves. Do you keep eating and drinking? (Y/N)`
    )
  }

  let marketEnd = ''
  if (drinkChoice === 'Y') {
    marketEnd = prompt(
      `Oh no, ${user} half of your body transforms into a pig! Let's go find your friends, we need to tell them what happened. Do you go to the river or bath house? (R/B)`
    )
  } else if (drinkChoice === 'N') {
    marketEnd = prompt(
      `Breathe in, breathe out... ${user}, your hands are hoves. Let's go find your friends, we need to tell them what happened. Do you go to the river or bath house? (R/B)`
    )
  }

  // Market Choice - No
  let bridgeChoice = ''
  if (marketEnd === 'R') {
    bridgeChoice = prompt(
      `You are running around trying to see if there is anyone who could help you. A young boy named, Haku approaches you and asks what are you doing here?! You tell him about how your friends turned into pigs. He says that the only way you could break the spell is if you ask Yubaba at the bath house. You notice a bridge before the bath house. ${user}, do you cross it? (Y/N)`
    )
  } else if (marketEnd === 'B') {
    bridgeChoice = prompt(
      `The bath house is beautiful. There is a bridge before the bath house. ${user}, do you cross it? (Y/N)`
    )
  }

  /// Path Route - Market, Bridge, Bath House
  let enterBath
  let bathWorker
  if (bridgeChoice === 'Y') {
    enterBath = prompt(
      `The bath house is magical! You start to feel some sort of way. Creatures everywhere, warm lights and relaxing music. Haku, comps you a bath. ${user}, what bath salt scent would you like?`
    )
  } else if (bridgeChoice === 'N') {
    bathWorker = prompt(
      `${user}, Haku says to go through the side stairs. He tells you the code for the door, 111. You run down the steps and reach the door. What's the code again?`
    )
  }

  if (enterBath) {
    prompt(
      `The ${enterBath} scent is an excellent choice! ${user}, follow the worker and enjoy your bath! As you are relaxing in your bath, you fall asleep. You wake up back in the car with all your friends. Were you dreaming this whole time? I guess you will never know...`
    )
  } else if (bathWorker) {
    prompt(
      `As you enter in slowly, there are creatures working in the boiler room. You are confused. ${user}, did you think this was another entrance to the bath house? Well, it is! The worker entrance. You are forced to work at the bath house foreverrrr. What a trip?!`
    )
  }
  //// End of Market Path ////

  // Path - Bath House

  let bathCross
  if (bath === '1') {
    bathCross = prompt(
      `This seems like an easy path! It's getting dark. You start to see magical creatures heading towards the bath house. You see a bridge before the entrance of the bath house. ${user}, do you cross it? (Y/N)`
    )
  } else if (bath === '2') {
    bathCross = prompt(
      `This path has a lot of hills! It's getting dark. You start to see magical creatures heading towards the bath house. You see a bridge before the entrance of the bath house. ${user}, do you cross it? (Y/N)`
    )
  } else if (bath === '3') {
    bathCross = prompt(
      `This path is difficult! It's getting dark. You start to see magical creatures heading towards the bath house. You see a bridge before the entrance of the bath house. ${user}, do you cross it? (Y/N)`
    )
  }

  let bathGreet1
  let bathGreet2
  if (bathCross === 'Y') {
    bathGreet1 = prompt(
      `Great choice! A frog welcomes you in. He walks you over to the registration. He mentions that he hardly sees humans around these days. ${user}, do you have any money? (Y/N)`
    )
  } else if (bathCross === 'N') {
    bathGreet2 = alert(
      `You're spooked from all these strange creatures and decide to head back to find your friends.`
    )
  }

  let moneyYes
  let moneyNo
  if (bathGreet1 === 'Y') {
    moneyYes = prompt(
      `Great! We will need to covert your money into bath chips. ${user}, head over to the register. The worker asks, which bath scent salt would you like?`
    )
    switch (moneyYes) {
      case 'None':
        alert(
          `Good choice. ${user},follow the worker and enjoy your bath! As you are relaxing in your bath, you fall asleep. You wake up back in the car with all your friends. Were you dreaming this whole time? I guess you will never know...`
        )
        break
      case 'Lavender':
        alert(
          `It smells relaxing. ${user}, follow the worker and enjoy your bath! As you are relaxing in your bath, you fall asleep. You wake up back in the car with all your friends. Were you dreaming this whole time? I guess you will never know...`
        )
        break
      case 'Eucalyptus':
        alert(
          `It smells like you are in a forest. ${user}, follow the worker and enjoy your bath! As you are relaxing in your bath, you fall asleep. You wake up back in the car with all your friends. Were you dreaming this whole time? I guess you will never know...`
        )
        break
      default:
        alert(
          `The ${moneyYes} scent is an excellent choice! ${user}, follow the worker and enjoy your bath! As you are relaxing in your bath, you fall asleep. You wake up back in the car with all your friends. Were you dreaming this whole time? I guess you will never know...`
        )
    }
  } else if (bathGreet1 === 'N') {
    moneyNo = alert(
      `Bummer! ${user}, you won't be able to enjoy the bath house. Time to head back!`
    )
  }
}

game()

const restart = prompt('Would you like to play again? (Y/N)')
if (restart === 'Y') {
  game()
}
