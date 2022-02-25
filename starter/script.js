
const oregonTrailGame = () => {
    const playerName = prompt("What is your name")
    alert(`Welcome ${playerName}, you have traveled a long way to get to Oregon City and you are almost there. Make choices to get there safely`)
    
    const hunger = prompt(
        "You are hungry and out of food, do you want to go hunting for wild game?")
            if(hunger === "y"){
            const food = prompt("You found tracks for what seem to be a deer and a boar, which would you want to hunt? (y/n)" )
                if(food ==="deer")
                    alert("You have sucessfully hunted the deer and continue your journy safely to Oregon City")
                else if(food ==="boar")
                    alert("You hunt and cook the boar, unfortunately you got food poisoning and die of dissentary death")
                    return
            }
            else if(hunger === "n"){
                alert("You decide to continue your journey in hopes of finding something else to eat.")}
let crick = ""                
    let direction = prompt("You continue your trip intead of stopping to hunt in hope you'll find somewhere to eat, do you continue west or go north? (N/W)")
        if(direction === "n"){
            alert("You see a farm on the way and stop to ask for some food, they offer you a room for the night and you accept. After seeing their lifestyle and learn to appreciate a simple living, they offer their child's hand to you in marriage and you accept. Congradulations on your marriage!")
            if(direction === "w"){
                crick = prompt("You head West! While you are nearly to Oregon City, you hear a creak you think it might be nice to set up camp there for the night. Would you like to set up camp at the creek? (y/n)") 
            }
                if(crick === y){
                    alert("You set up camp for the night sleep hungry. When you wake up you go down to the crick to try and fish for some food. While watching the crick for fish you notice something shiny in the water. Upon futher inspection its a gold deposite! You're rich and you'll never be hungry again!")
                }
                if(crick === n){
                    alert("You travel through the night to Oregon City")
                }
    }
    let finalChoice = prompt("You arrive to Oregon City in the morning do you come here in search of: fame, money, or love? (f/m/l)")
        switch(finalChoice){
            case "f":
                alert("You become a very popular acrobat and after a few short years open your own show where you perform nightly. Your show becomes the most popular in the pacific north-west.")
                break;
            case "m":
                alert("After a couple of weeks struggling to find a job, you recieve an opporunity to manage a bank. You use this opporunity to kick of a very succesful investment firm of a few years  ")    
                break;
            case "l":
                alert("You pickup a job with a small business and spend your spare time networking. Early on in the job you and one of your co-workers get close and decide to date for several years before getting married. You two have 5 kids and have a modest retirement. Happily ever after.")       
                break;
        }
}

const replay = () => {
    let playAgain= prompt("Would you like to play again? (y/n)")
        if(playAgain==="y"){
            oregonTrailGame() 
        }
        else{
            return
        }   
}
oregonTrailGame();
replay()
