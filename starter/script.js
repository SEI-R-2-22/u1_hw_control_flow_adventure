let userName = `userName`;
let runorhide = `RUN`;
    `HIDE`;
let direction = `NORTH`;
    `EAST`;
    `SOUTH`;
    `WEST`;
let supplies = `KNIFE`;
    `ROPE`;
    `LANTERN`;
    `FLASHLIGHT`;
    `NET`;
    `PADDLE`;
    `WRENCH`;
let friends = `BEN`;
    `FELIX`;
    `LISA`;
    `JANE`;
    `DYLAN`;
    `KYLE`;
    `SARAH`;
let escape = `CAR`;
    `HIGHWAY`;
    `NEIGHBOR HOUSE`;
    `LAKE`;
    `BOAT HOUSE`;
    `FOREST`;
    `CAVE`;

const chooseToPlay = () => {
    let chooseToPlay = prompt(`SURVIVE THE LAKE HOUSE KILLER!`);
}

const PlayGame = () => {
    let userName = prompt(`What is your name?`)
    alert(`Survive the Lake House Killer ${userName}!`);
}

const runorhide = () => {
    let decision = runorhide(`There's a killer on the loose are you gonna RUN or HIDE?`);
if (decision === 'RUN') {
        run();
} else if (decision === 'HIDE'){
        hide();
} else if (decision) {
    }
    alert(`You've decided to ${runorhide}. Make the right choices and you might survive!`) 
} 

  const direction = () => {
  let decision = prompt(`You can't stay in the Lake House. Which direction would you like to go?("NORTH"/"EAST"/"SOUTH"/"WEST")`);
if (decision === "NORTH") {
    north();
} else if (decision === "EAST") {
    east();
} else if (decision === "SOUTH") {
    south();
} else if (decision === "WEST") {
    west();
} else if (decision) {
    }
    alert(`You've chosen to go ${direction}. On your adventure you'll come across supplies and friends. Choose wisely and you'll make it out alive!`)
}

const supplies = () => { 
`NORTH` = prompt(`You've come across some supplies, but can only carry one. Would you like a wrench, a knife, or a flashlight? ("WRENCH"/"KNIFE"/"FLASHLIGHT")`);
if (decision === "WRENCH"){
    wrench();
} else if (decision === "KNIFE"){
    knife();
} else if (decision === "FLASHLIGHT"){
    flashlight();
} else if (decision){
    } 
`EAST` = prompt(`You've come across some supplies, but can only carry one. Would you like a knife, a lantern, or a paddle? ("KNIFE"/"LANTERN"/"PADDLE")`);
if (decision === "KNIFE"){
    knife();
} else if (decision === "LANTERN"){
    lantern();
} else if (decision === "PADDLE"){
    paddle();
} else if (decision){
    } 
`SOUTH` = prompt(`You've come across some supplies, but can only carry one. Would you like a paddle, or a net? ("PADDLE"/"NET")`);
if (decision === "PADDLE"){
    paddle();
} else if (decision === "NET"){
    net();
} else if (decision){
    }
`WEST` = prompt(`You've come across some supplies, but can only carry one. Would you like a net, a rope, or a flashlight? ("NET"/"ROPE"/"FLASHLIGHT")`);
if (decision === `NET`){
    net();
} else if (decision === "ROPE"){
    rope();
} else if (decision === "FLASHLIGHT"){
    flashlight();
} else if (decision){
    } 
    alert(`You've picked up a ${supplies}. This should come in handy later.`)
}

const friends = () => {
    `WRENCH` = prompt(`During your escape you found two of your friends who are doing the same. They have decided to go in opposite directions. Are you gonna go with Felix or Jane? ("FELIX"/"JANE")`);
if (decision === "FELIX"){
    felix();
}else if (decision === "JANE"){
    jane();
}else if (decision){
    }
`KNIFE` = prompt(`During your escape you found two of your friends who are doing the same. They have decided to go in opposite directions. Are you gonna go with Felix or Ben? ("FELIX"/"BEN")`);
if (decision === "FELIX"){
    felix();
}else if (decision === "BEN"){
    ben();
}else if (decision){
    }
`FLASHLIGHT` = prompt(`During your escape you found two of your friends who are doing the same. They have decided to go in opposite directions. Are you gonna go with Sarah or Jane? ("SARAH"/"JANE")`);
if (decision === "SARAH"){
    sarah();
}else if (decision === "JANE"){
    jane();
}else if (decision){
    }
`LANTERN` = prompt(`During your escape you found two of your friends who are doing the same. They have decided to go in opposite directions. Are you gonna go with Ben or Lisa? ("BEN"/"LISA")`);
if (decision === "BEN"){
    ben();
 }else if (decision === "LISA"){
    lisa();
}else if (decision){
    }
`PADDLE` = prompt(`During your escape you found two of your friends who are doing the same. They have decided to go in opposite directions. Are you gonna go with Lisa or Kyle? ("LISA"/"KYLE")`);
if (decision === "LISA"){
    lisa();
}else if (decision === "KYLE"){
    kyle();
}else if (decision){
    }
`NET` = prompt(`During your escape you found two of your friends who are doing the same. They have decided to go in opposite directions. Are you gonna go with Dylan or Kyle? ("DYLAN"/"KYLE")`);
if (decision === "DYLAN"){
    dylan();
}else if (decision === "KYLE"){
    kyle();
}else if (decision){
    }
`ROPE` = prompt(`During your escape you found two of your friends who are doing the same. They have decided to go in opposite directions. Are you gonna go with Dylan or Sarah? ("DYLAN"/"SARAH")`);
if (decision === "DYLAN"){
    dylan();
}else if (decision === "SARAH"){
    sarah();
}else if (decision){
    }
alert(`You and ${friends} have decided to ${runorhide} together.`)
}

const escape = () => {
`SARAH` = prompt(`You're almost home free. Where do you wanna go? NEIGHBOR HOUSE or FORREST? ("NEIGHBOR HOUSE"/"FOREST")`);
if (decision === "NEIGHBOR HOUSE"){
    neighborhouse();
} else if (decision === "FOREST"){
    forrest();
}
`JANE` = prompt(`You're almost home free. Where do you wanna go? NEIGHBOR HOUSE or CAR? ("NEIGHBOR HOUSE"/"CAR")`);
if (decision === "NEIGHBOR HOUSE"){
    neighborhouse();
} else if (decision === "CAR"){
    car();
}
`DYLAN` = prompt(`You're almost home free. Where do you wanna go? FORREST or LAKE? ("FOREST"/"LAKE")`);
if (decision === "FOREST"){
    forrest();
}else if (decision === "LAKE"){
    lake();
}
`KYLE` = prompt(`You're almost home free. Where do you wanna go? LAKE or BOAT HOUSE ("LAKE"/"BOAT HOUSE")`);
if (decision === "LAKE"){
    lake();
}else if (decision === "BOAT HOUSE"){
    boathouse();
}
`LISA` = prompt(`You're almost home free. Where do you wanna go? BOAT HOUSE or CAVE ("BOAT HOUSE"/"CAVE")`);
if (decision === "BOAT HOUSE"){
    boathouse();
}else if (decision === "CAVE"){
    cave();
}
`BEN` = prompt(`You're almost home free. Where do you wanna go? CAVE or HIGHWAY ("CAVE"/"HIGHWAY")`);
if (decision === "CAVE"){
    cave();
}else if (decision === "HIGHWAY"){
    highway();
}
`FELIX` = prompt(`You're almost home free. Where do you wanna go? HIGHWAY or CAR("HIGHWAY"/"CAR")`);
if (decision === "HIGHWAY"){
    highway();
}else if (decision === "CAR"){
    car();
}else if (decision){
}

alert(`CONGRATS!! You have survived the Lake House KIller!`)
}

const replay = () => {
    let play = prompt("Do you want to play again? (yes/no)")
    if (play === 'yes'){
        player();
    } else {
        alert("Okay, Good bye!");
    }
  }
PlayGame();
