//let sentence = ["Hello ","my ","name ","is ","Mervitz"]
//Or
//let sentence = ["Hello"," ","my"," ","name"," ","is"," ","Mervitz"]
//Or
let sentence = ["Hello","my","name","is","Mervitz"]
let greetin = document.getElementById("greet")


for (let i = 0; i < sentence.length; i++) {
//Or use this for creating space
greetin.textContent += sentence[i] + " "


}