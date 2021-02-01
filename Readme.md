# Clever FEED - Test technique

## Méthodologie
* Mise à jour de mon environnement de dev (nodejs, npm, etc)
* Réflexion sur le choix de l'API
    * Je choisis l'API de news car je me dis que cela permettra de faire une UI un peu plus sobre qui sera similaire à un projet client 
* Initialisation du projet avec CRNA et Expo
* Création du repo Github (j'ai tout poussé sur une branche étant donné que je travaillais solo sur le projet et qu'il n'y avait pas beaucoup de fonctionnalités. Sinon je travaille en feature branch habituellement) 
* Je fais des wireframes express sur papier car pas besoin de prototype pour ce projet
* J'installe la librairie axios et je teste la connexion à l'API
* Je créé mes écrans de Login et de Home pour commencer à mettre en place la navigation
* J'appelle ma liste d'articles dans mon Home et j'essaie de gérer la navigation vers le détail d'un article (voir blocage n°2)
* Je refacto mon archi de routing pour gérer les nested navigators avec react-navigation, ce qui me permet de créer le drawer menu avec des infos custom
* Je clean mon code
* Je créé une palette sur adobe CC et je fais l'UI 
* Je teste mon appli 

## Blocages

1. Globalement j'ai perdu beaucoup de temps à régler des problèmes d'environnement avec Windows et Expo (normalement je travaille sous linux avec Ignite). Donc c'était assez frustrant (mais j'ai appris plein de choses !).
2. Je me suis rendu compte que trop tard que l'api News était loin d'être optimisée... Les objets ne contiennent pas d'id unique et il n'y a aucun endpoint qui permet de récupérer un objet à la fois. J'ai donc dû faire un unique call dans le Homescreen pour récupérer une vingtaine d'objets. Pour accéder à un article j'ai dû passer en paramètre de navigation l'objet entier... Bon c'était vraiment pas propre à faire mais je n'avais pas trop le choix.
4. J'ai eu du mal sur les nested navigators avec la librairie react-navigation, qui a pas mal changé de la version 4 à la 5, donc ce n'est peut être pas optimal.
3. Je n'ai pas eu le temps de faire la partie sur l'authentification avec le script nodejs déployé. C'est quelque chose que je n'ai jamais fait mais dans l'idée j'aurais créé un serveur avec Express avec un point d'API POST qui m'aurait permis d'envoyer les logs côté React Native avec Axios. 

## Améliorations de l'app

* Technique
    * Gérer les appels API en dehors des components
    * Gérer davantage les erreurs 
    * Mettre en place des tests
    * Optimiser l'affichage des images
    * Formater la date de publication d'un article
    * Styliser le header et le drawer menu
* Fonctionnel
    * Ajouter un SplashScreen avant la page de Login
    * Inscription
    * Fonctionnalité Mot de passe oublié
    * Searchbar 
    * Filtrer par catégorie
    * Modification du profil
    * Ajout de marque-page/favoris
    * etc..

## Améliorations de ma méthodo

* J'ai passé beaucoup de temps sur des choses mineures mais je préférais autant ne pas réaliser tout le test mais de ce que j'ai créé, le faire bien. 
* J'aurais dû regarder plus en détails la doc de l'API avant de me lancer dans le projet
