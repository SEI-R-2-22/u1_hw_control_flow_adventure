
// const game = () => {
let startGame = confirm(`Would you like to start a match?`);
alert(`Match Found! Please select an agent.`);
// let agentType = prompt(`What agent type would you like? You can choose from 'duelist', 'sentinel', 'controller', or initiator.`);
// alert(`You have chosen ${agentType}!`);
// if (agentType === 'duelist') {
//     prompt(`Would you like to play 'Jett' or 'Reyna'?`)
// } else if (agentType === 'sentinal') {
//     prompt(`Would you like to play 'Killjoy' and 'Cypher'?`)
// } else if (agentType === 'initiator') {
//     prompt(`Would you like to play 'Skye' or 'Sova'?`)
// } else if (agentType === 'controller') {
//     prompt(`Would you like to play 'Viper' or 'Astra'?`)
//}

let agentType = prompt(`What agent type would you like? You can choose from 'duelist', 'sentinel', 'controller', or 'initiator'.`)
switch (agentType) {
    case 'duelist':
        prompt(`Would you like to play 'Jett' or 'Reyna'`)
        break;
    case 'sentinel':
        prompt(`Would you like to play 'KillJoy' or 'Cypher'?`)
        break;
    case 'initiator':
        prompt(`Would you like to play 'Skye' or 'Sova'?`)
        break;
    case 'controller':
        prompt(`Would you like to play 'Viper' or 'Astra'?`)
        break;
}