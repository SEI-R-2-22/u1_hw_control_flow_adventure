const gameStart = () => {
    let player = prompt('Hello, what is your name?')

    alert(`Hello ${player}, You are the offensive Coordinator of your favorite football NFL team. Choose wisely to get your team into the endzone on the final drive`)

    let playcall = prompt(`Alright ${player}, it is fourth down on the one yard line. This is the last play of the game. Would you like your team to Pass the ball or Run the ball? (P/R)`)
    if (playcall === 'p' || playcall === 'P') {
        alert(`You have chosen a passing play.`) 
        let passDepth = prompt(`From choices 1-5, choose how many yards deep do you want your passing play to be.`)
        passDepth = parseInt(passDepth)
            if(passDepth < 3) {
                let shortRoute = prompt(`You have chosen to target the flats. Would you like to check it down to your runningback or throw to your tight end? (RB/TE)`)
                    switch (shortRoute) {
                        case 'RB':
                            alert('Your running back catches the pass. Jukes the middle linebacker and just stretches the ball across goaline. Touchdown!')
                            break;
                        case 'TE': 
                            alert('Your tight end breaks directly to the flats. Your QB turns and releases the ball as soon as he can but the outside linebacker jumps the route and returns the interception for a touchdown adding insult to injury.')
                    }
            } else if (passDepth === 3) {
                let midRoute = prompt('You have chosen to target the middle of the endzone. Would you like to throw a quick slant to your wide reciever(WR) or a hitch route to you slot reciever (SR) Choices:(WR/SR)')
                    switch (midRoute) {
                        case 'WR':
                            alert("Pete Carroll is that you? Of course you didn't score. Malcolm Butler picks you off and returns your horrible decision for six.")
                            break;
                        case 'SR':
                            alert("Your slot reciever plants his foot right at three yards, quickly turns around and catches the low-ball pass from the QB. Touchdown!")
                    }
            } else if (passDepth === 4 || 5) {
                let deepRoute = prompt(`You have chosen to target back of the endzone. Would you like to throw the quick fade to your Wide Reciever(Fade) or would you like to throw a Dig Route coming across the middle-back of the endzone(Dig)? Choices: (Fade/Dig)`)
                    switch (deepRoute) {
                        case 'Fade':
                            alert("Not a big fan of sports analytics I see. Lucky for you, Calvin Johnson just may have come out of retirement to play reciever for you last play. Your reciever outjumps the corner and is able to get his feet in bounds before falling out. Touchdown")
                        case 'Dig':
                            alert("Your QB takes a 5-step drop to give time to the reciever to come across the middle. Sadly, your blindside tackle forgot he was supposed to block this play and the defensive end plants your QB into the ground to a collective 'oof' echoing through the stadium")
                    }
            }
        }


    else if (playcall === 'r' || playcall === 'R') {
        alert(`You have chosen a running play.`) 

        let runDir = prompt('Would you like to run the ball up the middle(M) or to the outisde (O)? Choices: (M/O)') 
            switch (runDir) {
                case 'M':
                    alert('Always the correct answer on the goaline. If I could award two touchdowns I would but either way it is a touchdown!')
                    break;
                case 'O':
                    alert('Running outside? You might as well run backwards. That is playing scared if youre going to run the ball, you run it up the middle. Your RB gets tackled behind the line of scrimmage and you turn over the ball on downs.')
            }


        /*
            if (runDir === "m" || "M") {
                alert('Always the correct answer on the goaline. If I could award two touchdowns I would but either way it is a touchdown!')
            } else if (runDir === "o" || "O") {
                alert("Running outside? You might as well run backwards. That is playing scared if youre going to run the ball, you run it up the middle. Your RB gets tackled behind the line of scrimmage and you turn over the ball on downs.")
            }
 */                 //Couldn't figure out what was wrong with the If function for the bottom. Everytime I enter o or O or any letter in the runDir prompt, the M alert would show up. Code initially was on line 45.
 
        }
}       

   gameStart ()

   const gameRestart = confirm('Would you like to try a different approach?') 
       if (gameRestart === true) {
           gameStart ()
   }
