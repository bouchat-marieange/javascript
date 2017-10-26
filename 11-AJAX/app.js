// ATTENTION : // Pas terminé et disfonctionnement par régler. A reprende plus tard lorsque j'aurai plus de temps. Nettoyer le code et commentaires plus concis. variable mieux nommées pour la compréhension. Mettre toutes les opérations à effectuer dans une seule fonction


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

//On crée un bouton qui permettra d'afficher les infos sur la page web lors du click de l'utilisateur sur le bouton
// var btn = document.getElementById("btn"); // On crée un variable qui cible notre bouton dans la page html grâce à son id
//
// // On crée une action qui se déroulera uniquement quand on cliquer sur le bouton, ici on couper et coller la totalité de notre code à l'intérieur des parenthèse de cette fonction pour que toutes les actions de l'exercice s'affiche au click sur le bouton.
// btn.addEventListener("click", function()
// {
//   // On peut placer l'ensemble du code ici si on souhaite qu'il s'exécute uniquement quand on clique sur le bouton et pas au chargement de la page
// });

// On déclare une variable qui stocke l'endroit dans l'html où on doit afficher du contenu à la volée grâce à javascript
var affichage = document.getElementById("afficher");

// 1. charger le fichier "data.json" tip : xmlHttpRequest

let req = new XMLHttpRequest(); // On crée une nouvelle requête de XMLHttpRequest en l'appelant comme une fonction. Elle retourne un objet que l'on enregistre dans une variable que on a appelé req
req.open('get', 'https://raw.githubusercontent.com/becodeorg/Lovelace-promo-2/master/Parcours/JavaScript/11-AJAX/files/data.json', true); // On prépare la requête avec la méthode open qui prend comme paramètres 1.la méthode d'envoi des données (GET (via url), POST, ou HEAD (uniquement en-tête)), 2.l'url du fichier que l'on veut charger et 3. un bolléen indiquant qu'il s'agit d'un requête de type asynchrone (continue à exécuter le script en attendant de recevoir les données demandées au serveur dans la requête)
req.onload = function ()// avec onload on demande d'exécuter cette fonction lorsque le fichier sera chargé pour vérifier si tout s'est bien passé
  {
    //la propriété readyState permet de connaitre l'état de la requête. On veut vérifier si l'état de la requête correspond bien à la constante DONE indiquant que toutes les données ont bien été réceptionnées.
    // On vérifie également le status de la requête avec .statut qui renvoie un code correspondant à un statut. Le code indiquant que tout s'est bien passé est 200. Attention ce code n'est valable que lorsque l'on travaille avec un serveur.
    // Si on travaille en local, si tout s'est bien passé, le code renvoyé sera 0, on peut donc l'ajouter lorsque l'on travaille en local (grâce à l'opérateur logique || qui veut dire OU (si l'une des conditions est remplie alors il renverra true))
    // Mais il faudra le retirer lorsque l'on travaille avec serveur car alors 0 correspond à un code d'erreur.
    // if (req.readyState === XMLHttpRequest.DONE && (req.status === 200 || req.status === 0))
    //   {
          let reponse = req.responseText; // on crée une variable reponse dans laquelle on va stocker les données reçue sous forme de texte grâce à la propriété responseText (fournit les données sous forme d'une chaine de caractère)
          console.log (reponse);// affichage des données récupérées au format chaine de caractères
          let data = JSON.parse(reponse); // on va à présent convertir les données reçue sous forme de texte en JSON pour pouvoir les manipuler. On crée un variable pour stocker reponse_JSON pour stocké les données converties et on utilise JSON.parse(données_à _convertir) pour convertir les données reçues au format texte en JSON. On peut récupérer le contenu de la variable data et agir sur les données converties en objets JSON.
          console.log (data);// affiche dans la console  - Array [ Object, Object, Object, Object, Object, Object, Object, Object, Object, Object, 90 more… ]
    //   }
    // else // Si les conditionns du if ne sont pas respectée, c'est qu'il y a eu une erreurs lors du rapatriement des données, on affiche un message dans la console pour le signalé
    // {
    //   console.log("Une erreur s'est produite lors du processus de réception des données !");
    // }

    // 2. ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()

        var objet_avec_score = data.map(function (objet)// Avec la méthode array map on retourne un tableau avec
        {
          random_nb = Math.floor(Math.random() * (1000 - 0 + 1)) + 0;// on stocke dans une variable random_nb un nombre aléatoire situé entre 0 et 1000 générer grace à la méthode Math.random et arrondi à un nombre entier grâce à la méthode Math.floor
          objet.score = random_nb;// pour chaque objets on créer une nouvelle proprété appelée score qui recevra comme valeur un numéro aléatoire entre 0 et 1000 (ex : "score" : 582,)
          return objet,// cela retourne l'objet avec ses propriétés éxistantes (name, birthday, country) et en plus la nouvelle propriété score que l'on vient d'ajouter et qui prendra pour valeur un numéro alétoire entre 0 et 1000
          console.log (objet);// on affiche l'objet dans la console
          // Résultat dans la console:
            // Object { name: "George", birthday: "04-24-16", country: "Nigeria", score: 312 }
            // Object { name: "Desirae", birthday: "07-14-16", country: "Djibouti", score: 675 }
            // Object { name: "Deborah", birthday: "01-18-16", country: "Tonga", score: 678 }
            // Object { name: "Urielle", birthday: "05-28-15", country: "Bahamas", score: 346 } etc ...
        });

    // 3. classer l'odre du tableau selon les scores tip : arr.sort()
       var objet_trie_score = objet_avec_score.sort(function (person_a,person_b) // on trie les éléments du tableau selon leurs score grâce à la méthode arr.sort (function (a,b)). objet_avec_score.sort demande d'effectuer un classement sur le tableau objet_avec_score.sort. Il prend également en paramètre une fonction qui va permettre de comparer 2 éléments (a et b), pour savoir à chaque fois si a est plus grand ou plus petit que b.
       {
         return person_a.score - person_b.score; // on établit la différence entre le score de la personne a et de la personne b. Si le résultat de la comparaison est inférieur à 0, on trie a avec un indice inférieur à b,si renvoie 0 on laisse et et b inchangé l'un par rapport à l'autre mais triés par rapport aux autres éléments, si résultat inférieur à 0, on trie b avec un indice inférieur à a
        //  console.log (objet_trie_score);
       });

    // 4. mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) tip : forEach() les catgories sont des tableaux
    // let categorie_a = []; //on crée une variable contenant un tableau vide pour chaque catégorie dans lesquelles on va placer les personnes selon leurs score avec la méthode push. On aura donc 3 tableaux dans lesquels les personnes auront été triés et placé selon la valeur de leur score.
    // let categorie_b = []; // La méthode push() utilisée permet d'ajouter un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.
    // let categorie_c = [];
    // objet_trie_score.forEach(function(objet) // La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
    // {
    //   if (objet.score < 500)
    //   {
    //     tab_c.push(objet); // Si score inférieur à 500, on place cette personne (objet) avec toutes ces caractéristique dans le tableau portant le nom categorie_c
    //   }
    //   else if (objet.score < 750)
    //   {
    //     tab_c.push(objet);// Si score inférieur à 750, on place cette personne (objet) avec toutes ces caractéristique dans le tableau portant le nom categorie_b
    //   }
    //   else if (objet.score >= 750)
    //   {
    //     tab_c.push(objet);// Si score supérieur ou égale à 750, on place cette personne (objet) avec toutes ces caractéristique dans le tableau portant le nom categorie_a
    //   }
    // });

    // 5. compter combien de personne viennent du "Bahrain" tip : filter()
    // La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine qui remplissent une condition déterminée par la fonction callback.
    function origine_Bahrain(objet_avec_score)
    {
      return objet_avec_score.country === "Bahrain";
    }

    var filtre_Bahrain = data.filter(function (objet)
    {
      return objet.country == "Bahrain";
    });
    console.log (filtre_Bahrain);
    // La console affiche
    // Array [ Object, Object, Object ]
    // Ce qui signifie qu'il y a 3 personne originaire de Bahrain. Chaque objet correspond à une personne et contient également toutes ses autres propriétés (name, birthday, ...)


    // 6. afficher le plus grand score dans la console tip : sort()
    let plus_petit_score = objet_avec_score.sort(function (a, b) {
    return a.value - b.value;
    });
    console.log (plus_petit_score);

    // 7. afficher le plus petit score tip : sort()


  };
req.send(); // La requête est prête on l'envoie avec la méthode send()
