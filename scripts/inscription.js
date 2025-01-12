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
             // Validation de l'identifiant
    const identifiantValue = identifiant.value;
    const regexIdentifiant = /^(?=(.*[A-Za-z]){4,}).{5,25}$/; 
            // signifie que l'identifiant doit être composé d'au moins 4 lettre avec un minimum de 5 caractères et 25 max
    const identifiantValide = regexIdentifiant.test(identifiantValue); 
            // "test" permet de vérifier si identifiantValue (ou une chaîne de caractère en générale) correspond au régex. Ici, le régex correspond à identifiantValue.
    if (identifiantValue.length > 0 && !identifiantValide) {
            // pour que le message n'apparaissent pas au moment où l'on rentre l'indentifiant, la longueur du mot de passe de passe doit être plus grande que 0. S'il est plus grand, le message d'erreur apparaît à ce moment-là et pas avant
        errorIdentifiantMessage.innerText = "L'identifiant doit contenir au moins 5 caractères dont 4 lettres."; // sinon message d'erreur
    } else {
        errorIdentifiantMessage.innerText = ''; //Pas de message d'erreur  
    };

            // Validation du mot de passe principal (password)
    const passwordValue = password.value; 
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,30}$/; 
            // signifie que le mot de passe doit être composé de lettres majuscules et minuscule et de chiffres avec un minimum de 8 caractères et 30 max
    const passwordValide = regexPassword.test(passwordValue);

    if (passwordValue.length > 0 && !passwordValide) {  
        errorMessage1.innerText = 'Le mot de passe doit contenir au moins 8 caractères dont 1 chiffre, 1 majuscule, 1 minuscule.';
    } else {
        errorMessage1.innerText = ''; // Pas de message d'erreur
    };

            // Validation de la correspondance du mot de passe de confirmation (password2)
    const passwordValue2 = password2;
            // Pas de regex pour le password2 puisqu'il sera juste comparé au password
    const password2Valide = passwordValue == passwordValue2;
    if (passwordValue2.length > 0 && !password2Valide) { 
            // Si le premier mot de passe ne correspond pas au second mot de passe, le message d'erreur apparaît
        errorMessage2.innerText = 'Les mots de passe ne correspondent pas.';
        
    } else {
        errorMessage2.innerText = ''; // Pas de message d'erreur
    };

            // Activation du bouton
    if (identifiantValide && passwordValide && password2Valide) {
        submitButtonInscription.disabled = false;
    } else {
        submitButtonInscription.disabled = true; 
    };
};
// Evénements pour la validation du formulaire
identifiant.addEventListener('input', formulaireValide);
password.addEventListener('input', formulaireValide);
password2.addEventListener('input', formulaireValide);



            // Fonction pour afficher les mots de passe
function  mDpVisible() {
    if (!checkboxInscription.checked) { // Si la checkbox n'est pas cochée, le mot de passe ne sera pas visible
        password.type = 'password';
        password2.type = 'password';
        
    } else { // S'il est coché, le type est modifié en texte et permet à la chaîne de caractères d'être visible
        password.type = 'text';
        password2.type = 'text';    
    }
};
checkboxInscription.addEventListener('click', mDpVisible);




            // Les placeholder
//! Si tu veux te servir de cette fonction durant l'oral, n'oublie pas d'aller commenter celle dans le js commun, ça t'évitera un gros bug et du stress. Signé : toi-même ;)
// Sélectionne tous les inputs avec un attribut placeholder
// const inputs = document.querySelectorAll("input[placeholder]");

// inputs.forEach((input) => { // A chaque input trouvé dans le code, la fonction suivante lui sera appliquée

//     const initialPlaceholder = input.placeholder;

//     input.addEventListener("focus", () => {
//         input.placeholder = ""; // le focus "supprime" le plaholder
//     });

//     input.addEventListener("blur", () => { // blur = quand on clique en dehors de l'input
//         input.placeholder = initialPlaceholder; //initialPlaceholder permet de "stocker" le placeholder. Par exemple si le placeholder est "mot de passe", initialPlaceholder sera "mot de passe"
//     });
// });



                        // Fonction premier essais
// function formulaireValide() {
//     const identifiantValue = identifiant.value.trim();
//     const regexIdentifiant = /^(?=(.*[A-Za-z]){4,}).{5,25}$/; // signifie que l'identifiant doit être composé d'au moins 4 lettre avec un minimum de 5 caractères et 25 max
//     const passwordValue = password.value.trim(); // trim permet de supprimer les espaces avant/après
//     const regexPassword = /^.*(?=.*[A-Za-z])(?=.*\d).{8,30}$/ // signifie que le mot de passe doit être composé de lettres majuscules et minuscule et de chiffres avec un minimum de 8 caractères et 30 max (le \S supprime les espaces)
    
//     const passwordValue2 = password2.value.trim(); // Pas de regex pour le password2 puisqu'il sera juste comparé au password

//     // Validation de l'identifiant
//     if (!regexIdentifiant.test(identifiantValue)) { // "test" permet de vérifier si identifiantValue (ou une chaîne de caractère en générale) correspond au régex. Ici, si le régex ne correspond pas à identifiantValue alors message d'erreur
//         errorIdentifiantMessage.innerText = "L'identifiant doit contenir au moins 5 caractères dont 4 lettres.";
//     } else {
//         errorIdentifiantMessage.innerText = ''; // sinon aucun message d'erreur
//     };

//     // Validation du mot de passe principal (password)
//     if (passwordValue.length > 0 && !regexPassword.test(passwordValue)) {  // pour que le message n'apparaissent pas au moment où l'on rentre l'indentifiant, la longueur du mot de passe de passe doit être plus grande que 0. S'il est plus grand, le message d'erreur apparaît à ce moment-là et pas avant
//         errorMessage1.innerText = 'Le mot de passe doit contenir au moins 8 caractères dont un chiffre et une majuscule.';
//     } else {
//         errorMessage1.innerText = ''; //supprime le message
//     };

//     // Validation de la correspondance du mot de passe de confirmation (password2)
//     if (passwordValue2.length > 0 && passwordValue !== passwordValue2) { // Si le premier mot de passe ne correspond pas au second mot de passe, le message d'erreur apparaît
//         errorMessage2.innerText = 'Les mots de passe ne correspondent pas.';
        
//     } else {
//         errorMessage2.innerText = ''; //idem
//     };

    // Activation du bouton
//     const identifiantValide = regexIdentifiant.test(identifiantValue);
//     const passwordValide = regexPassword.test(passwordValue);
//     const password2Valide = passwordValue == passwordValue2;

//     if (identifiantValide && passwordValide && password2Valide) {
//         submitButtonInscription.disabled = false;
//     } else {
//         submitButtonInscription.disabled = true; 
//     };
// };
// Evénements pour la validation du formulaire
// identifiant.addEventListener('input', formulaireValide);
// password.addEventListener('input', formulaireValide);
// password2.addEventListener('input', formulaireValide);



            // Premier essais pour supprimer et mettre à nouveau les placeholders : une fonction pour chaque placeholder dans le code //! Prend du temps et de la place

// const noPlaceholderIdentifiant = document.querySelector('#identifiant');
// const noPlaceholderPassword = document.querySelector('#passwordInscription');
// const noPlaceholderPassword2= document.querySelector('#passwordInscription2');

            // Fonctions pour supprimer le placeholder au focus
// noPlaceholderIdentifiant.addEventListener("focus", () => {
//     noPlaceholderIdentifiant.placeholder = ""; // Supprime le placeholder
// });
// noPlaceholderPassword.addEventListener("focus", () => {
//     noPlaceholderPassword.placeholder = "";
// });
// noPlaceholderPassword2.addEventListener("focus", () => {
//     noPlaceholderPassword2.placeholder = "";
// });


            // Le placeholder réapparaît au blur
// const placeholderIndentifiant = noPlaceholderIdentifiant.placeholder;

// noPlaceholderIdentifiant.addEventListener("blur", () => {
//     noPlaceholderIdentifiant.placeholder = placeholderIndentifiant;
// });
// const placeholderPassword = noPlaceholderPassword.placeholder;
// noPlaceholderPassword.addEventListener("blur", () => {
//     noPlaceholderPassword.placeholder = placeholderPassword;
// });
// const placeholderPassword2 = noPlaceholderPassword2.placeholder;
// noPlaceholderPassword2.addEventListener("blur", () => {
//     noPlaceholderPassword2.placeholder = placeholderPassword2;
// });