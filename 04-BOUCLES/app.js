// Exercice Boucles

// Exercice Pair et impair

// Essai avec modulo (exemple: console.log (11 % 5 );)
for (var i = 0; i <= 20; i++)
{
  if ( (i % 2) == 0)
    {
      console.log (i + " est pair");
    }
  else
    {
      console.log (i + " est impair");
    }
}

// Autre variante - Ce code fonctionne mais i&1 correspond à un raisonnement binaire plus complexe qu'un modulo.
for (var i = 0; i <= 20; i++)
{
  if (i & 1)
    {
      console.log (i + " est impair");
    }
  else
    {
      console.log (i + " est pair");
    }
}


// Explication du i & 1

// Chaque chiffre peut être converti en binaire.
// Par exemple:  0 en binaire donne 0000
//               1 en binaire donne 0001
//               2 en binaire donne 0010
//               3 en binaire donne 0011
//               4 en binaire donne 0100
//               35 en binaire donne 100011
//               57 en binaire donne 111001
// Quand on indique i & 1 on compare le nombre de l'incrément en cours et le chiffre 1 soit:
//
// Si on est au chiffre 3 dans l'incrémentation
//     chiffre  3      0011
//     chiffre  1      0001
//     on obtient      0001  soit 1 qui est considéré comme valeur true -> soit la condition le nombre est impaire est vérifiée
//
//     chiffe  12      1100
//     chiffre  1      0001
//     on obtient      0000  soit 0 qui est considéré comme valeur false -> soitla condition le nombre est impaire n'est pas vérifié, donc le nombre est paire.
//
// vu que le second chiffre dans i & 1 est toujours 1 à chaque tour de boucle et que cela correspond à 0001, et que les chiffre impaire se termine en binaire par 1 -> renvoie 1 true et les chiffre pair se termine par en binaire par 0 et renvoie donc 0 -> false
//
//     chiffre 35   100011
//     chiffre  1     0001
//     on obtient   000001 -> soit true -> le nombre est impair.
//
// // Multiplication Tables
//
// for (var i = 0; i <= 10; i++)
// {
//   console.log (i + " * 9 = " + (i * 9));
// }


// Assigner des grades

//Si on suit l'instruction faire une boucle (voici la solution qui affiche tout les résultats possibles l'un à la suite de l'autre

for (var i = 0; i <= 100; i++)
{
  if (i > 90)
    {
      console.log ("Pour " + i + " points, vous avez le grade A");
    }
  else if (i > 80 && i<= 90)
    {
      console.log ("Pour " + i + " points, vous avez le grade B");
    }
  else if (i > 70 && i<= 80 )
    {
      console.log ("Pour " + i + " points, vous avez le grade C");
    }
    else if (i > 65 && i<= 70)
      {
        console.log ("Pour " + i + " points, vous avez le grade D");
      }
  else
    {
        console.log ("Pour " + i + " points, vous avez le grade F");
    }
}

// Si prend le parti de faire une uniquement la fonction

function afficher_grade (i);

if (i > 90)
{
console.log ("Pour " + i + " points, vous avez le grade A");
}
else if (i > 80 && i<= 90)
{
console.log ("Pour " + i + " points, vous avez le grade B");
}
else if (i > 70 && i<= 80 )
{
console.log ("Pour " + i + " points, vous avez le grade C");
}
else if (i > 65 && i<= 70)
{
console.log ("Pour " + i + " points, vous avez le grade D");
}
else
{
console.log ("Pour " + i + " points, vous avez le grade F");
}

afficher_grade(80);

// Si on fait la boucle dans la fonction

function maFonction(grade);
{

	for (var i = 0; i <= 100; i++) 
		{
		    if (grade >= 90)
			{
		    		console.log("pour " + grade + " points, vous avez le grade A");
		    	}

		    else if (grade < 90 && grade>= 80)
			{
		    		console.log("pour " + grade + " points, vous avez le grade B");
		    	}

		    else if (grade  < 80 && grade >= 70)
			{
				console.log("pour " + grade + " points, vous avez le grade C");
		    	}

		    else if (grade  < 70 && grade >= 65)
			{
				console.log("pour " + grade + " points, vous avez le grade D");
		    	}

		    else
			{
				console.log("pour " + grade + " points, vous avez le grade F");
		    	}
		}
}

//On stocke une varible nombre que l'on récupère auprès de l'utilisateur avec une fenêtre prompt (fenêtre avec un champ permettant à l'utilisateur d'entrer des données"
var nb = prompt("entrez un nombre");

// On appelle la fonction en lui donnant la valeur récupérer auprès de l'utilisateur dans la fenêtre prompt
maFonction(nb);




// Pyramide

var etoile = "*";

for (i=0; i<5; i++){
  console.log(etoile);
  etoile = etoile + "*";
};

// symbole +="*" est une manière abrégée d'écrire etoile = etoile + "*", soit ajoute une étoile à chaque tour de boucle
// Ne pas indiquer de br après étoile dans console.log car la console effectue automatiquement le retour à la ligne à chaque boucle et affichera la balise <br/>
//Pour un affichage sur la page web, il sera nécessaire d'ajouter un br après l'affichage de la variable étoile pour effectuer un retour à la ligne.
var etoile = "*";

for (i=0; i<5; i++){
  document.write(etoile + "<br/>");
  etoile = etoile + "*";
};
