const saveButtercup = confirm('The love of your life has been kidnapped. Do you set sail and go after her?');

if(saveButtercup == true) {
    let setSailChoice = prompt('You\'re rapidly gaining on Buttercups captors, when all of a sudden you hear her screams coming from the waters. Do you: jump in the water to save her, keep sailing to get closer, or go home? (J/S/H)')

    if(setSailChoice === 'J' || setSailChoice === 'j') {
        alert("Loud shrieking noises start to grow louder around you. Then you are devoured by a swarm of Shrieking Eels. So much for that!")
    }else if(setSailChoice === 'H' || setSailChoice === 'h') {
        alert("Some hero you are. The end!")
    }else{(setSailChoice === 'S' || setSailChoice === 's');
        alert("Smart choice! You wouldn't have made it anyways. One of Buttercups captors saves her just in the nick of time. You continue to gain on the captors ship.");
       
        let climbCliffsOfInsanity = prompt('You get to the Cliffs of Insanity. As you do you see Buttercup and her captors scurrying up a rope. What to do: 1. You look at your hands and tell yourself, "They used to be such strong hands", 2. Yell at Buttercups captors to let her go, 3. Shoot yourself right on up that rope')

    if(climbCliffsOfInsanity === 1) {
        alert("The Nothing comes and consumes you! This story isn't Never Ending")
    }else if(climbCliffsOfInsanity === 2) {
        alert('Vizzini the Sicilian, scoffs at you and shouts, "Inconceivable!"')
    }else{(climbCliffsOfInsanity === 3);
        alert('You climb the rope to face off with Vizzini\'s two henchmen. You best the both of them!');
}
  

    }      
}
