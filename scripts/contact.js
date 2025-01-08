// Récupération des éléments
const errorMessage = document.getElementById("errorMessage");
const submitButtonContact = document.getElementById("submitButtonContact");
const textareaMessage = document.getElementById("message");
const counter = document.getElementById("charCount");
const maxLength = textareaMessage.getAttribute("maxlength");




function messageValide() {
    const message = textareaMessage.value.trim();
// Mise à jour du nombre de caractères restants
    const charRestant = maxLength - textareaMessage.value.length;
    counter.textContent = `${charRestant} caractères restants`;

    // Validation de la longueur du message
    if (message.length < 5) {
        errorMessage.textContent = "Le message doit contenir 5 caractères minimum.";
        submitButtonContact.disabled = true; // Désactiver le bouton si la validation échoue
    } else if (message.length == 500) {
        errorMessage.textContent = "Vous avez atteint le nombre de caractères maximum.";
        submitButtonContact.disabled = false; // Désactiver le bouton si la validation échoue
    } else {
        errorMessage.textContent = ""; // Effacer le message d'erreur
        submitButtonContact.disabled = false; // Activer le bouton si la validation réussit
    }
};

textareaMessage.addEventListener("input", messageValide);