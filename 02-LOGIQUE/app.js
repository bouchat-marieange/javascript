// Exercice Logique

//Exercice 1 - Langues

var langue = prompt('Indique la langue que tu parles ! en , es, fr ?');

var langue_1 = "fr";
var langue_2 = "en";
var langue_3 = "es";

var message_1 = "Bonjour tout le monde";
var message_2 = "Hello world";
var message_3 = "Holo, Mundo";
var message_4 = "Choississez parmis les options proposées"

if (langue == langue_1)
  {
    console.log (message_1) ;
  }
else if (langue == langue_2)
  {
    console.log (message_2);
  }
else if (langue == langue_3)
  {
    console.log (message_3);
  }

else
  {
    console.log (message_4);
  }

// Exercice 2 - Affichage des scores

var score = 51;

var resultat_a = "Vous avez le rang A - votre score est égal ou supérieur à 90 !";
var resultat_b = "Vous avez le rang B - votre score est inférieur à 90 mais supérieur à 50!";
var resultat_c = "Vous avez le rang C - votre score est inférieur ou égal à 50";
var resultat_alternatif = "Vous avez décidez de ne pas passer l'examen, donc n'attendez pas vos résultats !";

if (score >= 90)
  {
    console.log (resultat_a) ;
  }
else if (score < 90 && score >50)
  {
    console.log (resultat_b);
  }
else if (score <= 50)
  {
    console.log (resultat_c);
  }

else
  {
    console.log (resultat_alternatif);
  }

// Exercice 3 - Mettre au pluriel

var singulier = "pomme"
var combien = 5;
var pluriel = "pommes"
var resultat_zero = "Je ne possède aucune pomme.";
var resultat_un = "Je possède " + combien + " " + singulier + ".";
var resultat_plusieurs = "Je possède " + combien + " " + pluriel + ".";
var resultat_alternatif = "Me prenez-vous pour un marchand de fruits ?"

if (combien == 0)
  {
    console.log (resultat_zero) ;
  }
else if (combien == 1)
  {
    console.log (resultat_un);
  }
else if (combien > 1)
  {
    console.log (resultat_plusieurs);
  }
else
  {
    console.log (resultat_alternatif);
  }
