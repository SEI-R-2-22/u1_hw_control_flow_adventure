
const playGame = () => {

    const turnToDarkSide = 1;
    const askGandolfForhelp = 2;
const name = prompt('what is your name')




    let shire = prompt(`Hello, ${name} you are home at the shire and you have just recieved the ring of power, you have three choices; use ring, meet gandolf, or drink mead`)
        alert(`you are about to leave the shire and ${shire}`)
        confirm(`are you sure you want to ${shire}`)
    switch(shire) {
        case 'use ring':
        let useRing = prompt(`wow ${name} you used the ring, which mean now you are the target. you have two choices; enter '1' turn to dark side or enter '2' to ask gandolf for help`)
            alert('You cant trust the dark side')
            confirm(`you want to ${useRing}`)
        switch(useRing) {
            case 1:
                let captured = alert(`${name}  the enemy has captued you are going to betray you, you died`)
                    alert('game over, play again');
                    playGame();
                    break;
            case 2:
                let prancingPony = prompt(`${name} met aragon at the prancing pony but no gandolf you can either 'follow aragon' or 'go off on your own' what do you do?`)
                switch(prancingPony) {
                    case 'follow aragon':
                        let rivendale = prompt("Aragon lead you to rivendale, where you meet gondolf and you either: 'give' gondolf the ring or 'volunteer' to take the ring to morador")
                        switch(rivendale) {
                            case 'give':
                                let gondolf = alert('Gondolf took the ring and turned and destroyed everyone, you died')
                                    alert('game over, play again');
                                    playGame();
                            case 'volunteer':
                                let theFellowShip = prompt("You inspire a group of volunteers, but they are all tempted by the ring do you 'trust' the fellowship or 'breakoff' on your own and let them help in different ways")
                                switch(theFellowShip) {
                                    case 'trust':
                                        let internalWar = prompt('Everyone starts fighting over the ring and everyone dies')
                                            alert('game over, play again');   
                                            alert('you lose')
                                        break;
                                    case 'breakoff':
                                        let morador = alert('everyone rages war on morador, allowing you to sneak in')
                                            alert('You destroy the ring and defeat the enemy')
                                            alert ('Congrats you win')
                                            playGame();
                                }
                                break;
                                
                        }
                        break;
                    case 'go off on your own':
                        let youGitlost = alert('you git lost in the forest where you run into goblins that eat you')
                            alert('game over, play again');
                         playGame();
                    }
                break;
                
        }
        case 'meet gandolf':
            let prancingPony2 = prompt("You met aragon at the prancing pony but no gandolf you can either 'follow aragon' or 'go off on your own' what do you do?")
                switch(prancingPony2) {
                    case 'follow aragon':
                        let rivendale2 = prompt("Aragon lead you to rivendale, where you meet gondolf and you either: 'give' gondolf the ring or 'volunteer' to take the ring to morador")
                        switch(rivendale2) {
                            case 'give':
                                let gondolf = alert('Gondolf took the ring and turned and destroyed everyone, you died')
                                    alert('game over, play again');
                                    playGame();
                            case 'volunteer':
                                let theFellowShip2 = prompt("You inspire a group of volunteers, but they are all tempted by the ring do you 'trust' the fellowship or 'breakoff' on your own and let them help in different ways")
                                switch(theFellowShip2) {
                                    case 'trust':
                                        let internalWar = alert('Everyone starts fighting over the ring and everyone dies')
                                            alert('game over, play again');
                                            playGame();
                                    case 'breakoff':
                                        let morador = alert('everyone rages war on morador, allowing you to sneak in')
                                            alert('You destroy the ring and defeat the enemy')
                                            alert ('Congrats you win')
                                            playGame();
                                }
                                
                                break;
                        }
                        break;
                    case 'go off on your own':
                        let youGitlost = alert('you git lost in the forest where you run into goblins that eat you')
                            alert('game over, play again');
                            playGame();
                    }
                break;
                
            
        case 'drink mead':
            let prancingPony3 = prompt("Aragon asks you to 'follow' him to gandolf or you can get 'drunk' and hope for the best")
             switch(prancingPony3) {
                 case 'follow':
                    let rivendale3 = prompt("Aragon lead you to rivendale, where you meet gondolf and you either: 'give' gondolf the ring or 'volunteer' to take the ring to morador")
                    switch(rivendale3) {
                        case 'give':
                             let gondolf = alert('Gondolf took the ring and turned and destroyed everyone, you died')
                                alert('game over, play again');
                                playGame();
                         case 'volunteer':
                            let theFellowShip3 = prompt("You inspire a group of volunteers, but they are all tempted by the ring do you 'trust' the fellowship or 'breakoff' on your own and let them help in different ways")
                         switch(theFellowShip3) {
                             case 'trust':
                                 let internalWar = alert('Everyone starts fighting over the ring and everyone dies')
                                 alert('game over, play again');
                                 playGame();
                             case 'breakoff':
                                 let morador = alert('everyone rages war on morador, allowing you to sneak in')
                                 alert('You destroy the ring and defeat the enemy')
                                 alert ('Congrats you win')
                                 playGame();
                         }
                         break;
                         
                 }
                 break;
             case 'drunk':
                 let youGitlost = alert('You get drunk and forget about the ring and everyone lives happily ever after... until')
                    playGame();
                }
         break;
         
                    
        
         default:
                alert('wrong input, try again');
        }
    }
    playGame();
    
       
       
       
    
       