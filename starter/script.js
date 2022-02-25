let name
let blood
let fav
let secret
const callIntro = () => {
  alert(
    'After an unusually long day, you finally lay your head to rest. Before a moment goes by, you can feel yourself slipping away.'
  )
  askName()
}

const askName = () => {
  name = prompt('What is your name?')
  if (name === null || name === '') {
    alert('Thats not a name!')
    askName()
  } else {
    alert(
      `Ah yes, ${name}.  A fine name... ${name}... I should have known someone like you would have such a fine name.`
    )
    askFav()
  }
}

const askFav = () => {
  fav = prompt("What's your favorite thing? (one word)")
  if (fav === null || fav.includes(' ') || fav === '') {
    alert('I asked for ONE WORD! No spaces...')
    askFav()
  } else {
    alert(`${fav}... I see you appreciate the finer things.`)
  }
  askBlood()
}
let bloodTypes = ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+']
const askBlood = () => {
  blood = prompt("What's your blood type?(A+, B-, etc...)")
  if (blood === null || blood === '' || !bloodTypes.includes(blood)) {
    alert('Thats not a blood type!')
    askBlood()
  } else {
    enterHouse()
  }
}
const enterHouse = () => {
  alert(
    "You open your eyes and find yourself sitting on the floor of the home you grew up in.  The faint smell of a beloved relative's perfume lingers through the air.  You can hear what sounds like oldies playing on a radio from another room."
  )
  enterStranger()
}
const enterStranger = () => {
  alert(
    'From behind you, you hear a door open and shut.  The sound of footsteps grows closer until it stops. You feel a tap on your shoulder.'
  )
  shoulderTap()
}
const shoulderTap = () => {
  let tapped = prompt('What do you do? ([t]urn around? [d]ont turn around?)')
  switch (tapped) {
    case 't':
      turnAround()
      break
    case 'd':
      dontTurnAround()
      break
    default:
      shoulderTap()
      break
  }
}
const turnAround = () => {
  alert(
    'A lanky man dressed in a 1960s-style slick suit stares down at you.  Hes sporting a blindfold and michevious grin.  "Hello there :)"'
  )
  let yesNoSecrets = prompt('"Do you like secrets? :)" [y/n]')
  switch (yesNoSecrets) {
    case 'y':
      tellMeASecret()
      break
    case 'n':
      childhoodEnding()
      break
    default:
      turnAround()
      break
  }
}

const dontTurnAround = () => {
  alert(
    'The tapping becomes rapid and aggressive.  You can feel impatience behind each tap.'
  )
  shoulderTap()
}
const childhoodEnding = () => {
  alert(
    `A look of displeasure forms on the mans face.  His head begins to twist unnaturally until the back of his head is facing you. He walks backwards and exits the room from the door which he entered.  Your gaze returns forward.  You look down at your hands and realize they are younger than you remember.  You hear the voice of a loved one who passed call out \"${name}!! I'm so happy to see you! It's been so long. \"`
  )
  alert(
    'Overwhelmed with emotions, the realization that your dreaming washes over you. Rather than being upset by this realization, you ignore it.  It does not matter that you are going to wake up tomorrow.  Because tonight you get to be young again. And you are with someone you love.'
  )
  tryAgain()
}
const tryAgain = () => {
  let ynTry = prompt('Try Again? [y/n]')
  switch (ynTry) {
    case 'y':
      callIntro()
      break
    case 'n':
      break
  }
}

const tellMeASecret = () => {
  secret = prompt('"Tell me a personal secret :)"')
  if (secret == 'no') {
    childhoodEnding()
  } else {
    alert('"Ahhhh...:)! What a wonderful secret! I wont te-"')
    enterCreature()
  }
}
const enterCreature = () => {
  alert(
    'The man is interrupted by what can best be described as some kind of vibration that is starting to fill the room. A look of displeasure forms on the mans face.  His head begins to twist unnaturally until the back of his head is facing you. He walks backwards and exits the room from the door which he entered.  Your gaze returns forward.'
  )
  alert(
    'In front of you, there is clearly somekind of disturbance in reality.  The air seems to be moving rapidly.  From the distortion you begin to see the form of an entity.  This entity seems to have a dark hole where its face should be and too many appendages to count'
  )
  let creaturePrompt = prompt('What do you do? ([r]un/[s]tay)')
  switch (creaturePrompt) {
    case 'r':
      runAway()
      break
    case 's':
      stayHome()
  }
}
callIntro()
// askName()
// askFav()
// askBlood()
// enterHouse()
// enterStranger()
