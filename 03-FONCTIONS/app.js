// Exercice Fonctions

var soustraction = function (a, b)
{
  return a - b;
}

var division = function (a, b)
{
  return a / b;
}

var multiplication = function (a, b)
{
  return a * b;
}

var pourcentage = function (a, b)
{
  return b / a;
}

var vitesse = function (a, b)
{
  return a / b;
}

// Affichage résultat des différentes Fonctions

var resultat = soustraction (200, 2);
alert ("La différence est de " + resultat);

var resultat = division (200, 2);
alert ("La quotient est de " + resultat);

var resultat = multiplication(200, 2);
alert ("Le produit est de " + resultat);

var resultat = vitesse (50, 10);
alert ("Le pourcentage de ce nombre vaut " + resultat);

var resultat = vitesse (200, 2);
alert ("J'ai roulé à " + resultat + "km/h");
