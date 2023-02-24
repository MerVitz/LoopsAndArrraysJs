// How powerful  are for loops when combined to arrays?
// Remember to  Follow DRY;
// Dont Repeat Yourself
let message = [
    "Hey,how's it going",
    "I,m great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to here"
]
// instead of ;
// console.log(message[0])
// console.log(message[1])
// console.log(message[2])
// console.log(message[3])
// console.log(message[4])
// One can use for loop
for (let i = 0; i < 5; i+=1) {
    console.log(message[i])
}

