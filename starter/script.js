// prompt for Name input
const getName = () => {
  const name = prompt('what is your Name: ')
  return name
}

const name = getName()

//Grab HTML tags
const clickDrinkText = document.getElementById('clickDrink')
const drinkType = document.querySelectorAll('.drinkType')
const drinkPref = document.querySelector('#drinkPref')
const prefText = document.getElementById('prefText')
const inputLabel = document.getElementById('userEnt')
const drinkDiv = document.querySelector('#selectDrink')
const finalDrink = document.querySelectorAll('.finalDrink')
const drinkLabel = document.getElementById('drinkLabel')
const resetBtn = document.getElementById('reset')

//change P in html to use input name
clickDrinkText.innerText = `Hello, ${name} below are out drinks. Click on one to begin`

//grab what the user click on the drink menu.
let selectedDrink = undefined
drinkType.forEach((drink) => {
  drink.addEventListener('click', () => {
    selectedDrink = drink.value
    drinkPref.style.display = 'block'
    if (drink.value != 'feeling lucky') {
      prefText.innerHTML = `You chose ${drink.value}, we have ${drinkSwitch(
        drink.value,
        drinkType
      )}? <br> Enter below`
    } else {
      prefText.innerHTML = `you chose ${drink.value} , ${drinkSwitch(
        drink.value,
        drinkType
      )} from 1 - 6. <br> Enter below`
    }
  })
})

//Grab what the user type in the text field.
//valid the input and display their choice after input.
inputLabel.addEventListener('keypress', (e) => {
  let userSelect = ''

  //on enter verify input. alert if input is invalid.
  if (e.key === 'Enter') {
    userSelect = inputLabel.value
    if (!drinkChoice(selectedDrink).includes(userSelect)) {
      alert('invalid choice! try again')
    } else {
      drinkDiv.style.display = 'flex'
    }
  }

  //match user input with picture to display.
  switch (userSelect) {
    case 'lager':
    case '1':
      finalDrink[0].style.backgroundImage = "url('./beer/lager/1.jpg')"
      finalDrink[1].style.backgroundImage = "url('./beer/lager/2.png')"
      break
    case 'ipa':
    case '2':
      finalDrink[0].style.backgroundImage = "url('./beer/ipa/1.jpg')"
      finalDrink[1].style.backgroundImage = "url('./beer/ipa/2.png')"
      break
    case 'white':
    case '3':
      finalDrink[0].style.backgroundImage = "url('./Wine/Rose-Wine.jpg')"
      finalDrink[1].style.backgroundImage = "url('./Wine/Rose-Wine.jpg')"
      break
    case 'red':
    case '4':
      finalDrink[0].style.backgroundImage = "url('./Wine/Red-Wine.jpg')"
      finalDrink[1].style.backgroundImage = "url('./Wine/Red-Wine.jpg')"
      break
    case 'dark':
    case '5':
      finalDrink[0].style.backgroundImage =
        "url('./Cocktail/Old-Fashioned.jpg')"
      finalDrink[1].style.backgroundImage =
        "url('./Cocktail/Dark-and-Stormy.jpg')"
      break
    case 'clear':
    case '6':
      finalDrink[0].style.backgroundImage = "url('./Cocktail/Mojito.jpg')"
      finalDrink[1].style.backgroundImage = "url('./Cocktail/Bahama-Mama.jpg')"
      break
  }
})

//highlight the drink userclicked on.
finalDrink.forEach((drink) => {
  drink.addEventListener('click', () => {
    resetBtn.style.display = 'block'
    drink.style.border = '10px solid green'
    drinkLabel.innerHTML = 'Great you got your Drink.'
  })
})

//reload page so user can start over.
resetBtn.addEventListener('click', () => {
  location.reload()
})

//function for different menu option.
const drinkSwitch = (drinkValue, menuArr) => {
  const menu = []
  for (let i = 0; i < menuArr.length; i++) {
    menu[i] = menuArr[i].value
  }

  switch (drinkValue) {
    case menu[0]:
      return 'ipa or lager'
    case menu[1]:
      return 'dark or clear'
    case menu[2]:
      return 'red or white'
    case menu[3]:
      return 'chose a number'
  }
}

//verified what text user input on text field.
const drinkChoice = (userIP) => {
  const beer = ['lager', 'ipa']
  const cocktails = ['dark', 'clear']
  const wine = ['red', 'white']
  const lucky = ['1', '2', '3', '4', '5', '6']

  switch (userIP) {
    case 'beer':
      return beer
    case 'cocktails':
      return cocktails
    case 'wine':
      return wine
    default:
      return lucky
  }
}
