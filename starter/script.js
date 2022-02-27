
// First button on the page
function yourName () {
    const yourName = prompt(`Welcome to Harry's Adventure, please enter your name here`)
    if (yourName !== null){
    document.getElementById('thank-you').innerHTML = `Welcome ${yourName}, ready to play? (click 'Play Now' below)`
    } 
}


// Play Now button
function playNow () {
    alert (`Congratulations, we are pleased to inform you that you've been accepted at Hogwart's Cooking School`)
    alert (`Last foodie train to school will leave at 9pm, please be there on time`)
    alert (`~A few moments later~`)
    alert (`train engine revving, ~choo choo~`)
    
    let amount = 0
    const yourChoice = prompt (`Heyyyy, you made it! Would you like something to eat on the train?(Y/N)`) 
        if (yourChoice == 'Y') {
            alert('Oh sweetie, I know you are hungry. We have ramen, taco, and burger, what would you like to eat?')
            let foodChoice = prompt(`Type "ramen", "taco", or "burger"`)
            if (foodChoice == 'ramen') {
                alert ('Great choice, our ramen noodles were all made by hand by a Hong Kong Ramen master - Lee Kum Kee')
                amount = timeToPay()
            } else if (foodChoice == 'taco') {
                alert ('HOLA, our tacos are proudly sponsored by Taco Bell - an American-based chain restaurants originating in Irvine, California since 1962')
                amount = timeToPay()
            } else if (foodChoice == 'burger') {
                alert (`Ho Ho Ho, our burgers were made by the king of burger - Burger King`)
                amount = timeToPay()
            } else {
                alert (`${foodChoice} it is, I'll be back in a few minutes`)
            }
            return amount


        } else (yourChoice == 'N'); {
            alert('How about something to drink')
            let drinkChoice = prompt(`Type the drink you'd like to have, we have 'coffee' or 'water'`)
                if (drinkChoice == 'coffee' || drinkChoice == 'water') {
                alert(`I will be back with your ${drinkChoice}`)
                amount = timeToPay()
                } else {
                alert(`alright, here are some cookies`)
                amount = timeToPay()
                } 
        }
            return amount
    }
       


function timeToPay () {
    alert(`~A few moments later~`)
    alert(`How is your food? Here is your check, your total comes to $100 please take your time`)
    let total = 0 
    let paymentConfirmed = prompt(`Ready to pay? confirm with 'Y/N'`)
        if (paymentConfirmed == 'Y') {
            alert(`Thanks for using the contactless payment with your phone, how much tips would you like to leave?`)
            let payment = prompt(`Enter the percentage of tips you'd like to leave (Type: '15', '20', '25')`)
            switch (payment) {
                case '15':
                    total = 110
                    break;
                case '20':
                    total = 120
                    break;
                case '25':
                    total = 125
                    break;
                default:
                    total += 100
            } alert(`Thanks for paying ${total} in total`)
            alert (`You have paid ${total}, congrates, tipping monster has being beaten`)
           

            let redo = confirm(
                'Click OK if you want to try other way to beat the monster, or click cancel to go home'
              )
              if (redo) {
                alert(`Let's go back to the train`)
                timeToPay ()
              } else {
                alert('Heading back to your computer at home')
              }
              
            return playNow()

        } else (paymentConfirmed == 'N'); {
             alert('OH NO! you just angered the tipping monster')
             alert('You are going to be trapped here on this train forever')
             alert('Go back a few steps to find out how to excape!')
             return yourName()
        } 
}
        
      
