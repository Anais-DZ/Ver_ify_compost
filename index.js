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




document.addEventListener("DOMContentLoaded", function() {
    const menuImage = document.querySelector('nav > img[title="Menu"]');
    const dropdownMenu = document.querySelector('.dropdown_menu');
    const overlay = document.getElementById('overlay');

    // Fonction pour afficher/masquer le menu et l'overlay
    menuImage.addEventListener('click', function() {
        const menu_visible = dropdownMenu.style.display === 'flex';

        if (menu_visible) {
            dropdownMenu.style.display = 'none';
            overlay.style.display = 'none'; // Masquer l'overlay
        } else {
            dropdownMenu.style.display = 'flex';
            overlay.style.display = 'block'; // Afficher l'overlay
        }
    });

    // Fermer le menu et l'overlay quand on clique sur l'overlay
    overlay.addEventListener('click', function() {
        dropdownMenu.style.display = 'none';
        overlay.style.display = 'none';
    });
});