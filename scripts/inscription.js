function ValidPassword(password) {
    const minLength = 8;
    const number = /\d/;
    const majLetter = /[A-Z]/;

    return password.length >= minLength && number.test(password) && majLetter.test(password);
}

// Gestion des événements sur les champs de mot de passe
const identifiant = document.querySelector("#identifiant")
const errorIdentifiantMessage = document.querySelector("#identifiantErrorMessage");
const passwordInput = document.querySelector("#passwordInscription");
const passwordInput2 = document.querySelector("#passwordInscription2");
const submitButtonInscription = document.querySelector("#submitButtonInscription");
const errorMessage1 = document.querySelector("#passwordErrorMessage1");
const errorMessage2 = document.querySelector("#passwordErrorMessage2");


// Fonction pour valider les mots de passe
function formulaireValide() {
    const password = passwordInput.value.trim();
    const password2 = passwordInput2.value.trim();
    const identifiantValue = identifiant.value;
    const regexMail = /[a-z0-9._-]{5,15}$/;

    // Validation de l'identifiant
    if (!regexMail.test(identifiantValue)) {
        errorIdentifiantMessage.textContent = "L'identifiant doit contenir au moins 5 caractères.";
    } else {
        errorIdentifiantMessage.textContent = "";
    }

    // Validation du mot de passe principal (password)
    if (!ValidPassword(password)) {
        errorMessage1.textContent = "Le mot de passe doit contenir au moins 8 caractères dont un chiffre et une majuscule.";
    } else {
        errorMessage1.textContent = ""; //supprime le message
    }

    // Validation de la correspondance du mot de passe de confirmation (password2)
    if (password2.length > 0 && password !== password2) {
        errorMessage2.textContent = "Les mots de passe ne correspondent pas.";
    } else {
        errorMessage2.textContent = ""; //idem
    }
};

// Ajout d'événements pour la validation des mots de passe
identifiant.addEventListener("input", formulaireValide);
passwordInput.addEventListener("input", formulaireValide);
passwordInput2.addEventListener("input", formulaireValide);




// Gestion de la visibilité des mots de passe
document.getElementById("togglePassword").addEventListener("click", (event) => {
    // Empêche la propagation de l'événement et évite les messages d'erreur
    event.preventDefault();
    event.stopPropagation();

    // Bascule la visibilité des mots de passe
    togglePasswordVisibility("passwordInscription");
    togglePasswordVisibility("passwordInscription2");
});

function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    const PasswordVisible = passwordField.type === "text";

    // Bascule entre type "text" et "password"
    passwordField.type = PasswordVisible ? "password" : "text";

    // Change l'icône ou le texte du bouton
    const toggleButton = document.getElementById("togglePassword");
    toggleButton.innerText = PasswordVisible
        ? '<img src="./Icones/closed-eye.png" alt="oeil fermé pour cacher le mot de passe">'
        : '<img src="./Icones/opened-eye.png" alt="oeil ouvert pour montrer le mot de passe">';
};