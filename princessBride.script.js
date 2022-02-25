let saveButtercup = confirm('The love of your life has been kidnapped. Do you set sail and go after her?')

if(saveButtercup == true) {
    let setSailChoice = prompt('You\'re rapidly gaining on Buttercups captors, when all of a sudden you hear her screams coming from the waters. Do you: jump in the water to save her, keep sailing to get closer, or go home? (J/S/H)')

    if(setSailChoice === 'J' || setSailChoice === 'j') {
        alert("Loud shrieking noises start to grow louder around you. Then you are devoured by a swarm of Shrieking Eels. So much for that!")
    }else if(setSailChoice === 'S' || setSailChoice === 's') {
        alert("Smart choice! You wouldn't have made it anyways. One of Buttercups captors saves her just in the nick of time. You continue to gain on the captors ship.")
    }else if(setSailChoice === 'H' || setSailChoice === 'h') {
        alert("Some hero you are. The end!")
    }
}