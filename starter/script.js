const startGame = () => {
    alert("We find our hero at the end of a long journey. Unassuming in appearance, his kind hail from a sun-speckled land free of darkness and worry.");
    alert("Dylbo is his name, and burgling is his game! He and his party have traveled over treacherous terrain for many months to reach their dreary destination: The Homely Mountain.");
    alert("Though, these days, the Homely Mountain goes by another name...");
    alert("THE DISSERTATION OF SLAUG!");
    alert("Slaug the nefarious. He was a drake who came to the Homely Mountain in the ancient days to learn how to program. In those days, the Homely Mountain was home to one of the greatest coding bootcamps in all of Mediocre Earth. And some rather unattractive folks as well, hence the name 'Homely', but we don't talk about that, on account of it being rude.");
    alert("But Slaug, clever as he was, dropped out of the bootcamp because he couldn't understand javascript! His rage grew and grew, and before anyone knew what happened, he burned half the mountain down and stole all of the best github repos for himself! (He pulled them all to his local repo and locked the github profiles as private. Dragons in general do not believe in anything being open-source)")
    alert("And now Dylbo, our hero, stands on the doorstep of Slaug's cave, hoping to steal the repos off Slaug's personal computer and save the land!")

    let intro = prompt("Dylbo gazes at the map of the Homely Mountain. The main entrance of Slaug's cave is on the eastern side, about a day's trek from here. To the South, a small goatpath leads to a secret entrance! Just then, Dylbo's companion, the brave dwarf Blipblop asks, 'Dylbo, I've never asked, how old are you?'")
    if (intro > 0 && intro < 50) {
        alert("Still youthful, you are! I think you can take old Slaug head-on, let's go to the eastern entrance and sternly demand those repos back!");
        alert("Dylbo boldy trudges to the cave entrance, where the stench of Slaug wafts venomously from the deep dark. 'Slaug!' he calls, 'You wicked worm, come face me!'");
        let option1 = prompt ("A cold voice echoes in response from the cavern's recesses. 'Dylbo! I should have guessed...will it be a game of wits, or a game of strength to try to best me?' (W - wits / S - Strength)")

        if (option1 === "W") {
            let option1_W = prompt("'So it is a game of wits. Very well, choose your game.' (C - Chess / R - Riddles");

            if (option1_W === "C") {
                let option1_WC = prompt("Slaug dusts off his chess board and the two begin. Unfortunately, Dylbo is quite terrible at chess, and is ranked -150 on Chess.com. Slaug wins in two moves with the Fool's Mate. You win this round Slaug! Would you like to try again? (Y/N)");

                if (option1_WC === "Y") {
                    startGame();
                }
            
            } else if (option1_W === "R") {
                let option1_WR = prompt("A Riddle Game! Dylbo goes first. 'What. . . is an NFT?' he asks. Slaug mutters and mumbles, trailing off with half-conceived notions of fungibility and decentralized finance, but struggles to form anything intelligent! VICTORY - he sullenly hands Dylbo his hackintosh with the repos. Replay? (Y/N)")

                if (option1_WR === "Y") {
                    startGame();
                }
            }
        } else if (option1 === "S") {
            let option1_S = prompt ("'So strength is your decision! Very well, now you must choose your weapon' (P - Pen / S - Sword / M - Macbook 2017 or later with the latest edition of Nodejs installed)");

            if (option1_S === "P") {
                let option1_SP = prompt("Slaug scoffs at the pen. He rears his ugly head and hurls a teeny tiny fireball at the pen's ink reserve, causing it to bubble and boil, spilling all over Dylbo's new travel cloak. You win this round Slaug! Would you like to try again? (Y/N)");

                if (option1_SP === "Y") {
                    startGame();
                }

            } else if (option1_S === "S") {
                let option1_SS = prompt("Slaug looks at the sword and grins toothily. Dylbo runs to stab Slaug, but his scales are too thick! Quick as lightning, the dragon gnashes the blade from Dylbo's hand and tail-whips him a hundred yards into the nearby river. You win this round Slaug! Would you like to try again? (Y/N)");

                if (option1_SS === "Y") {
                    startGame();
                }

            } else if (option1_S === "M") {
                let option1_SM = prompt("True fear creeps into Slaug's eyes as he gazes across the sleek space gray finish of Dylbo's Macbook. Wielding it like an axe, Dylbo springs upon Slaug and slices through the drake's hide, causing major paper-cut like damage. 'Enough!' Roars Slaug, take the repos, I never used the to cool any cool projects anyways. VICTORY - he sullenly hands Dylbo his hackintosh with the repos");

                if (option1_SM === "Y") {
                    startGame()
                }
            }



        } else {
            // Slaug doesnt understand and burns you to a crisp.
        }
    } else if (intro > 50) {
        alert("Ah, older than I expected. I think we should use the secret entrance to catch Slaug by surprise!");
        let option2 = prompt ("Dylbo and Blipblop sneak up to the secret entrance and follow a spiraling tunnel down to Slaug's lair. There, the great dragon lay cuddled around his golden hackintosh, housing the world's best github projects. 'Now what?' whispers BlipBlop. (S - Snatch and Grab / A - ATTACCKKKKK!");

        switch(option2) {
            case "S":
                let option2_S = prompt ("Dylbo and BlipBlop slowly and quietly slip around the dragon and prize the hackintosh from Slaug's lizardly grip. They creep back to the secret tunnel. Once their, they power-walk their way to safety. Upon waking, Slaug howls with rage, but Dylbo and BlipBlop are long gone, already celebrating in Mexico with the homies! VICTORY - Replay? (Y/N)");

                if (option2_S === "Y") {
                    startGame();
                }
                break;
            case "A":
                let option2_A = prompt ("Dylbo and BlipBlop charge Slaug, but the dastardly beast woke with a start and leapt in the air. His great wings unfurled and he let loose a violent gust of wind, knocking the duo backwards and out the main entrance of the cave. There they lay, to this day, still knocked silly and regaining consciousness. You win this round Slaug! Would you like to try again? (Y/N)");

                if (option2_A ==="Y") {
                    startGame();
                }
                break;
            default:
                break;
        }

    } else {

    }
}

document.getElementById("start").onclick = startGame;
