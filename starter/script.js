// let food = prompt("Do you want to cook pasta, sushi or tacos?")
// alert(`Okay, you want to make ${food}. `)
//buttons1.onclick = prompt("Do you want a red, white or oil based sauce?")
//const foods = ['Pasta', 'Sushi', 'Tacos']

//
//let food = 'pasta'

// if (food = 'pasta') {
//     console.log("Do you want a red, white or oil based pasta?")
// } else if (food = 'sushi') {
//     console.log("Do you want avocado, salmon or tuna?")
// } else if (food = 'tacos') {
//     console.log('Do you want beef, chicken or pork?')
// } else (console.log('Please enter a valid answer.'))


let plans = prompt("Do you want to play a game?")

if (plans = 'yes'){
    let name = prompt("What is your name?")
    let response = confirm(`Hello ${name}, we will be cooking a pasta dish today,okay?`)
} 
if (response = true) {
    let protein = prompt('Would you like to boil the pasta')
    let response2 = confirm('Alright! We will be boiling the pasta.')
} 
if (response2 = true) {
    let sauce = prompt("Will we be having red sauce, white sauce or an oil pasta?")
        switch(food) {
            case 'red':
                alert('We are having red pasta tonight!')
                break;
            case 'white':
                alert('We are having white pasta tonight!!')
                break;
            case 'oil':
                alert('We are having an oil based pasta tonight!')
                break;
            default:
                alert('We go to bed hungry.')
            }
        } else (alert('Sorry, we currently do not have ingredients to cook that.'))
if (food = true) {
    let meal = prompt('How many servings are we having tonight?')
    parseInt(string)
    if (parseInt = 1) {
        alert ('We are done eating one portion.')
    else if (parseInt = 2) {
        alert ('We are eating two servings!')
    } else {
        alert ('We are having a feast tonight!')
    }
    }
if (food != true) {
    alert ('Sorry. We go to bed hungry.')
}
}

if (confirm('Do you want to play again?')) {
    location.reload()
}