const welcomeEl = document.querySelector("#welcome-el")

// Give a function a parameter , greetng, that replaces "Welcome back"

function greetUser (greeting,name) {
    welcomeEl.textContent = greeting + ", " +  name
}
 greetUser("Hola, buenos dias, ", " Amakalu Vitalis")
