document.addEventListener("DOMContentLoaded", function () { /* permet d'afficher une slide */
    const slides = document.querySelectorAll(".carousel_inner .slide");
    const prevButton = document.querySelector(".carousel_control.prev");
    const nextButton = document.querySelector(".carousel_control.next");
    const totalSlides = slides.length;

    let currentIndex = 0; // Index de la slide actuellement affichée

    // Fonction pour mettre à jour l'affichage des slides
    function updateSlides() {
        slides.forEach((slide, index) => {
            // Active ou désactive l'affichage des slides
            if (index === currentIndex) {
                slide.style.display = "block"; // Affiche la slide actuelle
            } else {
                slide.style.display = "none"; // Cache les autres slides
            }
        });
    }

    // Événement pour le bouton "Précédent"
    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Retourne au dernier élément si on dépasse
        updateSlides();
    });

    // Événement pour le bouton "Suivant"
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalSlides; // Retourne au premier élément si on dépasse
        updateSlides();
    });

    // Initialisation : afficher la première slide
    updateSlides();
});



//menu en rideau
const burgerButton = document.querySelector(".menu_toggler")
const leftMenu = document.querySelector(".left_menu")

const userButton = document.querySelector("#user_button")
const connexion = document.querySelector(".right_menu")

burgerButton.addEventListener("click", toggleMenu)
userButton.addEventListener("click", toggleUser)

function toggleMenu() {
    burgerButton.classList.toggle("active")
    leftMenu.classList.toggle("active")
}

function toggleUser() {
    connexion.classList.toggle("active")

    if (connexion.classList.contains("active")) {
    // Si la classe "active" est présente, la fonction exécute cette logique
        userButton.setAttribute("src", "./Icones/close.png");
    } else {
    // Sinon, le code exécute une logique différente
        userButton.setAttribute("src", "./Icones/user.png");
    }
}


// //fonction pour suggestion dynamique quand l'utilisateur commence à rentrer le nom d'un biodéchet

//  // Liste des biodéchets pour la suggestion
//  const biodechets = [
//     "Coquilles d'œuf",
//     "Coquilles de noix",
//     "Coquilles de moules",
//     "Coquilles de crustacés",
//     "Pelures de banane",
//     "Épluchures de carotte",
//     "Marc de café",
//     "Peaux d'orange",
//     "Fanes de radis",
//     "Litière d'animaux",
//     "Épluchures de pomme",
//     "Ail",
//     "Restes de nourriture",
//     "Carton sans encre"
//   ];

//   const input = document.getElementById('biodéchet');
//   const suggestionsList = document.getElementById('suggestions');

//   input.addEventListener('input', function () {
//     const query = input.value.toLowerCase();
//     suggestionsList.innerText = ''; // Réinitialise la liste avant de générer les nouvelles suggestions

//     if (query) {
//       // Filtrer les suggestions
//       const matches = biodechets.filter(item => item.toLowerCase().includes(query));
//       if (matches.length > 0) {
//         suggestionsList.style.display = 'block';
//         matches.forEach(match => {
//           const li = document.createElement('li');
//           li.textContent = match;
//           li.addEventListener('click', function () {
//             input.value = match; // Remplit le champ avec la suggestion cliquée
//             suggestionsList.style.display = 'none'; // Masque les suggestions après sélection
//           });
//           suggestionsList.appendChild(li);
//         });
//       } else {
//         suggestionsList.style.display = 'none';
//       }
//     } else {
//       suggestionsList.style.display = 'none';
//     }
//   });

//   // Masquer la liste si l'utilisateur clique ailleurs
//   document.addEventListener('click', function (event) {
//     if (!input.contains(event.target) && !suggestionsList.contains(event.target)) {
//       suggestionsList.style.display = 'none';
//     }
//   });


// // Fonction pour vérifier et afficher où jeter le biodéchet

// // Liste des biodéchets compostables
// const compostables = [
//     "Coquilles d'œuf",
//     "Coquilles de noix",
//     "Pelures de banane",
//     "Épluchures de carotte",
//     "Marc de café",
//     "Peaux d'orange",
//     "Fanes de radis",
//     "Épluchures de pomme",
//     "Ail",
//     "Carton sans encre"
// ];

// const verifierButton = document.getElementById('verifier');
// const resultat = document.getElementById('resultat');

// function showResult(biodechet) {
//     const formattedBiodechet = biodechet.toLowerCase().trim();
//     const isCompostable = compostables.some(item => item.toLowerCase() === formattedBiodechet);

//     if (isCompostable) {
//         resultat.textContent = `Le biodéchet "${biodechet}" va dans : Compost.`;
//     } else {
//         resultat.textContent = `Le déchet "${biodechet}" va dans : Ordures ménagères.`;
//     }
// }

// // Ajouter un événement au bouton "Vérifier"
// verifierButton.addEventListener('click', () => {
//     const nomBiodéchet = input.value.trim();
//     showResult(nomBiodéchet);
// });


const compostables = [
    { name: "Coquilles d'oeuf", types: ["un composteur", "un lombricomposteur"] },
    { name: "Boîte d'oeufs sans encre", types: ["un composteur", "un lombricomposteur"] },
    { name: "oeuf", types: ["un composteur", "un lombricomposteur"] },
    { name: "Coquilles de noix", types: ["un composteur"] },
    { name: "Pelures de banane", types: ["un composteur", "un lombricomposteur"] },
    { name: "Épluchures de carotte", types: ["un composteur", "un lombricomposteur"] },
    { name: "Marc de café", types: ["un composteur", "un lombricomposteur"] },
    { name: "Peaux d'orange", types: ["un composteur"] },
    { name: "Fanes de radis", types: ["un composteur", "un lombricomposteur"] },
    { name: "Épluchures de pomme", types: ["un composteur", "un lombricomposteur"] },
    { name: "Ail", types: ["un composteur"] },
    { name: "Carton sans encre", types: ["un composteur", "un lombricomposteur"] }
];

const nonCompostables = [
    "Coquilles de moules",
    "Coquilles de crustacés",
    "Viandes",
    "Restes de nourriture"
]

// Récupération des éléments DOM
const input = document.getElementById('biodéchet');
const suggestionsList = document.getElementById('suggestions');
const verifierButton = document.getElementById('verifier');
const resultatOverlay = document.getElementById('resultat-overlay');
const resultat = document.getElementById('resultat');
const closeOverlayButton = document.getElementById('close-overlay');


// Fonction pour réinitialiser l'input
function resetInput() {
    input.value = ''; // Vide le champ de l'input
    suggestionsList.style.display = 'none'; // Cache les suggestions
}

input.addEventListener('focus', function () {
    resetInput(); // Réinitialise l'input quand il reçoit le focus
});

// Événement pour afficher les suggestions pendant que l'utilisateur tape
input.addEventListener('input', function () {
    const query = input.value.toLowerCase().trim();
    afficherSuggestions(query);
});

// Fonction pour afficher les suggestions dynamiques
function afficherSuggestions(query) {
    suggestionsList.innerText = ''; // Réinitialise la liste avant de générer les nouvelles suggestions

    if (query) {
        // Filtrer les suggestions compostables et non compostables
        const matches = [...compostables, ...nonCompostables].filter(item => {
            if (typeof item === 'object') {
                return item.name.toLowerCase().includes(query); // Filtrage par nom pour les compostables
            }
            return item.toLowerCase().includes(query); // Filtrage par texte pour non compostables
        });

        if (matches.length > 0) {
            suggestionsList.style.display = 'block';
            matches.forEach(match => {
                const li = document.createElement('li');
                li.textContent = typeof match === 'object' ? match.name : match; // Affiche le nom si compostable, le texte sinon
                li.addEventListener('click', function () {
                    input.value = typeof match === 'object' ? match.name : match; // Remplit le champ avec la suggestion cliquée
                    suggestionsList.style.display = 'none'; // Masque les suggestions après sélection
                });
                suggestionsList.appendChild(li);
            });
        } else {
            suggestionsList.style.display = 'none';
        }
    }
}

// Fonction pour afficher l'overlay avec le message de résultat
function showResultOverlay(message) {
    resultat.textContent = message; // Affiche le message dans l'overlay
    resultatOverlay.style.display = 'flex'; // Affiche l'overlay
}

// Fonction pour vérifier et afficher où jeter le biodéchet
function showResult(biodechet) {
    const formattedBiodechet = biodechet.toLowerCase().trim();
    const compostableItem = compostables.find(item => item.name.toLowerCase() === formattedBiodechet);

    if (compostableItem) {
        // Vérifier si le déchet est marqué uniquement pour le composteur
        if (compostableItem.types.length === 1 && compostableItem.types[0] === 'Composteur') {
            const message = `Le biodéchet "${biodechet}" peut aller uniquement dans un composteur. Il ne convient pas au lombricomposteur`;      
            showResultOverlay(message); // Affiche le message dans l'overlay
        } else {
            const types = compostableItem.types.join(' et '); // Join types (e.g., Composteur et Lombricomposteur)
            const message = `Le biodéchet "${biodechet}" peut aller dans ${types}. En petits morceaux pour nos amis les vers`;
            showResultOverlay(message); // Affiche le message dans l'overlay
        }
    } else if (nonCompostables.some(item => item.toLowerCase() === formattedBiodechet)) {
        const message = `Le déchet "${biodechet}" ne va  ni dans un composteur, ni dans un lombricomposteur mais dans la poubelle ordinaire ou au recyclage s'il se recycle`;
        showResultOverlay(message);
    } else {
        const message = `Le déchet "${biodechet}" va me demander quelques recherches plus approfondies. En attendant une rapide réponse, le mieux est de le jeter dans la poubelle ordinaire `;
        showResultOverlay(message);
    }
}

// Événement pour fermer l'overlay
closeOverlayButton.addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le comportement par défaut
    resultatOverlay.style.display = 'none'; // Cache l'overlay
});

// Événement pour fermer l'overlay
resultatOverlay.addEventListener('click', function (event) {
    if (event.target === resultatOverlay) {
        resultatOverlay.style.display = 'none'; // Cache l'overlay
    }
});

// Événement au bouton "Vérifier"
verifierButton.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche le comportement par défaut du bouton submit
    const nomBiodéchet = input.value.trim();
    showResult(nomBiodéchet); // Affiche le résultat
});

// Fonction pour gérer l'input focus et la réinitialisation
input.addEventListener('focus', resetInput); // Réinitialise l'input seulement lorsqu'il reçoit le focus






  