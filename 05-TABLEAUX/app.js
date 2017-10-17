// Exercice Tableaux

// Addition

let chiffre = [1, 2, 3, 4, 5, 6, 7 ,8, 9];
for (let i =0 ; i < chiffres.length; i++)
{
  console.log(chiffre[i]);
  console.log(chiffre[i]+ i);
}

//Essai de décomposition pour ne pas afficher que les réponses mais également les calculs
// Boucle pour affiche le premier chiffre de l'addition(doit commencer à 1 et pas à 0)
for (let j =1 ; j < 10; j++)
{
  console.log(j);
}
VM347:3 1
VM347:3 2
VM347:3 3
VM347:3 4
VM347:3 5
VM347:3 6
VM347:3 7
VM347:3 8
VM347:3 9

// Boucle pour afficher l'addition et en dessous le résultat de l'addition
let chiffre = [1, 2, 3, 4, 5, 6, 7 ,8, 9];
for (let j =1 ; j <=8; j++)
{
  console.log (j + " + "+ chiffre[j] + " = ");
  console.log(chiffre[j]+ j);
}
VM440:3 1 + 2 =
VM440:4 3
VM440:3 2 + 3 =
VM440:4 5
VM440:3 3 + 4 =
VM440:4 7
VM440:3 4 + 5 =
VM440:4 9
VM440:3 5 + 6 =
VM440:4 11
VM440:3 6 + 7 =
VM440:4 13
VM440:3 7 + 8 =
VM440:4 15
VM440:3 8 + 9 =
VM440:4 17

// Vos meilleurs choix

let acteur = ["Hanks", "Smith", "Williams"]
for (let i = 0; i < acteur.length; i ++)
{
  let position = i + 1;
  console.log ("Le numéro " + position + " est " + acteur[i]);
}

// Résultat
// Le numéro 1 est Hanks
// Le numéro 2 est Smith
// Le numéro 3 est Williams

// Vos meilleurs choix Bonus

let acteur = ["Hanks", "Smith", "Williams"]
let position;
let test;
for (let i = 0; i < acteur.length; i ++)
{
  position = i + 1;

    if (position == 1)
    {
    	test = "premier";
    }
    else if (position == 2)
    {
      test = "deuxieme";
    }
    else if (position == 3)
    {
    	test = "troisième";
    }
    else
    {
      test = "plus dans le top 3";
    }

  console.log ("Le " + test + " est " + acteur[i]);
}

//Vos meilleurs choix Bonus mais avec un switch plutot qu'avec un if... elseif... else...
let acteur = ["Hanks", "Smith", "Williams"]
let position;
let test;
for (let i = 0; i < acteur.length; i ++)
{
  position = i + 1;

  switch(position)
  {
  	case 1 :
  	    test = "premier";
  	    break;
  	case 2 :
  	    test = "deuxième";
  	    break;
  	case 3 :
  	    test = "troisième";
  	    break;
  	default :
  	    test = "plus dans le top 3";
  	    break;
  }

  console.log ("Le " + test + " est " + acteur[i]);
}

// Résultat
// Le premier est Hanks
// Le deuxième est Smith
// Le troisième est Williams



//Clone

let perso_mariokart = ["Mario","Luigi", "Peach"]
let perso_mariokart_clone = perso_mariokart(1,2,3);
// Si on veut cloner la totalité d'un tableau il n'est même pas nécessaire d'indiquer de chiffre entre les parenthèses.
// En les laissant vides, cela clone automatiquement la totalité du tableaux
