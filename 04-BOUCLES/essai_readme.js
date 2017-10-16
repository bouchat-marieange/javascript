// Bac à sable pour s'entrainer en lisant le readme

// Les boucles repéte le même bloc de code plusieurs fois
// Utilisée entre autre pour effectuer une action sur chaque élément d'un tableaux.
// Deux types de boucles les plus répandues: for et while
// Elles combinent une condition et un bloc.
// Elles exécutent le bloc à plusieurs reprise jusqu'à ce que la condition ne soit plus true ou jusqu'à ce qu'on les force à arrêter.


// Boucle while

// La boucle while répète une bloc de code  tant qu'une condition est true. La condition se trouve entre parenthèse après le mot while.
// On augment l'écrément de 1 (+1) à chaque tour de boucles
// increment est égal à 10, car la variable incrément est définie comme commencant à 0
// A la fin de la boucle le code continue son exécution à partir de l'accolade fermante de la fin du bloc.

var increment = 0;
while (increment <10)
{
  console.log (increment);
  increment = increment + 1;
}

// Boucle for

// Une boucle for est similaire à une instruction if
// Elle combine entre les parenthèse 3 information séparées par des points virgules  : initialisation, condition, et expression finale.
// L'initialisation crée une variable pour permettre de suivre la position de la boucle dans laquelle vous êtes.
// La condition permet à la boucle de se répéter. Elle ressemble à l'incrémentation dans la boucle while.
// L'expression finale est exécutée à la fin de chaque boucle. Par convention on utilise i au lieu de "incremente"
// Cette boucle for retourne dans la console les numéro de 1 à 10 dans l'ordre
// i++ est équivalent à i = i + 1 . Soit on incrémente de 1 à chaque fois. On ajoute la dernière valeur de l'incrément.

for (var i = 0; i < 10; i++)
{
  console.log(i)
}
