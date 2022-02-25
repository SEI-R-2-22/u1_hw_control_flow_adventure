function quest(){ 

let nameInput = prompt("Hello, adventurer! What is your name?");

let locationInput = prompt(`Nice to meet you ${nameInput}, where would you like to go? There are 3 dungeons. Your choices are the islands, the mountains or the desert.`);

if (locationInput === "islands") {
    let islandsQ1 = prompt(`I see you've chosen the tropics. Well I hope you're ready for all those sand mites, they can get nasty. Would you rather explore the beach, or go straight into the dungeon? Type 1 for explore or 2 for dungeon.`);

    let islandsQ2 = prompt(( islandsQ1==1 ? `Good choice! You explore the beach and find a private nook where you relax and soak up the sun! Type replay to start again.` : `You go into the dungeon and leave the sunny skies behind you. Arm youself type sword, shield or wand.`))

    switch (islandsQ2) {
        case 'sword':
            alert('You fight your way into the treasure room but are  unable to escape. You wither away in riches.')
            break;
        case 'shield':
            alert('You survive but are unable to fight through the dungeon. You make it back home in one piece with a story of your journey.')
            break;
        case 'wand':
            alert('Magic wins! you get to the treasure room and teleport yourself and the treasure back home.')
            break;
            
        default:
            quest();
    }
    let islandQ3  = prompt('If you would like to try again, type retry.')
    if(islandQ3 == 'retry') {
        quest()
    }


}else if (locationInput === "mountains") {
    let mountainsQ1 = prompt(`I see you've chosen the mountains. Sure hope you know what to do with all those goats. Would you like to explore the terrain or go straight into the dungeon? Type 1 for explore or 2 for dungeon.`);

    let mountainsQ2 = prompt(( mountainsQ1==1 ? `Good choice! You explore the steep mountainside and find a private nook where you relax and soak up the sun! Type replay to start again.` : `You go into the dungeon and leave the sunny skies behind you. Arm youself type sword, shield or wand.`))

    switch (mountainsQ2) {
        case 'sword':
            alert('You slaughter everything in your path. You find the crypts and are trapped. There is no escape.')
            break;
        case 'shield':
            alert('You survive but are unable to fight through the dungeon. You make it back home in one piece with a story of your journey.')
            break;
        case 'wand':
            alert('Magic wins! you get to the treasure room and teleport yourself and the treasure back home.')
            break;
            
        default:
            quest();
    }
    let mountainsQ3  = prompt('If you would like to try again, type retry.')
    if(mountainsQ3 == 'retry') {
        quest()
    }


}else{
    let desertQ1 = prompt(`I see you've chosen the desert. Them cactus can get nasty, better watch out. Would you rather explore the terrain, or go straight into the dungeon? Type 1 for explore or 2 for dungeon.`);

    let desertQ2 = prompt(( desertQ1==1 ? `Good choice! You explore the beach and find a private nook where you relax and soak up the sun! Type replay to start again.` : `You go into the dungeon and leave the sunny skies behind you. Arm youself type sword, shield or wand.`))

    switch (desertQ2) {
        case 'sword':
            alert('You fight your way into the treasure room but are  unable to escape. You wither away in riches.')
            break;
        case 'shield':
            alert('You survive but are unable to fight through the dungeon. You make it back home in one piece with a story of your journey.')
            break;
        case 'wand':
            alert('Magic wins! you get to the treasure room and teleport yourself and the treasure back home.')
            break;
            
        default:
            quest();
    }
    let desertQ3  = prompt('If you would like to try again, type retry.')
    if(desertQ3 == 'retry') {
        quest()
    }


}
}

quest()
