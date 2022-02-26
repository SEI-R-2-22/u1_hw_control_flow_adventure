const readyForAdventure = confirm('Ready for an adventure?');

if(readyForAdventure == true);{
    let characterSelect = prompt('Choose your character: Dean, Hank, Brock')

if (characterSelect == 'Dean') {
    let deanVentureBegin = prompt('You chose some brain over brawn. Will you get far? Y/N')
    if (deanVentureBegin == 'Y') {
        let deanFirstChoice = prompt('The world is your oyster Dean. Pick your mode of transport: Boat, Plane, Car')
        if (deanFirstChoice == 'Boat') {
            console.log('X2')
        }
        else if (deanFirstChoice == 'Plane') {
            console.log('X1')
        }
        else if (deanFirstChoice == 'Car') {
            console.log('Adrianne')
        }
    }else if (deanVentureBegin == 'N') {
            alert('Some lame adventure that was, Dean.')
        }
}
else if (characterSelect == 'Hank') {
    let hankVenutreBegin = prompt('A daring young man. But will you get far? Y/N')
    if (hankVenutreBegin == 'Y') {
        console.log('Y')
    }else if (hankVenutreBegin == 'N') {
            alert('You tell H.E.L.P.eR. to make you a sandwhich. But fall asleep before he\'s done')
        }
}
else if (characterSelect == 'Brock'){
    let brockSamsonBegin = prompt('A one-half Swedish, one-quarter Polish, one-quarter Winnebago "murder machine". But will you get far? Y/N')
    if (brockSamsonBegin == 'Y') {
        console.log('Y')
    }else if (brockSamsonBegin == 'N') {
            alert('Has the mighty Brock Sampson gone soft?')
        }
}
}