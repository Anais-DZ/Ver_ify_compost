# Présentation du projet "Ver'ify Compost"

Le site est accessible en ligne, [Ver'ify Compost](https://verify-compost.vercel.app/)

L'objectif principal du site est de faciliter le tri des déchets compostables pour les utilisateurs de composteurs et de lombricomposteurs, en mettant en avant des informations claires, rapides et pratiques. Par ailleurs, l’aspect écologique est au cœur de ce projet : "Ver'ify Compost" vise à sensibiliser les utilisateurs à une gestion durable des biodéchets tout en promouvant des pratiques respectueuses de l’environnement.

L'utilisation du site est simple et intuitive pour correspondre à un grand nombre de personnes, débutantes ou curieuses du compostage, adeptes des technologies ou non. Un nom de déchet entré dans la barre de recherche, un clic et la réponse apparaît dans un overlay. Rapide et simple ! 

Bon compostage !

🌱
                  
<br/>                

"Ver'ify Compost" est un projet de site web mobile lancé fin octobre dans le cadre de ma formation en développement web. Il s'agit d'un projet évolutif qui s'étendra tout au long de mon parcours d'apprentissage et voir même bien après.
Un prototype dynamique est disponible sur mon [Figma](https://www.figma.com/design/I3VE2n0b4SOG1q0VF3Tl2E/Projet-Ver'ify-Compost?node-id=631-1717&p=f&t=K11yaDICjozdfypa-0), offrant un aperçu des fonctionnalités et du design.

<br/>Update ! 16 avril 2025 --> Plus de tableau en JavaScript dans mon script ! J'ai intégré une API, API que j'ai codé pour avoir tous les noms de déchets possibles et leurs composteurs (API que vous pouvez retrouver ici [API Waste](https://api-waste.onrender.com/)) me permettant de les récupérer dans ma base de données et de remplir mon tableau.

<br/>Update ! 16 avril 2025 --> 
- La page contact est active (vous pouvez me laisser un message si vous le souhaitez 😉) : [Ver'ify Compost | Contact](https://verify-compost.vercel.app/contact.html)
- Suppression des pages en construction ("inscription", "initialisation", "connexion") pour un site plus clair. Ces pages seront à nouveau sur le site quand la création de compte utilisateur sera nécessaire pour accéder à d'autres fonctionnalités.

<br/>Update ! 8 avril 2025 --> Amélioration de la recherche des déchets :
- ajout d'une fonction pour trouver le déchet même si l'utilisateur entre le mot avec une faute et/ou au pluriel.
- s'il y a un seul déchet suggéré quand l'utilisateur commence à taper un mot, il n'a pas besoin d'écrire le mot entier mais seulement de cliquer sur la touche "Entrée" pour avoir la réponse.
    
<br/>Update ! 16 mars 2025 --> Amélioration de la recherche des déchets :
- les suggestions dans la liste lors de la recherche s'affiche dans l'ordre alphabétique
- pour afficher le résultat, il est autant possible d'appuyer sur la touche Entrée que sur le bouton "Vérifier"
- lorsqu'on clique sur un déchet suggéré, cela affiche directement le résultat pour économiser quelques clicks

<br/>Update ! 07 février 2025 --> Le responsive pour les écrans 760px minimum est là ! 😄 La page de connexion n'est pas encore active.

<br/>Update ! 02 février 2025 --> La page "Mon compte" est accessible mais seulement en prototype en attendant le back-end. Le menu de gauche apparaît maintenant sur les écrans de plus de 1000px.

<br/>Update ! 31 janvier 2025 --> Une page de plus ! Il est possible dorénavant d'aller sur la page "Conseils et entretien" et de cliquer sur n'importe quel conseil pour voir apparaître du texte sur la même page grâce à la balise <détails>.

<br/>Update ! 12 janvier 2025 --> Le mémo fonctionne à nouveau sans conflit avec d'autres éléments de la page. Il est possible d'y ajouter une note, de la rayer en cliquand dessus ou de la supprimer en cliquand sur la croix.

<br/>Le front-end des pages "inscription", "initialisation" et "contact" sont terminées (HTML, CSS et JS) :
- Les fonction pour les formulaires effectuent plusieurs validations sur le formulaire en vérifiant les saisies des utilisateurs, en affichant des messages d’erreur si les conditions ne sont pas respectées, et en activant ou désactivant le bouton de soumission en fonction des saisies.
- La fonction **mDpVisible** contrôle la visibilité des mots de passe dans le formulaire en fonction de l'état de checkbox du formulaire. Lorsque la checkbox est cochée, les champs de mot de passe deviennent visibles. Sinon, ils restent masqués.

<br/>Update ! 06 janvier 2025 --> Le mémo fonctionne mais il y a conflit avec le carrousel : une croix apparaît aussi pour le carrousel et supprime les slides, ce qui n'est pas voulu 😅 + léger scroll horizontale. À rectifier prochainement.


<br/>Update ! 04 janvier 2025 --> La liste des déchets est plus complète. Ajout d'un calendrier où il est possible d'entrer une note pour un jour particulier (l'enregistrement de cette note n'est pas encore fonctionnelle). Le site est utilisable sauf pour l'inscription, la connexion et l'envoi de message (en développement)


<br/>Update ! 30 décembre 2024 --> ajout suggestions de déchets et aide au tri avec du JavaScript. La fonction principale du site est en place ! 😄 (toujours en mobile first)


<br/>Update ! 28 décembre 2024 --> ajout de menus rideaux avec JavaScript
