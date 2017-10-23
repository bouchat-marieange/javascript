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

// let message; //on déclare la variable message, sans lui donner de valeur pour l'instant car on lui attribuera un valeur différente selon les cas
let min = 20; // on déclare la variable min qui indique la valeur minimum qu'on peut entrer et on lui attribue la valeur de 20. Cette variable sera utilisée comme valeur minimal pour générer un nombre aléatoire avec la fonction rand_nb qui génère un entier aléatoire situé entre la valeur min et la valeur max
let max = 80; // on déclare la variable min qui indique la valeur maximum qu'on peut entrer et on lui attribue la valeur de 80. Cette variable sera utilisée comme valeur maximale pour générer un nombre aléatoire avec la fonction rand_nb qui génère un entier aléatoire situé entre la valeur min et la valeur max

function rand_nb(min, max) // fonction qui //génère un nombre aléatoire entier (arrondi) une valeur maximale et minimale que cette fonction prend comme paramètre (entre parenthèses)
{
  return Math.floor (Math.random() * (max - min + 1)) + min;
};

function rejoue() // fonction dont le but est de proposer à l'utilisateur lorsqu'il a découvert le juste_prix de rejouer une partie en passant par un window.confirm qui renvoie une valeur false ou true selon le choix de l'utilisateur
{
  let replay = window.confirm("Voulez-vous rejouer ?"); // Un fenêtre s'affiche demandant à l'ulisateur si il veux rejouer avec comme choix "ok" qui renvoie la valeur "true" et "cancel" qui renvoie la valeur "false"

  if (replay == true) // Si l'utilisateur à cliquer sur ok replay == true
  {
    console.log ("true - rejoue"); // on affiche que dans la console que l'utilisateur à choisi de rejouer
    devine(); // on relance la fonction devine qui réinitialisera automatiquement la valeur du juste prix pour éviter que cette valeur ne soit la même qu'à la partie précédente
  }
  else // Si l'utilisateur à choisi l'autre choix, c'est à dire cancel alors replay == false
  {
    console.log ("false - au revoir");// On affiche dans la console que l'utilisateur à choisi de ne pas rejouer
    alert ("A bientôt !");// On affiche un message A bientôt! , le jeu s'arrête et aucune nouvelle fenêtre prompt n'apparait.
  }
}

function devine()
{
  var juste_prix = rand_nb (min,max); //stocke dans variable juste_prix, le nombre entier avec la fonction rand_nb compris entre une valeur maximale (définie au début du code à 80 ) et une valeur minimale (définie en débute de code à 20)
  console.log ("Le juste prix est " + juste_prix); // affiche dans console le nombre entre 20 et 80 générer par la fonction rand_nb pour connaitre le juste prix
  var nb_essai = 0; // On initialise le nombre d'essai à 0 au départ lorsque le jeu commence
  var gagne = false;// On créer un variable dont le but est de faire un test et de répéter une boucle jusqu'à ce que cette valeur passe à false. La boucle while va continuer de se répéter tant que la valeur de gagne ne sera pas passé à true, ce qui arrivera uniquement si je juste_prix est égale à la valeur de l'input de l'utilisateur (voir dans le switch lorsque cette condition est remplie)
  var input; // on initialise une variable input qui stockera ce que l'utilisateur va entrer. On attribuera une valeur à cet variable directement dans la boucle while

  while (!gagne) // Boucle while pour continuer à boucler automatiquement tant que gagne est faux . !gagne --> gagne not true (le ! = "not")
  {
    nb_essai++; // A chaque fois que la fonction s'exécute, le nombre d'essai stocké dans la variable nb_essai augmente de 1. Ecrire nb_essai++ équivaut à écrire nb_essai = nb_essai + 1
    console.log ("Le nombre d'essai est de " + nb_essai + " coup(s)."); // On affiche dans la console le nombre d'essai déja réalisés
    input = prompt ("Entrer un chiffre entre " + min + " et " + max);//On attribue un valeur à la variable input initialisée au début de la fonction devine. Dans la variable input sera stocké le nombre entre la valeur minimal et maximal entrée par l'utilsateur dans une fenêtre prompt


    // switch (true)indique tant que la condition dans les cas présenté sont vrais ou true. Cela permet d'exprimer l'équivalence qui pourrait également être écrite sous la forme if (true == (input < juste_prix), si on avait mis en paramètre du switch un false cela équivaudrait à if (false == (input < juste_prix))
    switch(true)
    {
        //Partie test pour vérifier que l'input correspond bien aux conditions demandée (être un nombre, se situer entre valeur minimale et maximale, ...)

        case isNaN(input) || input==null || input=="" ://Dans le cas ou input n'est pas un chiffre OU si l'utilisateur à appuyer sur annuler (nul) OU encore si input entré est vide. Les || signifie ou quand on veut exprimer plusieurs conditions en une seule expression
            console.log ("input"); // On affiche dans la console ce que l'utisateur à entrer dans la fenêtre prompt
            console.log ("is NaN ! ou Vide / annulé"); // On affiche dans la console que l'input de l'utilisateur n'est pas un chiffre, est vide ou annulé
            message = "Vous n'avez pas entrer un chiffre ! Réessayer !"; //On définit la valeur du message par "Vous n'avez pas entrer un chiffre! Réessayer"
            alert (message); // On affiche le message dans une fenêtre d'alerte à l'intention de l'utilisateur.
            break; // break permet de terminer la boucle en cours ou l'instruction switch et de passer à l'instruction suivant l'instruction terminée.

        case input < min || input > max://Dans le cas ou input est inférieur à la valeur minimal ou supérieure à la valeur maximale, bref si l'input ne se situe pas entre les valeurs demandées.
            console.log ("input"); // On affiche dans la console ce que l'utisateur à entrer dans la fenêtre prompt
            console.log ("Valeur supérieur ou inférieure à celle demandée"); // On affiche dans la console que l'input de l'utilisateur n'est pas un chiffre, est vide ou annulé
            message = "Le chiffre doit se situer entre " + min + " et  " + max; //On définit la valeur du message par "Le chiffre doit se situer entre valeur minimale et valeur maximale !"
            alert (message); // On affiche le message dans une fenêtre d'alerte à l'intention de l'utilisateur.
            break;


        //Partie test pour vérifier si l'input est supérieur, inférieur ou égale au juste prix (gagné)

        case input > juste_prix:// Si l'input est supérieur au juste_prix
            console.log (input);//on affiche dans la console la valeur entrée par l'utilisateur
            message = "C'est moins !"; // on redéfinit la valeur de la variable message
            alert (message);// on affiche le message c'est moins dans une fenêtre alert
            break;

        case input < juste_prix: // Si l'input est inférieur au juste_prix
            console.log (input);//on affiche dans la console la valeur entrée par l'utilisateur
            message = "C'est plus !"; // on redéfinit la valeur de la variable message
            alert (message);// on affiche le message c'est plus dans une fenêtre alert
            break;

        case input == juste_prix :
            console.log (input);//on affiche dans la console la valeur entrée par l'utilisateur
            console.log ("gagné !");
            gagne = true; // Très important: On attribue une nouvelle valeur à la variable gagne qui passe de false définit en début de code à true. L'utilisateur à gagné!
            break;
            // Vu que la condition pour que while continue à s'exécuter est que gagne soit false, dès qu'il passe à true, la boucle s'arrête, on sort de la boucle et l'ordinateur continue à exécuter les instructions qui suivent la boucle.
    }
  }

message = "C'est juste tu as trouvé en " + nb_essai + " coups !";// C'est la première instruction qui s'exécute quand on sort de la boucle, c'est à dire dès que l'utilisateur à gagné, on lui inque qu'il a gagné et en combien de coups !
alert (message); //On affiche le message ci-dessus dans une fenêtre alert
rejoue (); // On appelle (on lance) la fonction rejoue définie au début du code qui va permettre de proposer à l'utilisateur de rejouer et de réinitialiser le juste prix pour recommencer une nouvelle partie avec un autre chiffre.

};

devine();// on appelle la fonction devine, car maintenant que on l'a créer pour qu'elle fonctionne il faut l'appeller
