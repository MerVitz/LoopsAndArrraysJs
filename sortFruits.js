let fruit = ["Apple","Orange","Apple","Apple","Orange"]
let appleShelf = document.querySelector("#apple-shelf")
let orangeShelf = document.querySelector("#orange-shelf")

function sortApple () {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "Apple"){
        appleShelf.textContent += " Apple"
    } else if (fruit[i] === "Orange" ) {
        orangeShelf.textContent += " Orange"
    }
  }

}
sortApple()
