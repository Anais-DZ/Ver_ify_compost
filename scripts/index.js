document.addEventListener("DOMContentLoaded", () => { /* permet d'afficher une slide */
    const slides = document.querySelectorAll(".carouselInner .slide");
    const prevButton = document.querySelector(".carouselControl.prev");
    const nextButton = document.querySelector(".carouselControl.next");
    const totalSlides = slides.length;

    let currentIndex = 0; // Index de la slide actuellement affichée

    // Fonction pour mettre à jour l'affichage des slides
    function updateSlides() {
        slides.forEach((slide, index) => {
            // Active ou désactive l'affichage des slides
            if (index == currentIndex) {
                slide.style.display = "block"; // Affiche la slide actuelle
            } else {
                slide.style.display = "none"; // Cache les autres slides
            }
        });
    }

    // Événement pour le bouton "Précédent"
    prevButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Retourne au dernier élément si on dépasse
        updateSlides();
    });

    // Événement pour le bouton "Suivant"
    nextButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides; // Retourne au premier élément si on dépasse
        updateSlides();
    });

    // Initialisation : afficher la première slide
    updateSlides();
});


// En attendant le cours sur la Base De Données, tableau en JavaScript des déchets compostables et où ils se jettent : 
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

// Tableau des déchets non compostables (à voir si plus tard, rajouter un type pour permettre à l'utilisateur de savoir si les déchets se recyclent ou non)
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
    "Litière non compostable (silice, bentonite, litière agglomérante)",
    "Chewing-gum"
];



// Récupération des éléments DOM de index.html
const input = document.getElementById('biodechet');
const suggestionsListeDechets = document.getElementById('suggestionsDechets');
const verifierButton = document.getElementById('boutonVerifier');
const resultatOverlay = document.getElementById('resultatOverlay');
const closeOverlayButton = document.getElementById('closeOverlay');



                        //Fonction pour la suggestion des déchets 

//Fonction pour afficher la liste de suggestions pendant que l'utilisateur tape son mot
input.addEventListener('input', () => {
    const recherche = input.value.toLowerCase().trim(); // si le mot entré est en majuscule et avec des espaces, il sera "transformé" par la fonction en un mot en minuscule et sans espace pour que le mot corresponde avec celui en suggestion (ex : sans cela Viande ne fonctionne pas mais viande oui)
    afficherSuggestions(recherche);
});


function afficherSuggestions(recherche) {
    suggestionsListeDechets.innerText = ''; // Réinitialise la liste pour qu'elle "suive" ce que rentre l'utilisateur

    //? Ne fonctionne pas sans ces conditions
    if (recherche) {
        // Affiche les suggestions pour les deux tableaux (map ne fonctionne pas)
        const listeDesTableaux = [...compostables, ...nonCompostables].filter(dechet => { // Les deux tableaux sont assemblés par les trois points pour n'en former qu'un
            if (typeof dechet == 'object') { //marche aussi avec 'string' mais dans ce cas, inverser les return
                return dechet.name.toLowerCase().includes(recherche); // Retourne les compostables // includes permet d'afficher une suggestion contenant ce qui est tapé par l'utilisateur. Par exemple : "jou"
            }
            return dechet.toLowerCase().includes(recherche); // Retourne les non compostables
    });

    if (listeDesTableaux.length > 0) {
        suggestionsListeDechets.style.display = 'block'; // La liste s'affiche si une lettre minimum est entrée

        // Permet de parcourrir les tableaux pour afficher les déchets dans la liste (la liste n'étant pas dans le HTML, elle est produite en JS. Sans ça, la liste restera vide)
        listeDesTableaux.forEach(dechet => {
            const ligneSuggestion = document.createElement('li');
            suggestionsListeDechets.appendChild(ligneSuggestion);

            if (typeof dechet == 'string') { // Si le déchet n'est qu'une chaine de caractère
                ligneSuggestion.innerText = dechet; // Affichera que le nom des déchets non compostables
            } else {
                ligneSuggestion.innerText = dechet.name; // Sinon affichera que le nom des biodéchets mais pas le type
            };

            ligneSuggestion.addEventListener('click', () => {
                input.value = ligneSuggestion.innerText; // La suggestion se retrouve dans l'input
                suggestionsListeDechets.style.display = 'none'; // et la liste se ferme
            });      
    });
       
    } else {
        suggestionsListeDechets.style.display = 'none'; // Si aucune lettre n'est tapée
    }
    }
}


// Fonction pour afficher l'overlay de la recherche et qui servira pour la fonction suivante
function showResultOverlay(titre, description, reponse, imageComposteur) {
    const overlayTitle = document.getElementById('overlayTitle');
    const overlayDescription = document.getElementById('overlayDescription');
    const overlayReponse = document.getElementById('overlayReponse');
    const overlayImage = document.getElementById('overlayImage');
    
        // Permet d'écrire dans l'overlay (l'overlay est vide dans le html) :
    overlayTitle.innerText = titre; // permet la mise à jour du titre
    overlayDescription.innerText = description; // permet la mise à jour de la description
    overlayReponse.innerText = reponse; // permet la mise à jour de la réponse
    overlayImage.src = `./Images/${imageComposteur}`; // permet la mise à jour de l'image

        // Affiche l'overlay
    resultatOverlay.style.display = 'flex';
    resultatOverlay.style.flexDirection = 'column';
}


// Fonction pour vérifier et afficher où jeter le biodéchet. Permet de modifier l'intérieur de l'overlay
function showResult(dechetRecherche) {
    const formattedBiodechet = dechetRecherche.toLowerCase().trim(); // si le mot entré est en majuscule et avec des espaces, il sera "transformé" par la fonction en un mot en minuscule et sans espace

    const compostableDechet = compostables.find(dechet => dechet.name.toLowerCase() == formattedBiodechet);

    if (compostableDechet) {
        if (compostableDechet.types.length == 1) {
            showResultOverlay(
                `${dechetRecherche}`,
                'Ne convient pas au lombricomposteur',
                '⚠️ Convient uniquement au composteur',
                'compost-okay.webp' // Image pour composteur   
            );

        } else {
            const types = compostableDechet.types.join(' et '); // déclare "types" pour pouvoir afficher les noms des composteurs avec 'join' qui transforme les cases du tableau en chaîne de caractère
            showResultOverlay(
                `${dechetRecherche}`,
                '(en petits morceaux et/ou humidifiés pour nos amis les vers)',
                `✅ Convient au ${types.toLowerCase()}`,
                'compost-coeur.webp' // Image pour lombricomposteur   
            );
        }
        
    } else if (nonCompostables.filter(dechet => dechet.toLowerCase() == formattedBiodechet)) {
        showResultOverlay(
            `${dechetRecherche}`,
            "Ce déchet doit être jeté avec les ordures ménagères ou au recyclage s'il se recycle",
            '❌ Ne convient ni au composteur, ni au lombricomposteur',
            'compost-triste.webp' // Image pour non compostable 
        );

    } else {
        showResultOverlay(
            `${dechetRecherche}`,
            "❓",
            "Ce déchet va me demander quelques recherches plus approfondies. En attendant, le mieux est de le jeter dans la poubelle ordinaire ou au recyclage s'il se recycle.",
            'ver-perplexe.webp' // Image pour déchet inconnu 
        );
    }
}


// Événement au bouton "Vérifier"
verifierButton.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche la page de remonter après le submit
    
    const inputValue = input.value.trim();

    if (inputValue == "") {
        return; // La fonction s'arrête s'il n'y a rien d'écrit dans l'input pour ne pas que l'overlay s'affiche malgré tout
    } else {
        showResult(inputValue);
    }
});


// Fonction pour réinitialiser l'input quand il reçoit le focus
function resetInput() {
    input.value = ''; // Vide l'input de son texte précédent
    suggestionsListeDechets.style.display = ''; // Cache la liste des suggestions
}
input.addEventListener('focus', resetInput);

// Ferme la liste si on clique en dehors de celle-ci
document.addEventListener('click', (event) => {
    if (!suggestionsListeDechets.contains(event.target)) {
        suggestionsListeDechets.style.display = 'none'; // Cache la liste
    }
});

// Événement pour fermer l'overlay avec la croix
closeOverlayButton.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche la page de remonter après la fermeture avec la croix
    resultatOverlay.style.display = 'none'; // Cache l'overlay
    
});

// Événement pour fermer l'overlay avec un click en dehors de l'overlay
resultatOverlay.addEventListener('click', (event) => {
    if (event.target == resultatOverlay) {
        resultatOverlay.style.display = 'none'; // Cache l'overlay
    }
});




//fonction avec prise de note dans le calendrier -les notes ne restent pas, en attente de php pour connexion utilisateur
const monthYear = document.getElementById('monthYear');
const calendarBody = document.getElementById('calendarBody');
const prevBtn = document.getElementById('calendarPrev');
const nextBtn = document.getElementById('calendarNext');

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
calendarBody.innerText = '';

const firstDay = new Date(year, month, 1).getDay(); // Jour du 1er
const daysInMonth = new Date(year, month + 1, 0).getDate();
const daysInPrevMonth = new Date(year, month, 0).getDate();

const startDay = firstDay == 0 ? 6 : firstDay - 1; // Ajuster pour Lundi
monthYear.textContent = `${months[month]} ${year}`;

let date = 1; // Jour actuel
let nextMonthDate = 1; // Jour du mois suivant

    for (let i = 0; i < 6; i++) { // Maximum 6 semaines
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');

        if (i == 0 && j < startDay) {
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
            date == today.getDate() &&
            month == today.getMonth() &&
            year == today.getFullYear()
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


    const listItemsContainer = document.querySelector('#noteList');
    const todoInput = document.querySelector('#noteInput');
    const boutonAjoutNote = document.querySelector('#boutonAjoutNote');

    // Charger les éléments enregistrés dans le localStorage
    listItemsContainer.innerText= localStorage.getItem('listItems') || '';

    // Ajouter un nouvel élément
    boutonAjoutNote.addEventListener('click', function (event) {
        event.preventDefault();
        const item = todoInput.value;

        if (item) {
            const listItem = document.createElement('li');
            listItem.innerHTML = DOMPurify.sanitize (`
                <span class="noteItem">${item}</span>
                <button class="supprimer">❌</button>
            `);
            listItemsContainer.appendChild(listItem);

            // Mettre à jour le localStorage
            localStorage.setItem('listItems', listItemsContainer.innerText);

            // Réinitialiser le champ d'entrée
            todoInput.value = '';
        }
    });

    // Gérer la suppression d'un élément
    listItemsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('supprimer')) {
            const listItem = event.target.closest('li');
            if (listItem) {
                listItem.remove();

                // Mettre à jour le localStorage
                localStorage.setItem('listItems', listItemsContainer.innerText);
            }
        }
    });

  
    // Gérer la suppression d'un élément
    listItemsContainer.addEventListener('click', function (event) {
      if (event.target.closest('.remove')) {
        const listItem = event.target.closest('li');
        listItem.remove();
  
        // Mettre à jour le localStorage
        localStorage.setItem('listItems', listItemsContainer.innerText);
      }
    });
  


