
// introduction

let usd = 1000000

let name = prompt('Hello, what is your name?')
alert('Hello ' + name)

let confirmDeposit = prompt('you have just won the lottery, would you like to deposit into your account? Y/N/?')
if (confirmDeposit === 'Y') {
  alert('Amount of 1,000,000 USD transfered to acct ending in 9999')
} 
else if (confirmDeposit === 'N') {
  alert('Thank you for your money, goodbye.')
} 
else {
  alert('Alt. option, you will recieve a paper check in the mail.')
}

/// Red or Blue pill?

let choice = prompt('you might not think this is real, but the money is in your account! will you live it up and spend it while you have it(Y) or stay home and ignore it?(N)')
if (choice === 'Y') {
  alert('Get ready for hte time of your life!')
}
else if (choice === 'N') {
  alert('Goodbye!')
  End 
}
else {
  alert('conservative, i like it!')
}


/// FLIGHT
let flight = prompt("3 flights leave tonight Miami, New York, Paris, select the flight that you want to take")
if (flight === 'Miami') {
  alert('forcast is sunny all week, Pack your swimsuit!')
}
else if (flight === 'New York') {
  alert('Wow! make sure to take pictures.')
}
else {
  alert('Great choice!')
}


/// CAR

alert('you have landed, and have no means of transportation, time to purchase a vehicle for you! how exciting')
alert('Currently the lot you landed on only has 3 cars availible a Bugatti, Ferrari, & a Prius, choose one of the three')

let car = prompt("Currently the lot only has a Bugatti, Ferrari, & a Prius, choose one of the three")
if (car === 'Bugatti') {
  alert('Nice choice! no time for buyers remorse now!')
}
else if (car === 'Ferrari') {
  alert('Italian luxury at its finest!')
}
else {
  alert('saving your money, smart choice!')
}

alert('WOW, life is a dream!')
alert('... you spilled your drink on your lap, luckily you find a mall, which store would you like to visit? Dior/LV/CK')

/// OUTFIT
let outfit = prompt('which store would you like to head to? Dior, LV, CK?')
if (outfit === 'Dior') {
  alert('sheesh! i hope you saw the price!')
}
else if (outfit === 'LV') {
  alert('Good taste!')
}
else {
  alert('conservative, i like it!')
}

/// JOURNEY
let journey = prompt('before the day ends you want to finish it memorable, where would you like to go? The Club/ The Beach/ Museum')
if (journey === 'The Club') {
  alert('sounds like a great time!')
}
else if (journey === 'The Beach') {
  alert('the weather is perfect for the beach!')
}
else {
  alert('sounds very educational!')
}
alert('The day has came to an end and im sure you will never forget it!')






/// BILL

if (flight = 'Miami') {
  usd = usd - 300000
}
else if (flight = 'New York') {
  usd = usd - 200000
}

else {
      usd = usd - 150000
}
///// 
if (car = 'Bugatti') {
  usd = usd - 500000
}
else if (car = 'Ferrari') {
  usd = usd - 250000
}

else {
      usd = usd - 75000
}
/////
if (outfit === 'Dior') {
  usd = usd - 50000
}
else if (outfit === 'LV') {
  usd = usd - 100000}
else {
  usd = usd - 25000}

let billPls = prompt('before you go make sure to clear your tab, are you ready to pay? Y/N/?')
if (billPls === 'Y') {
  alert("your account balance is " + usd)
}
else if (billPls === 'N') {
  alert('if the balance is not fulfilled within 30 days it will be sent to collections. thank you!')
}
else {
alert('for more info contact 999-999-9999')
}


/// RESTART OPTION SWITCH

const restart = prompt('would you like to restart? Y/N/?')

switch(restart) {
  case 'Y':
    location.reload();
    break;
  case 'N':
    alert('Goodbye!')
    break;
  default:
    console.log('n/a');
}