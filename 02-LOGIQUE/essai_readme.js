// Bac à sable pour s'entrainer en lisant le readme

// Egalité stricte entre deux valeurs
15.234 == 15.234
true

// Non égalité entre deux valeurs, bref si elle sont différentes
15.234 != 18.4545
true
// la valeur renvoyée est true car elle confirme la non égalité et donc la différence

// Attention les string contenant un nombre et le même nombre réel ne sont pas égaux
'10' == 10;
true

// Comparaison plus grand
10 > 5;
true

20.4 < 20.2;
false
// retourne false car 20.4 n'est pas inférieur à 20.2

Comparaison combiné à une égalité (plus ou égale - plus petit ou égal)
10 >= 10
true

10 <= 5
false

// Les conditions permet d'indiquer si une partie de code doit être exécutée par l'ordi si une condition est remplie ou Non
// IF ELSE (si... sinon ...)
// Si la condition, la logique est true alors on exécute le bloc de code
// ou si la condition n'est pas true alors on exécutre un bloc de code

if (10 > 5)
{
    // Exécutez le code ici
}
// Si la condition 10 est supérieur à 5 alors exécuter le code entre accolades

// code entre accolades = bloc
// Son exécution dépend de l'instruction IF
// Le code ne sera lancé que si la condition entre parenthèse est true

// If et else sont utilisé pour exécuter un bloc de code alterrnatif si la condition n'est pas true.
// Si la condition du if n'est pas true, seul le bloc de code du else sera exécuté
if (43 < 2)
  {
    //Exécutez le code ici
  }
else
  {
    //Exéxutez cet autre morceau de code
  }
