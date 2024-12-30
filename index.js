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


const compostables = [
    { name: "Coquilles d'oeuf", types: ["composteur", "lombricomposteur"] },
    { name: "Boîte d'oeufs sans encre", types: ["composteur", "lombricomposteur"] },
    { name: "oeuf", types: ["composteur", "lombricomposteur"] },
    { name: "Coquilles de noix", types: ["composteur"] },
    { name: "Pelures de banane", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de carotte", types: ["composteur", "lombricomposteur"] },
    { name: "Marc de café", types: ["composteur", "lombricomposteur"] },
    { name: "Peaux d'orange", types: ["composteur"] },
    { name: "Fanes de radis", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de pomme", types: ["composteur", "lombricomposteur"] },
    { name: "Ail", types: ["composteur"] },
    { name: "Carton sans encre", types: ["composteur", "lombricomposteur"] }
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

// Fonction pour afficher l'overlay avec les détails dynamiques
function showResultOverlay(title, description, iconPath, status) {
    const overlayTitle = document.getElementById('overlay-title');
    const overlayDescription = document.getElementById('overlay-description');
    const overlayIcon = document.getElementById('overlay-image');
    const overlayStatus = document.getElementById('overlay-status');

    // Met à jour les contenus dynamiques de l'overlay
    overlayTitle.textContent = title;
    overlayDescription.textContent = description;
    overlayIcon.src = `./Images/${iconPath}`; // Met à jour l'icône
    overlayStatus.textContent = status;

    // Affiche l'overlay
    resultatOverlay.style.display = 'flex';
}

// Fonction pour vérifier et afficher où jeter le biodéchet
function showResult(biodechet) {
    const formattedBiodechet = biodechet.toLowerCase().trim();
    const compostableItem = compostables.find(item => item.name.toLowerCase() === formattedBiodechet);

    if (compostableItem) {
        if (compostableItem.types.length === 1 && compostableItem.types[0] === 'composteur') {
            showResultOverlay(
                `${biodechet}`,
                'Ne convient pas au lombricomposteur',
                'Composteur_okay.png', // Icône pour composteur
                'Convient uniquement au composteur.'
            );
        } else {
            const types = compostableItem.types.join(' et ');
            showResultOverlay(
                `${biodechet}`,
                '(en petits morceaux et/ou humidifiés pour nos amis les vers)',
                'Compost_coeurs.png', // Icône pour lombricomposteur
                `Convient au ${types.toLowerCase()}.`
            );
        }
    } else if (nonCompostables.some(item => item.toLowerCase() === formattedBiodechet)) {
        showResultOverlay(
            `${biodechet}`,
            "Ce déchet doit être jeté avec les ordures ménagères ou au recyclage s'il se recycle",
            'Composte_triste.png', // Icône pour non compostable
            'Ne convient pas au composteur, ni au lombricomposteur'
        );
    } else {
        showResultOverlay(
            `${biodechet}`,
            "Ce déchet va me demander quelques recherches plus approfondies. En attendant, le mieux est de le jeter dans la poubelle ordinaire ou au recyclage s'il se recycle.",
            'ver_perplexe.png', // Icône pour déchet inconnu
            ''
        );
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






  