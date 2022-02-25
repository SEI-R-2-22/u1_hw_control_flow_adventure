function adventure(x, y, z) {
    alert("You have picked up your trusty " + x + " and ran headlong into the battle in the " + y + ".\n You swung the tide of the skirmish!\n Sit down at the tavern and enjoy a nice, cold glass of " + z + "!");
}


function beverage(x, y) {

    let last_choice = prompt("Lastly, what is your favorite drink?\nBeer  Wine  Milk?");

    switch(last_choice.toLowerCase()) {

        case "beer":
            adventure(x, y, last_choice.toLowerCase());
            break;

        case "wine":
            adventure(x, y, last_choice.toLowerCase());
            break;

        case "milk":
            adventure(x, y, last_choice.toLowerCase());
            break;
        
        default:
            alert("Try again!");
            main();
    }
}


function weapon_use(x) {

    locaArr = ["dungeon", "castle", "fort"]

    let choice = prompt("Do you want to 1.) Delve dungeons 2.) Attack a castle  3.) Fight a fort\nPlease choosee the number associated.");
    let choice_int = parseInt(choice);

    switch(choice_int) {

        case 1:
            beverage(x, locaArr[0]);
            break;

        case 2:
            beverage(x, locaArr[1]);
            break;


        case 3:
            beverage(x, locaArr[2]);
            break;


        default:
            alert("Try again!");
            main();
    }   


}


function main() {

    

    let weapon = prompt("You are an adventurer. Choose your weapon!\nSword   Mace  Spear ");
        
    switch(weapon.toLowerCase()) {
        case "sword":
            weapon_use(weapon.toLowerCase());
            break;

        case "mace":
            weapon_use(weapon.toLowerCase());
            break;

        case "spear":
            weapon_use(weapon.toLowerCase());
            break;

        default:
            alert("Try again!");
            main();

    }
    let again = confirm("Would you like to try again?");
    if (again === true) {
        main();

    } else {
        return;
    }

       
    
}


main()
