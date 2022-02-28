const game = () => {alert("Time to fight for your spot on the throne!")}

let characterChoice = prompt("Who would you like to play as?(Arya Stark, Daenerys Targaryen, Joffrey Baratheon)").toUpperCase()

if (characterChoice === "Arya Stark") {alert(`You chose ${characterChoice}`)
     
    let travelBegin = confirm(`Your family has to travel to King's landing. Would you like to travel with them?`)
    if (travelBegin) {
                alert(`${characterChoice} chose to go to King's Landing`)}
                else {alert(`${characterChoice}'s decision to stay in the North did not let her fight for the throne. Game over.`)
                let newGame = confirm("Would you like to play again?")
                if (newGame) {game()} 
                else {alert(`Thanks for playing, better luck next time!`)}
            }
        
            let travelContinue = confirm(`In King's Landing a sword fighter offers to train you. Your parents do not allow you to train. Do you go against their backs and train to fight anyways?`)
                if (travelContinue) {
                  alert(`${characterChoice} has begun sword training`)}
                  else {alert(`${characterChoice} did not learn the fighting skills neccessary to fight for the throne. Game over.`)
                  let newGame = confirm("Would you like to play again?")
                  if (newGame) {game()} 
                  else {alert(`Thanks for playing, better luck next time!`)}
              }
              
            let travelEnd = confirm(`You now have the necessary skills to fight. Do you wish to challenge the king in a duel for the throne?`)
                if (travelEnd) {
                    alert(`${characterChoice} did not have enough experience to beat the king and was killed. Game over.`)}
                    else {alert(`${characterChoice} did not feel prepared to duel the king yet, perhaps after a few more months of training.`)
                    let newGame = confirm("Would you like to play again?")
                    if (newGame) {game()} 
        
                    else {alert(`Thanks for playing, better luck next time!`)}  
                }
          }


// player 2: Daenerys Targarygen 

    else if (characterChoice === "Daenerys Targarygen") {
     
        let travelBegin = confirm(`The throne is rightfully yours. Do you want to fight alone or marry a Dothraki for an army? `)
        if (travelBegin) {
            alert(`${characterChoice} chose to marry for an army.`)}
            else {alert(`${characterChoice} decided to fight alone and could not take over the king for their throne. Game over.`)
            let newGame = confirm("Would you like to play again?")
            if (newGame) {game()} 
            else {alert(`Thanks for playing, better luck next time!`)}
        }
    
        let travelContinue = confirm(`At your wedding, you are gifted 3 dragon eggs. Do you wish to keep them?`)
            if (travelContinue) {
              alert(`${characterChoice} decided to keep the dragon eggs. A fire broke out and burned the eggs to a crisp, surprisingly 3 baby dragons were born.`)}
              else {alert(`${characterChoice} decision to fight with the Dothraki army was note enough, they all died in battle. Game over.`)
              let newGame = confirm("Would you like to play again?")
              if (newGame) {game()} 
              else {alert(`Thanks for playing, better luck next time!`)}
          }
          
        let travelEnd = confirm(`You now have 3 dragons and an army. Do you wish to take over King's Landing for the throne?`)
            if (travelEnd) {
                alert(`${characterChoice} You have successfully taken King's Landing. Congratulations!`)}
                else {alert(`${characterChoice} did not feel prepared to take over King's Landing, perhaps after a few more months of training.`)
                let newGame = confirm("Would you like to play again?")
                if (newGame) {game()} 
    
                else {alert(`Thanks for playing, better luck next time!`)}  
            }
        }
    

//player 3: Joffrey Baratheon

    else if (characterChoice === "Joffrey Baratheon") {

        let travelBegin = confirm(`The throne is rightfully yours once you are married. Do you wish to marry now? `)
        if (travelBegin) {
            alert(`${characterChoice} chose to get married to become king.`)}
            else {alert(`${characterChoice} decided they are not ready to get married and become king. Game over.`)
            let newGame = confirm("Would you like to play again?")
            if (newGame) {game()} 
            else {alert(`Thanks for playing, better luck next time!`)}
        }
    
        let travelContinue = confirm(`At your wedding, you are challenged to a duel by another prince - that is much stronger than you - for the throne. Do you wish to accept and fight them?`)
            if (travelContinue) {
              alert(`${characterChoice} decided to keep fight the opponent. Your sword broke in half in the middle of your battle. Your bridge threw you a new sword and you defeated the opponent. Congratulations!`)}
              else {alert(`${characterChoice} did not put up a fight and was allowed to live out his life in the Castle with no royal title. `)
              let newGame = confirm("Would you like to play again?")
              if (newGame) {game()} 
              else {alert(`Thanks for playing, better luck next time!`)}
          }

        let travelEnd = confirm(`You now have 3 dragons and an army. Do you wish to take over King's Landing for the throne?`)
           if (travelEnd) {
             alert(`${characterChoice} You have successfully taken King's Landing. Congratulations!`)}
             else {alert(`${characterChoice} did not feel prepared to take over King's Landing, perhaps after a few more months of training.`)
             let newGame = confirm("Would you like to play again?")
             if (newGame) {game()} 

    else {alert(`Thanks for playing, better luck next time!`)}  
}
}