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

function closeMenu() {
    burgerButton.classList.remove("active");
    leftMenu.classList.remove("active");
}

function closeUser() {
    connexion.classList.remove("active");
    userButton.setAttribute("src", "./Icones/user.png");
}

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



// Sélectionne tous les inputs et les textarea avec un attribut placeholder
const inputs = document.querySelectorAll("input[placeholder]");
const textareas = document.querySelectorAll("textarea[placeholder]");

inputs.forEach((input) => { // A chaque input trouvé dans le code, la fonction suivante lui sera appliquée

    const initialPlaceholder = input.placeholder;

    input.addEventListener("focus", () => {
        input.placeholder = ""; // le focus "supprime" le plaholder
    });

    input.addEventListener("blur", () => { // blur = quand on clique en dehors de l'input
        input.placeholder = initialPlaceholder; //initialPlaceholder permet de "stocker" le placeholder. Par exemple si le placeholder est "mot de passe", initialPlaceholder sera "mot de passe"
    });
});

// Même fonctionnement que la fonction précédente mais avec les textaera du code
textareas.forEach((textarea) => {
    const initialPlaceholder = textarea.placeholder;

    textarea.addEventListener("focus", () => {
        textareas.placeholder = "";
    });

    textarea.addEventListener("blur", () => { // blur = quand on clique en dehors de l'input
        textarea.placeholder = initialPlaceholder;
    });
});


