const welcomeEl = document.querySelector("#welcome-el")



///                  Parameters -----> Are in the function   
function greetUser (greeting,name) {
    //This is abetter way to reduce th clunkyness of the work
    // Clean code...
    welcomeEl.textContent = `${greeting}, ${name}`
}

//                 Arguments ---->is in the outside of the function
 greetUse
 ////        Paarmeters 
function add(num1, num2) {
    return num1 + num2
}
//           Arguments
console.log( add(3,4))
console.log( add(9,102))