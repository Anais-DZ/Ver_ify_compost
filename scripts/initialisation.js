const password = document.querySelector('.password');
const errorMessage1 = document.querySelector('.passwordErrorMessage1');

const password2 = document.querySelector('.password2');
const errorMessage2 = document.querySelector('.passwordErrorMessage2');

const submitButtonInitialisation = document.querySelector('.submitButton');



        // Fonction pour valider le formulaire d'initialisation
function formulaireInitialisationValide() {  
    // Validation du mot de passe principal (password)
    const passwordValue = password.value;
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,30}$/;
    const passwordValide = regexPassword.test(passwordValue)
    if (passwordValue.length > 0 && !passwordValide) {
        errorMessage1.innerText = 'Le mot de passe doit contenir au moins 8 caractères dont 1 chiffre, 1 lettre majuscule et 1 lettre minuscule.';
    } else {
        errorMessage1.innerText = ''; //supprime le message
    }

    // Validation de la correspondance du mot de passe de confirmation (password2)
    const passwordValue2 = password2.value;
    const password2Valide = passwordValue == passwordValue2
    if (passwordValue2.length > 0 && !password2Valide) {
        errorMessage2.innerText = 'Les mots de passe ne correspondent pas.';
        initialisationButton.disabled = true; // Le bouton reste désactivé si la validation échoue
    } else {
        errorMessage2.innerText = ''; //idem
        initialisationButton.disabled = false; // Le bouton est activée si la validation réussit
    }

    if (passwordValide && password2Valide) {
        initialisationButton.disabled = false; // Le bouton est activée si la validation réussit   
    } else {
        initialisationButton.disabled = true; // Le bouton reste désactivé si la validation échoue   
    }


};
// Evénements pour la validation du formulaire
password.addEventListener('keyup', formulaireInitialisationValide);
password2.addEventListener('keyup', formulaireInitialisationValide);

const checkbox = document.querySelector('.checkbox');
// Fonction pour afficher les mots de passe 
function mDpVisible() {
    if(checkbox.checked) {
        password.type = 'text';
        password2.type = 'text';
    } else {
        password.type = 'password';
        password2.type = 'password';
    };
};
checkbox.addEventListener('click', mDpVisible);
