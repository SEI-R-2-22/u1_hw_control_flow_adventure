// // prompts user and stores value in the variable
// let valueOfPrompt = prompt()
// // logs value stored
// console.log(valueOfPrompt)

// let age = prompt('How old are you?')
// // ES6 String Interpolation
// alert(`You are ${age} years old.`)
// // ES5 Version
// alert('You are ' + age + ' years old.')

let game = () => {
  alert('all lower case please, we do not shout in space')

  let name = prompt('Lets get intergalatic! What is your name?')
  console.log(name)

  let planet = prompt(
    `What planet would you like to travel to ${name}? saturn, jupiter, the red one, find new one`
  )
  console.log(planet)

  switch (planet) {
    // NEW PLANET HERE
    case 'saturn':
      let saturnFact = prompt(
        `I like your style ${name}, did you know saturn is the sixth planet from the sun? y/n`
      )
      console.log(saturnFact)
      if (saturnFact === 'y') {
        alert(
          'It is also the second Largest! But it only has 1/8th the density of earth'
        )
        let saturnTravel = prompt(
          'Do you still want to go? t(Travel to Saturn) f(Find a new planet) g(Go home)'
        )
        console.log(saturnTravel)
        if (saturnTravel === 't') {
          alert(
            'Wow, what a beautiful choice. To bad it will be 29 years before you complete orbit and can travel again.'
          )
        } else if (saturnTravel === 'f') {
          let planetName = prompt(
            'Nice job! You found a new planet, what do you want to call it?'
          )
          console.log(planetName)
          alert(
            `${planetName} what a weird name. Oh well, now you're stuck there FOREVER`
          )
        } else {
          alert(
            'Bummer, too bad youre out of gas and are now stuck in space. Good luck! Maybe you can make it to saturns moons.'
          )
        }
      } else {
        alert(
          `Why arent you studied up on your planets ${name}? I thought you were an astronaut!!`
        )
      }
      break
    // NEW PLANET HERE
    case 'jupiter':
      let jupiterFact = prompt('How many planets is Jupiter away from the sun?')
      parseInt(jupiterFact)
      console.log(jupiterFact)

      if (jupiterFact === '5') {
        alert(
          'WOw! You know your stuff! Too bad you chose to go to a gas planet. You will have to pick a new planet.'
        )
        let jupiterTravel = prompt(
          `Do you want to travel home (t) or find a new planet (f)?`
        )
        if (jupiterTravel === 't') {
          alert(
            'Earth is nice if you can get there. But you get stranded waiting for buzz light year.'
          )
        } else {
          let planetNameJup = prompt(
            'Nice job! You found a new planet, what do you want to call it?'
          )
          console.log(planetNameJup)
          alert(
            `${planetNameJup} what a weird name. Oh well, now you're stuck there FOREVER`
          )
        }
      } else {
        alert(
          `Why arent you studied up on your planets ${name}? I thought you were an astronaut!!`
        )
      }
      break
    // NEW PLANET HERE
    case 'the red one':
      alert(`Weird choice, do you know what the red planet is?`)
      let redOneFact = prompt(
        'Choices: mars (m), Not really, but sounds cool (n), THE GOD OF WAR (g)'
      )
      if (redOneFact === 'm') {
        alert(
          'You make it to mars and start a new colony with Buzz Lighter leading the way.'
        )
      } else if (redOneFact === 'g') {
        alert(
          'True, also an agricultural guardian. I hope he can help you in space.'
        )
      } else {
        alert(`Who do you think you are!`)
        let redFight = confirm(`Do you want to fight the narrator?`)
        if (redFight === true) {
          alert(`You lose and are now stranded on a random moon in the galaxy.`)
        } else {
          alert(`Good choice, you live to travel space another day`)
        }
      }
      break
    // NEW PLANET HERE
    case 'find new one':
      let newOne = confirm(
        `Only experienced travelers can do this? Do you have what it takes?`
      )
      if (newOne === true) {
        alert(`No you don't`)
        let newOneFact = prompt(
          `You can gain the skills you will, do you trust me? y/n`
        )
        if (newOneFact === 'y') {
          alert(`It's gonna be champagne wishes and caviar dreams from now on.`)
        } else {
          alert(`That'll do Donkey, that'll do.`)
        }
      } else {
        alert(`You're right, you don't`)
      }
      break
    // NEW PLANET HERE
    default:
      alert('Good luck space traveller, see you in the Milky Way')
  }
}

game()
let restart = ''
restart = prompt('Do you want to restart? Y/N')
switch (restart) {
  case 'y':
    game()
  default:
    alert('Good Luck!')
}
