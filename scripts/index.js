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


//en attendant le cours sur la Base De Données, quelques déchets pour faire tester le site 
const compostables = [
    { name: "Coquilles d'oeuf", types: ["composteur", "lombricomposteur"] },
    { name: "Boîte d'oeufs sans encre", types: ["composteur", "lombricomposteur"] },
    { name: "Coquilles de noix", types: ["composteur"] },
    { name: "Pelures de banane", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de carotte", types: ["composteur", "lombricomposteur"] },
    { name: "Marc de café", types: ["composteur", "lombricomposteur"] },
    { name: "Peau d'orange", types: ["composteur"] },
    { name: "Fanes de radis", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de pomme", types: ["composteur", "lombricomposteur"] },
    { name: "Ail", types: ["composteur"] },
    { name: "Échalottes", types: ["composteur"] },
    { name: "Piment", types: ["composteur"] },
    { name: "Agrûme", types: ["composteur"] },
    { name: "Carton sans encre", types: ["composteur", "lombricomposteur"] },
    { name: "Tonte de pelouse", types: ["composteur"] },
    { name: "Feuilles mortes", types: ["composteur"] },
    { name: "Fleurs fanées", types: ["composteur"]},
    { name: "Sciure de bois (non traité)", types: ["composteur"] },
    { name: "Fanes de carottes", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de pommes de terre", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de courgettes", types: ["composteur", "lombricomposteur"] },
    { name: "Peau de kiwi", types: ["composteur"] },
    { name: "Peau de mangue", types: ["composteur"] },
    { name: "Sachet de thé (sans agrafe)", types: ["composteur", "lombricomposteur"] },
    { name: "Mouchoirs en papier", types: ["composteur", "lombricomposteur"] },
    { name: "Essuie-tout", types: ["composteur", "lombricomposteur"] },
    { name: "Boîte en carton brun (sans encre)", types: ["composteur", "lombricomposteur"] },
    { name: "Terre d’anciennes plantes", types: ["composteur"] },
    { name: "Plumes", types: ["composteur"] },
    { name: "Cheveux", types: ["composteur"] },
    { name: "Peau de melon", types: ["composteur"] },
    { name: "Restes de salade", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de poire", types: ["composteur", "lombricomposteur"] },
    { name: "Peau de pêche", types: ["composteur", "lombricomposteur"] },
    { name: "Trognon de pommes", types: ["composteur", "lombricomposteur"] },
    { name: "Peau de citron", types: ["composteur"] },
    { name: "Peau de mandarine", types: ["composteur"] },
    { name: "Peau de pamplemousse", types: ["composteur"] },
    { name: "Peau de clémentine", types: ["composteur"] },
    { name: "Peau de lime", types: ["composteur"] },
    { name: "Peau de kumquat", types: ["composteur"] },
    { name: "Peau de yuzu", types: ["composteur"] },
    { name: "Peau de bergamote", types: ["composteur"] },
    { name: "Épluchures de fraise", types: ["composteur"] },
    { name: "Peau de pastèque", types: ["composteur"] },
    { name: "Peau de prune", types: ["composteur"] },
    { name: "Peau de cerise", types: ["composteur"] },
    { name: "Épluchures de figue", types: ["composteur"] },
    { name: "Épluchures de raisin", types: ["composteur"] },
    { name: "Peau de kaki", types: ["composteur"] },
    { name: "Épluchures de grenade", types: ["composteur"] },
    { name: "Épluchures de rhubarbe", types: ["composteur"] },
    { name: "Peau d’avocat", types: ["composteur"] },
    { name: "Noyau de pêche", types: ["composteur"] },
    { name: "Noyau de prune", types: ["composteur"] },
    { name: "Noyau de fruit", types: ["composteur"] },
    { name: "Noyau de cerise", types: ["composteur"] },
    { name: "Restes de pain", types: ["composteur"] },
    { name: "Céréales non sucrées", types: ["composteur"] },
    { name: "Épices", types: ["composteur"] },
    { name: "Herbes aromatiques", types: ["composteur"] },
    { name: "Feuilles de laurier", types: ["composteur"] },
    { name: "Coquilles de graines", types: ["composteur"] },
    { name: "Épluchures de concombre", types: ["composteur", "lombricomposteur"] },
    { name: "Fanes de betteraves", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de poireaux", types: ["composteur"] },
    { name: "Fanes de céleri", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de poivron", types: ["composteur"] },
    { name: "Peau de courge", types: ["composteur"] },
    { name: "Épluchures d’aubergine", types: ["composteur"] },
    { name: "Feuilles de chou", types: ["composteur", "lombricomposteur"] },
    { name: "Fanes de navets", types: ["composteur", "lombricomposteur"] },
    { name: "Restes de brocoli", types: ["composteur", "lombricomposteur"] },
    { name: "Restes de chou-fleur", types: ["composteur", "lombricomposteur"] },
    { name: "Feuilles d’artichaut", types: ["composteur"] },
    { name: "Fanes de fenouil", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de radis", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures d’oignon", types: ["composteur"] },
    { name: "Épluchures de betterave", types: ["composteur", "lombricomposteur"] },
    { name: "Restes de haricots verts", types: ["composteur", "lombricomposteur"] },
    { name: "Fanes d’épinards", types: ["composteur", "lombricomposteur"] }
];


const nonCompostables = [
    "Coquilles de moules",
    "Coquilles de crustacés",
    "Coquilles d'huîtres",
    "Viande",
    "Poisson",
    "Oeufs",
    "Riz",
    "Pâtes",
    "Pain",
    "Couches jetables",
    "Tampons, serviettes hygiéniques",
    "Coton-tiges",
    "Cendres de cheminée",
    "Charbons de barbecue",
    "Plastiques",
    "Métal non recyclé",
    "Verre",
    "Papier journal",
    "Papier glacé",
    "Croûtes de fromage",
    "Os",
    "Produits laitiers (fromage, beurre, etc.)",
    "Mégots de cigarette",
    "Piles",
    "Couches jetables",
    "Textiles synthétiques",
    "Médicaments",
    "Bois traité ou verni",
    "Tissus",
    "Sacs plastiques",
    "Feuilles plastifiées",
    "Vaisselle cassée",
    "Produits chimiques (lessives, détergents, solvants)",
    "Peintures, solvants, produits chimiques",
    "Litière non compostable (silice, bentonite, litière agglomérante)"
];


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
function showResultOverlay(title, description, status, iconPath) {
    const overlayTitle = document.getElementById('overlay-title');
    const overlayDescription = document.getElementById('overlay-description');
    const overlayStatus = document.getElementById('overlay-status');
    const overlayIcon = document.getElementById('overlay-image');
    

    // Met à jour les contenus dynamiques de l'overlay
    overlayTitle.textContent = title;
    overlayDescription.textContent = description;
    overlayStatus.textContent = status;
    overlayIcon.src = `./Images/${iconPath}`; // Met à jour l'image

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
                '⚠️ Convient uniquement au composteur',
                'compost-okay.webp' // Icône pour composteur   
            );

        } else {
            const types = compostableItem.types.join(' et ');
            showResultOverlay(
                `${biodechet}`,
                '(en petits morceaux et/ou humidifiés pour nos amis les vers)',
                `✅ Convient au ${types.toLowerCase()}`,
                'compost-coeur.webp' // Icône pour lombricomposteur   
            );
        }
        
    } else if (nonCompostables.some(item => item.toLowerCase() === formattedBiodechet)) {
        showResultOverlay(
            `${biodechet}`,
            "Ce déchet doit être jeté avec les ordures ménagères ou au recyclage s'il se recycle",
            '❌ Ne convient ni au composteur, ni au lombricomposteur',
            'compost-triste.webp' // Icône pour non compostable 
        );

    } else {
        showResultOverlay(
            `${biodechet}`,
            "❓",
            "Ce déchet va me demander quelques recherches plus approfondies. En attendant, le mieux est de le jeter dans la poubelle ordinaire ou au recyclage s'il se recycle.",
            'ver-perplexe.webp' // Icône pour déchet inconnu 
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

//fonction avec prise de note dans le calendrier -les notes ne restent pas, en attente de php pour connexion utilisateur
const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Noms des mois
const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

// Stockage des notes
const notes = {};

function generateCalendar(month, year) {
    // Effacer l'ancien calendrier
calendarBody.innerHTML = '';

const firstDay = new Date(year, month, 1).getDay(); // Jour du 1er
const daysInMonth = new Date(year, month + 1, 0).getDate();
const daysInPrevMonth = new Date(year, month, 0).getDate();

const startDay = firstDay === 0 ? 6 : firstDay - 1; // Ajuster pour Lundi
monthYear.textContent = `${months[month]} ${year}`;

let date = 1; // Jour actuel
let nextMonthDate = 1; // Jour du mois suivant

    for (let i = 0; i < 6; i++) { // Maximum 6 semaines
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');

        if (i === 0 && j < startDay) {
        // Jours du mois précédent
        const prevDate = daysInPrevMonth - startDay + j + 1;
        cell.textContent = prevDate;
        cell.classList.add('other-month');
        } else if (date > daysInMonth) {
        // Jours du mois suivant
        cell.textContent = nextMonthDate++;
        cell.classList.add('other-month');
        } else {
        // Jours du mois actuel
        const fullDate = `${date} / ${month + 1} / ${year}`;
        cell.textContent = date;

        // Vérifier les notes
        if (notes[fullDate]) {
            const icon = document.createElement('span');
            icon.textContent = '📌';
            icon.classList.add('note-icon');
            cell.appendChild(icon);
        }

        // Mettre en surbrillance le jour actuel
        if (
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ) {
            cell.classList.add('today');
        }

        // Ajouter un événement de clic
        cell.addEventListener('click', () => addNoteToDay(fullDate, cell));

        date++;
        }
        row.appendChild(cell);
    }
    calendarBody.appendChild(row);
    if (date > daysInMonth && nextMonthDate > 7) break;
    }
}

function addNoteToDay(date, cell) {
    const note = prompt(`Entrez une note pour le ${date}:`, notes[date] || '');
    if (note) {
    notes[date] = note;

    // Ajouter un icône si elle n'existe pas
    if (!cell.querySelector('.note-icon')) {
        const icon = document.createElement('span');
        icon.textContent = '📌';
        icon.classList.add('note-icon');
        cell.appendChild(icon);
    }
    }
}

// Navigation entre les mois
prevBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
    }
    generateCalendar(currentMonth, currentYear);
});

nextBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
    }
    generateCalendar(currentMonth, currentYear);
});

// Initialiser le calendrier
generateCalendar(currentMonth, currentYear);
