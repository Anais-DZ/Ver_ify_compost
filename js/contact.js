// Récupération des éléments
const errorMessage = document.getElementById("error-message");
const submitButton = document.getElementById("submit-button");
const textarea = document.getElementById("message");
const charCountDisplay = document.getElementById("charCount");
const maxLength = textarea.getAttribute("maxlength");

// Écoute des changements dans textarea
textarea.addEventListener("input", function () {
    const message = textarea.value.trim();
// Mise à jour du nombre de caractères restants
    const remainingChars = maxLength - textarea.value.length;
    charCountDisplay.textContent = `${remainingChars} caractères restants`;

    // Validation de la longueur du message
    if (message.length < 5) {
        errorMessage.textContent = "Le message doit contenir 5 caractères minimum.";
        submitButton.disabled = true; // Désactiver le bouton si la validation échoue
    } else if (message.length == 500) {
        errorMessage.textContent = "Vous avez atteint le nombre de caractères maximum.";
        submitButton.disabled = false; // Désactiver le bouton si la validation échoue
    } else {
        errorMessage.textContent = ""; // Effacer le message d'erreur
        submitButton.disabled = false; // Activer le bouton si la validation réussit
    }
});


//supprimer les raccourcis du calendrier sur les autres pages autres que la page d'accueil
document.addEventListener('DOMContentLoaded', function() {
    // Récupération de l'élément du logo et du lien du calendrier
    const calendarElement = document.getElementById('calendar');
    const calendarLink = document.querySelector('a[href="#calendar-fonctionnality"]');

    // Vérification si la page actuelle n'est pas index.html
    if (window.location.pathname !== '/index.html') {
        // Supprimer l'élément du logo et le lien
        if (calendarElement) {
            calendarElement.style.display = 'none'; // Cachons simplement l'élément
        }
        if (calendarLink) {
            calendarLink.style.display = 'none'; // Cachons le lien
        }
    }
});