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


//fonction pour suggestion dynamique quand l'utilisateur commence à rentrer le nom d'un biodéchet

 // Liste des biodéchets pour la suggestion
 const biodéchets = [
    "Coquilles d'œuf",
    "Coquilles de noix",
    "Coquilles de moules",
    "Coquilles de crustacés",
    "Pelures de banane",
    "Épluchures de carotte",
    "Marc de café",
    "Peaux d'orange",
    "Fanes de radis",
  ];

  const input = document.getElementById('biodéchet');
  const suggestionsList = document.getElementById('suggestions');

  input.addEventListener('input', function () {
    const query = input.value.toLowerCase();
    suggestionsList.innerText = ''; // Réinitialise la liste avant de générer les nouvelles suggestions

    if (query) {
      // Filtrer les suggestions
      const matches = biodéchets.filter(item => item.toLowerCase().includes(query));
      if (matches.length > 0) {
        suggestionsList.style.display = 'block';
        matches.forEach(match => {
          const li = document.createElement('li');
          li.textContent = match;
          li.addEventListener('click', function () {
            input.value = match; // Remplit le champ avec la suggestion cliquée
            suggestionsList.style.display = 'none'; // Masque les suggestions après sélection
          });
          suggestionsList.appendChild(li);
        });
      } else {
        suggestionsList.style.display = 'none';
      }
    } else {
      suggestionsList.style.display = 'none';
    }
  });

  // Masquer la liste si l'utilisateur clique ailleurs
  document.addEventListener('click', function (event) {
    if (!input.contains(event.target) && !suggestionsList.contains(event.target)) {
      suggestionsList.style.display = 'none';
    }
  });