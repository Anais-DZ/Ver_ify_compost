//menu en rideau
const burgerButton = document.querySelector(".menuToggler");
const leftMenu = document.querySelector(".leftMenu");
const userButton = document.querySelector("#userButton");
const connexion = document.querySelector(".rightMenu");

burgerButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
    toggleMenu();
});
userButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
    toggleUser();
});

document.addEventListener("click", (event) => {
    // Vérifie si le clic est à l'extérieur des menus et boutons
    if (!leftMenu.contains(event.target) && !burgerButton.contains(event.target)) {
        closeMenu();
    }

    if (!connexion.contains(event.target) && !userButton.contains(event.target)) {
        closeUser();
    }
});

function toggleMenu() {
    // Ferme le menu utilisateur si ouvert
    closeUser();

    // Basculer l'état du menu gauche
    burgerButton.classList.toggle("active");
    leftMenu.classList.toggle("active");
}

function toggleUser() {
    // Ferme le menu gauche si ouvert
    closeMenu();

    // Basculer l'état du menu utilisateur
    connexion.classList.toggle("active");

    if (connexion.classList.contains("active")) {
        // Si la classe "active" est présente
        userButton.setAttribute("src", "./Icones/close.png");
    } else {
        // Sinon
        userButton.setAttribute("src", "./Icones/user.png");
    }
}

function closeMenu() {
    burgerButton.classList.remove("active");
    leftMenu.classList.remove("active");
}

function closeUser() {
    connexion.classList.remove("active");
    userButton.setAttribute("src", "./Icones/user.png");
}
