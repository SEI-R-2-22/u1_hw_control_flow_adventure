const readyForAdventure = () => {
    const isReady = confirm('Ready for an adventure?');


    // I set up a function so that I can reuse the prompt func in multiple places.
    // Its return a value, thats why the return statement is there.
    // the func takes a parameter and sends that parameter straight to the prompt.
    const promptActions = (statement) => {
        return prompt(statement)
    }

    let promptStatement;
    let promptStatement2;
    let promptStatement3;

    const runDeanLogic = () => {
        promptStatement = 'You chose some brain over brawn. Will you get far? Y/N';
        let promptResponse = promptActions(promptStatement);
        if (promptResponse.toLowerCase() === 'y') {
            promptStatement2 = 'The world is your oyster Dean. Pick your mode of transport: Boat, Plane, Car, Time Machine'
            let promptResponse2 = promptActions(promptStatement2);
            if (promptResponse2.toLowerCase() === 'boat') alert('It\'s a great day for a boat ride. You hop in the X-2 and take off. Just as you\'re starting to enjoy your cruising, a group of pirates take over the boat. Unbeknownst to everyone Brock was doing repairs below and mercilessly slaughters the pirates. You\'re saved this time.')
            if (promptResponse2.toLowerCase() === 'plane') alert('You jump into the X-1 and lift off. You\'re flying along and see a beautiful island to land on. All of a sudden you realize you\'re landing gear has failed. You pull an emergency landing but now you\'re stranded on the island. Hopefully Brock finds you!')
            if (promptResponse2.toLowerCase() === 'car') alert('You snag the keys to "Adrianne," Brocks You\'re cruising along and your college roommate, Brown Widow cathes your eye. Your attention was caught for a little too long and now you\'ve plowed Brock\'s beloved car into a pole. You look into to rearview and see what you most dread, a furious Brock Samson! This doesn\'t look too good for you.')
            if (promptResponse2.toLowerCase() === 'time machine') alert('You jump in the time machine and set it for 1985. You get there and realize you forgot you really only like the movies from the 80\'s and try to set the machine for 1965. But something\'s wrong and the time machine doesn\'t start up. You come to the conclusion that the flux capacitor. You remember that in your short journey out around the town some cooky doctor yammering on about how he\'s dicovered time travel. Lucky for you, you paid some attention to remember where he would be tonight. You get to the Twin Pines Mall. When you arrive there\'s another kid there your age with a video camera. He introduces himself as Marty McFly. You ask about Doc when all of a sudden a car comes zooming by out of thin air. Doc jumps out in asstonishment. His ecstatic discovery is cut short and you, along with Marty, are shoved into the Delorean. You take off to 1955 and well, hopefully you know how that ends up.')
            let promptResponse3 = promptActions(promptStatement);
            readyForAdventure();
        }
    }

    const runHankLogic = () => {
        promptStatement = 'You chose some brain over brawn. Will you get far? Y/N';
        let promptResponse = promptActions(promptStatement);
        if (promptResponse.toLowerCase() === 'y') {
            promptStatement2 = 'The world is your oyster Dean. Pick your mode of transport: Boat, Plane, Car, Time Machine'
            let promptResponse2 = promptActions(promptStatement2);
            if (promptResponse2.toLowerCase() === 'boat') alert('It\'s a great day for a boat ride. You hop in the X-2 and take off. Just as you\'re starting to enjoy your cruising, a group of pirates take over the boat. Unbeknownst to everyone Brock was doing repairs below and mercilessly slaughters the pirates. You\'re saved this time.')
            if (promptResponse2.toLowerCase() === 'plane') alert('You jump into the X-1 and lift off. You\'re flying along and see a beautiful island to land on. All of a sudden you realize you\'re landing gear has failed. You pull an emergency landing but now you\'re stranded on the island. Hopefully Brock finds you!')
            if (promptResponse2.toLowerCase() === 'car') alert('You snag the keys to "Adrianne," Brocks You\'re cruising along and your college roommate, Brown Widow cathes your eye. Your attention was caught for a little too long and now you\'ve plowed Brock\'s beloved car into a pole. You look into to rearview and see what you most dread, a furious Brock Samson! This doesn\'t look too good for you.')
            if (promptResponse2.toLowerCase() === 'time machine') alert('You jump in the time machine and set it for 1985. You get there and realize you forgot you really only like the movies from the 80\'s and try to set the machine for 1965. But something\'s wrong and the time machine doesn\'t start up. You come to the conclusion that the flux capacitor. You remember that in your short journey out around the town some cooky doctor yammering on about how he\'s dicovered time travel. Lucky for you, you paid some attention to remember where he would be tonight. You get to the Twin Pines Mall. When you arrive there\'s another kid there your age with a video camera. He introduces himself as Marty McFly. You ask about Doc when all of a sudden a car comes zooming by out of thin air. Doc jumps out in asstonishment. His ecstatic discovery is cut short and you, along with Marty, are shoved into the Delorean. You take off to 1955 and well, hopefully you know how that ends up.')
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
                promptStatement = 'A one-half Swedish, one-quarter Polish, one-quarter Winnebago "murder machine". But will you get far? Y/N'
                promptActions(promptStatement);
                break;
            default:
                alert('Choose player!')
        }

        // if (characterSelect === 'dean') {
        //     let deanVentureBegin = prompt()
        //     if (deanVentureBegin === 'y') {
        //         let deanFirstChoice = prompt('The world is your oyster Dean. Pick your mode of transport: Boat, Plane, Car, Time Machine')

        //     } else if (deanVentureBegin === 'n') {
        //         alert('Some lame adventure that was, Dean.')
        //     }
        // }
        // else if (characterSelect === 'hank') {
        //     let hankVenutreBegin = prompt(')
        //     if (hankVenutreBegin === 'y') {
        //         console.log('n')
        //     } else if (hankVenutreBegin === 'n') {
        //         alert('You tell H.E.L.P.eR. to make you a sandwhich. But fall asleep before he\'s done')
        //     }
        // }
        // else if (characterSelect === 'brock') {
        //     let brockSamsonBegin = prompt()
        //     if (brockSamsonBegin === 'y') {
        //         console.log('y')
        //     } else if (brockSamsonBegin === 'n') {
        //         alert('Has the mighty Brock Sampson gone soft?')
        //     }
        // }
    }
}

readyForAdventure();