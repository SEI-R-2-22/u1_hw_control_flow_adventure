// let valueOfPrompt = prompt()

// console.log(valueOfPro

// const begin = document.querySelector('#bgn')


bgn.addEventListener('click', () => {
    let player = prompt('What is your name?')
    console.log(player)
    alert(`Hello ${player} and welcome to The Mystical District of Columbia`)
    alert ('Your journey begins at the intersection of Georgia Ave and Florida Ave.')
    let compass = prompt('which direction would you like to begin your journey? (N,E,S,W)')
    console.log(compass)
    if (compass === 'N'){
        let north = Number.parseInt(prompt('How many miles will you walk in this mystical land before you stop?(NN)'))
        if (north < 5){
            let howard = prompt('Welcome to the magical Doward Academy an historically diverse academy, would you like to attend?(Y/N)')
            console.log(howard)
            if (howard === 'Y'){
                alert('Congratulatoins you attend Doward Academy for a few years and graduate a Grand Magician!')
            }
            if (howard === 'N'){
                alert('You were cancelled and are therefore dead')
            }
        } else if (north === 25){
            let alley = prompt('You have stumbled upon an corner store in the city, do you enter or cross through the alley?(E/C)') 
            if (alley === 'E'){
                alert('You meet an old man who teaches you all 4 of the elements, you must now save the world from the traitorous fire nation!')
            } else if (alley === 'C'){
                alert('You were robbed and killed, The End.')
            } else {
                alert('Well something went wrong, Bibbity bobbity bo back to the beginning for you!')
            }
        } else if (north >= 26){
            let portal = prompt("Looks like your a marathoner, fortunately you've stumbled upon a portal. Do you enter or cautiously throw something into the portal?(E/C)")
            if (portal === 'E'){
                alert('You appear on a hill in westeros and stumbled on the resurrection of Daenerys Targaryen, she forces you on her journey to reconquer westeros and reclaim her throne.')
            } else if (portal === 'C'){
                alert('Looks like your caution has payed off you throw a coin into the portal, and out comes the One Piece. Congratulations!!')
            } else {
                alert('Well something went wrong, Bibbity bobbity bo back to the beginning for you!')
            }
        } else  {
            alert('Well something went wrong, Bibbity bobbity bo back to the beginning for you!')
        }
    }
    if (compass === 'E') {
        let east = Number.parseInt(prompt('How many miles will you walk in this mystical land before you stop?(NN)'))
        if (east <= 26){
            let store = prompt('As you are taking your short walk you come across a computer store, do you enter or continue walking.(E/C)')
            if (store === 'E') {
                alert('The owner notices your presence and is randomly compulsed to gift you a brand new top of the line pc, you use this pc to trample the league casual scene achieving rank 1 challenget as an Illaoi 1 trick.')
            } else if (store === 'C') {
                alert("Thats a surprise well congrats you've ascended the mystical land!")
            }
        } else if (east >= 27){
            
        }
    }
    if (compass === 'S') {
        let south = Number.parseInt(prompt('How many miles will you walk in this mystical land before you stop?(NN)'))
        if (south <= 22) {
            let geass = prompt('Welcome to the down under, you wander south until you come across a woman who gives you the power of geass. You embark on a journey to free the people of the south from the Britannian empire, and you succeed what is your new name?')
            if (geass === lelouch) {
                alert('You succeed in your endeavor against the Holy Britannian empire and become the sole emporor of the new nation, surrounded by people who APPRECIATE your effort!')
            } else {
                alert('Your feeble attempt was stopped by the White death suzaku! (good try tho)')
            }
        } else { 
            alert("Unfortunaly as you're wandering you lose track of the gold brick road and are lost to the concrete forests of the Mystical city")
        }
    }
    if (compass === 'W') {
        console.log(compass)
        let west = Number.parseInt(prompt('Welcome to the WEST SIDEEEE! How many miles will you walk in this mystical land before you stop?(NN)'))
        if (west < 26){
            let old = prompt('You meet an old man who gives you the option between a sum of money or a box?(M/B)')
            if (old === 'M') {
                alert('You recieve 10 dollars')
            } else if (old === 'B') {
                alert('You recieve the light box, to your surprise it is a ticket to an all expenses paid vacation to the maldives with a guest of your choice!')
            } else {
                alert('Well something went wrong, Bibbity bobbity bo back to the beginning for you!')
            }
        } else if (west >= 27){
            alert("Unfortunaly as you're wandering you lose track of the gold brick road and are lost to the concrete forests of the Mystical city")
        }
    }
})

