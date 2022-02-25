let playerChoice = null;

const firstChoice = (playerChoice) => {
  if (playerChoice === 1) {
    let playerChoice = prompt(
      "With a tug and a click your surroundings are revealed. The room is small and painted entirely red.  Before you is one ‘window’ but it appears to actually be a picture of the default Windows XP desktop.  Looking down you realize you’re in a comfy chair after all!  You consider this to be a favorable turn of events.  Suddenly a voice from your left and to the rear asks “Do you mind?” Type '1' for Yes.  Type '2' for No."
    );
    playerChoice = parseInt(playerChoice);
    secondChoice(playerChoice);
  } else if (playerChoice === 2) {
    let playerChoice = prompt(
      " You’re quite comfortable.  You imagine you could stay here in the dark for a long while.  Wherever ‘here’ actually is. Type '1' to Pull the string. Type '2' to do nothing."
    );
    playerChoice = parseInt(playerChoice);
    lazyChoice(playerChoice);
  }
  //  else if(playerChoice ===0){}
  else gameBegins();
};

const secondChoice = (playerChoice) => {
  if (playerChoice === 1 || 2) {
    let playerChoice = prompt(
      "You turn towards the voice and deliver your answer but you are taken aback by what you see.  There is an elephant in the room.  Well, he’s in a chair that appears to be the same as yours, but that chair is also in the room.  In the same way that you are in a chair but also in the room the elephant is as well.  “How rude!”  the elephant exclaims as he gathers his newspaper and datebook to leave.  With a sleeping mask on his forehead and effects in hand the elephant walks through a door to your right that wasn’t there before. Type '1' to go through the door. Type '2' to have an existential crisis."
    );
    playerChoice = parseInt(playerChoice);
    thirdChoice(playerChoice);
  } else gameBegins();
};

const thirdChoice = (playerChoice) => {
  if (playerChoice === 1) {
    let playerChoice = prompt(
      "You step through the door onto a mountain top; green everywhere.  The air is damp and cool.  The door is gone. Type '1' to start hiking down. Type '2' to take a seat and admire the view."
    );
    playerChoice = parseInt(playerChoice);
    mountainChoice(playerChoice);
  } else if (playerChoice === 2) {
    let playerChoice = prompt(
      "You are frozen in shock a while and eventually you try to stand up and pass out.  Suddenly you awake in bed.  It is a normal Saturday and continues as such.  You dream of the room and elephants every night going forward. The End. Type anything to start again."
    );
    gameBegins();
  }
};
const lazyChoice = (playerChoice) => {
  if (playerChoice === 1) {
    firstChoice(playerChoice);
  } else if (playerChoice === 2) {
    let playerChoice = prompt(
      "Did I mention how comfortable you are?  You are very pleased with your current situation and think you might even catch a nap. The smarter thing to do would be to figure out where ‘here’ is. Or at least pull the string. Type '1' to pull the string. Type '2' to do nothing"
    );
    playerChoice = parseInt(playerChoice);
    if (playerChoice === 1) {
      firstChoice(playerChoice);
    } else if (playerChoice === 2) {
      let playerChoice = prompt(
        "You continue to be absurdly comfortable for an uncertain amount of time and you eventually expire.  The End. Type anything to start again."
      );
      gameBegins();
    } else gameBegins();
  }
};

const mountainChoice = (playerChoice) => {
  if (playerChoice === 1) {
    let playerChoice = prompt(
      "You hike for what feels like an hour when you see a massive village built into the treetops.  You notice it is oddly quiet.  Where are all the people?  You walk close to the village and see a basket attached to a fancy rope and pulley mechanism.  The ropes lead to a platform area above. Type '1' to get in the basket and try to make this work. Type '2' if you think it's too dangerous."
    );
    playerChoice = parseInt(playerChoice);
    secondChoice(playerChoice);
  } else if (playerChoice === 2) {
    let playerChoice = prompt(
      "The clouds captivate you as they swirl around nearby peaks.  You try to keep an eye on clouds heading towards you, but as they get close they become too nebulous to make out. You hear a bird call, close, and turn too quickly.  You reach out a hand to steady yourself but nothing meets it. You tumble. You die. The End. Type anything to start again."
    );
    gameBegins();
  }
};

const villageChoice = (playerChoice) => {
  if (playerChoice === 1) {
    let playerChoice = prompt(
      "The pulley mechanism is well made, it takes you little effort to pull yourself up to the platform. Type '1' to explore the village. Type '2' to take a breather. Type '3' to yell for someone."
    );
    playerChoice = parseInt(playerChoice);
    finalChoice(playerChoice);
  } else if (playerChoice === 2) {
    let playerChoice = prompt(
      "As you turn to step away from the basket contraption you hear a creaking and then a loud snap.  Looking up you meet your maker who happens to look a lot like a tree branch. The End. Type anything to start again."
    );
    gameBegins();
  }
};

const gameBegins = () => {
  let playerChoice = prompt(
    "You awake in what feels like a comfortable chair.  Your eyes seem to be failing you; you can’t see a thing! Something brushes across your face as you look around.  At first you are startled, but when you grasp the object you realize it’s a string hanging from above. Type '1' to pull the string.  Type '2' to do nothing."
  );
  playerChoice = parseInt(playerChoice);
  if (playerChoice === 1 || 2) {
    //    alert("Yes");
    firstChoice(playerChoice);
  }
  location.reload();
};

gameBegins();
