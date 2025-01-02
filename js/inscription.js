//supprimer les raccourcis du calendrier sur les autres pages autres que la page d'accueil
document.addEventListener('DOMContentLoaded', function() {
    // Récupération de l'élément du logo et du lien du calendrier
    const calendarElement = document.getElementById('calendar');
    const calendarLink = document.querySelector('a[href="#calendar-fonctionnality"]');

    // Vérification si la page actuelle est différente de l'index
    if (window.location.pathname !== '/index.html') {
        // Supprimer l'élément du logo et le lien
        if (calendarElement) {
            calendarElement.remove();
        }
        if (calendarLink) {
            calendarLink.remove();
        }
    }
});

// Fonction de validation du mot de passe principal
function isValidPassword(password) {
    const minLength = 8;
    const hasNumber = /\d/;
    const hasUppercase = /[A-Z]/;

    return password.length >= minLength && hasNumber.test(password) && hasUppercase.test(password);
}

// Gestion des événements sur les champs de mot de passe
document.getElementById("inscription-form").addEventListener("input", function () {
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

    // Validation de la correspondance du mot de passe de confirmation (password_3) seulement si l'utilisateur commence à entrer dedans
    if (password3.length > 0 && password2 !== password3) {
        errorMessage2.textContent = "Les mots de passe ne correspondent pas.";
        isPassword3Valid = false;
    } else if (password3 === "") {
        errorMessage2.textContent = ""; // Aucun message tant que l'utilisateur n'a pas commencé à saisir
        isPassword3Valid = false;
    } else {
        errorMessage2.textContent = ""; // Supprimer le message d'erreur
        isPassword3Valid = true;
    }

    // Activation/désactivation du bouton de soumission
    submitButton.disabled = !(isPassword2Valid && isPassword3Valid);
});

document.getElementById("toggle-password").addEventListener("click", function () {
    // Toggle password visibility for both fields
    togglePasswordVisibility("password_2");
    togglePasswordVisibility("password_3");
    
    // Update the event listener for password validation
    document.getElementById("inscription-form").dispatchEvent(new Event("input"));
});

function togglePasswordVisibility(passwordFieldId) {
    const passwordField = document.getElementById(passwordFieldId);
    const isPasswordVisible = passwordField.type === "text";
    
    // Bascule entre type "text" et "password"
    passwordField.type = isPasswordVisible ? "password" : "text";
    
    // Change l'icône ou le texte du bouton
    document.getElementById("toggle-password").textContent = isPasswordVisible ? "🙈" : "👁️";
}