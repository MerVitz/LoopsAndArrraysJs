let hands = ["Rock", "Papper", "Scissor"]

function onHand () {

 let itemNo= Math.floor (Math.random() * 3)
  return hands[itemNo]
}
console.log (onHand())