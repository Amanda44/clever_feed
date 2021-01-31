Pas mal de galères au début pour installer le projet avec create-react-app car mes versions de node et npm étaient pas à jour
Pas l'habitude de dev sous windows mais sous ubuntu donc temps de prise en main (je déteste le powershell :c )
P'tit pb pour accéder à l'app via l'appli Expo sur android mais réglé avec l'installation d'adb pour une connexion en mode tunnel 

Maintenant que l'app est installée et poussée sur github, je passe à la connexion à l'API 
 install de Reactotron pour debug [MARCHE PAS :c]

 Connexion API OK, on essaye de mettre l'API KEY dans un .env caché

 Petits wireframes à la mano

 Ecran de Login

 Ecran Homescreen et mise en place de la navigation 

 Appel du détail d'un article au clic d'un titre
 L'api est mal foutue car les objets json ne possèdent pas d'id unique... haaaa
 Du coup on fait un unique appel API au mount du component Home et on passe l'objet d'un article directement dans les paramètres de route.
 J'avais pensé à stocker mon tableau d'objets et procéder par index pour l'identification mais cela voudrait dire qu'on aurait pas les dernières infos à jour (avec éventuellement un bouton de mise à jour sur le Home pour avoir les dernières news mais cela impacte l'UX de l'app)
 Tout simplement la prochaine fois je prendrais le temps d'étudier plus en détails l'api que je veux utiliser... Si j'avais eu le temps j'aurais changé d'api pour celle des pokémons car au moins elle identifie ses objets de manière unique...

 menu drawer pour afficher un profil avec une tuile en premier plan

 externaliser les appels api dans un autre dossier 

 Faire un serveur node/ express à déployer avec heroku ou vercel pour l'authent

 Truc chouettes à rajouter :
 une icone de chargement tant que l'image n'est pas affichée