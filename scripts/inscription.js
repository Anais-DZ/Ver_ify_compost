const identifiant = document.querySelector("#identifiant")
const errorIdentifiantMessage = document.querySelector("#identifiantErrorMessage");

const password = document.querySelector("#passwordInscription");
const errorMessage1 = document.querySelector("#passwordErrorMessage1");

const password2 = document.querySelector("#passwordInscription2");
const errorMessage2 = document.querySelector("#passwordErrorMessage2");

const submitButtonInscription = document.querySelector("#submitButtonInscription");


// Fonction pour valider le formulaire
function formulaireValide() {
    const passwordValue = password.value.trim();
    const regexPassword = /^(?=.*[A-z])(?=.*[0-9])\S{8,30}$/
    
    const passwordValue2 = password2.value.trim();

    const identifiantValue = identifiant.value.trim();
    const regexIdentifiant = /^[A-z0-9._-]{5,45}$/;

    // Validation de l'identifiant
    if (!regexIdentifiant.test(identifiantValue)) {
        errorIdentifiantMessage.textContent = "L'identifiant doit contenir au moins 5 caractères.";
    } else {
        errorIdentifiantMessage.textContent = "";
    }

    // Validation du mot de passe principal (password)
    if (passwordValue.length > 0 && !regexPassword.test(passwordValue)) {
        errorMessage1.textContent = "Le mot de passe doit contenir au moins 8 caractères dont un chiffre et une majuscule.";
    } else {
        errorMessage1.textContent = ""; //supprime le message
    }

    // Validation de la correspondance du mot de passe de confirmation (password2)
    if (passwordValue2.length > 0 && passwordValue !== passwordValue2) {
        errorMessage2.textContent = "Les mots de passe ne correspondent pas.";
    } else {
        errorMessage2.textContent = ""; //idem
    }
};

// Ajout des événements pour la validation du formulaire
identifiant.addEventListener("input", formulaireValide);
password.addEventListener("input", formulaireValide);
password2.addEventListener("input", formulaireValide);




// Gestion de la visibilité des mots de passe //! soucis avec l'image
// document.getElementById("togglePassword").addEventListener("click", (event) => {
//     // Empêche la propagation de l'événement et évite les messages d'erreur
//     event.preventDefault();
//     event.stopPropagation();

//     // Bascule la visibilité des mots de passe
//     togglePasswordVisibility("passwordInscription");
//     togglePasswordVisibility("passwordInscription2");
// });

// function togglePasswordVisibility(passwordFieldId) {
//     const passwordField = document.getElementById(passwordFieldId);
//     const PasswordVisible = passwordField.type === "text";

//     // Bascule entre type "text" et "password"
//     passwordField.type = PasswordVisible ? "password" : "text";

//     // Change l'icône ou le texte du bouton
//     const toggleButton = document.getElementById("togglePassword");
//     toggleButton.innerText = PasswordVisible
//         ? '<img src="./Icones/closed-eye.png" alt="oeil fermé pour cacher le mot de passe">'
//         : '<img src="./Icones/opened-eye.png" alt="oeil ouvert pour montrer le mot de passe">';
// };