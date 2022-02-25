
let noColorExcuse;
let fColor;
let originalColor = document.querySelector('body').style.backgroundColor;
let fTitle = "";
let uJustify;
let cheerCount = 1;
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=100,top=100`;

open('/', 'test', params);


let patience = 0;
let loser = () =>{
    document.querySelector('body').innerHTML = ""

    if  (confirm("Your page is nuked. Press OK to play again")){
        location.reload();
    }else{
        alert("Fine Stay here. I don't care.")
    }
}
let checkPatience = () =>{
    if(patience > 2){
        alert("Fine, you lose.");
        loser();
    }
    return;
}
let cheer = () =>{
    for( i = 1; i < cheerCount ; i++){
        alert("HOORAY");
    }
}
let winner = () =>{

    if(cheerCount >100){
        alert("Mega Cheer Vibes. Congrats on starting your webpage. I wont make you click that much, cheer 11 times.")
        cheerCount = 11;
        cheer();
        return;
    }else
    if(cheerCount > 10){
        alert("Big Cheer Vibes. Congrats On starting your webpage.")
        cheer();
        return;
    }else {
        cheer();

    }

    if  (confirm(" Press OK to play again")){
        location.reload();
    }else{
        alert("You thought you had a choice.")
    }

}



if (confirm("WAKE UP!!! We need to get your website running!")){
    if(confirm("Did you choose a color for your website?")){
        alert("Great lets go");
        fColor = prompt("By the way, whats your favorite color?");
        if(typeof(fColor) !== 'string'){
            while(typeof(fColor) !== 'string'){
                fColor = prompt("erm... I asked for a color.");
                checkPatience();
                patience++;
            }
            
        }
        alert(`lets make ${fColor} your background!` );


        document.querySelector('body').style.backgroundColor = fColor;

        if( fColor == originalColor){
            alert("... well guess this color is cool"  );
            alert("NOT!!!! You Lose.");
            loser();
        }else{
            fTitle = prompt("One of my favorites. What do you want the Title to be?");
            
        }




    }else{
        noColorExcuse = prompt(`Why dont you pick a color?`);
        alert("I don't care, no color for you.")
        fTitle = prompt("How about a title?")

    }

}else{

    while(!confirm("You need to get up.")){
        patience++;
        checkPatience();
    }
}

if(fTitle === null || fTitle.length < 1){
    alert("houston, we have a problem, The user didnt choose a title");
    fTitle = "boring default title";

}
    document.querySelector('h1').innerText = fTitle;


choseAlign = false;
while(patience < 3 && !choseAlign){

    uJustify = prompt("Do we want your title to the left, center, or right");

    switch(uJustify){
        case 'left':
            document.querySelector('h1').style.textAlign = "left";
            choseAlign = true;
            break;
        case 'center':
            document.querySelector('h1').style.textAlign = "center";
            choseAlign = true;
            break;
        case 'right':
            document.querySelector('h1').style.textAlign = "right";
            choseAlign = true;
            break;
        default:
            alert("check your spelling next time");
            checkPatience();
            patience++;
            break;
    }

}

cheerCount = prompt("How many cheers to celebrate the start of page?");

winner();
//alert("skipped");







