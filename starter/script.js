const gameStart = () => {
    alert("Welcome to the game of life.")
    let usersName = prompt(`What's your name?`)
    let usersAge = prompt(`How old are you ${usersName}?`)
    usersAge = parseInt(usersAge)

    if(usersAge > 18)
    {
        adult()
    } else if (usersAge >= 15 && usersAge <= 18)
    {
        teenager()
    } else if (usersAge >= 4 && usersAge < 15){
        child()
    } else if (usersAge < 4){
        toddler()
    }
}

const replayGame = () => {
    let userInput = confirm("Would you like to play again?")
    if(userInput){
        return userInput
    } else {
        alert("Thank you for Playing! The rest of the game will be available in a future patch.")
        return userInput
    }
}

const adult = () => {
    alert(`You're an adult right now in the game of life`)
    
    let time = prompt(`Your alarm just went off. What time is it? (6/7/8)`)
    time = parseInt(time)
    
    if(time === 6){
        let excercise = prompt(`You're up before the sun. You have time to get in a workout. Do you break a sweat? (Y/N)`)
        if(excercise === 'Y' || excercise === 'y'){
            alert(`Look at you go! You jump in the shower and get ready.`)
            
            let route = confirm(`Breakfast was delicious and well deserved after the workout. You head to your car and ask yourself "Do I take same route to work?"
            Ok - Same route
            Cancel - New route`)
            
            if(route){
                alert(`You got to work early. Your boss saw your dedication and told you to take an extended lunch. Today is going to be a good day.`)
            }else if(!route){
                alert(`The street was underconstruction and your GPS didn't know. You get to work just in the nick of time. Let's hope the rest of the day isn't a close call.`)
            }
        }else if(excercise === 'N' || excercise === 'n'){
            alert(`You feel ashame for endlessly scrolling on your phone and not sticking to you new year's resolution. You proceed to jump in the shower and get ready.`)
            
            let route = prompt(`You skipped breakfast as punishment to yourself for not working out. You head to your car and ask yourself "Do I take same route to work?"
            Ok - Same Route
            Cancel - New Route`)
            
            if(route){
                alert(`You got to work early. You go in and start planning how your days is going to be `)
            }else if(!route){
                alert(`The street was underconstruction and your GPS didn't know. Is this punishment for not working out? Let's hope the rest of the day gets better.`)
            }
        }
    }else if(time === 7){
        let excercise = prompt(`You wake up with enough time to get to work. Do you still go exercise? (Y/N)`)
        if(excercise === 'Y' || excercise === 'y'){
            alert(`Look at you stay commited! Damn, now you aren't going to get to work on time.`)
            
            let breakfast = confirm(`Your stomach is grumbling. Breakfast is the most important meal in the day. Do you eat breakfast?
            Ok - Eat breakfast
            Cancel - Grab a protein bar.`)
            
            if(breakfast){
                alert(`You rush out the house, forgetting to lock the door, and now you're late to work. Breakfast better have been worth the trouble if your boss says anything.`)
            }else if(!breakfast){
                alert(`You leave your house and see the ETA on the GPS will get you to work a few minutes late.`)
            }
        }else if(excercise === 'N' || excercise === 'n'){
            alert(`Good choice! You can workout when you get home later today`)
            
            let breakfast = confirm(`Your stomach is grumbling. Breakfast is the most important meal in the day. Do you eat breakfast?
            Ok - Eat breakfast
            Cancel - Grab a protein bar.`)
            
            if(breakfast){
                alert(`You look at the time and now you're late. You rush out the house and forget to lock the door, The last thing you need now is getting stuck in traffic.`)
            }else if(!breakfast){
                alert(`You get in the car and see that the GPS rouet will get you to work right on time.`)
            }
        }
    }else if(time === 8){
        let excercise = prompt(`OMG YOU OVER SLEPT!!!! What were you thinking hitting the snooze button. Do you still want to go exercise? (Y/N)`)
        if(excercise === 'Y' || excercise === 'y'){
            alert(`What's wrong with you!? At this point just call out sick. Let's hope tomorrow you make better decision`)
        
        }else if(excercise === 'N' || excercise === 'n'){
            alert(`No Need to panic. You can get through this.`)
            
            let breakfast = confirm(`Your stomach is grumbling. Don't have time to cook. Do you Uber food to your job?
            Ok - Uber breakfast to work
            Cancel - Grab a cheese stick from the fridge.`)
            
            if(breakfast)
            {
                alert(`Smart choice. That's one way to save time`)
                let route = prompt(`You grab your keys and rush to your car. You see the time and you're an hour late. Do you take a short cut? 
                Ok - Shortcut
                Cancel - Same Route`)
            
                if(route)
                {
                    alert(`It was a shortcut but the traffic still got you to work an hour late.`)
                }else if(!route)
                {
                    alert(`The traffic was insane. You are now 90 minutes late to work and your boss is calling you to see where you are.`)
                }
            }else if(!breakfast)
            {
                alert(`Who needs breakfast when you have portable cheese. You hit the road and get to your job only to see your boss waiting for you at the gate.`)
            }
        }
    }
}

const teenager = () => {
    alert(`You're a teenager right now in the game of life`)

    let license = prompt("Do you have a driver's permit/license? (Y/N)")
    if(license === "Y" || license === "y"){
        alert("Good! No excuse to be late for school.")
        let pickUpFriend = confirm(`Your friend sends you a message asking if you can scoop her up.`)

        if(pickUpFriend)
        {
            let strabucksName = prompt (`You pull up to your friends house and she suggest stopping by Strabucks on your way to school. As you place your order in the drive-thru they ask for your name. What name do you give him?`)
            alert(`Here's your order ${strabucksName}. You drive off and dread the next 8 hours of highschool hell.`)
        }else if(!pickUpFriend)
        {
            alert(`You get into your car and decide to stop by Dunkin. Guess who you run into? The friend you stood up. Talk about drama.`)
        }
    }
    else if(license === "N" || license === "n"){
        alert("Better get up! Can't miss the school bus")
        
        let missBus = prompt("You get ready for school and head out the door. As you wait in the corner of the street you see the bus coming. Do you get on the bus? (Y/N)")

        if(missBus === "Y" || missBus === "y")
        {
            alert(`You sit on the bus, staring out the window wondering when in the word you are going to use y = mx + b in real life.`)
        }else if(missBus === "N" || missBus === "n")
        {
            let placeToGo = prompt(`You turn around and decide to go to ______`)
            alert(`You go to ${placeToGo} and grab yourself a frappe on your way. You have straight A's. What will skipping one day of school do?`)
        }
    }
}

const child = () => {
    alert(`You're a child right now in the game of life`)
    
    let choices = prompt(`It is Saturday morning. Mom walks in, wakes you up, and ask you to choose between 1 or 2. What do you pick?`)
    choices = parseInt(choices)

    switch(choices){
        case 1:
            let changeMind = prompt(`You've chosen to clean the bathroom. You feel bamboozled. Do you change your mind? (Y/N)`)
            if(changeMind === 'Y' || changeMind === 'y'){
                alert(`Wrong move! Now you are stuck vacuuming and dusting the living room. You proceed to do your chores.`)
                let treat = confirm(`As you finish your chores, mom comes around the corner with a nice slice of Tiramisu. Do you say OK and take it?`)
                if(treat){
                    alert("This is the most moist Tiramisu you've ever had. Now you have the rest of the day to yourself.")
                }else if(!treat){
                    alert('Your lost. It was the last slice and she ate. Now you are stuck eating celery sticks.')
                }
            } else if(changeMind === 'N' || changeMind === 'n'){
                alert(`You grab the cleaning supplies and clean the bathroom. You realize it's not that bad. As you head back to put away the supplies, a nice slice of Tiramisu awaits you on the counter.`)
            }
            break
        case 2:
            let homework = prompt(`You've chosen to do your homework before watching Netflix or playing online. Your dog Sparky walks into your room. He seems to be eyeing your homework. Does sparky destroy your homework? (Y/N/)`)

            if(homework === 'Y' || homework === 'y'){
                let excuse = prompt(`As you were giving the last piece of your homework to Sparky your mom walks in. She catches you red handed. Without thinking you say: ______`)

                alert(`Mom: "${excuse}". That's the best you can come up with? Go back and start all over. So much for enjoying your Saturday.`)
            }else if(homework === 'N' || homework === 'n'){
                let reward = prompt(`You know better and decide not to let Sparky eat your homework. Mom saw how you handle the situation and wants to reward you with a baked good. What would you like to eat?`)

                alert(`Not only do you finish your homework you have a nice ${reward} waiting for you.
                `)
            }
            break
    }
}

const toddler = () => {
    alert(`You're a toodler. You are too young to play this game. Come back when you are older.`)
}

let playAgain = false
do{
    gameStart()
    playAgain = replayGame()
}while(playAgain)
