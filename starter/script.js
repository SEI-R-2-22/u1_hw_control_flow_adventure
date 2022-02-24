let isContinue = true

//Play() functon
let play = (userName) => {
    //Greeting user, ask user if they're ready to play
    let userConf = confirm(`Hello, ${userName}! Are you ready for the adveture?`)
    //if yes, ask if they are a fan of Harry Porter or Lord of the Rings
    if (userConf) {
        let movie = prompt('Are you a fan of Harry Porter or Lord of the Rings?(H/L)')
        //if Harry Porter, prompt which character you would like to be? Harry Potter,Ron Weasley Or Hermione Granger
        if (movie.toUpperCase() === 'H') {
            let movieChar = prompt('which character you would like to be?\n Harry Potter(HP), Ron Weasley(RW) Or Hermione Granger(HG)')
            switch (movieChar.toUpperCase()) {
                case 'HP': //Potter: prompt your enemy is voldemort, which wand would you choose? Elder Wand or original wand was made of Holly wood and had a Phoenix feather core
                        let wand = prompt('Your enemy is voldemort, which wand would you choose, Elder Wand or Original Wand?(E/O)')
                        if (wand.toUpperCase() === 'E') {
                            // Elder Wand, You defeated Voldemort
                            alert("With Elder Wand, you defeated Voldemort!")
                        } else {
                            //Original, your wand was broke by Voldemont
                            alert('Your wand was broke by Voldemont!')
                        }
                        break
                case 'RW': //Weasley, which battle would you want to play?
                        let battle = parseInt(prompt('which battle would you want to play?\nBattle of the Department of Mysteries(1), Battle of the Astronomy Tower(2), or Battle of the Seven Potters(2)'))
                        switch (battle) {
                            //Battle of the Department of Mysteries
                            case 1: alert('Open war is declared on the wizarding community. Ministry of Magic accepts that Voldemort has returned The prophecy is destroyed. Death of Sirius Black. All Death Eaters except Voldemort and Bellatrix are arrested.')
                            break
                            // Battle of the Astronomy Tower
                            case 2: alert('Albus Dumbledore killed. Minor to major injuries of several of Hogwarts\' defenders. Draco Malfoy unknowingly becomes master of the Elder Wand. Snape becomes headmaster of Hogwarts.')
                            break
                            // Battle of the Seven Potters
                            case 3: alert('Death Eaters\' short term victory because of the death of Alastor Moody. Harry Potter is successfully transported to The Burrow. Long-term strategic effects favourable to the Order of the Phoenix.')
                                    break
                            default: alert("You don't want to go to battle.")
                        }
                        break
                case 'HG': //Hermione Granger, confirm Do you think you're little clever?
                        let clever = confirm("Do you think you're a little clever?")
                        if (clever) {//Yes, Alert You're truely talented
                            alert('You\'re truely talented.')
                        } else {//No, you have so much doubts in yourself.
                            alert('You have so much doubts in yourself.')
                        }
                        break
                default: alert('You must love playing all of them')                    
            } 
        } else {//Lord of the Rings,
            let isPrecious = confirm('Have you heard "My precious!"?')
            if (isPrecious) {
                // prompt which character you would like to be? Frodo Baggins, Samwise Gamgee, Bilbo Baggins, Aragorn, Gandalf, Legolas or Gimli
                let movieChar = parseInt(prompt('which character you would like to be? Frodo Baggins(1), Samwise Gamgee(2), Bilbo Baggins(3), Aragorn(4), Gandalf(5), Legolas(6) or Gimli(7'))
                //switch case:
                switch (movieChar) {
                    // Frodo Baggins
                    case 1: alert('I wish the Ring had never come to me. I wish none of this had happened.')
                    break
                    //Samwise Gamgee
                    case 2: alert('I think, Mr. Frodo, I do understand. I know now. Folk in those stories had lots of chances of turning back only they didn\'t. Because they were holding on to something.')
                    break
                    //Bilbo Baggins
                    case 3: alert('Never laugh at live dragons!')
                    break
                    //Aragorn
                    case 4: alert('There is always hope.')
                    break
                    //Gandalf
                    case 5: alert('All we have to decide is what to do with the time that is given us.')
                    break
                    //Legolas
                    case 6: alert('The way is shut. It was made by those who are dead, and the dead keep it. The way is shut.')
                    break
                    //Gimli
                    case 7: alert('Let Them Come! There Is One Dwarf Yet In Moria Who Still Draws Breath!')
                    break
                    default: alert('My precious!')
                }
            } else {
                alert('You are not a fan of Lord of the Rings!')
            }
            
        }         
    }
    isContinue = confirm('Would you like to play again?')

}

//Ask user's name
let userName = prompt("Welcome to the wizard world!\nWhat's your name?")

while(isContinue){
    play(userName)
}


