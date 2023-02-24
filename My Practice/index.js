const player = "Mervitz"
const opponent = "Achie"
const ggame = "The katti"

let points = 0
let haswon = false

//Playing th game
points += 100
haswon = true
if (haswon) {
    // Below is the template 
    console.log(`${player} got ${points} points and won the  ${ggame} game!`)
} else{// No template below
    console.log("The winner is " + opponent + "! " + player + "lost the game")
}
 