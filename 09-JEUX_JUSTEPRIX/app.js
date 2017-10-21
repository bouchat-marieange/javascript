// Exercice

//Enoncé Exercice

// Déclarez les variables suivantes :
//
// Variable qui sera utilisée pour afficher un message
// Variable qui va compter le nombre d'essais
// Variable de la valeur minimum qu'on peut entrer (ici 20)
// Variable de la valeur maximale qu'on peut entrer (ici 80)
// Déclarez les fonctions suivantes :
//
// crée une fonction qui retourne un numéro aléatoire arondi entre la variable minimale et la variable maximale
// crée une fonction
// qui prends un argument pour tester si le numéro qu'on a entré est le bon
// la fonction retourne un de ces 3 messages : C'est plus, C'est moins,C'est juste tu as trouvé en X coups
// Utiliser la console ou les fonctions natives suivantes :
//
// window.prompt(); //Affiche une fenêtre popup où l'utilisateur est invité par un message à entrer une donnée (lettre, mot, nombre,...)
// window.alert(); // Affiche une fenêtre popup avec un message destiné à l'utilisateur
// window.confirm(); // Affiche une boite de confirmation. Fenêtre popup avec un message et 2 boutons (Annuler et OK). Pour demander à l'utilisateur de vérifier ou d'accepter quelque chose.La méthode confirm () renvoie true si l'utilisateur a cliqué sur "OK" et false dans le cas contraire.

// Solution

let message; //on déclare la variable message, sans lui donner de valeur pour l'instant que elle variera selon les cas
let nb_essai = 0; // on déclare la variable nb_essai et on lui attribue la valeur de 0. Au départ l'utilisateur n'a pas encore fait d'essai. Cette valeur sera augmenté de 1 à chaque essai grâce à une instruction dans la fonction devine
let min = 20; // on déclare la variable min qui indique la valeur minimum qu'on peut entrer et on lui attribue la valeur de 20. Cette variable sera utilisée comme valeur minimal pour générer un nombre aléatoire avec la fonction rand_nb
let max = 80; // on déclare la variable min qui indique la valeur maximum qu'on peut entrer et on lui attribue la valeur de 80. Cette variable sera utilisée comme valeur maximale pour générer un nombre aléatoire avec la fonction rand_nb
let input = prompt("Entrez un chiffre de 20 à 80"); // stocke dans une variable la valeur entrée dans la fêntre popup prompt lui demandant d'indiquer un nombre entre 20 et 80

function rand_nb(min, max)
{
  console.log ("La valeur entrée par l'utilisateur est " + input); // affiche dans la console le numéro entré par l'utilisateur et stocké dans la variable input
  return Math.floor (Math.random() * (max - min + 1)) + min; //génère un nombre aléatoire entier (arrondi) une valeur maximale et minimale que cette fonction prend comme paramètre (entre parenthèses)
};


var juste_prix = rand_nb (20,80); //stocke dans variable juste_prix, le nombre entre 20 et 80 générer par la fonction rand_nb
console.log ("Le juste prix est " + juste_prix); // affiche dans console le nombre entre 20 et 80 générer par la fonction rand_nb

function devine()
{
  nb_essai++; // A chaque fois que la fonction s'exécute, le nombre d'essai stocké dans la variable nb_essai augmente de 1. Ecrire nb_essai++ équivaut à écrire nb_essai = nb_essai + 1
  console.log ("Le nombre d'essai est de " + nb_essai + " coup(s).")

  if (input > juste_prix) // Si input est inférieur au juste prix
  {
    console.log (input);
    message = "C'est moins !"; // on redéfinit la valeur de la variable message
    alert (message);
    input = prompt("Entrez un chiffre de 20 à 80");
    devine();
  }
  else if (input < juste_prix) // Si input est supérieur au juste prix
  {
    console.log (input);
    message = "C'est plus !"; // on redéfinit la valeur de la variable message
    alert (message);
    input = prompt("Entrez un chiffre de 20 à 80");
    devine();
  }
  else if (input == juste_prix)// Si input est égale au juste prix (le juste prix est trouvé, l'utilisateur à gagné !)
  {
    console.log (input);
    console.log ("gagné !");
    message = "C'est juste tu as trouvé en " + nb_essai + " coups !";// on redéfinit la valeur de la variable message
    alert (message);//on affiche le message gagné à l'utilisateur
      function rejoue()
      {
        let replay = window.confirm("Voulez-vous rejouer ?");

          if (replay == true)
          {
            console.log ("true - rejoue");
            nb_essai= 0;
            rand_nb();
            input = prompt("Entrez un chiffre de 20 à 80");
            devine();
          }
          else
          {
            console.log ("false - au revoir");
            alert ("A bientôt !");
          }
      }
    rejoue();
  }
};

devine();// on appelle la fonction devine


// Tests supplémentaires

// else if (input > 80);
// {
//   message = "Le chiffre dépasse la valeur maximale de 80";
//   alert (message);
//   devine();
// }
// else if (input < 20);
// {
//   message = "Le chiffre est inférieur à la valeur minimale de 20";
//   alert (message);
//   devine();
// }
// else if (input isNaN === false )
// {
//   message = "Vous n'avez pas entrer un chiffres ! Réessayer !";
//   alert (message);
//   devine();
// }
