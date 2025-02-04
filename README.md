# Présentation du projet "Ver'ify Compost"

"Ver'ify Compost" est un projet de site web mobile lancé fin octobre dans le cadre de ma formation en développement web. Il s'agit d'un projet évolutif qui s'étendra tout au long de mon parcours d'apprentissage.

Actuellement, un prototype dynamique est disponible sur mon [Figma](https://www.figma.com/design/I3VE2n0b4SOG1q0VF3Tl2E/Projet-Ver'ify-Compost?node-id=631-1717&p=f&t=K11yaDICjozdfypa-0), offrant un aperçu des fonctionnalités et du design envisagés de mon future site web. Ce dernier évoluera en fonction des langages et technologies que je vais apprendre (actuellement HTML/CSS/JavaScript).

L'objectif principal du site est de faciliter le tri des déchets compostables pour les utilisateurs de composteurs et de lombricomposteurs, en mettant en avant des informations claires, rapides et pratiques. Par ailleurs, l’aspect écologique est au cœur de ce projet : "Ver'ify Compost" vise à sensibiliser les utilisateurs à une gestion durable des biodéchets tout en promouvant des pratiques respectueuses de l’environnement.

Ce projet est une opportunité idéale pour concilier mes préoccupations environnementales avec mon apprentissage technique, tout en répondant à un besoin concret.

Le site est maintenant accessible en ligne (en mobile first pour le moment), [Ver'ify Compost](https://ver-ify-compost.vercel.app/) , en étant toujours en cours de développement. Il me sert principalement à avoir une vision concrète de l'avancement et des fonctionnalités à venir. Certaines pages peuvent être incomplètes ou en travaux. Merci pour votre compréhension et n'hésitez pas à revenir régulièrement pour suivre les avancés ! :blush:

<br/>Update ! 02 février 2025 --> La page "Mon compte" est accessible mais seulement en prototype en attendant le back-end. Le menu de gauche apparaît maintenant sur les écrans de plus de 1000px.

<br/>Update ! 31 janvier 2025 --> Une page de plus ! Il est possible dorénavant d'aller sur la page "Conseils et entretien" et de cliquer sur n'importe quel conseil pour voir apparaître du texte sur la même page grâce à la balise <détails>.

<br/>Update ! 14 janvier 2025 --> La prise de note est possible sur le calendrier grâce au localStorage (la prise de note se fait toujours par la boîte de dialogue du navigateur).

<br/>Update ! 12 janvier 2025 --> Le mémo fonctionne à nouveau sans conflit avec d'autres éléments de la page. Il est possible d'y ajouter une note, de la rayer en cliquand dessus ou de la supprimer en cliquand sur la croix.
<br/>Le front-end des pages "inscription", "initialisation" et "contact" sont terminées (HTML, CSS et JS) :
- Les fonction pour les formulaires effectuent plusieurs validations sur le formulaire en vérifiant les saisies des utilisateurs, en affichant des messages d’erreur si les conditions ne sont pas respectées, et en activant ou désactivant le bouton de soumission en fonction des saisies.
- La fonction **mDpVisible** contrôle la visibilité des mots de passe dans le formulaire en fonction de l'état de checkbox du formulaire. Lorsque la checkbox est cochée, les champs de mot de passe deviennent visibles. Sinon, ils restent masqués.

<br/>Update ! 06 janvier 2025 --> Le mémo fonctionne mais il y a conflit avec le carrousel : une croix apparaît aussi pour le carrousel et supprime les slides, ce qui n'est pas voulu 😅 + léger scroll horizontale. À rectifier prochainement.


<br/>Update ! 04 janvier 2025 --> La liste des déchets est plus complète. Ajout d'un calendrier où il est possible d'entrer une note pour un jour particulier (l'enregistrement de cette note n'est pas encore fonctionnelle). Le site est utilisable sauf pour l'inscription, la connexion et l'envoi de message (en développement)


<br/>Update ! 30 décembre 2024 --> ajout suggestions de déchets et aide au tri avec du JavaScript. La fonction principale du site est en place ! :) (toujours en mobile first)


<br/>Update ! 28 décembre 2024 --> ajout de menus rideaux avec JavaScript
