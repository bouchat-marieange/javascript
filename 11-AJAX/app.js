// Exercice  avec les fonctions des tableaux

// Instructions

// 1. charger le fichier "data.json" tip : xmlHttpRequest
// 2. ajouter un score aléatoire (0 -> 1000) à toutes ces personnes tip: arr.map()
// 3. classer l'odre du tableau selon les scores tip : arr.sort()
// 4. mettre personnes dans 3 categories (a > 750, b > 500, c < 500 ) tip : forEach() les catgories sont des tableaux
// 5. compter combien de personne viennent du "Bahrain" tip : filter()
// 6. afficher le plus grand score dans la console tip : sort()
// 7. afficher le plus petit score tip : sort()

//Code

// 1. charger le fichier "data.json" tip : xmlHttpRequest

var request = new XMLHttpRequest(); // On crée une nouvelle demande (requête) de XMLHttpRequest en l'appelant comme une fonction. Elle retourne un objet que l'on enregistre dans une variable que on a appelé request
console.log (var request);


// request.onload = function (event)// On spécifie une fonction callback, à appeler lorsque les données sont chargées. Les informations de l'évènement sont transmises comme premier argument de la fonction
// {
//   ...
// };
// request.open ('get', 'myfile.txt',true);
// request.send ();
