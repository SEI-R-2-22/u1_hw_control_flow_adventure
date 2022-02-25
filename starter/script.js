confirm('Welcome to your origin story! Are you ready to get started?')
const chooseYourAdventure = () => {
  const superPower = prompt(
    "Which of these super powers would you like: \n1. Super Speed\n2. Super Strength\n3. Flight.\n\n*Choose the power by typing it's name in the input box"
  )
  let superPowerName = superPower.toLowerCase()

  switch (superPowerName) {
    case 'super speed':
      const timeTravel = prompt(
        'Okay, you now have super speed. Would you first run to the past or the future? (P/F)'
      )
      if (timeTravel === 'p' || timeTravel === 'P') {
        const promRemix = prompt(
          'You ran back to the day of your high school prom and see yourself waiting for your date who you know stood you up. Do you use your super speed to make a fool of your date in front of the entire school, or do you have a pep talk with your past self and tell them that things get better if they just wait a bit longer. (Payback/Pep talk)'
        )
        const promRemixLowerCase = promRemix.toLowerCase()

        if (promRemixLowerCase === 'payback') {
          alert(
            "You speed by your date as she's walking up to recieve her prom queen crown and trip her. But, OH NO, she falls right into the arms of the prom king, your arch nemesis since second grade....Greg. Everyone cheers and Greg looks like a hero. I guess the saying, with great power comes great responsibility, really is true. You run back to the present, vowing to never go to the past again!."
          )
        } else if (promRemixLowerCase === 'pep talk') {
          alert(
            'You go and talk to your younger self and explain how everything gets better and that you have a good job, a family, and even super speed! Your younger self visibly relaxes and you chat more about some of the funny things that happened in high school and get some ice cream. He thanks you and you run back to the present. Back in the present, you find out that the date that stood you up is now in jail for trying to rob a convience store with the person they stood you up for. Karma really is a b....ad thing.'
          )
        }
      } else if (timeTravel === 'f' || timeTravel === 'F') {
        const futureFiasco = prompt(
          'You run to the future, but since your still getting a feel for your powers, you overshoot your time and end up in a desolate, broken city far into the future. You start to look around to find out what happened, but as you do, people with missing limbs and dead eyes start to hobble toward you from all sides. You realize they are zombies. Do you stay and use your super speed to fight and try to save whatever small bit of the human race is still alive, or do you make a quick exit and run back to your time? (Fight/Flight)'
        )
        const futureFiascoLowerCase = futureFiasco.toLowerCase()

        if (futureFiascoLowerCase === 'fight') {
          alert(
            "You choose to stay and work with the survivors to take back the country and kill all the zombies. As you are speeding through the city looking for more zombies to kill, you are scratched by one that you don't see hiding in the shadow of a fallen building. You run back to the survivors hide-out to ask for the cure, but you start to feel wozy and they say there is no cure. You realize you are turning into a zombie and it would be the end of the world if a zombie also had super speed. You run as fast as you can and get sucked into the speed force, but at least there the infection doesn't go any further. Too bad you are stuck there forever now..."
          )
        } else if (futureFiascoLowerCase === 'flight') {
          alert(
            "You realize there is no saving everyone and that you could do more if you stopped this from ever happening! So, you run back to the present and find out that a company is working on a pill that is supposed to be the cure for any illness, but the company name looks familiar. Didn't you see it on a flyer in the future? Oh yeah!! You realize that the pill is what turns the first zombies, so you use your super speed to destroy all the information on the creation of this pill. You run back to the future and see that it is no longer a wasteland! You saved the future and it isn't even lunch time!"
          )
        }
      } else {
        alert(
          "Looks like you haven't trained enough with your power. Once you have learned a bit more, come back and we will see how fast you can really go!"
        )
      }
      break
    case 'super strength':
      const goodOrEvil = prompt(
        'Okay, you now have super strength. Would you like to use your power for good or evil? (G/E)'
      )
      if (goodOrEvil === 'g' || goodOrEvil === 'G') {
        const goodChoice = prompt(
          'You decide to fight crime at night as a vigilante. One night you come across a group of thugs mugging an old lady. Do you fight and try to get her purse back or do you wait until you have mastered your strength a bit more? (Fight/Flight)'
        )
        const goodChoiceLowerCase = goodChoice.toLowerCase()
        if (goodChoiceLowerCase === 'fight') {
          alert(
            "You jump down from roof top and tell the thugs they have one chance to give the woman's purse back or else. They laugh at you and start to surround you. You use your new super strength to throw them each into one another and then bend metal bars from a near by fire escape to create make-shift handcuffs. You return the lady's purse and find out she is the mayor's mother. You recieve a key to the city as thanks for your heroics."
          )
        } else if (goodChoiceLowerCase === 'flight') {
          alert(
            'You return to the gym and work on your super-strengthed punches. The next time you go out, you see another person getting mugged. You are ready now and jump down to save the victim. You take the mugger to jail and get your own drink named after you at a coffee shop. You have finally made it in the world...Great job!'
          )
        } else {
          alert(
            "Looks like you might be more brawn then brains. It's just as important to work your mind as your body. Better luck next time!"
          )
        }
      } else if (goodOrEvil === 'e' || goodOrEvil === 'E') {
        const bankRobber = prompt(
          'You decide to rob a bank. You rip the door off of the vault and step inside to see millions of dollars. How much money do you take, in dollars? (Type your response as a number)'
        )
        const bankRobberMoney = parseInt(bankRobber)
        if (bankRobberMoney < 100) {
          alert(
            `You get caught, but since you only took ${bankRobberMoney} dollars, it's a considered a misdemeanor and you get off with just community service, which turns out to be carrying senior citizens across busy streets.`
          )
        } else if (bankRobberMoney > 99) {
          alert(
            `You get caught and since you took ${bankRobberMoney} dollars, it is now considered a federal crime and you are taken to jail where you spend the rest of your days pressing license plates by hand.`
          )
        } else {
          alert(
            "That isn't a form of currency that we know. Maybe robbing a bank wasn't a smart move if you can't tell what a dollar looks like. Better luck next time!"
          )
        }
      } else {
        alert(
          "Looks like you haven't trained enough with your power. Once you have learned a bit more, come back and we will see how much you can lift!"
        )
      }
      break
    case 'flight':
      const flightLocation = prompt(
        'Okay, you now have the power to fly. Where do you want to fly to, Europe or Asia? (Europe/Asia)'
      )
      if (flightLocation === 'Europe' || flightLocation === 'europe') {
        const europeDinner = prompt(
          'You fly to Europe and now have to choose a country to have dinner in. Do you choose England or Italy? (E/I)'
        )
        const EuropeDinnerLowerCase = europeDinner.toLowerCase()
        if (EuropeDinnerLowerCase === 'e') {
          alert(
            'You fly to England, but you are soo tired from your flight that when you land, you realize that you will need to stay the night to regain your strength and the only food around is Haggis.'
          )
        } else if (EuropeDinnerLowerCase === 'i') {
          alert(
            "You are flying over italy and see a small vineyard where a man is trying to get his cat out of a tree. The cat is very scared and won't move. You fly down, grab the cat, and bring it to the owner. He is so thankful that he invites you to stay for dinner. His wife cooks an authentic italian meal of homemade pasta and the best meat sauce you have ever had! Looks like flying really is a breeze!"
          )
        } else {
          alert(
            "That isn't a country that we know of in Europe. Flying might not be the super power for you if you can't figure out where you are going. Better luck next time!"
          )
        }
      } else if (flightLocation === 'asia' || flightLocation === 'Asia') {
        const asiaDinner = prompt(
          'You fly to Asia and now have to choose a country to have dinner in. Do you choose India or China? (I/C)'
        )
        const AsiaDinnerLowerCase = asiaDinner.toLowerCase()
        if (AsiaDinnerLowerCase === 'i') {
          alert(
            "You fly to India and have a spicy curry meal from one of the best restaurants in the country. But, OH NO, the curry was a bit too spicy and you spend the whole night in an Indian motel's bathroom. The next day you fly home and go right to bed. Looks like someone needs a vacation from their vacation!"
          )
        } else if (AsiaDinnerLowerCase === 'c') {
          alert(
            "You fly over China and try to find a good place to eat. You see a small restaurant that looks to be in a crack in the Great Wall of China. You fly down and realize that it really is a 'hole in the wall' restaurant. There you have the best seaseme chicken you have ever had and get to know some of the locals who offer you their home to stay at any time you want to visit again! You fly home with a full belly and are already planning your next trip there!"
          )
        } else {
          ;("That isn't a country that we know of in Asia. Flying might not be the super power for you if you can't figure out where you are going. Better luck next time!")
        }
      } else {
        alert(
          "Looks like you haven't trained enough with your power. Once you have learned a bit more, come back and we can see how high you can fly!"
        )
      }
      break
    default:
      alert(
        `The last person who tried out ${superPower} is now 3 inches shorter and can only speak in pig latin, so maybe we should stick to one of the options provided, for your own safety!`
      )
  }
  let replayQuestion = confirm('Would you like to play again?')
  if (replayQuestion) {
    chooseYourAdventure()
  } else {
    alert(
      'Hopefully your adventure was as exciting to play as it was to code! See you next time!'
    )
  }
}
chooseYourAdventure()
