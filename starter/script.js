/*

let initialPrompt = prompt("Hello there, weary traveler. You look tired. Would you like to rest?")
if (initialPrompt("yes")) {
    alert('You should rest by the fire for a while')
} else if (initialPrompt("no")) {
    prompt('You are most brave!')
}

let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}


let text;
let favDrink = prompt("What's your favorite cocktail drink?");
switch(favDrink) {
  case "Coca-Cola":
    text = "Excellent choice! Coca-Cola is good for your soul.";
    break;
  case "Pepsi":
    text = "Pepsi is my favorite too!";
    break;
  case "Sprite":
    text = "Really? Are you sure the Sprite is your favorite?";
    break;
  default:
    text = "I have never heard of that one!";
}
*/

let glutton = () => {
let initialPrompt = ""

initialPrompt = prompt
(`Hello, weary traveller. Are you more (hungry) or (thirsty)?`)
    
switch(initialPrompt) {
    case "hungry":
        initialPrompt = prompt("Come to the fire, feast your eyes on our grilled meats and decide on either (turkey) or (ham)");
        break;
    case "thirsty":
        initialPrompt = prompt("Ahh we have the finest ales. Would you prefer (coors), (pabst) or (bud)?");
        break;
}

//console.log("After first prompt" + initialPrompt)

switch(initialPrompt) {
    case "turkey":    
        initialPrompt = prompt
            ("Ah, great choice. Would you like (white) or (dark) meat?")
                break;
    case "ham":
        initialPrompt = prompt
            ("Well I'll be, we're all out! Sorry, I guess it's just isn't your lucky day.") 
                    //end game
                break;
    case "coors":
        initialPrompt = prompt
            ("You're in luck! We have (bottles) and (draft)! How would you like your beer served?")
                break;
    case "pabst":
        initialPrompt = prompt
            ("Pabst comes in (12) or (8) ozs. How thirsty are ye?")
                break;
    case "bud":
        initialPrompt = prompt
            ("This was a terrible choice. Remove yourself from this tavern at once.") //end game
                break;
    }

switch(initialPrompt) {
    case "white":
        initialPrompt = prompt
        ("Well I'll be, we're all out! Sorry, I guess it's just isn't your lucky day.")
            break;
    case "dark":
        initialPrompt = prompt
        ("Well I'll be, we're all out! Sorry, I guess it's just isn't your lucky day.")
            break;
    case "bottles":
        initialPrompt = prompt
        ("Well I'll be, we're all out! Sorry, I guess it's just isn't your lucky day.")
            break;
    case "draft":
        initialPrompt = prompt
        ("Well I'll be, we're all out! Sorry, I guess it's just isn't your lucky day.")
            break;
    case "12":
        initialPrompt = prompt
        ("Well I'll be, we're all out! Sorry, I guess it's just isn't your lucky day.")
            break;
    case "8":
        initialPrompt = prompt
        ("Well I'll be, we're all out! Sorry, I guess it's just isn't your lucky day.")
            break;    
    }  
    const restart = confirm
    ("Would you like to play another round?")
        if (restart === true) {
            glutton()
    } 
}
 glutton();