function isValidPassword(password) {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasUppercase = /[A-Z]/;

    return password.length >= minLength && hasNumber.test(password) && hasUppercase.test(password);
}

// Gestion des événements sur les champs de mot de passe
const password2Input = document.getElementById("password_2");
const password3Input = document.getElementById("password_3");
const submitButton = document.getElementById("submit-btn");
const errorMessage1 = document.getElementById("password-error-message-1");
const errorMessage2 = document.getElementById("password-error-message-2");

// Fonction pour valider les mots de passe
function validateForm() {
    const password2 = password2Input.value.trim();
    const password3 = password3Input.value.trim();

    // Validation du mot de passe principal (password_2)
    if (!isValidPassword(password2)) {
        errorMessage1.textContent = "Le mot de passe doit contenir au moins 8 caractères dont un chiffre et une majuscule.";
    } else {
        errorMessage1.textContent = "";
    }

    // Validation de la correspondance du mot de passe de confirmation (password_3)
    if (password3.length > 0 && password2 !== password3) {
        errorMessage2.textContent = "Les mots de passe ne correspondent pas.";
    } else {
        errorMessage2.textContent = "";
    }

    // Activer ou désactiver le bouton de soumission
    if (isValidPassword(password2) && password2 === password3) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Ajout des gestionnaires d'événements pour la validation
password2Input.addEventListener("input", validateForm);
password3Input.addEventListener("input", validateForm);

// Gestion de la visibilité des mots de passe
document.getElementById("toggle-password").addEventListener("click", function (event) {
    // Empêche la propagation de l'événement et évite les messages d'erreur
    event.preventDefault();
    event.stopPropagation();

    // Bascule la visibilité des mots de passe
    togglePasswordVisibility("password_2");
    togglePasswordVisibility("password_3");
});

function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    const isPasswordVisible = passwordField.type === "text";

    // Bascule entre type "text" et "password"
    passwordField.type = isPasswordVisible ? "password" : "text";

    // Change l'icône ou le texte du bouton
    const toggleButton = document.getElementById("toggle-password");
    toggleButton.innerHTML = isPasswordVisible
        ? '<img src="./Icones/closed-eye.png" alt="oeil fermé pour cacher le mot de passe">'
        : '<img src="./Icones/opened-eye.png" alt="oeil ouvert pour montrer le mot de passe">';
}