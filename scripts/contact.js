// Récupération des éléments
const email = document.querySelector("#mail")
const errorEmail = document.querySelector("#mailErrorMessage");
const errorMessage = document.getElementById("errorMessage");
const submitButtonContact = document.getElementById("submitButtonContact");
const textareaMessage = document.getElementById("message");
const counter = document.getElementById("charCount");
const maxLength = textareaMessage.getAttribute("maxlength");




function messageValide() {
    const message = textareaMessage.value.trim();
    const emailValue = email.value;
    const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,30}$/;

// Mise à jour du nombre de caractères restants
    const charRestant = maxLength - textareaMessage.value.length;
    counter.innerText = `${charRestant} caractères restants`;

    if (!regexMail.test(emailValue)) {
        errorEmail.innerText = "L'adresse mail n'est pas valide";
    } else {
        errorEmail.innerText = "";
    }


    // Validation de la longueur du message
    if (message.length > 0 && message.length < 5) {
        errorMessage.innerText = "Le message doit contenir 5 caractères minimum.";
        submitButtonContact.disabled = true; // Désactiver le bouton si la validation échoue
    } else if (message.length == 500) {
        errorMessage.innerText = "Vous avez atteint le nombre de caractères maximum.";
        submitButtonContact.disabled = false; // Désactiver le bouton si la validation échoue
    } else {
        errorMessage.innerText = ""; // Effacer le message d'erreur
        submitButtonContact.disabled = false; // Activer le bouton si la validation réussit
    };
}

textareaMessage.addEventListener("input", messageValide);
email.addEventListener("input", messageValide);