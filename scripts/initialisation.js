const password = document.querySelector('#passwordInitialisation');
const errorMessage1 = document.querySelector('#passwordErrorMessage1');

const password2 = document.querySelector('#passwordInitialisation2');
const errorMessage2 = document.querySelector('#passwordErrorMessage2');

const submitButtonInitialisation = document.querySelector('#initialisationButton');
const checkbox = document.querySelector('#checkboxInitialisation');


        // Fonction pour valider le formulaire d'initialisation
function formulaireInitialisationValide() {
    const passwordValue = password.value.trim();
    const regexPassword = /^.*(?=.*[A-Za-z])(?=.*\d).{8,30}$/
    
    const passwordValue2 = password2.value.trim();

    
    // Validation du mot de passe principal (password)
    if (!regexPassword.test(passwordValue)) {
        errorMessage1.innerText = 'Le mot de passe doit contenir au moins 8 caractères dont un chiffre et une majuscule.';
    } else {
        errorMessage1.innerText = ''; //supprime le message
    }

    // Validation de la correspondance du mot de passe de confirmation (password2)
    if (passwordValue2.length > 0 && passwordValue !== passwordValue2) {
        errorMessage2.innerText = 'Les mots de passe ne correspondent pas.';
        initialisationButton.disabled = true; // Le bouton reste désactivé si la validation échoue
    } else {
        errorMessage2.innerText = ''; //idem
        initialisationButton.disabled = false; // Le bouton est activée si la validation réussit
    }
};
// Evénements pour la validation du formulaire
password.addEventListener('input', formulaireInitialisationValide);
password2.addEventListener('input', formulaireInitialisationValide);


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
checkbox.addEventListener('change', mDpVisible);
