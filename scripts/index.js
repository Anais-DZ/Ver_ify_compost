// Foncions carrousel
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carouselInner .slide");
    const prevButton = document.querySelector(".carouselControl.prev");
    const nextButton = document.querySelector(".carouselControl.next");
    const totalSlides = slides.length;

    // Index de la slide actuellement affichée
    let currentIndex = 0;

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
    updateSlides();


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
});



// Fonctions recherche des déchets
//la variable tabDechet stocke un tableau d'objets contenant les données récupérées depuis l'api
const tabDechet = [];

// Fonction getApiWaste() pour récupérer les données de l'api et remplir le tableau dynamiquement
const getApiWaste = async () => {
    try {
        // utilisation de fetch() pour envoyer une requête à l'adresse url de l'api
        const response = await fetch('https://api-waste.onrender.com/');
        
        if (!response.ok) {
            //s'il n'y a pas de réponse de l'api, envoi d'un message d'erreur
            throw new Error('Erreur de récupération des données, pas de chance !');
        }
        //la réponse va pouvoir être transformée grâce à json() que l'on stocke dans la variable data
        const data = await response.json();

        //les données récupérées passent par forEach pour créer le tableau tabDechet
        data.forEach(waste => {
            tabDechet.push(
                {
                    name_waste: waste.name_waste,
                    type_container: waste.type_container
                }
            );
        });
        // récupération du message d'erreur
    } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'api', error);
    }
}
// appel de la fonction
getApiWaste();


// Fonctions pour la liste de suggestion des déchets
// Récupération des éléments dans le DOM
const input = document.getElementById('biowaste');
const suggestionListWastes = document.getElementById('suggestionListWastes');
const checkButton = document.getElementById('checkButton');
const closeOverlayButton = document.getElementById('closeOverlay');

//Fonction pour afficher la liste de suggestions pendant que l'utilisateur tape son mot
function gestionInput() {
    //appel de la fonction qui va afficher ce qui est tapé dans l'input
    displaySuggestionList(input.value);
};
input.addEventListener('input', gestionInput);

//Fonction pour trouver le mot, même au pluriel
function plurialWord(word) {
    if (word.endsWith('al')) {
        return word.slice(0, -2) + 'aux'; // animal => animaux
    } else if (word.endsWith('eau') || word.endsWith('eu')) {
        return word + 'x'; // cadeau => cadeaux
    } else if (word.endsWith('s') || word.endsWith('x') || word.endsWith('z')) {
        return word; // mot déjà au pluriel ou invariable
    } else {
        return word + 's'; // règle générale
    }
}

// Fonction pour calculer la distance de Levenshtein entre deux mots
function distanceLevenshtein(a, b) {
    const distanceTable = [];
    // Initialisation de la distanceTable
    for (let i = 0; i <= a.length; i++) {
        distanceTable[i] = [i];
    }
    for (let j = 0; j <= b.length; j++) {
        distanceTable[0][j] = j;
    }
    // Remplissage de la distanceTable
    for (let i = 1; i <= a.length; i++) {
        for (let j = 1; j <= b.length; j++) {
            if (a[i - 1] === b[j - 1]) {
                distanceTable[i][j] = distanceTable[i - 1][j - 1];
            } else {
                distanceTable[i][j] = Math.min(
                    distanceTable[i - 1][j] + 1, // Suppression
                    distanceTable[i][j - 1] + 1, // Insertion
                    distanceTable[i - 1][j - 1] + 1 // Substitution
                );
            }
        }
    }
    return distanceTable[a.length][b.length];
}

// La fonction normalizeWritting() va permettre de normaliser les mots entrés par l'utilisateur et faciliter leur comparaison ensuite
function normalizeWritting(waste) {
    return waste
        .normalize('NFD') // Sépare les lettres des accents
        .replace(/['’\s–—-]|[\u0300-\u036f]/g, '')
        // [\u0300-\u036f] Enlève les accents
        // ['’] Enlève les apostrophes
        // /\s/ Supprime tous les espaces
        // [-–—] Supprime les tirets
        .toLowerCase();  // Tout mettre en minuscule
}

// Fonction pour corriger un mot mal orthographié
function adjustWrittingWord(word) {
    const normalizationWord = normalizeWritting(word);
    let bestWord = null;
    let bestDistance = Infinity;

    tabDechet.forEach(waste => {
        const normalizeNameWaste = normalizeWritting(waste.name_waste);
        const distance = distanceLevenshtein(normalizationWord, normalizeNameWaste);

        if (distance < bestDistance) {
            bestDistance = distance;
            bestWord = waste.name_waste;
        }
    });
    // Si la meilleure distance est raisonnable (ex: max 2 erreurs), on retourne la correction
    return (bestDistance <= 2) ? bestWord : null;
}

// Affichage de la liste de suggestion
function displaySuggestionList(search) {
    suggestionListWastes.innerText = '';

    if (search) { 
        const normalizationOfSearch = normalizeWritting(search); //appel de la fonction normalizeWritting() pour normaliser le mot recherché

        const plurialSearch = plurialWord(normalizationOfSearch);

        const searchOfUser = tabDechet.filter(waste => {

            // Normalisation du nom du déchet sans accents, apostrophes, et espaces, etc... avec la fonction normalizeWritting()
            const normalizeNameWaste = normalizeWritting(waste.name_waste);
            const distance = distanceLevenshtein(normalizationOfSearch, normalizeNameWaste);

            // Le nom du déchet doit commencer par les lettres tapées par l'utilisateur, ou la distance de Levenshtein doit être faible
            return normalizeNameWaste.startsWith(normalizationOfSearch) ||
                normalizeNameWaste.startsWith(plurialSearch) || distance <= 2;

        }).sort((a, b) => {
            // une fois les déchets comparés et retournés, ils vont être affichés par ordre alphabétique dans la liste de suggestion
            return a.name_waste.localeCompare(b.name_waste);
        });

        // la liste s'affichera quand l'utilisateur commencera à taper sa recherche
        if (searchOfUser.length > 0) {
            suggestionListWastes.style.display = 'block';

            searchOfUser.forEach(waste => { //forEach() permet de parcourir le tableau et créera une ligne (li) dans la liste du DOM (ul) à chaque élément trouvé

                const lineSuggestion = document.createElement('li');
                lineSuggestion.innerText = waste.name_waste;
                suggestionListWastes.appendChild(lineSuggestion); //ajoute <li> créé à la liste

                //va permettre de remplir l'input avec le déchet suggéré lorsque l'utilisateur va cliquer dessus et appeler la fonction la fonction resultOfSearch() afficher l'overlay
                lineSuggestion.addEventListener('click', () => {
                    input.value = lineSuggestion.innerText; //la valeur de l'input sera le nom du déchet cherché
                    suggestionListWastes.style.display = 'none'; // et la liste "disparaît" après avoir cliqué sur le déchet

                    resultOfSearch(input.value);
                });
            });

        } else {
            suggestionListWastes.style.display = 'none'; //la liste de suggestion n'apparaît pas si aucun déchet n'est trouvé
        }

    } else {
        suggestionListWastes.style.display = 'none'; //la liste n'apparaît pas si aucun texte n'est tapé ou si l'utilisateur efface sa recherche
    }
}

// Fonction pour fermer la liste des suggestions si l'utilisateur clique ailleurs que sur la liste
function closeSuggestionList(e) {
    if (!suggestionListWastes.contains(e.target) && !input.contains(e.target)) { //la liste sera fermée si l'utilisateur clique ailleurs que sur la liste ou sur l'unput
        suggestionListWastes.style.display = 'none';
    }
}
document.addEventListener('click', closeSuggestionList);


// Fonction pour afficher l'overlay du résultat de la recherche
function displayOverlay(title, description, response, composterPicture) {
    const overlayTitle = document.getElementById('overlayTitle');
    const overlayDescription = document.getElementById('overlayDescription');
    const overlayResponse = document.getElementById('overlayResponse');
    const overlayPicture = document.getElementById('overlayPicture');
    const resultOverlay = document.getElementById('resultOverlay');

    // Permet d'écrire dans l'overlay (l'overlay est vide dans le html) et modifier le texte selon le déchet trouvé:
    overlayTitle.innerText = title; // permet la mise à jour du titre
    overlayDescription.innerText = description; // permet la mise à jour de la description
    overlayResponse.innerText = response; // permet la mise à jour de la réponse
    overlayPicture.src = `./Images/${composterPicture}`; // permet la mise à jour de l'image

    // Affiche l'intérieur de l'overlay en colonne
    resultOverlay.style.display = 'flex';
    resultOverlay.style.flexDirection = 'column';
};

// Fonction qui permet de rechercher le déchet dans tabDechet et d'afficher l'overlay permettant à l'utilisateur de savoir où jeter le biodéchet.
function resultOfSearch(searchedWaste) {

    // Alerte mot non valide
    const regex = /^[A-Za-zÀ-ÿ\- ]{2,30}$/;
    if (!regex.test(searchedWaste.trim())) {
        alert("Le mot entré n'est pas valide. Il doit contenir uniquement des lettres ou tiret et faire entre 2 et 30 caractères.");

        return;
    }
    
    let adjustedWaste = adjustWrittingWord(searchedWaste);

    // Si une correction est trouvée, on l'utilise
    const finalWord = adjustedWaste || searchedWaste;

    // find() permet de parcourir le tableau tabDechet pour trouver le déchet entré par l'utilisateur et le nom du déchet sera stocké dans la variable foundWaste pour la condition suivante.
    const foundWaste = tabDechet.find(waste => {

        //déclaration des variables qui vont contenir les deux mots normalisés permettant ainsi de les comparer
        const enterWaste = normalizeWritting(finalWord); // utilisation de la fonction normalizeWritting() pour normaliser le déchet recherché. 
        const normalizeNameWaste = normalizeWritting(waste.name_waste); // utilisation de la fonction normalizeWritting() pour normaliser le nom des déchets dans le tableau

        return normalizeNameWaste === enterWaste; // retourne le nom du déchet trouvé dans tabDechet s'il est strictement identique au déchet entré par l'utilisateur et le stocke dans la variable.
    });

    if (foundWaste) { // une fois le déchet trouvé, il faut vérifier le nom du container qui lui est attribué
        // déclaration de la variable qui va stocker le nom du container du déchet trouvé
        const typeContainer = foundWaste.type_container;

        if (typeContainer.includes("Composteur et lombricomposteur")) {
            displayOverlay( //appel de la fonction qui va afficher l'overlay
                foundWaste.name_waste,
                "(en petits morceaux et/ou humidifiés pour nos amis les vers)",
                "✅ Convient au composteur et lombricomposteur",
                "compost-coeur.webp" // Image pour les deux composteurs
            );
        } else if (typeContainer.includes("Composteur")) {
            displayOverlay(
                foundWaste.name_waste,
                "Ne convient pas au lombricomposteur",
                "⚠️ Convient uniquement au composteur",
                "compost-okay.webp" // Image pour composteur uniquement
            );
        } else {
            displayOverlay(
                foundWaste.name_waste,
                "Ce déchet doit être jeté avec les ordures ménagères ou au recyclage s'il se recycle",
                "❌ Ne convient ni au composteur, ni au lombricomposteur",
                "compost-triste.webp" // Image pour non compostable
            );
        }
    } else {
        displayOverlay(
            searchedWaste, // Affichage du mot exacte tapé par l'utilisateur
            "❓",
            "Ce déchet m'est inconnu et va me demander quelques recherches plus approfondies. En attendant, le mieux est de le jeter dans la poubelle ordinaire ou au recyclage s'il se recycle.",
            "ver-perplexe.webp" // Image pour déchet inconnu
        );
    }
}


// Fonction pour valider la recherche avec la touche "Entrée" du clavier ou avec le bouton "Verifier"
function verifyWaste(event) {
    // Vérifie si l'utilisateur a appuyé sur "Entrée" ou a cliqué sur le bouton "Verifier"
    if (event.key === 'Enter' || event.type === 'click') {
        event.preventDefault(); //empeche la page de remonter

        // Vérifie si une seule suggestion est visible
        const suggestions = suggestionListWastes.querySelectorAll('li');

        let inputValue = input.value; // Ne pas mettre const car la variable change

        if (suggestions.length === 1) {
            inputValue = suggestions[0].innerText; // s'il n'y a qu'un déchet suggéré, on remplace le déchet recherché par la suggestion dans l'input
            input.value = inputValue; // Met aussi à jour l'input visuellement
            suggestionListWastes.style.display = 'none'; // La liste est cachée après avoir appuyé sur Entrée
        }

        if (inputValue === "") {
            return; // Si l'input est vide, cliquer sur "Vérifier" ne fait pas apparaître l'overlay
        } else {
            resultOfSearch(inputValue);  // sinon appel de la fonction de recherche
            input.blur(); //ferme le clavier sur mobile en retirant le focus de l’input
        }
    }
}
// Écouteur d'événements pour la touche "Enter" dans l'input
input.addEventListener('keydown', verifyWaste);

// Écouteur d'événements pour le clic sur le bouton de recherche
if (checkButton) {
    checkButton.addEventListener('click', verifyWaste);
}

// Fonction pour réinitialiser l'input quand il reçoit le focus
function resetInput() {
    input.value = ''; // Vide l'input de son texte précédent
    suggestionListWastes.style.display = ''; // Cache la liste des suggestions
}
input.addEventListener('focus', resetInput);

// Événement pour fermer l'overlay avec la croix
closeOverlayButton.addEventListener('click', (event) => {
    event.preventDefault(); // Empêche la page de remonter après la fermeture avec la croix
    resultOverlay.style.display = 'none'; // Cache l'overlay
});

// Événement pour fermer l'overlay avec un click en dehors de l'overlay
resultOverlay.addEventListener('click', (event) => {
    if (event.target == resultOverlay) {
        resultOverlay.style.display = 'none'; // Cache l'overlay
    }
});



//Fonctions mémo 
const noteList = document.querySelector('#noteList');
const noteInput = document.querySelector('#noteInput');
const addNoteButton = document.querySelector('#addNoteButton');

// les notes sont récupérées dans le localStorage
noteList.innerHTML = localStorage.getItem('listItems') || '';

// Ajouter un nouvel élément
function writteMemo() {

    const item = noteInput.value;

    if (item) {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        deleteButton.textContent = '❌';
        deleteButton.classList.add('deleteTask');

        const span = document.createElement('span');
        span.textContent = item;
        span.classList.add('item');

        // Elements assemblés et envoyés dans le DOM
        listItem.appendChild(deleteButton);
        listItem.appendChild(span);
        noteList.appendChild(listItem);

        // Mise à jour du localStorage
        localStorage.setItem('listItems', noteList.innerHTML);

        // Reset champ texte
        noteInput.value = '';
    };
};
addNoteButton.addEventListener('click', writteMemo);


// Gérer la suppression d'un élément
noteList.addEventListener('click', (event) => {
    if (event.target.classList.contains('deleteTask')) {
        const listItem = event.target.closest('li');

        if (listItem) {
            listItem.remove();

            // enregistrement dans le localstorage
            localStorage.setItem('listItems', noteList.innerHTML);
        }
    }
    // Rayer une note
    if (event.target.classList.contains('item')) {
        event.target.classList.toggle('crossedOutItem');

        // enregistrement dans le localstorage
        localStorage.setItem('listItems', noteList.innerHTML);
    }
});




// Fonction du clandrier
// Sélection des éléments DOM
const monthAndYear = document.querySelector('#monthAndYear');
const calendarDaysContainer = document.querySelector('#calendarDaysContainer');
const buttonPrev = document.querySelector('#calendarButtonPrev');
const buttonNext = document.querySelector('#calendarButtonNext');

// Initialisation des dates
const day = new Date();
let currentMonth = day.getMonth();
let currentYear = day.getFullYear();

// Noms des mois
const months = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

// Fonction pour générer le calendrier
function createCalendar(month, year) {
    // Efface le contenu précédent
    calendarDaysContainer.innerText = '';

    // Calculs des dates
    const firstDay = new Date(year, month, 1).getDay();
    const currentDayInMonth = new Date(year, month + 1, 0).getDate();
    const dayOfPrevMonth = new Date(year, month, 0).getDate();
    const startDay = firstDay === 0 ? 6 : firstDay - 1;

    // Afficher le mois et l'année
    monthAndYear.innerText = `${months[month]} ${year}`;

    let date = 1; // Premier jour du mois actuel
    let dayOfNextMonth = 1; // Premier jour du mois suivant

    // Génération des lignes du calendrier
    for (let i = 0; i < 6; i++) { // Maximum 6 semaines
        const line = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            const cellCalendar = document.createElement('td');

            if (i === 0 && j < startDay) {
                // Jours du mois précédent
                const prevDate = dayOfPrevMonth - startDay + j + 1;
                cellCalendar.innerText = prevDate;
                cellCalendar.classList.add('prevAndNextMonth');

            } else if (date > currentDayInMonth) {
                // Jours du mois suivant
                cellCalendar.innerText = dayOfNextMonth++;
                cellCalendar.classList.add('prevAndNextMonth');

            } else {
                // Jours du mois actuel
                cellCalendar.innerText = date;

                // Mettre en surbrillance le jour actuel
                if (
                    date === day.getDate() &&
                    month === day.getMonth() &&
                    year === day.getFullYear()
                ) {
                    cellCalendar.classList.add('day');
                }

                // Appel de la fonction openOverlay() qui va ouvrir l'overlay lorsque une date est sélectionnée
                cellCalendar.addEventListener("click", function () {
                    // Ici, "this" fait référence à la cellule cliquée (ne fonctionne pas avec une fonction fléchée)
                    const selectedDate = `${this.innerText}/0${month + 1}/${year}`;

                    openOverlay(selectedDate);
                });

                date++;
            }

            line.appendChild(cellCalendar);
        }
        calendarDaysContainer.appendChild(line);
    }
}

// Appel de la fonction createCalendar() pour la création du calendrier
createCalendar(currentMonth, currentYear);


// Gestion de l'overlay de la liste de tâches du calendrier
const overlayListTask = document.getElementById("overlayListTask");
const dateOfTask = document.getElementById("dateOfTask");
const closeOverlayListButton = document.getElementById("closeOverlayListButton");

function openOverlay(selectedDateOfCalendar) {
    dateOfTask.innerText = `Tâches pour le ${selectedDateOfCalendar}`;
    overlayListTask.style.display = "flex";
}

function closeOverlay(e) {
    // Clique sur la croix OU sur le fond sombre
    if (
        e.target === overlayListTask || // clic sur le fond
        e.target === closeOverlayListButton // clic sur le bouton X
    ) {
        overlayListTask.style.display = "none";
    }
}
overlayListTask.addEventListener("click", closeOverlay);
closeOverlayListButton.addEventListener("click", closeOverlay);


// Navigation entre les mois
buttonPrev.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    createCalendar(currentMonth, currentYear);
});

buttonNext.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    createCalendar(currentMonth, currentYear);
});
