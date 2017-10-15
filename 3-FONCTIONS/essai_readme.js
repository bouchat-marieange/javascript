// Bac à sable pour s'entrainer en lisant le readme


// Déclaration d'une fonction dont le résultat sera stocké dans la variable add
// Pour déclarer une fonction utiliser le mot function et lister ses arguments (les éléments dont elle a besoin) entre les parenthèses
//Ici a et b sont les arguments de la fonction
//Ecriver ensuite entre parenthèse le code de fonction (ce qu'elle fait). Dans ce cas, elle fait l'addition de son premier argument et du second.
//return signifie que l'on veut obtenir le resultat de la fonction (ce qu'elle renvoie)
//return arrête également l'éxécution du code de la fonction. Après return rien ne sera exécuté.
var add= function (a, b)
{
  return a + b;
}

// Une fois la fonction déclarée, on peut l'appeler et stocké le résultat qu'elle renvoie dans une variable
// var result est la variable que l'on utilise pour stocker le résultat
// add est le nom de la fonction que l'on appelle simplement en tapant son nom
// 1 et 2 sont les arguments nécessaires à la fonction (qui va les additionner).
// A l'intérieur de la fonction 1 et 2 seront enregistrer dans les variables a et b.
// la console affiche le résultat renvoyer par la fonction et stockée dans la variable result
var result = add (1, 2);
-> result est égal a 3
