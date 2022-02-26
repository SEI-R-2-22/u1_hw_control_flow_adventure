const adventure = () => {

let name = prompt("Hello traveler, what is your name?")

alert(`Welcome ${name}, this is where your journey begins!`)

const packing = prompt("What would you like to pack for your journey? Type 'G'for greens, 'M' for meat, 'B' for bread ")

if (packing === "B") {
    alert("You chose bread, hopefully you don't get tired of bread!")
} else if (packing === "G") {
    alert("Lets pray your greens stay good!")
} else if ("packing === "M") {
    alert("Good choice, meat will keep you the fullest the longest!")
}


const snakeBite = prompt("Oh no! Someone in your caravan has bitten by a rattlesnake!! What do you want to do? 'H' for help by administering antidote although you dont have very many left, 'D' for don't help and keep going what ever happens happens, 'S' for suck out the venom and hopefully save the medicine because we have limited supply")   )

if (snakeBite === "H") {
    alert("You are a good person! You saved thier life and now they can help your caravan during your journey")
} else if (snakeBite === "D") {
    alert("Not the best decision, hopefully this does not come back to bite you in the butt")
} else if ("snakeBite === "S") {
    alert("Nice try but it did not seem to work")

}



const camp = prompt("You've been traveling for a while now, you should probaly stop and get some rest. How long do you want to sleep for? For 1 hour type '1', for 2 hours type '2'.")
if (parstint("1") === 1){
    alert("You slept for 1 hour!")
}else if (parseInt("2")) {
    alert("You slept for 2 hours!")

}

const river = prompt("You just came across a very turbulent river. What do you wan to do?? Type 'G' for go across, type 'F' for find another way")
switch (river) {
    case 'G':
        alert("Phew!, You crossed the river safely!")
        break;
    case 'F':
        alert("You followed the river down, and for a way across a less turbulent part of the river")
        break;
    default:
        alert("You decided to stay and camp for the night and figure it out in the morning")
    

}

let playAgain = prompt("Would you like to play again? Yes or NO")
if (playAgain === Yes) {
    adventure()
}


adventure()

