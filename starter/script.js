const game = () => {
let welcomeAndName = prompt(`Welcome, brave one, to your first trial. What is your name?`)
let newName = welcomeAndName + `ules`
let headChoose = parseInt(prompt(`Hence forth, you will be known as ${newName}! Do you prefer monsters with 2, 3, or 9 heads?`))

switch (headChoose) {
    case 2:
    let weapon2 = prompt(`Then your trial is to bring me the cattle of the monster Geryon. Which weapon will you choose: the Club, or Spear? `)
    const case2 = () => {
        if (weapon2 == `club`) {
            alert(`Geryon's cattle is guarded by the two-headed dog Orthus. You approach with your club, and yell "FETCH" as you hurl it towards the monster. The two heads try to wrestle the club from each other as you make off with the cattle. `)
        }
        else if (weapon2 == `spear`) {
            alert(`Geryon's cattle is guarded by the two-headed dog Orthus. You approach with your spear, but the monster's two jaws snap the spear in half. You won't be leaving with any cattle, just splinters and bite marks. `)
        }
        else {
            weapon2 = prompt(`Did you say club or spear? I can only hear one word, and only in lowercase!`)
            case2()    
        }
        }
        case2()
    break;

    case 3:
    let weapon3 = prompt(`Then your trial is to bring Cerberus up to the land of the living. Which item will you choose: the javelin, the potion, or the bow?`)
    const case3 = () => {
        if (weapon3 == `javelin`) {
            alert(`You sneak up to Cerberus while Hades is busy denying the Elysium transfer forms. You hurl the javelin, but you don't know your own strength, and it hurtles into asphodel, with Cerberus chasing behind it. He won't be coming back any time soon.`)
        }
        else if (weapon3 == `bow`) {
            alert(`You make your way to the underworld and see Cerberus asleep, and Hades is nowhere to be seen. You draw your bow, but all of a sudden *SNAP*. The heat must've dried it out too much. That snap was enough to wake up the dead, and everything else down here.`)
        }
        else if (weapon3 == `potion`){
            alert(`You hide outside the doors of Hades' throne room, and you hear the sleeping guardian inside. You uncork the potion, ready to drink, but the smell of Hind jerky almost knocks you over. In the next moment, you can hear Cerberus bounding towards you. That's one way to get a dog moving.`)
        }
        else {
            weapon3 = prompt(`Did you say javelin, potion, or bow? I can only hear one word, and only in lowercase!`)
            case3()
        }
    }
        case3()
    break;
    case 9:
    let weapon9 = prompt(`Then your trial is to defeat me the dreaded Hydra. Which weapon will you choose: the torch, or the sword? `)
    const case9 = () => {
        if (weapon9 == `torch`) {
            alert(`You make your way through the dark eerie swamo, and decide to take a rest before fighting the Hydra, laying your torch down on a log. You're just starting to get relaxed when you smell smoke behind you. You turn around to see your torch set the whole swamp ablaze. Moments later, the Hydra is flying past you, as its cave caught fire. Forced relocation should count as defeat.`)
        }
        else if (weapon9 == `sword`) {
            alert(`You wade through the foul-smelling swamp to entrance of the Hydra's lair. You hear the beast slithering around inside, and unsheath your sword. Your take one look and realize that the fog has turned your sword into a rusted piece of junk. There will be no hydra-slaying with that.`)
        }
        else {
            weapon9 = prompt(`Did you say torch or sword? I can only hear one word, and only in lowercase!`)
            case9()    
        }
        }
        case9()
    break;
    

}
let replay = confirm(`Would you like to replay?`)
if (replay === true){
    game()
}
}
game()

