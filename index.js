//menu en rideau
const burgerButton = document.querySelector(".menu_toggler")
const leftMenu = document.querySelector(".left_menu")

const userButton = document.querySelector("#user_button")
const connexion = document.querySelector(".right_menu")

burgerButton.addEventListener("click", toggleMenu)
userButton.addEventListener("click", toggleUser)

function toggleMenu() {
    burgerButton.classList.toggle("active")
    leftMenu.classList.toggle("active")
}

function toggleUser() {
    connexion.classList.toggle("active")

    if (connexion.classList.contains("active")) {
    // Si la classe "active" est présente, la fonction exécute cette logique
        userButton.setAttribute("src", "./Icones/close.png");
    } else {
    // Sinon, le code exécute une logique différente
        userButton.setAttribute("src", "./Icones/user.png");
    }
}




  