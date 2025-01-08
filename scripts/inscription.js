function isValidPassword(password) {
    const minLength = 8;
    const number = /\d/;
    const majLetter = /[A-Z]/;

    return password.length >= minLength && number.test(password) && majLetter.test(password);
}

// Gestion des événements sur les champs de mot de passe
const passwordInput = document.getElementById("passwordInscription");
const passwordInput2 = document.getElementById("passwordInscription2");
const submitButtonInscription = document.getElementById("submitButtonInscription");
const errorMessage1 = document.getElementById("passwordErrorMessage1");
const errorMessage2 = document.getElementById("passwordErrorMessage2");

// Fonction pour valider les mots de passe
function validateForm() {
    const password = passwordInput.value.trim();
    const password2 = passwordInput2.value.trim();

    // Validation du mot de passe principal (password_2)
    if (!isValidPassword(password)) {
        errorMessage1.textContent = "Le mot de passe doit contenir au moins 8 caractères dont un chiffre et une majuscule.";
    } else {
        errorMessage1.textContent = "";
    }

    // Validation de la correspondance du mot de passe de confirmation (password_3)
    if (password2.length > 0 && password !== password2) {
        errorMessage2.textContent = "Les mots de passe ne correspondent pas.";
    } else {
        errorMessage2.textContent = "";
    }

    // Activer ou désactiver le bouton de soumission
    if (isValidPassword(password) && password === password2) {
        submitButtonInscription.disabled = false;
    } else {
        submitButtonInscription.disabled = true;
    }
}

// Ajout des gestionnaires d'événements pour la validation
passwordInput.addEventListener("input", validateForm);
passwordInput2.addEventListener("input", validateForm);

// Gestion de la visibilité des mots de passe
document.getElementById("togglePassword").addEventListener("click", function (event) {
    // Empêche la propagation de l'événement et évite les messages d'erreur
    event.preventDefault();
    event.stopPropagation();

    // Bascule la visibilité des mots de passe
    togglePasswordVisibility("passwordInscription");
    togglePasswordVisibility("passwordInscription2");
});

function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    const isPasswordVisible = passwordField.type === "text";

    // Bascule entre type "text" et "password"
    passwordField.type = isPasswordVisible ? "password" : "text";

    // Change l'icône ou le texte du bouton
    const toggleButton = document.getElementById("togglePassword");
    toggleButton.innerHTML = isPasswordVisible
        ? '<img src="./Icones/closed-eye.png" alt="oeil fermé pour cacher le mot de passe">'
        : '<img src="./Icones/opened-eye.png" alt="oeil ouvert pour montrer le mot de passe">';
};