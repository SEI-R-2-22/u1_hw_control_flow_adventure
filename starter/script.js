// Helper functions and other elements to simplify things that are repeated
const approachTheHouseOptions = `
  [H]uff, puff, and blow the house down.
  [K]nock politely on the door.
  [C]all for help.
  `;

const phoneAFriend = `
  [F]ire Lord Ozai.
  [R]umplestiltskin.
  [G]rond.
`;

const knockOptions = `
  [L]ie.
  [T]ell the truth.
  "Land-[S]hark."
`;


const grondQuote = `The drums rolled louder. Fires leaped up. Great engines crawled across the field; a huge ram, great as a forest-tree a hundred feet in length, swinging on mighty chains. Long had it been forging in the dark smithies of Mordor, and its hideous head, founded of black steel, was shaped in the likeness of a ravening wolf; on it spells of ruin lay. Grond they named it, in memory of the Hammer of the Underworld of old. Great beasts drew it, orcs surrounded it, and behind walked mountain-trolls to wield it.

...The drums rolled and rattled. With a vast rush Grond was hurled forward by huge hands. It reached the Gate. It swung. A deep boom rumbled through the City like thunder running in the clouds.`;

const tryAgain = () => {
  const y = confirm(`Would you like to try again?`);
  if (y) {
    fromTheBeginning();
  } 
} 



// ********* STORY BEGINS HERE *************** //

const user = prompt("Hello! what is your name?");

alert(`Hello ${user}. What a handsome wolf you are. And my, what big teeth you have.`);

alert(`(Nope, sorry, wrong story. Ahem.)`);

const fromTheBeginning = () => {
  const whichHouse = prompt(`Hello ${user} the wolf. You are walking along a road when your tummy starts rumbling. Up ahead you see 3 houses: One made of straw, one made of sticks, and one made of brick. Which do you visit? 

  (type one of the following):

  [S]traw 
  S[t]icks 
  [B]rick`);

  //// First choice: which house to go into:

  // HOUSE OF STRAW
  if (whichHouse.toLowerCase() === "straw" || whichHouse.toLowerCase() === "s") {
    const houseAction = prompt(`You approach the straw house. Cute. You can see a delicious little pig inside through the tiny window. Your mouth begins to water. What do you do?
    ${approachTheHouseOptions}
    `); 

    // STRAW > HUFF AND PUFF
    if (houseAction.toLowerCase() === "h") {
      
      const huffPuffCount = prompt(`Classic. How many times do you huff and puff before trying to blow the house down?`);
      
      // Check how many times they huf and puff, parseInt
      if (parseInt(huffPuffCount) < 3) {
        alert(`I mean, yeah, it's a straw house, so this is a piece of cake. Or -- as it happens -- pork. 
        
        You gobble up the little pig. Delish. Well done.`); ////// WIN CONDITION !!
      }
      else if (parseInt(huffPuffCount) >= 3) {
        alert(`Overkill much? You blow the house down, but your lungs aren't what they used to be, so you also hyperventilate. The piggy escapes while you catch your breath. 
        
        Better luck next time.`);
        tryAgain(); ////// END CONDITION !!
      }
    
      // STRAW > KNOCK POLITELY
    } else if (houseAction.toLowerCase() === "k") {
    
      const knockResponse = prompt(`Interesting ploy. Very direct. 
      
      The piggy calls "who is it?" What is your reply?
      ${knockOptions}`);

      // STRAW > KNOCK > LIE
      if (knockResponse.toLowerCase() == "l") {
        alert(`"It's Red Riging Hood!" You call sweetly. "I brought snacks from Grandmother's house!"
        
        "That's not Red's voice!" they cry. "You're ${user} the wolf! She told me all about you!" The little pig scarpers out the back and escapes. 
        
        Nice try. Better luck next time.`); // END CONDITION
      } 
      
      // STRAW > KNOCK > TRUTH
      else if (knockResponse.toLowerCase() == "t") {
        alert(`You reply: "It's the big bad wolf, and I would like to eat you, please!"
        
        Predictably, the little pig is not terribly excited to see you. It yells "Aaahhh!" as it runs out the back, and escapes. 
        
        No dinner for you. `); //// END CONDITION.
      }
      // STRAW > KNOCK > LANDSHARK
      else if (knockResponse.toLowerCase() == "s") {
        alert(`"Haha, very funny!" the little pig says. It opens the door. 
        
        You gobble it up. 
        
        I cannot believe that worked.`);  ///// WIN CONDITION
      } else alert("sorry, something went wrong.");
    } 
    
    // STRAW > CALL FOR HELP
    else if (houseAction.toLowerCase() === "c") {   
      const whoYouGonnaCall = prompt(`Ah, the old "Phone a friend" lifeline. Alright, teamwork makes the dream work. Who you gonna call?
      
      ${phoneAFriend}`);

      // STRAW > CALL > RUMPLESTILTSKIN
      if (whoYouGonnaCall.toLowerCase() == "r") {
        alert(`You ring up you old pal Rumpelstiltskin, who works through the night spinning the straw into gold. By morning, you've completely forgotten about the little pig (who ran off hours ago) and instead use your new-found treasure to completely buy out the local BBQ joint. 
        
        Win Win! Congrats!`); //// WIN CONDITION !!!
      }
      // STRAW > CALL > NOT HOME
      else {
        alert(`It rings and rings, but no one answers. Maybe you got the wrong number? Maybe they're screening their calls? Either way, you've wasted too much time. The little pig spotted you and vamoosed. 
        
        Better luck next time.`); // END CONDITION !!
      }
    }

  } 

    // end elseif strawHouse

  // HOUSE OF STICKS
  else if (whichHouse.toLowerCase() === "sticks" || whichHouse.toLowerCase() === "t") {
    const houseAction = prompt(`You approach the house of sticks. It is sturdy, but not quite up to "Lincoln's log cabin" standards. Through the stick-framed windows you see a delicious little pig. Your mouth begins to water. What do you do?
    ${approachTheHouseOptions}
    `);

    // STICKS > HUFF AND PUFF
    if (houseAction.toLowerCase() === "h") {      // Huff puff and blow
      
      const huffPuffCount = prompt(`Classic. How many times do you huff and puff before trying to blow the house down?`);
      
      // check how many times they huff and puff
      if (parseInt(huffPuffCount) == 1) {
        alert(`You see the house of sticks tremble, but it doesn't quite fall down. Turns out this place was a little sturdier than you thought. 
        
        Meanwhile, all that huffing and puffing has alerted the little pig to your presense, and it escapes out the back door. Drat. 
        
        Better luck next time.`); ////// END CONDITION !!
      }
      else if (parseInt(huffPuffCount) == 2) {
        alert(`Success! With a tremendous breath, you are able to topple the house of sticks. 
        
        You easily extract the piggy from the kindling that was once its house, and gobble it up. Yum!`);  ////// END CONDITION !!
      }
      else if (parseInt(huffPuffCount) >= 3) {
        alert(`Overkill much? You blow the house down, but your lungs aren't what they used to be, so you also hyperventilate. The piggy escapes while you catch your breath. 
        
        Better luck next time.`); ////// END CONDITION !!
      }
    } 
    
    // STICKS > KNOCK POLITELY
    else if (houseAction.toLowerCase() === "k") {   // Knock politely

      const knockResponse = prompt(`Interesting ploy. Very direct. 
      
      The piggy calls "who is it?" What is your reply?
      ${knockOptions}`);

      // STICKS > KNOCK > LIE
      if (knockResponse.toLowerCase() == "l") {
        const whichPiggy = prompt(`"I'm just another little piggy, just like you!" you call. 
        
        "Which one?" asks the little pig. Hmm. What do you reply?
        
        [1]st little piggy, who went to market."
        [2]nd little piggy, who stayed home.
        [3]rd little piggy, who had roast beef.
        [4]th little piggy, who had none.
        [5]th little piggy, who went "wee wee wee" all the way home.`);

        switch (whichPiggy) {
          case '3': 
            const roastBeef = confirm(`"Oh," they reply, "Did you save me any roast beef?"
            
            Confirm = Yes   |   Cancel = No`);
            if (roastBeef) {
              alert(`The piggy greedily flings open the door. It worked! 
              
              You waste no time gobbling the little pig up. Tasty, but now you really want roast beef.`); /// WIN CONDITION.!!!
            }

            else {
              alert(`"Well then get off my lawn!" A frying pan is thrown from the window with surprising accuracy. You run away, tail literally between your legs. 
            
            Better luck next time. `); /// END CONDITION
            }
            break;
          default :
            alert(`"You liar!" cries the pig, "I'M that little piggy! You're ${user} the wolf, aren't you?" The little pig squeals and escapes out the back door. 
            
            You're a terrible liar. Better luck next time.`); /// END CONDITION
        }
      } 
      
      // STICKS > KNOCK > TRUTH
      else if (knockResponse.toLowerCase() == "t") {
        alert(`You reply: "It's the big bad wolf, and I would like to eat you, please!"
          
        The door is flung open, but you find yourself staring down the barrel of a rifle. What is this, Animal Farm?! "You have 5 seconds..." the little pig begins, but you don't wait around to find out what for. 
        
        This did not go how you planned. Apparently no dinner for you.`); //// END CONDITION.
      }

      // STICKS > KNOCK > LANDSHARK
      else if (knockResponse.toLowerCase() == "s") {
        alert(`"Wow, that's an old reference," says the little pig. "Way to date yourself, boomer." It escapes out the back before you have time to say "Candy gram." 
        
        Bummer. Better luck next time.`); // END CONDITION
      } else alert("sorry, something went wrong.");

    } 
    // STICKS > CALL FOR HELP
    else if (houseAction.toLowerCase() === "c") {   // call for help
      const whoYouGonnaCall = prompt(`Ah, the old "Phone a friend" lifeline. Alright, teamwork makes the dream work. Who you gonna call?
      
      ${phoneAFriend}`);

      if (whoYouGonnaCall.toLowerCase() == "f") {
        alert(`You ring the great Fire Lord Ozai, who loves nothing more than to set this little house ablaze.  
        
        Successful pig roast! Yum!`); //// WIN CONDITION !!!
      }
      // STICKS > CALL > NOT HOME
      else {
        alert(`It rings and rings, but no one answers. Maybe you got the wrong number? Maybe they're screening their calls? Either way, you've wasted too much time. The little pig spotted you and vamoosed. 
        
        Better luck next time.`); // END CONDITION !!
      }

    } else alert("sorry, that wasn't an option.");
  } // end elseif stickHouse

  //HOUSE OF BRICK
  else if (whichHouse.toLowerCase() === "brick" || whichHouse.toLowerCase() === "b") {
    const houseAction = prompt(`House?! This place is a goddamned castle! The stories have not done this place justice. Still, you can see a delicious little pig inside through greate vaulted windows. So. What do you do?
    ${approachTheHouseOptions}
    `);

    // BRICK > HUFF AND PUFF
    if (houseAction.toLowerCase() === "h") {

      const huffPuffCount = prompt(`Classic, if unlikely. Okay then... How many times do you huff and puff before trying to blow the house down?`);
      
      //    Check how many times they huff and puff
      if (parseInt(huffPuffCount) < 3) {
        alert(`Well obviously you don't blow down the freakin' castle. Plus, all this huffing and puffing has alerted Baron von Pig. And... their archers. Crap.
        
        You high-tail it out of there. Better luck next time.`); ////// END CONDITION !!
      }
      else if (parseInt(huffPuffCount) >= 3) {
        alert(`What were you thinking? Obviously you don't blow down the freakin' castle, AND you also hyperventilate. The little pig laughs at you from the gatehouse, while their guards come to collect your sorry self. I'm sure you'll have a lovely future as a throw rug or something.
        
        Let's pretend this didn't happen.`); ////// END CONDITION !!
      }
      
    } 
    
    // BRICK > KNOCK POLITELY
    else if (houseAction.toLowerCase() === "k") {   

      const knockResponse = prompt(`Interesting ploy. Very direct. 
      
      The piggy calls "who is it?" What is your reply?
      ${knockOptions}`);

      // BRICK > KNOCK > LIE
      if (knockResponse.toLowerCase() == "l") {
        alert(`"Castle inspector!" You call back. 
              
        "Ha," the little pig laughs. "Nice try, but the castle inspector was here LAST week. Good thing, too, otherwise I would never have gotten my flaming arrow turrets back into working condition! Wanna see?" 
        
        That doesn't sound good...`);  /// END CONDITION
      } 
      
      // BRICK > KNOCK > TRUTH
      else if (knockResponse.toLowerCase() == "t") {
        alert(`You reply: "It's the big bad wolf, and I would like to eat you, please!"

        The little pig opens a slot in the great door. "I appreciate your candor." they say calmly as archers line up along the walls. "Tell you what: I have no interest in being eaten, and I suspect you have no interest in being a throw rug. Shall we negotiate a truce?"`); 
        
        const truce = confirm(`Will you negotiate a truce?`); 
          if (truce) {
            alert(`"Good choice," saya the pig.
            
            Long story short, you hash out a deal where you can live on the castle grounds in your very own 2-story dog house, and get BBQ delivered twice a week. 
            
            Sweet deal. Congrats!`); /// WIN CONDITION.

          } else {
            alert(`Defiantly you cry: "I will never negotiate with you!"
            
            "Suit yourself," says the little pig. "Archers, ready!"
            
            Uh oh. `);          //// END CONDITION.

          }
      }
      // BRICK > KNOCK > LANDSHARK
      else if (knockResponse.toLowerCase() == "s") {
        alert(`"Wow, that's an old reference," says the little pig. "Way to date yourself, boomer. Why don't you leave comedy to millenials?"  
        
        Bummer. Better luck next time.`); // END CONDITION    
      } else alert("sorry, something went wrong.");

    } 

    // BRICK > CALL FOR HELP
    else if (houseAction.toLowerCase() === "c") {   
      const whoYouGonnaCall = prompt(`Ah, the old "Phone a friend" lifeline. Alright, teamwork makes the dream work. Who you gonna call?
      
      ${phoneAFriend}`);

      if (whoYouGonnaCall.toLowerCase() == "g") {
        alert(`As night falls... 
        
        "${grondQuote}"
        
        Snooty little pig didn't see THAT one coming!
        
        You feast on all the little pigs in the castle. (You do have to share with the orcs, though.)
        
        You are one well-fed wolf! Congrats!`); //// WIN CONDITION !!!
      }
      // STRAW > CALL > NOT HOME
      else {
        alert(`It rings and rings, but no one answers. Maybe you got the wrong number? Maybe they're screening their calls? Either way, you've wasted too much time. The little pig spotted you, and their guards were able to capture you and throw you in the dungeon. 
        
        Maybe for the next adventure you have to escape the dungeon, but for now. Game over. Better luck next time.`); // END CONDITION !!
      }
    } else alert("sorry, that wasn't an option.");

  } // end elseif brickHouse

}

fromTheBeginning();