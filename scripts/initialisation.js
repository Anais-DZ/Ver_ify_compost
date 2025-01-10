const password = document.querySelector("#passwordInitialisation");
const errorMessage1 = document.querySelector("#passwordErrorMessage1");

const password2 = document.querySelector("#passwordInitialisation2");
const errorMessage2 = document.querySelector("#passwordErrorMessage2");

const submitButtonInitialisation = document.querySelector("#initialisationButton");


        // Fonction pour valider le formulaire d'initialisation
function formulaireInitialisationValide() {
    const passwordValue = password.value.trim();
    const regexPassword = /^(?=.*[A-z])(?=.*[0-9])\S{8,30}$/
    
    const passwordValue2 = password2.value.trim();

    
    // Validation du mot de passe principal (password)
    if (!regexPassword.test(passwordValue)) {
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
password.addEventListener("input", formulaireInitialisationValide);
password2.addEventListener("input", formulaireInitialisationValide);