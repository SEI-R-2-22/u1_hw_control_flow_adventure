const readyForAdventure = confirm('Ready for an adventure?');

if(readyForAdventure == true);{
    let characterSelect = prompt('Choose your character: Dean, Hank, Brock')

if (characterSelect == 'Dean') {
    let deanVentureBegin = prompt('You chose some brain over brawn. Will you get far? Y/N')
    if (deanVentureBegin == 'Y') {
        console.log('Y')
    }    else if (deanVentureBegin == 'N') {
            console.log('N')
        }
}
else if (characterSelect == 'Hank') {
    let hankVenutreBegin = prompt('A daring young man. But will you get far? Y/N')
    if (hankVenutreBegin == 'Y') {
        console.log('Y')
    }    else if (hankVenutreBegin == 'N') {
            console.log('N')
        }
}
else if (characterSelect == 'Brock'){
    let brockSamsonBegin = prompt('A one-half Swedish, one-quarter Polish, one-quarter Winnebago "murder machine". But will you get far? Y/N')
    if (brockSamsonBegin == 'Y') {
        console.log('Y')
    }    else if (brockSamsonBegin == 'N') {
            console.log('N')
        }
}
}