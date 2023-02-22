const welcomeEl = document.querySelector("#welcome-el")
function greetUser (greeting,name) {
    //This is abetter way to reduce th clunkyness of the work
    // Clean code...
    welcomeEl.textContent = `${greeting}, ${name}`
}
 greetUser("Hola, buenos dias", "Mervitz")
