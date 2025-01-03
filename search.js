//en attendant le cours sur la Base De Données, quelques déchets pour faire tester le site 
const compostables = [
    { name: "Coquilles d'oeuf", types: ["composteur", "lombricomposteur"] },
    { name: "Boîte d'oeufs sans encre", types: ["composteur", "lombricomposteur"] },
    { name: "Coquilles de noix", types: ["composteur"] },
    { name: "Pelures de banane", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de carotte", types: ["composteur", "lombricomposteur"] },
    { name: "Marc de café", types: ["composteur", "lombricomposteur"] },
    { name: "Peaux d'orange", types: ["composteur"] },
    { name: "Fanes de radis", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de pomme", types: ["composteur", "lombricomposteur"] },
    { name: "Ail", types: ["composteur"] },
    { name: "Échalottes", types: ["composteur"] },
    { name: "Piment", types: ["composteur"] },
    { name: "Agrûmes", types: ["composteur"] },
    { name: "Carton sans encre", types: ["composteur", "lombricomposteur"] },
    { name: "Tontes de pelouse", types: ["composteur"] },
    { name: "Feuilles mortes", types: ["composteur", "lombricomposteur"] },
    { name: "Fleurs fanées", types: ["composteur", "lombricomposteur"] },
    { name: "Sciure de bois (non traité)", types: ["composteur"] },
    { name: "Cendres de bois (en petites quantités)", types: ["composteur"] },
    { name: "Fanes de carottes", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de pommes de terre", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de courgettes", types: ["composteur", "lombricomposteur"] },
    { name: "Peaux de kiwi", types: ["composteur"] },
    { name: "Peaux de mangue", types: ["composteur"] },
    { name: "Sachets de thé (sans agrafe)", types: ["composteur", "lombricomposteur"] },
    { name: "Mouchoirs en papier", types: ["composteur", "lombricomposteur"] },
    { name: "Essuie-tout", types: ["composteur", "lombricomposteur"] },
    { name: "Boîtes en carton brun (sans encre)", types: ["composteur", "lombricomposteur"] },
    { name: "Terre d’anciennes plantes", types: ["composteur"] },
    { name: "Fruits abîmés", types: ["composteur", "lombricomposteur"] },
    { name: "Légumes abîmés", types: ["composteur", "lombricomposteur"] },
    { name: "Plumes", types: ["composteur"] },
    { name: "Cheveux", types: ["composteur"] },
    { name: "Peaux de melon", types: ["composteur"] },
    { name: "Reste de salade", types: ["composteur", "lombricomposteur"] },
    { name: "Épluchures de poire", types: ["composteur", "lombricomposteur"] },
    { name: "Peaux de pêche", types: ["composteur", "lombricomposteur"] },
    { name: "Trognons de pommes", types: ["composteur", "lombricomposteur"] }

];

const nonCompostables = [
    "Coquilles de moules",
    "Coquilles de crustacés",
    "Viande",
    "Restes de nourriture",
    "Verre",
    "Papier journal",
    "Croûtes de fromage",
    "Produit laitier",
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
function showResultOverlay(title, description, status, iconPath) {
    const overlayTitle = document.getElementById('overlay-title');
    const overlayDescription = document.getElementById('overlay-description');
    const overlayStatus = document.getElementById('overlay-status');
    const overlayIcon = document.getElementById('overlay-image');
    

    // Met à jour les contenus dynamiques de l'overlay
    overlayTitle.textContent = title;
    overlayDescription.textContent = description;
    overlayStatus.textContent = status;
    overlayIcon.src = `./Images/${iconPath}`; // Met à jour l'icône

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
                'Convient uniquement au composteur',
                'Composteur_okay.png' // Icône pour composteur   
            );

        } else {
            const types = compostableItem.types.join(' et ');
            showResultOverlay(
                `${biodechet}`,
                '(en petits morceaux et/ou humidifiés pour nos amis les vers)',
                `Convient au ${types.toLowerCase()}`,
                'Compost_coeurs.png' // Icône pour lombricomposteur   
            );
        }
        
    } else if (nonCompostables.some(item => item.toLowerCase() === formattedBiodechet)) {
        showResultOverlay(
            `${biodechet}`,
            "Ce déchet doit être jeté avec les ordures ménagères ou au recyclage s'il se recycle",
            'Ne convient ni au composteur, ni au lombricomposteur',
            'Composte_triste.png' // Icône pour non compostable 
        );

    } else {
        showResultOverlay(
            `${biodechet}`,
            "",
            "Ce déchet va me demander quelques recherches plus approfondies. En attendant, le mieux est de le jeter dans la poubelle ordinaire ou au recyclage s'il se recycle.",
            'ver_perplexe.png' // Icône pour déchet inconnu 
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

