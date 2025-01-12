// Récupération des éléments du Dom
const nom = document.querySelector('#nameFirstname')
const errorNomMessage = document.querySelector('#nomErrorMessage');

const email = document.querySelector("#mail")
const errorEmail = document.querySelector("#mailErrorMessage");

const textareaMessage = document.querySelector("#message");
const errorMessage = document.querySelector("#errorMessage");

const submitButtonContact = document.querySelector("#submitButtonContact");

const compteur = document.querySelector("#charCount");
const nbreDeLettreMax = textareaMessage.getAttribute("maxlength");


            // Fonction pour valider le formulaire de contact
function messageValide() {

            // Validation du Prénom et Nom
    // const nomValue = nom.value;
    const nomValue = nom.value;
    const regexNom = /^(?=(.*[A-Za-z]){3,}).{3,25}$/;
    const nomValide = regexNom.test(nomValue);
    if (nomValue.length > 0 && !nomValide) {
        errorNomMessage.innerText = "Votre prénom/nom doit contenir au moins 3 caractères dont 3 lettres.";
    } else {
        errorNomMessage.innerText = "";
    } 

            // Validation de l'adresse mail
    const emailValue = email.value;
    const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,30}$/;
    const mailValide = regexMail.test(emailValue);
    if (emailValue.length > 0 && !mailValide) {
        errorEmail.innerText = "L'adresse mail n'est pas valide";
    } else {
        errorEmail.innerText = "";
    }
            // Mise à jour du nombre de caractères restants
    const message = textareaMessage.value;
    const charRestant = nbreDeLettreMax - message.length;
    compteur.innerText = `${charRestant} caractères restants`;

            // Validation de la longueur du message
    const minMessageValide = message.length > 5;
    const maxMessageValide = message.length <= 500;
    if (message.length > 0 && !minMessageValide) {
        errorMessage.innerText = "Le message doit contenir 5 caractères minimum.";
        
    } else if (!maxMessageValide) {
        errorMessage.innerText = "Vous avez atteint le nombre de caractères maximum.";
    } else {
        errorMessage.innerText = ""; // Effacer le message d'erreur  
    };

            // Activation du bouton
    if (nomValide && mailValide && minMessageValide && maxMessageValide) {
        submitButtonContact.disabled = false; // Activer le bouton si la validation réussit
    } else {
        submitButtonContact.disabled = true; 
        // Désactiver le bouton si la validation échoue
    }
}
nom.addEventListener("input", messageValide);
email.addEventListener("input", messageValide);
textareaMessage.addEventListener("input", messageValide);