// Récupération des éléments
const errorMessage = document.getElementById("error-message");
const submitButton = document.getElementById("submit-button");
const textarea = document.getElementById("message");
const charCountDisplay = document.getElementById("charCount");
const maxLength = textarea.getAttribute("maxlength");

// Écoute des changements dans le champ de message
textarea.addEventListener("input", function () {
    const message = textarea.value.trim();
// Mise à jour du nombre de caractères restants
    const remainingChars = maxLength - textarea.value.length;
    charCountDisplay.textContent = `${remainingChars} caractères restants`;

    // Validation de la longueur du message
    if (message.length < 5 || message.length > 500) {
        errorMessage.textContent = "Le message doit contenir entre 5 et 500 caractères.";
        submitButton.disabled = true; // Désactiver le bouton si la validation échoue
    } else {
        errorMessage.textContent = ""; // Effacer le message d'erreur
        submitButton.disabled = false; // Activer le bouton si la validation réussit
    }
});

// Empêcher l'envoi si les conditions ne sont pas remplies
document.getElementById("contact-form").addEventListener("submit", function (event) {
    const message = messageField.value.trim();
    if (message.value.length < 5 || message.value.length > 500) {
        errorMessage.textContent = "Le message doit contenir entre 5 et 500 caractères.";
        event.preventDefault(); // Bloquer l'envoi si le message n'est pas valide
    }
});



