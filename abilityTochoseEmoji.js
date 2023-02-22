
// The ability to choose an emoji
const welcomeEl = document.querySelector("#welcome-el")
function greetUser (greeting,name) {
    
    welcomeEl.textContent = `${greeting}, ${name}`
}
 greetUser("Hola, buenos dias", "Mervitz")
