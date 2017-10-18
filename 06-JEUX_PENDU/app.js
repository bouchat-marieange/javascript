// Exercice

// Mon code étape par étape séparée

// Créer un tableau pour contenir les lettre du mot : BONJOUR
// let bonjour = ["B", "O", "N", "J", "O", "U", "R"];

// Créer un tableau pour mettre les lettres devinées
// let devinee = ["","","","","",""];

// Affichage prompt pour demander à l'utilisateur d'entrer une lettre
// var input = prompt("Entrez une lettre de l'alphabet entre A et Z en majuscules");
// console.log (input);
//Ok renvoie bien l'input entré par l'utilisateur dans la fenêtre prompt

// Fonction pour vérifier si input de l'utilisateur est bien une lettre
// Avec methode isNAN();
// Cette méthode "is not a number" permet de tester si l'input entré n'est pas un chiffre et donc est une lettre (ne fonctionne pas sur caractère spéciaux qui ne sont pas des chiffres mais ne sont pas des lettres utile au jeu pour autant).
// isNaN (input);
// Réponse:
// true


// Fonction guessLetter (lettre à deviner)

// la fonction doit itérer (donc boucle) à travers les lettres du mot à deviner bonjour
for (var i = 0; i < bonjour.length; i++)
{
  console.log(bonjour[i]);
}
// et doit comparer ces lettres contenue dans tableau bonjour avec la lettre input par l'utilisateur
// par contre je peux mettre le if dans la boucle pour vérifier
// mais si je met le else dans la boucle et si la lettre n'est pas contenue dans bonjour, il va boucler sur le else et m'afficher plusieurs fois le message disant que la lettre n'est pas contenue dans le mot à deviné
// Il faut donc encore fractionner cette étape : d'abord on test si la lettre input fait partie du mot bonjour avec un simple if et on sort le else de la boucle


if (input == bonjour[i])
{
  console.log("la lettre input fait partie du mot à deviner");
}
else
{
  console.log("la lettre input ne fait pas partie du mot à deviner ");
  alert("la lettre encodée ne fait pas partie du mot à deviner");
  prompt("Entrez une lettre de l'alphabet entre A et Z en majuscules");
}





// Mon code complet sans commentaires

let bonjour = ["B", "O", "N", "J", "O", "U", "R"];
let devinee = ["","","","","",""];
var input = prompt("Entrez une lettre de l'alphabet entre A et Z en majuscules");
console.log (input);

if (isNaN (input))
  {
    console.log("L'input est bien une lettre. Je continue le processus");
    var lettre_dans_mot = false;
    for (var i = 0; i < bonjour.length; i++)
    {
      if (input === bonjour[i])
      {
        console.log("la lettre input fait partie du mot à deviner");
        lettre_dans_mot = true;
      }
    }
  }
else
  {
    alert("Le caractère encodé n'est pas une lettre");
    prompt("Entrez une lettre de l'alphabet entre A et Z en majuscules");
  }
