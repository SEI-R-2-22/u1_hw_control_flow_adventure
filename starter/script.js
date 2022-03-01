

const jungleEscape=() => {
    
    alert(`You're in a remote jungle with a novice hiking crew. With a local as your guide, you slash through the dense forest in search of a secret waterfall that only few tourist have ever seen.`)
    alert(`While at the edge of the waterfall your guide slips and severely injures himself.\n\nHe's alive but he needs medical help. \n\nYou go to use his sattelite phone but it has no signal.`)
    alert(`Daylight is dwindling and supplies and moral are low.`)
    
    function ConName() {
        const playerName = prompt(`Guide: "Hey bub! Yea you...\n
        I hit my head and can't remember anyone name. What's your name again?`,`BUB`);
            if (playerName != null) {
                alert(`That's right ${playerName}! How could I forget a name like that...`)
            } else {
                alert(`Please.. What's your name?`)
            }
    } ConName()
        // if (playerName === null){
        //     alert(`Thank you BUB! Godspeed!`)
        // }
       
        
        alert(`Guide: "I'm not doing so hot ${playerName}! I need someone to go get some help. If not... I might not make it through the night!"`)
            alert(`"You look like the most athletic one here so I'm hoping you help..."`)
    
    let choice = "Will you help find a way out of jungle? OK or Cancel.";
        if (confirm(choice) == true) {
            alert('I knew that I could count on you BUB!')
        } else {
        alert(`That's a good joke bub!\n\nIm glad one of us still has a sense of humor during a time like this!\n\nTime is ticking ${playerName}... LETS MOVE IT`)
        }
    
    // let playerName = prompt(
    //     "By the way... What's your name?", "Name"
    //     )

        if (playerName != null){
            alert(`Thank you BUB! Godspeed!`)
        }

        alert(`There seems to be three ways out of here.\n1)The river path.\n2)Over the mountain.\n3)The jungle trail.`)
        userInput = '';

        let anyPath = '';
        while (anyPath == ''){
            anyPath = pathChoice();
        }
        
        function pathChoice () {
            
            let userChoice = Number(prompt('Which way did you decide?', '(1) (2) (3)'));
            let pathPick = ''
            switch(userChoice) {
                case 1:
                    alert(`Great ${playerName}! You chose the river.`)
                    pathPick = 'river';
                    break;
                case 2:
                    alert(`Great ${playerName}! You chose the mountain.`)
                    pathPick = 'mountain';
                    break;  
                case 3:
                    alert(`Great ${playerName}! You chose the jungle.`)
                    pathPick = 'jungle';
                    break;
                default:
                    alert(`${playerName}, you need to choose a number.\n 1 for the river 2 for the mountain or 3 for the Jungle`, `1 2 or 3`)
                    playerChoice = '';
                    // pathChoice ()
                    break;
            }
            return userChoice;
        }

        alert(`You're moving along at an nice pace when you see fork in your path...`)  
        alert(`Hmmmmm, which way do you go?`)

        const fork = prompt(" LEFT or RIGHT?");  

        let decision;
        let decision2;
        let decision3;
        let decision4;
  

  function leftFork () {
      alert(`As you continue along the left path you come across cliff.`)
      alert(`Yikes... that's a long fall if you slip.`)
      alert(`There's only two things you can do...`)
      alert(`Either scale down\nOR\nTurn around and go back to where the path forks.`)
      decision = prompt(`SCALE DOWN or TURN AROUND`).toLowerCase();
  }

  function rightFork () {
      alert(`You start walking along the right path and you notice that your satellite phone has a signal!`)
      alert(`Do you try to make a call or do you continue walking?`)
      decision2 = prompt(`CALL or WALK`).toLowerCase()
  }

  if (fork === "left") {
    leftFork();
   } else {
    rightFork();
   } 
   
   function turnAround() {
        alert(`Probably the smart move. That was one big cliff!`)
        alert(`You get back to the fork and start walking along the right path when you notice that your satellite phone has a signal!`)
        alert(`Do you try to make a call or do you continue walking?`)
        decision2 = prompt(`CALL or WALK`).toLowerCase()
   }

   function cliff() {
       alert(`By some miracle you make you way down the cliff and find yourself at a large clearing.`)
       alert(`All of a sudden... You hear some beeping... It's your satellite phone.`)
       alert(`Do you try to make a call or do you continue walking?`)
       decision2 = prompt(`CALL or WALK`).toLowerCase()
   }

   if (decision !== undefined) {
  
        if (decision === "scale down") {
            cliff();
        } else {
            turnAround(); 
        }   
    } 

  function walk() {
      alert(`You keep walking and it seems like all hope is lost.`)
      alert(`But all of a sudden you come across a main road and flag down a car.`)
      alert(`The driver has a working cell phone and calls for help.`)
      alert(`YOU DID IT!!!!!!`)
      aler
}

  function call() {
        alert(`The signal is weak but its worth a shot.`)
        alert(`Do you call the 911 for help or your loved one to say goodbye`)
        decision3 = prompt(`911 or LOVE`).toLowerCase()
        alert(`DANG!`)
        alert(`The signal wasn't strong enough to make the call.`)
        alert('Time to keep walking.')
  } 

  if (decision2 !== undefined) {
        if (decision2 === "walk") {
        walk();
        } else {
        call();
        } 
  }
  if (decision3 !== undefined) {
  
    if (decision3 === "911") {
        walk();
     } else {
        walk();
     } 
    }

    alert(`Great work ${playerName}! Now the tough decision...`)
    alert(`Do you go back and bring the rest of the crew to safety before the rescue squad gets there?\n
    OR\nDo you hop in the car and head back to your hotel?`)
    decision4 = prompt('HERO or HOTEL').toLowerCase()

        if (decision4 !== undefined) {
            if (decision4 === "hero") {
            alert(`Remember that the guide hit his head during the fall so he might not remember much...`)
            jungleEscape();
            } else {
                alert(`Get some ${playerName}! You did GREAT`);
            } 
        }


} 

jungleEscape()





