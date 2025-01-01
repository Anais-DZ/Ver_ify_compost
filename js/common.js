//menu en rideau
const burgerButton = document.querySelector(".menu_toggler");
const leftMenu = document.querySelector(".left_menu");

const userButton = document.querySelector("#user_button");
const connexion = document.querySelector(".right_menu");

burgerButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
    toggleMenu();
});
userButton.addEventListener("click", (event) => {
    event.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
    toggleUser();
});

document.addEventListener("click", (event) => {
    // Vérifie si le clic est à l'extérieur des menus et boutons
    if (!leftMenu.contains(event.target) && !burgerButton.contains(event.target)) {
        closeMenu();
    }

    if (!connexion.contains(event.target) && !userButton.contains(event.target)) {
        closeUser();
    }
});

function toggleMenu() {
    // Ferme le menu utilisateur si ouvert
    closeUser();

    // Basculer l'état du menu gauche
    burgerButton.classList.toggle("active");
    leftMenu.classList.toggle("active");
}

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

function closeMenu() {
    burgerButton.classList.remove("active");
    leftMenu.classList.remove("active");
}

function closeUser() {
    connexion.classList.remove("active");
    userButton.setAttribute("src", "./Icones/user.png");
}




// fonction pour ouvrir et fermer les menus mais les menus restent ouvert en même temps
// const burgerButton = document.querySelector(".menu_toggler");
// const leftMenu = document.querySelector(".left_menu");

// const userButton = document.querySelector("#user_button");
// const connexion = document.querySelector(".right_menu");

// burgerButton.addEventListener("click", (event) => {
//     event.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
//     toggleMenu();
// });
// userButton.addEventListener("click", (event) => {
//     event.stopPropagation(); // Empêche la propagation pour éviter la fermeture immédiate
//     toggleUser();
// });

// document.addEventListener("click", (event) => {
//     // Vérifie si le clic est à l'extérieur des menus et boutons
//     if (!leftMenu.contains(event.target) && !burgerButton.contains(event.target)) {
//         // Ferme le menu gauche
//         burgerButton.classList.remove("active");
//         leftMenu.classList.remove("active");
//     }

//     if (!connexion.contains(event.target) && !userButton.contains(event.target)) {
//         // Ferme le menu utilisateur
//         connexion.classList.remove("active");
//         userButton.setAttribute("src", "./Icones/user.png");
//     }
// });

// function toggleMenu() {
//     burgerButton.classList.toggle("active");
//     leftMenu.classList.toggle("active");
// }

// function toggleUser() {
//     connexion.classList.toggle("active");

//     if (connexion.classList.contains("active")) {
//         // Si la classe "active" est présente
//         userButton.setAttribute("src", "./Icones/close.png");
//     } else {
//         // Sinon
//         userButton.setAttribute("src", "./Icones/user.png");
//     }
// }






/* à voir plus tard. Reproduire le header et footer dynamiquement sur chaque page*/


/*let entete = document.getElementById("entete");
while (entete.firstChild) {
    entete.removeChild(entete.firstChild);
}*/



/*<nav id="entete">
<div class="left_menu">
    <a href="index.html" alt="accueil">Accueil</a>
    <a href="#" alt="calendrier_memo">Calendrier & Mémo</a>
    <a href="#" alt="guide_entretien">Guide d'entretien</a>
    <a href="liens.html" alt="liens_ressources">Liens & Ressources</a>
    <a href="contact.html" alt="contact"> Contact</a>
    <a href="#" alt="profil">Profil</a>
    <a id="deconnexion" href="#" alt="deconnexion"><img src="./Icones/off.png" alt="deconnexion">Déconnexion</a>
</div>
<button type="button" aria-label="toggle left menu" class="menu_toggler">
    <span class="line l1"></span> <!--span dans un bouton, oui mais div dans un bouton, non-->
    <span class="line l2"></span>
    <span class="line l3"></span>
</button>
<img id="calendar" src="./Icones/calendar.png" title="Calendrier" alt="Logo calendrier">
<form method="post" action="monProgramme.php">
    <fieldset class="connexion">
        <div>
            <label for="name">Votre identifiant</label>
            <input type="text" name="identifiant" placeholder="Entrez votre identifiant" minlength="2" maxlength="25" id="name" required>
        </div>
        <div>
            <label for="password_1">Votre mot de passe</label>
            <input type="password" name="password" placeholder="(8 caractères minimum)" minlength="2" maxlength="25" id="password_1" required>
        </div>
        <div class="checkbox_container">
            <input type="checkbox" id="checkbox" checked />
            <label for="checkbox">Rester connecté·e</label>
        </div>
        <button type="submit">Se connecter</button>
        <p>Nouvel·le arrivant·e ?
            Par <a href="inscription.html" alt="lien_page_inscription">ici !</a></p>
        <a id="forgetten_password" href="connexion.html" alt="reinitialisation_mot_de_passe">Mot de passe oublié ?</a>
    </fieldset>
</form>
<img id="user_button" src="./Icones/user.png" title="Connexion" alt="Logo utilisateur">
</nav>*/