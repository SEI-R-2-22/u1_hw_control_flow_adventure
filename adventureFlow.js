const readyForAdventure = () => {
    const isReady = confirm('Ready for an adventure?');


    // I set up a function so that I can reuse the prompt func in multiple places.
    // Its return a value, thats why the return statement is there.
    // func takes a parameter and sends that parameter straight to the prompt.
    const promptActions = (statement) => {
        return prompt(statement)
    }

    let promptStatement;
    let promptStatement2;

    const runDeanLogic = () => {
        promptStatement = 'You chose some brain over brawn. What will you do first? \n 1: Grab the key ring \n 2: Have H.E.L.P.eR make me a sandwich';
        let promptResponse = promptActions(promptStatement);

        if (promptResponse.toString() === '1') {
            promptStatement2 = 'The world is your oyster Dean. Pick your mode of transport: Boat, Plane, Car, Time Machine'
            let promptResponse2 = promptActions(promptStatement2);
            if (promptResponse2.toLowerCase() === 'boat') alert('It\'s a great day for a boat ride. You hop in the X-2 with your brother Hank and take off. Just as you\'re starting to enjoy your cruising, a group of pirates take over the boat. Unbeknownst to everyone Brock was doing repairs below and mercilessly slaughters the pirates. You\'re saved this time.')
            if (promptResponse2.toLowerCase() === 'plane') alert('You jump into the X-1 and lift off. You\'re flying along acting out your favorite scenes from Top Gun when The Monarch shows up to spoil your day. Too bad for him you actually paid attenion when Brock taught you some flying manuevers. You quickly dispatch The Monarch making him an afterthought. Free to enjoy the rest of your flight, you continue singing Rush songs and pretending to be "Maverick"')
            if (promptResponse2.toLowerCase() === 'car') alert('You snag the keys to "Adrianne," Brock\'s orange 1969 Dodge Charger. You\'re cruising along and your college roommate, Brown Widow, cathes your eye. Your attention was caught for a little too long and now you\'ve plowed Brock\'s beloved car into a pole. You look into to rearview and see what you most dread, a furious Brock Samson! This doesn\'t look too good for you.')
            if (promptResponse2.toLowerCase() === 'time machine') alert('You jump in the time machine and set it for 1985. You get there and realize you forgot you really only like the movies from the 80\'s and try to set the machine for 1965. But something\'s wrong and the time machine doesn\'t start up. You come to the conclusion that the flux capacitor. You remember that in your short journey out around the town some cooky doctor yammering on about how he\'s dicovered time travel. Lucky for you, you paid some attention to remember where he would be tonight. You get to the Twin Pines Mall. When you arrive there\'s another kid there your age with a video camera. He introduces himself as Marty McFly. You ask about Doc when all of a sudden a car comes zooming by out of thin air. Doc jumps out in asstonishment. His ecstatic discovery is cut short and you, along with Marty, are shoved into the Delorean. You take off to 1955 and well, hopefully you know how that ends up.')
            readyForAdventure();
        } if (promptResponse.toString() === '2') {
            alert('You go and lay down on the couch while you wait for H.E.L.P.eR to finish making your sandwhich, you fall asleep. Lame! Some adventure that was.')
            readyForAdventure();
        }
    }

    const runHankLogic = () => {
        promptStatement = 'You chose some brawn over brain. What will you do first? \n 1: Grab the key ring \n 2: Have H.E.L.P.eR make me a sandwich';
        let promptResponse = promptActions(promptStatement);

        if (promptResponse.toString() === '1') {
            promptStatement2 = 'The world is your oyster Hank. Pick your mode of transport: Boat, Plane, Car, Time Machine'
            let promptResponse2 = promptActions(promptStatement2);
            if (promptResponse2.toLowerCase() === 'boat') alert('It\'s a great day for a boat ride. You hop in the X-2 with your brother Dean and take off. Just as you\'re starting to enjoy your cruising, a group of pirates take over the boat. Unbeknownst to everyone Brock was doing repairs below and mercilessly slaughters the pirates. You\'re saved this time.')
            if (promptResponse2.toLowerCase() === 'plane') alert('You jump into the X-1 and lift off. You\'re flying along and see a beautiful island to land on. All of a sudden you realize you\'re landing gear has failed. You pull an emergency landing but now you\'re stranded on the island. Hopefully Brock finds you!')
            if (promptResponse2.toLowerCase() === 'car') alert('You hop in "Adrianne," Brock\'s orange 1969 Dodge Charger. You\'re cruising the streets when you notice The Monarch\'s henchmen following you in their Nissan Stanza. Good thing Brock taught you some manuevers to get away. You execute flawlessly and notice the Nissan Stanza flip and burst into flames. You make it back home before Brock ever notices you nabbed his precious "Adrianne."')
            if (promptResponse2.toLowerCase() === 'time machine') alert('You jump in the time machine and set it for 1985. You get there and realize you forgot you really only like the movies from the 80\'s and try to set the machine for 1965. But something\'s wrong and the time machine doesn\'t start up. You come to the conclusion that the flux capacitor. You remember that in your short journey out around the town some cooky doctor yammering on about how he\'s dicovered time travel. Lucky for you, you paid some attention to remember where he would be tonight. You get to the Twin Pines Mall. When you arrive there\'s another kid there your age with a video camera. He introduces himself as Marty McFly. You ask about Doc when all of a sudden a car comes zooming by out of thin air. Doc jumps out in asstonishment. His ecstatic discovery is cut short and you, along with Marty, are shoved into the Delorean. You take off to 1955 and well, hopefully you know how that ends up.')
            readyForAdventure();
        } if (promptResponse.toString() === '2') {
            alert('You go and lay down on the couch while you wait for H.E.L.P.eR to finish making your sandwhich, you fall asleep. Lame! Some adventure that was.')
            readyForAdventure();
        }
    }

    const runBrockLogic = () => {
        promptStatement = 'A one-half Swedish, one-quarter Polish, one-quarter Winnebago "murder machine". What will you do today? \n ';
        let promptResponse = promptActions(promptStatement);

        if (promptResponse.toString() === 1) {
            promptStatement2 = 'You\'ve got a day off finally! What vehicle are you going to take for a joy ride: boat, plane car or time machine'
            let promptResponse2 = promptActions(promptStatement2);
            if (promptResponse2.toLowerCase() === 'boat') alert('It\'s a great day for a boat ride. But before you take off you remember there were a few repairs you needed to make down in the cabin. It\'s not long and you notice that the boat is moving and you hear yelling above. Come to find out the boys had the same idea as you and took the boat out while you were in the cabin. Only problem is there were pirates trying to take the boys hostage. This wasn\'t happening on your watch; so, you mercilessly slaughter the pirates and take the boys back home.')
            if (promptResponse2.toLowerCase() === 'plane') alert('You jump into the X-1 and lift off. You\'re flying along and you feel something dinging at the plane. Then The Monarch flies up onto the windsheild. You turn on the wippers to shew him away. Flustered he flies off. You loop back around behind him and shoot him down. Leaving him to rue this day you fly your way off into the sunset.')
            if (promptResponse2.toLowerCase() === 'car') alert('You go to grab the keys to "Adrianne," only to find out someone\'s taken the keys to your beloved 1969 Dodge Charger. Furious with the anger of a 1000 hornets. You begin tracking down your precious car. It doesn\'t take you long and you see it. The right headlight smashed into a pole and a petrified Dean at the wheel. At least it\'s not totalled.')
            if (promptResponse2.toLowerCase() === 'time machine') alert('You\'ve always wanted to hunt down a T-Rex. So you set the machine for the Late Cretaceous period. You\'ve got your .700 Nitro Express elephant rifle and you\'re off. You spend hours tracking and finding a position to setup a blind. You find the perfect spot. As you\'re building your blind you feel the ground shaking. You\'re almost as excited as a school-boy but keep your nerves calm. You see the T-Rex approaching as you stay hidden. Since you don\'t beleive in using a gun you suprise the dino with your Bowie knife. The poor thing never saw it coming. You get back into the time machine with a T-Rex head as your trophy. You get back home and Dr. Venture is appalled at the site of your trophey and wants you to dispose of it. A sad day for Brock Samson.')
            readyForAdventure();
        }
    }

    if (isReady === true) {
        let characterSelect = prompt('Choose your character: Dean, Hank, Brock')

        switch (characterSelect.toLowerCase()) {
            case 'dean':
                runDeanLogic();
                break;
            case 'hank':
                runHankLogic();
                break;
            case 'brock':
                runBrockLogic();
                break;
            default:
                alert('Choose player!')
        }
    }
}

readyForAdventure();