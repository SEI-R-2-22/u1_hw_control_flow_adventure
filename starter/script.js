const callIntro = () => {
  alert(
    'After an unusually long day, you finally lay your head to rest. Before a moment goes by, you can feel yourself slipping away.'
  )
}

const askName = () => {
  let name = prompt('What is your name?')
  if (name === null || name === '') {
    alert('Thats not a name!')
    askName()
  } else {
    alert(
      `Ah yes, ${name}.  A fine name... ${name}... I should have known someone like you would have such a fine name.`
    )
  }
}
console.log('start')

const askFav = () => {
  let fav = prompt("What's your favorite thing? (one word)")
  if (fav === null || fav.includes(' ') || fav === '') {
    alert('I asked for ONE WORD! No spaces...')
    askFav()
  } else {
    alert(`${fav}... I see you appreciate the finer things.`)
  }
}
let bloodTypes = ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+']
const askBlood = () => {
  let blood = prompt("What's your blood type?(A+, B-, etc...)")
  if (blood === null || blood === '' || !bloodTypes.includes(blood)) {
    alert('Thats not a blood type!')
    askBlood()
  }
}
const enterHouse = () => {
  alert(
    "You open your eyes and find yourself sitting on the floor of the home you grew up in.  The faint smell of a beloved relative's perfume lingers through the air.  You can hear what sounds like oldies playing on  radio from another room."
  )
}
const enterStranger = () => {
  alert(
    'From behind you, you hear a door open and shut.  The sound of footsteps grows closer until it stops. You feel a tap on your shoulder.'
  )
}
const shoulderTap = () => {
  let tapped = prompt('What do you do? (|t|urn around? |d|ont turn around?')
  if (tapped === 't') {
    turnAround()
  } else {
    dontTurn()
  }
}
callIntro()
askName()
askFav()
askBlood()
enterHouse()
enterStranger()
