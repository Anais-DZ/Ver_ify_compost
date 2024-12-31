// Fonction de validation du mot de passe principal
function isValidPassword(password) {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasUppercase = /[A-Z]/;

    return password.length >= minLength && hasNumber.test(password) && hasUppercase.test(password);
}

// Gestion des événements sur les champs de mot de passe
document.getElementById("inscription-form").addEventListener("keydown", function () {
    const password2 = document.getElementById("password_2").value.trim();
    const password3 = document.getElementById("password_3").value.trim();
    const submitButton = document.getElementById("submit-btn");
    const errorMessage1 = document.getElementById("password-error-message-1");
    const errorMessage2 = document.getElementById("password-error-message-2");

    // Réinitialisation des messages d'erreur
    errorMessage1.textContent = "";
    errorMessage2.textContent = "";

    let isPassword2Valid = false;
    let isPassword3Valid = false;

    // Validation du mot de passe principal (password_2)
    if (!isValidPassword(password2)) {
        errorMessage1.textContent = "Le mot de passe doit contenir au moins 8 caractères, un chiffre et une majuscule.";
        isPassword2Valid = false;
    } else {
        errorMessage1.textContent = ""; // Supprimer le message d'erreur
        isPassword2Valid = true;
    }

     // Validation de la correspondance des mots de passe
     if (password3.length > 0 && password2 !== password3) { // Validation uniquement si l'utilisateur écrit dans password_3
        errorMessage2.textContent = "Les mots de passe ne correspondent pas.";
        isValid = false;
    } else {
        errorMessage2.textContent = ""; // Supprimer le message d'erreur
        isPassword3Valid = true;
    }

    // Activation/désactivation du bouton de soumission
    submitButton.disabled = !isPassword3Valid;
});







