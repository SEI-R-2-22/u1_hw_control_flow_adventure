//Game Function
let isPlayed = false

const playGame = () => {
  isPlayed = true
  const replayQ = () => {
    let isReplay = prompt(`Do you want to play? Y/N`)
    if (isReplay === 'Y' || isReplay ==='y') {
      playGame()
    }
  }
  let canPlay = confirm(
    `A sudden gust of wind makes you blink. When you opened your eyes you see a shimmering door in front of you. For some unexplained reason, you feel a sense of excitement mixed with your bewildment. Do you wish to go on an adventure?`
  )
  if (canPlay) {
    //prompts user for name, centaurName, warlockName
    let heroName = prompt(
      `As you touched the door knob a bright flash of light causes you to blink once more. You are in a dark room, unable to see anything beyond your immediate surroundings, as if you were in a fog. Suddenly, a white alert screen appears in front of you asking, "What is your name?"`
    )
    let bestie = prompt(`What is your best friend's name?`)
    let warlockName = prompt(`who is your nemesis?`)
    //first choice branch
    let falling = prompt(
      `The screen disappears and you start falling. You find yourself falling through the air as you start to pick up speed. What do you do? \r\nChoices: \r\nY = Flail around in a panic\r\nN = Stay calm\r\nG = Glide around like a bird`
    )
    //switch
    switch (falling) {
      case 'Y':
      case 'G':
        alert(
          `You start moving your arms and begin to tumble. The g force that is created by your sudden movements causes you to pass out. When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream.`
        )
        break
      default:
        let runChoice = prompt(
          `You find yourself slowing down and then finally feel solid ground beneath you. You look up to see that there are stars and 3 moons in the night sky. As you stand there you notice a creature you can only describe as a centuar is running towards you yelling, "${heroName}!"\r\nR = Run away!\r\nS = Stand your ground\r\nW = Wave at the creature`
        )
        if (runChoice === 'R') {
          alert(
            `You start running in the opposite direction of the centaur, but the centaur is faster. As it approaches, you sighs to itself and says, "I guess you're not the one I'm looking for". It swiftly tramples you and the world grows dark. You tell yourself you're dreaming and rub your eyes in disbelief. You find yourself still at home. Comfortable, but feeling like you've missed an important opportunity.`
          )
        } else {
          let routeChoice = prompt(
            `The centuar reaches you. "${heroName}! I'm so glad I found you! Hurry jump on we must be off! My name is ${bestie}. We must really be off! You take ${bestie}'s hands and jump onto the creature's back. As you ride, the centaur explains the situation. They have surrounded their adversary, but are unable to defeat the evil warlock. Their prophecy spoke of a hero named ${heroName}, who would one day arrive to help them in their hour of need. As you continue on your journey ${bestie} asks, "which route should we take to defeat the warlock? We can head NORTH to towards the rivers, EAST towards the cliff face, or SOUTH over the bridge. You will need to believe in yourself to make it through these trials.\r\nChoices:\r\nN = North\r\nE = East \r\nS = South`
          )
          if (routeChoice === 'N') {
            let boatChoice = prompt(
              `You arrive at the river and see a boat.Do you get on the boat or Yell to see if there's anyone around to help?\r\nB = Get on boat\r\nY = Yell for help`
            )
            if (boatChoice === 'B') {
              let weaponChoice1 = prompt(
                `You see the warlock in the middle of an intense duel. You look around for something you can use against the warlock. You see that the centuar has a golden bow and a quiver full of silver arrows, a mythril short sword strapped on ${bestie}'s hip, or you can throw yourself onto the warlock.\r\nB = to use the bow and arrow\r\nS = use the short sword\r\nH = jump on the warlock`
              )
              switch (weaponChoice1) {
                case 'B':
                case 'b':
                  alert(
                    `You draw the arrow to your cheek. You pull the target to your sights and release the arrow with an exhale. You missed... What did you expect? You never shot a bow in your life and you are riding a centaur... The warlock sees you and casts a spell and the world grows dark. When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream except for a gnawing feeling you failed at something.`
                  );
                  break;
                case 'S':
                case 's':
                  alert(
                    `You draw the short sword. It's unbelievably light. You swing it back and forth mencingly as you approach the warlock from behind. You get right up next to him and swing your sword as hard as you can. The warlock turns and faces you at the last moment. He raises his hands and casts a spell. Light leaves his fingers as you cut into his hand. You did it! You slain the evil warlock, but the world starts to grow dark. You look down to see that the warlock has also struck you. You pass out from your injuries. When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream.`
                  );
                  break;
                case 'H':
                case 'h':
                  alert(
                    `You trust in your new friend and you ride on until you are upon the warlock. Not knowing what to do you leap off the back of ${bestie} and land on the Warlock's back. The momentum of the tackle causing you and the warlock to tumble. Still holding onto the warlock you turn him to see that his face looks identical to t${warlockName}. Your hand start shaking as you wonder what is going on. Suddenly, the warlock bursts into a white hot light as he screams. You did it! You don't know how or why, but the warlock was defeated. After a night of celebration you go to sleep. When you wake you find yourself in your bed at home. Around your neck you find a small medallion that your friend gave you. You know you've defeated the warlock and feel that you can take on any challenges.`
                  );
                  break;
                default:
                  alert(
                    `You are frozen with indecision and just stare at the warlock. The warlock finishes off his opponent and turns to face you. You realize that you've squandered your opportunity as the warlock raises his hands and points in your direction. You see a flash of red, before the world turns dark. When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream except for a gnawing feeling you failed at something. `
                  )
              }
            } else {
              alert(
                `You yell to see if there's a ferryman who can help you cross the river. However, several bandits step out of the woods and approach you menacingly. You fight for all you got, but it wasn't enough. The world grows dark. You tell yourself you're dreaming and rub your eyes in disbelief. You find yourself still at home. You have a slight headache and feeling like you've missed an important opportunity. `
              )
            }
          } else if (routeChoice === 'E') {
            let cliffChoice = prompt(
              `You arrive at the Cliffs and see a tunnel. Do you go into the tunnel or keep traversing the cliffside?\r\nG = Go into the tunnel\r\nT = Traverse the cliffside`
            )
            if (cliffChoice === 'G') {
              let weaponChoice2 = prompt(
                `You see the warlock in the middle of an intense duel. You look around for something you can use against the warlock. You see that the centuar has a golden bow and a quiver full of silver arrows, a mythril short sword strapped on ${bestie}'s hip, or you can throw yourself onto the warlock.\r\nB = to use the bow and arrow\r\nS = use the short sword\r\nH = jump on the warlock`
              )
              switch (weaponChoice2) {
                case 'B':
                case 'b':
                  alert(
                    `You draw the arrow to your cheek. You pull the target to your sights and release the arrow with an exhale. You missed... What did you expect? You never shot a bow in your life and you are riding a centaur... The warlock sees you and casts a spell and the world grows dark. When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream except for a gnawing feeling you failed at something.`
                  )
                  break;
                case 'S':
                case 's':
                  alert(
                    `You draw the short sword. It's unbelievably light. You swing it back and forth mencingly as you approach the warlock from behind. You get right up next to him and swing your sword as hard as you can. The warlock turns and faces you at the last moment. He raises his hands and casts a spell. Light leaves his fingers as you cut into his hand. You did it! You slain the evil warlock, but the world starts to grow dark. You look down to see that the warlock has also struck you. You pass out from your injuries. When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream.`
                  )
                  break;
                case 'H':
                case 'h':
                  alert(
                    `You trust in your new friend and you ride on until you are upon the warlock. Not knowing what to do you leap off the back of ${bestie} and land on the Warlock's back. The momentum of the tackle causing you and the warlock to tumble. Still holding onto the warlock you turn him to see that his face looks identical to t${warlockName}. Your hand start shaking as you wonder what is going on. Suddenly, the warlock bursts into a white hot light as he screams. You did it! You don't know how or why, but the warlock was defeated. After a night of celebration you go to sleep. When you wake you find yourself in your bed at home. Around your neck you find a small medallion that your friend gave you. You know you've defeated the warlock and feel that you can take on any challenges.`
                  )
                  break;
                default:
                  alert(
                    `You are frozen with indecision and just stare at the warlock. The warlock finishes off his opponent and turns to face you. You realize that you've squandered your opportunity as the warlock raises his hands and points in your direction. You see a flash of red, before the world turns dark. When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream except for a gnawing feeling you failed at something. `
                  )
              }
            } else {
              alert(
                `As you continue scaling the cliff side, ${bestie} tells you that he will need to go through the tunnel as he can no longer fit on the cliff's trail. You stubbornly continue down the trail as you remind yourself that you're the "chosen one" from the prophecies. As you continue to climb higher the path gets narrower and you have to hang onto the rope that's nailed to the cliff face. All of a sudden, the wind starts to pick up! You feel unsteady and hand tightly to the wall. You see your breath as the cold winds start to bellow. You think to yourself, if only you stayed with ${bestie}! Unable to return the way you came you continue onward. You find shelter in the next opening, but the winds brought a blizzard with it. You slowly find yourself feeling tired and eventually fall asleep. When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream except for a gnawing feeling you should have listened to your friend.`
              )
            }
          } else {
            let bridgeChoice = prompt(
              `You arrive at the great bridge and see a trolll. The trolll asks you a riddle for the toll. "I am 4 times as old as my child today, and I will be twice as old in twenty years. How old are we both today?"\r\n1 = 40 yrs & 10 yrs\r\n2 = 30 yrs & 5 yrs\r\n3 = 50 yrs & 1 yrs`
            )
            if (bridgeChoice === '1') {
              let weaponChoice3 = prompt(
                `You answer the troll which seems like a ridiculously simple riddle. As you continue on your journey you finally see the warlock in the middle of an intense duel. You look around for something you can use against the warlock. You see that the centuar has a golden bow and a quiver full of silver arrows, a mythril short sword strapped on ${bestie}'s hip, or you can throw yourself onto the warlock.\r\nB = to use the bow and arrow\r\nS = use the short sword\r\nH = jump on the warlock`
              )
              switch (weaponChoice3) {
                case 'B':
                case 'b':
                  alert(
                    `You draw the arrow to your cheek. You pull the target to your sights and release the arrow with an exhale. You missed... What did you expect? You never shot a bow in your life and you are riding a centaur... The warlock sees you and casts a spell and the world grows dark. When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream except for a gnawing feeling you failed at something.`
                  )
                  break;
                case 'S':
                case 's':
                  alert(
                    `You draw the short sword. It's unbelievably light. You swing it back and forth mencingly as you approach the warlock from behind. You get right up next to him and swing your sword as hard as you can. The warlock turns and faces you at the last moment. He raises his hands and casts a spell. Light leaves his fingers as you cut into his hand. You did it! You slain the evil warlock, but the world starts to grow dark. You look down to see that the warlock has also struck you. You pass out from your injuries. When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream.`
                  )
                  break;
                case 'H':
                case 'h':
                  alert(
                    `You trust in your new friend and you ride on until you are upon the warlock. Not knowing what to do you leap off the back of ${bestie} and land on the Warlock's back. The momentum of the tackle causing you and the warlock to tumble. Still holding onto the warlock you turn him to see that his face looks identical to t${warlockName}. Your hand start shaking as you wonder what is going on. Suddenly, the warlock bursts into a white hot light as he screams. You did it! You don't know how or why, but the warlock was defeated. After a night of celebration you go to sleep. When you wake you find yourself in your bed at home. Around your neck you find a small medallion that your friend gave you. You know you've defeated the warlock and feel that you can take on any challenges.`
                  )
                  break;
                default:
                  alert(
                    `You are frozen with indecision and just stare at the warlock. The warlock finishes off his opponent and turns to face you. You realize that you've squandered your opportunity as the warlock raises his hands and points in your direction. You see a flash of red, before the world turns dark. When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream except for a gnawing feeling you failed at something. `
                  )
              }
            } else {
              alert(
                `You answer incorrectly and cannot pass. So, you try to sneak past the troll, but ${bestie}'s huge size foils your plans. The troll enraged by your attempted trespass, trips the security system. You find the floor is starting to shake. You quickly run for the other side, but before you can make it, the floor opens and you fall.  When you wake you find yourself in your bed at home. Confused, you make youself believe it was a dream except for a gnawing feeling you let your friend down.`
              )
            }
          }
        }
    }
  } else {
    alert(
      `You tell yourself you're dreaming and rub your eyes in disbelief. You find yourself still at home. Comfortable, but feeling like you're missed an important opportunity.`
    )
    replayQ()
  }
  replayQ()
}
playGame()
// document.querySelector('#letsplay').addEventListener('click', playGame)
