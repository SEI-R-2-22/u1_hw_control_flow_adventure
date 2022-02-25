const threeBody  = confirm(`LOCATION: EARTH. Welcome to Three Body. Press OK to don your virtual reality suit. Press cancel to quit the game.`) 

    switch(threeBody) {
        case true:
            let trisolaris = confirm(`LOCATION: TRISOLARIS. Arrive in red desert. Weather event - chaotic era - cold/hot. Assist Trisolarans with predicting their chaotic eras?`)
                if (trisolaris === true) {
                    alert(`FAILURE. Trisolaran society thrives under your assistance and they enslave Earth much faster than we can respond. You are branded as a traitor. Press OK to play again.`)      
                    window.location.reload();
                } else {
                    let plan = parseInt (prompt(`LOCATION: PLANETARY DEFENSE COUNCIL. You have rejected to aid the Trisolarans. The PCD tasks you with finding a strategy to avert the enslavement of Earth. PICK ONE TO RESEARCH 1) Spacefighters 2) Hydrogen Warheads 3) The Dark Forest Theory`))
                        if (plan === 1) {
                            let starFighters = confirm(`The Trisolaran fleet technology outstrips your own. Attempt risky maneuver - override human pilot control and kamikaze entire fleet with hydrogen bombs into mothership?`)
                                if (starFighters === true) {
                                    alert(`FAILURE. Trisolaran fleet intact. Earth enslaved. Press OK to play again.`)
                                    window.location.reload();
                                } else {
                                    alert(`FAILURE. Trisolaran fleet overpower human forces. Earth enslaved. Press OK to play again.`)
                                    window.location.reload();
                                }
                        } else if (plan === 2) {
                            let bomb = confirm(`LOCATION: MERCURY - Hydrogen bomb testing site. Deploy bomb on planet surface for testing?`)
                                if (bomb === true) {
                                    alert(`FAILURE. Mercury’s orbit is slowed down enough to fall into the sun. Chain reaction of sun expansion consumes the Earth. Press OK to play again.`)
                                    window.location.reload();
                                } else {
                                    confirm(`FAILURE. You unleash the untested bomb against key enemy ships. The Trisolaran fleet unharmed by hydrogen bomb. Earth enslaved. Press OK to play again.`)
                                    window.location.reload();
                                }
                        } else if (plan === 3) {
                            let madProtocol = confirm(`LOCATION: FUTURE EARTH, 200 YEARS LATER. Acting on a hunch, you chose Mutually Assured Destruction, The MAD Protocol - beaming the location of a random star system's location throughout the galaxy. You awaken from cryosleep to find that the star system you picked has been annihilated by a mysterious force. The Trisolarans offer diplomacy. Do you trust them?`)
                                if (madProtocol === true) {
                                    alert('SUCCESS! Peace abides as the two civilizations thrive together. You are appointed the first Swordholder - the keeper of the broadcast codes to our local star cluster. With the MAD protocol in place, neither Earthlings nor Trisolarans will risk war if the stakes are their own star systems.')
                                } else {
                                    let distrust = confirm(`Fearing betrayal, you foment distrust in the Trisolarans during peace talks. Trisolaran officials call your bluff - not believing humanity would actually follow through with the MAD protocol. Full-blown war erupts, and humanity teeters on extinctions. Initiate MAD Protocol? `)
                                        if (distrust === true) {
                                            let blackHole = confirm(`LOCATION: BLACK HOLE - Pocket Universe. Within weeks of the protocol's initiation, Alpha Centauri (and with it, Trisolaris) is destroyed. With the Sun's destruction imminent, you escape the solar system via light speed craft. Entering a black hole, you find a pocket universe in which it is possible to live out your days due to the extreme time dilation. After 16 days, a mysterious message appears on your console. Do you read it?`)
                                                if (blackHole === true) { 
                                                    let pocketUniverse = confirm(`The message informs you that 18 million years have passed and that eons of war have torn the universe apart. It is on the brink of collapse and rebirth, but the presence of pocket universes disrupts the natural cycle. Leave Black Hole?`)
                                                        if (pocketUniverse === true) {
                                                            alert(`SUCCESS. You join the dying universe, but leave behind a message for the reborn universe to discover. THE END.`)
                                                        } else {
                                                            let number = prompt(`FAILURE. Enter a random number.`)
                                                                confirm(`You live ${number} years and die peacefully. The universe descends into eternal darkness. Press OK to play again.`)
                                                                window.location.reload();   
                                                        }  
                                                } else {
                                                    console.log(test);
                                                }
                                        } else {
                                            console.log(test);
                                        }
                                              
                
                                }
                        }
    
    
                }
                
    }                              
      
        




// const trisolaris  = confirm() {
    
// }

// const pCD  = confirm() {
    
// }


// const futureEarth  = confirm() {
    
// }


// const space  = confirm() {
    
// }


// const mercury  = confirm() {
    
// }


// const armageddon  = confirm() {
    
// }

// const blackHole = confirm() {

// }












                
