const start = () => {
    let restaurantName = prompt('what restaurant type would you like ? 1- Seafood 2- Burgers 3- Tacos');
    switch (restaurantName) {
        case '1':
            seafood();
            break;
        case '2':
            burger();
            break;
        case '3':
            tacos();
            break;

        default:
            break;
    }
}
const seafood = () => {
   let seafoodP = document.createElement('p');
   seafoodP.innerText = 'Abdullah chose the seafood option, now it\'s time to choose from the menu.';
   let story = document.getElementById('story'); 
   story.appendChild(seafoodP);
   let button = document.createElement('button');
   button.innerHTML = 'open menu';
   button.addEventListener('click',()=> {
    
    let foodCh1 = prompt('what would you like 1-pan seared sea scallops, 2-lemon butter lobsters, or 3-red king crab.');
    let p2 = document.createElement('p');
    p2.innerText = 'Enjoy your meal !!'
    story.appendChild(p2);
    switch (foodCh1) {
        case 'seafood':
            seafood();
            break;
        case '1':
            p2
            break;
        case '2':
            p2
            break;

        default: '3';
            p2
            break;
    }
   })
   story.appendChild(button);
}
const burger = () => {
    let burgerP = document.createElement('p');
    burgerP.innerText = 'Abdullah chose the Burger option, now it\'s time to choose from the menu.';
    story.appendChild(burgerP);
    let buttonB = document.createElement('button');
    buttonB.innerHTML = 'open menu';
    buttonB.addEventListener('click',()=> {
let foodCh2 = prompt('what would you like 1-Classic Burger 2-Double Chease Burger 3-Swis Mushroom Burger');
switch (foodCh2) {
    case 'burger':
        burger();
        break;
    case '1':
        p2
        break;
    case '2':
        p2
        break;

    default: '3'
        p2
        break;
}
})}
const tacos = () => {
    let tacosP = document.createElement('p');
    tacosP.innerText = 'Abdullah chose the Tacos option, now it\'s time to choose from the menu.';
    story.appendChild(tacosP);
    let buttonT = document.createElement('button');
    buttonT.innerHTML = 'open menu';
    buttonT.addEventListener('click',()=> {
let foodCh2 = prompt('what would you like 1-Steak Tacos 2-Chicken Tacos 3-Pork Tacos');
switch (foodCh2) {
    case 'tacos':
        tacos();
        break;
    case '1':
        p2
        break;
    case '2':
        p2
        break;

    default: '3'
        p2
        break;
}
})}
