// Exercice  avec les fonctions des tableaux

// Instructions

// 1. charger le fichier "data.json" tip : xmlHttpRequest
// 2. ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()
// 3. classer l'odre du tableau selon les scores tip : arr.sort()
// 4. mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) tip : forEach() les catgories sont des tableaux
// 5. compter combien de personne viennent du "Bahrain" tip : filter()
// 6. afficher le plus grand score dans la console tip : sort()
// 7. afficher le plus petit score tip : sort()

// Ressources :
//
// generate data
// XMLHttpRequest
// you might not need jquery
// Array methods

//Code

// 1. charger le fichier "data.json" tip : xmlHttpRequest

let req = new XMLHttpRequest(); // On crée une nouvelle requête de XMLHttpRequest en l'appelant comme une fonction. Elle retourne un objet que l'on enregistre dans une variable que on a appelé req
req.open('get', 'https://raw.githubusercontent.com/becodeorg/Lovelace-promo-2/master/Parcours/JavaScript/11-AJAX/files/data.json', true); // On prépare la requête avec la méthode open qui prend comme paramètres 1.la méthode d'envoi des données (GET (via url), POST, ou HEAD (uniquement en-tête)), 2.l'url du fichier que l'on veut charger et 3. un bolléen indiquant qu'il s'agit d'un requête de type asynchrone (continue à exécuter le script en attendant de recevoir les données demandées au serveur dans la requête)
req.send(); // La requête est prête on l'envoie avec la méthode send()
req.onload = function ()// avec onload on demande d'exécuter cette fonction lorsque le fichier sera chargé pour vérifier si tout s'est bien passé
  {
    //la propriété readyState permet de connaitre l'état de la requête. On veut vérifier si l'état de la requête correspond bien à la constante DONE indiquant que toutes les données ont bien été réceptionnées.
    // On vérifie également le status de la requête avec .statut qui renvoie un code correspondant à un statut. Le code indiquant que tout s'est bien passé est 200. Attention ce code n'est valable que lorsque l'on travaille avec un serveur.
    // Si on travaille en local, si tout s'est bien passé, le code renvoyé sera 0, on peut donc l'ajouter lorsque l'on travaille en local (grâce à l'opérateur logique || qui veut dire OU (si l'une des conditions est remplie alors il renverra true))
    // Mais il faudra le retirer lorsque l'on travaille avec serveur car alors 0 correspond à un code d'erreur.
    if (req.readyState === XMLHttpRequest.DONE && (req.status === 200 || req.status === 0))
      {
          let reponse = req.responseText; // on crée une variable reponse dans laquelle on va stocker les données reçue sous forme de texte grâce à la propriété responseText (fournit les données sous forme d'une chaine de caractère)
          console.log (reponse);// affichage des données récupérées au format chaine de caractères
          let reponse_JSON = JSON.parse(reponse); // on va à présent convertir les données reçue sous forme de texte en JSON pour pouvoir les manipuler. On crée un variable pour stocker reponse_JSON pour stocké les données converties et on utilise JSON.parse(données_à _convertir) pour convertir les données reçues au format texte en JSON. On peut récupérer le contenu de la variable reponse_JSON et agir sur les données converties en objets JSON.
          console.log (reponse);
          console.log (reponse_JSON);
          console.log ("Coucou je m'affiche dans la console Firefox !");
          manipulation_donnees(reponse_JSON); // On réalise une fonction pour réaliser toutes les opérations de l'exercice dans une fonction et rendre le code plus lisible.
      }
    else {
      console.log("Une erreur s'est produite lors du processus de réception des données !");
    }
  }

// On crée un fonction manipulation_données qui va effectuer les différentes opérations demandées dans l'exercice. On lui mettra en paramètre la variable reponse_JSON(les données recueillies sous forme de texte et converties en JSON)
// fonction manipulation_données()
// {
//   // 2. ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()
//
// }
