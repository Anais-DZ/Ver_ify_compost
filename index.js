document.addEventListener("DOMContentLoaded", function () { /* permet d'afficher une slide */
    const slides = document.querySelectorAll(".carousel_inner .slide");
    const prevButton = document.querySelector(".carousel_control.prev");
    const nextButton = document.querySelector(".carousel_control.next");
    const totalSlides = slides.length;

    let currentIndex = 0; // Index de la slide actuellement affichée

    // Fonction pour mettre à jour l'affichage des slides
    function updateSlides() {
        slides.forEach((slide, index) => {
            // Active ou désactive l'affichage des slides
            if (index === currentIndex) {
                slide.style.display = "block"; // Affiche la slide actuelle
            } else {
                slide.style.display = "none"; // Cache les autres slides
            }
        });
    }

    // Événement pour le bouton "Précédent"
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Retourne au dernier élément si on dépasse
        updateSlides();
    });

    // Événement pour le bouton "Suivant"
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalSlides; // Retourne au premier élément si on dépasse
        updateSlides();
    });

    // Initialisation : afficher la première slide
    updateSlides();
});



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




  