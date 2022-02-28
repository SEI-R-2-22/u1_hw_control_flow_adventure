alert('Good morning! It is currently 10am. You must complete your task by noon.')

const startOver = () => { 
    alert('Good morning! It is currently 10am. You must complete your task by noon.');
    food();
}
const food = () => {
    let foodChoice = prompt('You\'re feeing pretty hungry. Would you like to eat 1) Premium Kibble 2) Half a bag of treats 3) Nothing, I\'m in a rush!')

    if (foodChoice === '1'){
        alert('Yum! You\'re on your way!');
        squirrel();
    } else if (foodChoice === '2'){
        confirm('Feels like a rock in your belly...maybe this wasn\'t such a good idea! I think you\'d better sleep this off. The dog treat cookbook will have to wait until next time! Start again?')
        startOver();
    } else if (foodChoice === '3'){
        alert('Did your stomach just growl or was that the poodle down the street? Ah, whatever you\'re in a rush! A few blocks later however you\'re starting to feel lightheaded!');
        treat();
    }
}

const squirrel = () => {
    let squirrelChoice = prompt('As you trot down the street you see...a squirrel!! Do you 1) chase! it looks suspicious! 2) let it get away...this time');

     if (squirrelChoice === '1'){
         alert('Wrong! It wasn\'t suspicious, just a regular old squirrel.');
         northsouth();
        } else if (squirrelChoice === '2'){
         alert('Good dog! Continue with the mission! Oh but what\'s that in the distance?');
         treat();
        }
}

const northsouth = () => {
    let northsouthChoice = prompt('And...uh-oh, which direction were you going in? 1) North 2) South 3) Follow your nose')
    
    if (northsouthChoice === '1') {
        confirm('Uh-oh...how did you end up back home already?? Ahh now you\'ll never make it in time! Start over?');
        startOver();
    } else if (northsouthChoice === '2') {
        alert('That\'s right! Almost there! Oh but what\'s that in the distance?');
        treat();
    } else if (northsouthChoice === '3') {
        confirm('Good choice! You are a dog afterall. Why would you rely on humanmade concepts like North and South? You made it to the bookstore in record time! Homemade treats for all!');
        startOver();
    }
}

const treat = () => {
    let treatAmount = prompt('Ah it\'s your favorite pet store that gives out the best (free!) treats! You go inside. How many treats do you want?')
    if (treatAmount == 2){
        alert('1 + 1 for the road. You HAVE been a good boy, after all. Continue on your journey.');
        hydrant();
    } else if (treatAmount > 2){
       confirm('Ugh....that\'s toooo manyyy treats! You feel sleepy from all the tryptophan. You take a nap in the nice warm sun and when you wake up...oh no the book is sold out! Start over?');
       startOver();
    } else { (treatAmount < 2)
        confirm('Good boy! Very thrifty. Continue on with your journey. And wow look at that! Due to your laser focus and refusal of gluttony, wrath, sloth, etc, you have made it to the book store on time! Homemade treats for all!');
       startOver();
    } 
}

const hydrant = () => {
    let hydrantChoice = prompt('Okay you\'re almost at the bookstore. You suddenly just realized....you really want to pee on that fire hydrant! And that fence post! And that stroller! I mean want! I mean need..? 1) Just the fire hydrant and keep going! 2) Get \'em all!!!')
    switch(hydrantChoice) {
        case '1':
        alert('Your inspiring show of self control has paid off! You made it to the bookstore in time! Homemade treats for all!')
        startOver();
        break;
        case '2':
        confirm('No no no, too many pee spots! You took too long and as you arrive to the bookstore you see that the very last copy has SOLD OUT!! Try again?')
        startOver();
        break;
    }
}

food();
squirrel();
northsouth();
treat();
