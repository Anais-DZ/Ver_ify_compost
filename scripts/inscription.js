// Récupération des éléments du DOM nécessaire pour les fonctions
const identifiant = document.querySelector('#identifiant')
const errorIdentifiantMessage = document.querySelector('#identifiantErrorMessage');

const password = document.querySelector('#passwordInscription');
const errorMessage1 = document.querySelector('#passwordErrorMessage1');

const password2 = document.querySelector('#passwordInscription2');
const errorMessage2 = document.querySelector('#passwordErrorMessage2');

const submitButtonInscription = document.querySelector('#submitButtonInscription');
const checkboxInscription = document.querySelector('#checkboxInscription');


// Fonction pour valider le formulaire
function formulaireValide() {
    const passwordValue = password.value.trim(); // trim permet de supprimer les espaces avant/après
    const regexPassword = /^(?=.*[A-z])(?=.*[0-9])\S{8,30}$/
    
    const passwordValue2 = password2.value.trim();

    const identifiantValue = identifiant.value.trim();
    const regexIdentifiant = /^[A-z0-9._-]{5,45}$/;

    // Validation de l'identifiant
    if (!regexIdentifiant.test(identifiantValue)) {
        errorIdentifiantMessage.textContent = "L'identifiant doit contenir au moins 5 caractères.";
    } else {
        errorIdentifiantMessage.textContent = '';
    }

    // Validation du mot de passe principal (password)
    if (passwordValue.length > 0 && !regexPassword.test(passwordValue)) {
        errorMessage1.innerText = 'Le mot de passe doit contenir au moins 8 caractères dont un chiffre et une majuscule.';
    } else {
        errorMessage1.innerText = ''; //supprime le message
    }

    // Validation de la correspondance du mot de passe de confirmation (password2)
    if (passwordValue2.length > 0 && passwordValue !== passwordValue2) {
        errorMessage2.innerText = 'Les mots de passe ne correspondent pas.';
    } else {
        errorMessage2.innerText = ''; //idem
    }
};
// Evénements pour la validation du formulaire
identifiant.addEventListener('input', formulaireValide);
password.addEventListener('input', formulaireValide);
password2.addEventListener('input', formulaireValide);



            // Fonction pour afficher les mots de passe
function  mDpVisible() {

    if (!checkboxInscription.checked) {
        password.type = 'password';
        password2.type = 'password';
        
    } else {
        password.type = 'text';
        password.type = 'text';
        
    }
};
checkboxInscription.addEventListener('change', mDpVisible);


            // Les placeholder
const noPlaceholderIdentifiant = document.querySelector('#identifiant');
const noPlaceholderPassword = document.querySelector('#passwordInscription');
const noPlaceholderPassword2= document.querySelector('#passwordInscription2');

// Fonctions pour supprimer le placeholder au focus
noPlaceholderIdentifiant.addEventListener("focus", () => {
    noPlaceholderIdentifiant.placeholder = ""; // Supprime le placeholder
});
noPlaceholderPassword.addEventListener("focus", () => {
    noPlaceholderPassword.placeholder = ""; // Supprime le placeholder
});
noPlaceholderPassword2.addEventListener("focus", () => {
    noPlaceholderPassword2.placeholder = ""; // Supprime le placeholder
});


// Le placeholder réapparaît au blur
const placeholderIndentifiant = noPlaceholderIdentifiant.placeholder;
noPlaceholderIdentifiant.addEventListener("blur", () => {
    noPlaceholderIdentifiant.placeholder = placeholderIndentifiant;
});
const placeholderPassword = noPlaceholderPassword.placeholder;
noPlaceholderPassword.addEventListener("blur", () => {
    noPlaceholderPassword.placeholder = placeholderPassword;
});
const placeholderPassword2 = noPlaceholderPassword2.placeholder;
noPlaceholderPassword2.addEventListener("blur", () => {
    noPlaceholderPassword2.placeholder = placeholderPassword2;
});