// put code here!
const game = () => {
    alert("Welcome to Jurassic Park")
    let dinoChoice = prompt("What is your favorite dinosaur? (Tyrannosaurus, Velociraptor, Triceratops, Stegosaurus, Brachiosaurus)").toLowerCase()
    if (dinoChoice === "tyrannosaurus") {
        // DO THIS
        alert(`You went to the ${dinoChoice} hatchery`)
        let tourContinues = confirm("Would you like to stop here or move on?")
        if (tourContinues) {

            alert(`You went to the ${dinoChoice} paddock`)
            let lastDecision = confirm("Do you want to get a better view?")
            if (lastDecision) {
    
                alert(`Oh no! You were eaten by a ${dinoChoice}!`)
                let newG = confirm("Play again?")
                if (newG) {
                    game()
                }
                else {
                    alert("See you next time")
                }
            }
            else {
    
                alert(`You viewed the ${dinoChoice} from a safe distance and survived`)
            }
        } 
        else {
            
            alert("You stopped at the gift shop")
            let lastDecision = confirm("Play again?")
            if (lastDecision) {
    
                game()
            }
            else {
    
                alert("See you next time")
            }
        }
       
        
    }
    else if (dinoChoice === "velociraptor") {
        // DO THIS
        alert(`You went to the ${dinoChoice} hatchery`)
        let tourContinues = confirm("Would you like to stop here or move on?")
        if (tourContinues) {

            alert(`You went to the ${dinoChoice} paddock`)
            let lastDecision = confirm("Do you want to get a better view?")
            if (lastDecision) {
    
                alert(`Oh no! You were eaten by a ${dinoChoice}!`)
                let newG = confirm("Play again?")
                if (newG) {
                    game()
                }
                else {
                    alert("See you next time")
                }
            }
            else {
    
                alert(`You viewed the ${dinoChoice} from a safe distance and survived`)
            }
        } 
        else {
            
            alert("You stopped at the gift shop")
            let lastDecision = confirm("Play again?")
            if (lastDecision) {
    
                game()
            }
            else {
    
                alert("See you next time")
            }
        }
    }
    else if (dinoChoice === "triceratops") {
        // DO THIS
        alert(`You went to the ${dinoChoice} hatchery`)
        let tourContinues = confirm("Would you like to stop here or move on?")
        if (tourContinues) {

            alert(`You went to the ${dinoChoice} paddock`)
            let lastDecision = confirm("Do you want to get a better view?")
            if (lastDecision) {
    
                alert(`Oh no! You were gored by a ${dinoChoice}!`)
                let newG = confirm("Play again?")
                if (newG) {
                    game()
                }
                else {
                    alert("See you next time")
                }
            }
            else {
    
                alert(`You viewed the ${dinoChoice} from a safe distance and survived`)
            }
        } 
        else {
            
            alert("You stopped at the gift shop")
            let lastDecision = confirm("Play again?")
            if (lastDecision) {
    
                game()
            }
            else {
    
                alert("See you next time")
            }
        }
    }
    else if (dinoChoice === "stegosaurus") {
        // DO THIS
        alert(`You went to the ${dinoChoice} hatchery`)
        let tourContinues = confirm("Would you like to stop here or move on?")
        if (tourContinues) {

            alert(`You went to the ${dinoChoice} paddock`)
            let lastDecision = confirm("Do you want to get a better view?")
            if (lastDecision) {
    
                alert(`Oh no! You were trampled by a ${dinoChoice}!`)
                let newG = confirm("Play again?")
                if (newG) {
                    game()
                }
                else {
                    alert("See you next time")
                }
            }
            else {
    
                alert(`You viewed the ${dinoChoice} from a safe distance and survived`)
            }
        } 
        else {
            
            alert("You stopped at the gift shop")
            let lastDecision = confirm("Play again?")
            if (lastDecision) {
    
                game()
            }
            else {
    
                alert("See you next time")
            }
        }
    }
    else if (dinoChoice === "brachiosaurus") {
        // DO THIS
        alert(`You went to the ${dinoChoice} hatchery`)
        let tourContinues = confirm("Would you like to stop here or move on?")
        if (tourContinues) {

            alert(`You went to the ${dinoChoice} paddock`)
            let lastDecision = confirm("Do you want to get a better view?")
            if (lastDecision) {
    
                alert(`Wow, you got to ride a ${dinoChoice}!`)
                let newG = confirm("Play again?")
                if (newG) {
                    game()
                }
                else {
                    alert("See you next time")
                }
            }
            else {
    
                alert(`You viewed the ${dinoChoice} from a safe distance and survived`)
            }
        } 
        else {
            
            alert("You stopped at the gift shop")
            let lastDecision = confirm("Play again?")
            if (lastDecision) {
    
                game()
            }
            else {
    
                alert("See you next time")
            }
        }
    }
    else {
        alert("You didn't make a choice. Try again.")
        game()
    }

}

game()