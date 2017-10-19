// Exercice du pendu réalisé durant la scéance de rattrapage

// Ouvrir la console de votre navigateur avec Ctrl+ Maj+ i (chrome) pour vérifier l'affichage des informations receuillies lors du processus.

var mot = ["B","O","N","J","O","U","R", ];
//On crée un tableau stocké dans une variable mot et dont chacune des cellules correspond aux lettres du mot à deviné
var lettreDevinee = ["","","","","","","",];
//On crée un variable pour indiquer que le mot à deviné nécessite 7 espaces pour placer les lettres (ça correspond on petit trait que l'on indique dans le jeu du pendu sur papier pour indiquer le nombre de lettre que compte le mot à deviné)

var compteurVictoire = 0;
//Cette variable que l'on met à 0 au départ, se verra ajouter 1 à chaque fois que l'utilisateur trouvera une lettre du mot.
//Si une même lettre se retrouve deux fois dans le mot, grâce à l'endroit où on l'appelle dans la boucle située plus bas, il ajoutera 1 lorsque la premier instance de la lettre est trouvé et encore 1 lorsque la seconde instance de la lettre est trouvée (exemple: lettre "O")

function guessLetter ()
{
  var message = prompt("Entrez une lettre de l'alphabet entre A et Z en majuscules");
  //Affiche une fenêtre popup prompt qui retourne la valeur entré par l'utilisateur

  message = message.toUpperCase();
  // Mets la saisie de l'utilisateur en majuscule. Permet de comparer la valeur entrée en majuscule au valeur du tableau également en majuscule (sinon la comparaison n'est pas possible car un caractère minuscule n'est pas identique à un caractère en majuscule)

  if (message.length != 1) //vérifier que le message de l'utilisateur n'a une longueur que de 1 caractère, si il y a plus d'un caractère affiche dans la console et dans une fenêtre alert "Entrer un seul caractère"
  {
      alert("Entrer un seul caractère !!!"); // On affiche un fenêtre popup d'alerte indiquant à l'utilisateur qu'il ne doit entrer qu'un seul caractère
      console.log("Entrer un seul caractère !!!"); // On affiche également ce message dans la console
      console.log(message.lenght);// On affiche en plus dans la console la longueur du message entré par l'utilisateur (exemple : 3 si l'utilisateur à entré 3 lettres)
  }
  else // On a vérifier que le nombre de caractère entré par l'utilisateur est bien de 1 donc on test le caractère pour vérifier si oui ou non il se trouve dans le mot à deviné
  {
    // On va comparer la lettre entrée avec toutes les lettres une à une du mot bonjour stocké dans le tableau mot
    // Si la lettre se trouve dans le mot à deviner, si la variable message est dans le mot à deviner alors on affiche "Trouvé" dans la console, si indexOf retourne -1 et donc pas trouvé, on affiche "Introuvable" dans la console
    if(mot.indexOf(message) == -1)// fonction indexOF marche pour tous les tableaux et va renvoyer l'index de la position de la lettre dans le tableau bonjour (exemple: b renverra 0, j renverra 3), si il ne la trouve pas il renvoie -1 car ne correspond à aucun index du tableau.
    {
      console.log("Introuvable !");// On affiche dans la console "Introuvable !"
    }
    else
    {
      console.log("Trouvé !"); // On affiche dans la console "Trouvé !"

      //On va voir si une lettre est présente plusieurs fois dans le mot.
      //On va comparer la lettre entrée avec chaque valeur du tableau grâce à une boucle for
      for(i=0; i<mot.length;i++)//i = 0 car premier index du tableau
      {
        if (message == mot[i]) //si la lettre entrée est égale à la lettre se trouvant dans le tableau avec l'index [i] qui est incrémenté de 1 à chaque tour de boucle.
        {
          compteurVictoire++; // On ajoute un point à chaque fois que l'utilisateur à trouver une lettre. On le place ici pour être certain que un point sera ajouté pour 1 lettre même si elle est trouvée 1 seule fois.
          console.log ("Yeah ! J'ai trouvé ta lettre à l'index " + i);// indique dans la console que la lettre à été trouvée et indique en plus le numéro de l'index où elle a été trouvée,
          // Il faut tenir compte du fait qu'une même lettre peut être présent plusieurs fois dans le mot à deviné. Dans ce cas, la boucle permet d'indiqué plusieurs valeurs d'index si elle a été trouvée plusieurs fois.
          lettreDevinee.splice(i, 1, message);
          // On va placer la lettre trouvée à la bonne place dans le mot (remplacer l'espace vide dans le tableau lettreDevinee par la lettre trouvée) grâce à l'index que l'on a trouvé à la ligne précédente avec la fonction native javascript "slice"
          //splice est une fonctionnalité javascript qui prend en paramètre l'index dans lequel on rentrer la valeur (i), en deuxième 1 (peut aussi prendre la valeur 0, mais agit différement en décallant), si on indique 1 dans les paramètre slice remplace en écrasant le contenu de ce qui se trouve à cette place (il n'y a rien à cet endroit puisque dans lettreDevinée au départ tout les espaces réservée au caractères à chercher son vides) , troisième paramètre la lettre entrée par l'utilisateur qui sera placée à l'endroit indiqué par l'index..
          console.log(lettreDevinee); // on affiche dans la console le mot avec les lettres déja trouvée et celle encore à trouvé.
        }
      }
    }
  }

  if (compteurVictoire == mot.length) // Si le nombre de lettre trouvée égale la valeur de la longueur du mot alors le jeu est fini
  {
    console.log("Win !");
    // Si l'utilisateur à trouvé toute les lettres du mot, on affiche win! dans la console
  }
  else
  {
    guessLetter(); // Sinon on relance la fonction jusqu'à arriver au bout du jeu et trouver le mot complet.Fonction récursive que l'on place à la fin, quand toutes les instructions ont été réalisée, on relance automatiquement la fonction jusqu'à ce que le mot complet soit trouvé (puisque nombre d'essai est illimité)
  }
  guessLetter(); // Fonction récursive, quand toutes les instructions ont été réalisée, on relance automatiquement la fonction après avoir entré une lettre, comment relancé le jeu, puisque nombre d'essai illimité.
}

guessLetter();//appeller la fonction pour qu'elle s'exécute.
