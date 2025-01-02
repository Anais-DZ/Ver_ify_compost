//menu en rideau
document.addEventListener('DOMContentLoaded', () => {
    // Lazy loading d'un script externe si nécessaire
    const script = document.createElement('script');
    script.src = 'lazy-script.js'; // Charge un script externe optionnel
    document.body.appendChild(script);
  
    // Sélection des éléments nécessaires
    const burgerButton = document.querySelector(".menu_toggler");
    const leftMenu = document.querySelector(".left_menu");
  
    const userButton = document.querySelector("#user_button");
    const connexion = document.querySelector(".right_menu");
  
    // Gestion des événements pour le menu burger
    burgerButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
      toggleMenu();
    });
  
    // Gestion des événements pour le menu utilisateur
    userButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
      toggleUser();
    });
  
    // Gestion des clics en dehors des menus
    document.addEventListener("click", (event) => {
      // Vérifie si le clic est à l'extérieur des menus et boutons
      if (!leftMenu.contains(event.target) && !burgerButton.contains(event.target)) {
        closeMenu();
      }
  
      if (!connexion.contains(event.target) && !userButton.contains(event.target)) {
        closeUser();
      }
    });
  
    // Fonction pour basculer l'état du menu burger
    function toggleMenu() {
      // Ferme le menu utilisateur si ouvert
      closeUser();
  
      // Basculer l'état du menu gauche
      burgerButton.classList.toggle("active");
      leftMenu.classList.toggle("active");
    }
  
    // Fonction pour basculer l'état du menu utilisateur
    function toggleUser() {
      // Ferme le menu gauche si ouvert
      closeMenu();
  
      // Basculer l'état du menu utilisateur
      connexion.classList.toggle("active");
  
      if (connexion.classList.contains("active")) {
        // Si la classe "active" est présente
        userButton.setAttribute("src", "./Icones/close.png");
      } else {
        // Sinon
        userButton.setAttribute("src", "./Icones/user.png");
      }
    }
  
    // Fonction pour fermer le menu burger
    function closeMenu() {
      burgerButton.classList.remove("active");
      leftMenu.classList.remove("active");
    }
  
    // Fonction pour fermer le menu utilisateur
    function closeUser() {
      connexion.classList.remove("active");
      userButton.setAttribute("src", "./Icones/user.png");
    }
  });
  