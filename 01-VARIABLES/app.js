// Exercice Variables

// Exercice 1 : Diseur de bonne aventure

var nomFemme;
var pays;
var metier;
var nbrEnfants = 4;
var nomFemme = "Angela";
var pays = "Belgique";
var metier = "Web developpeur";

//Je stocke la phrase à afficher dans une variable (pas nécessaire si utilise la commande control.log qui permet d'afficher directement dans la console)
var prediction = ("Vous serez " + metier + " et habiterez en " + pays + ", et marié à " + nomFemme + " avec " + nbrEnfants + " enfants");
//J'appelle ensuite la variable pour l'afficher
prediction
"Vous serez Web developpeur et habiterez en Belgique, et marié à Angela avec 4 enfants"

//La commande console.log affiche des message concaténé ou non directement dans la console
console.log("Vous serez " + metier + " et habiterez en " + pays + ", et marié à " + nomFemme + " avec " + nbrEnfants + " enfants");
Vous serez webmaster et habiterez en Belgique, et marié à Angela avec 4 enfants

// Exercice 2 Calculer l'age

var anneeCourante = 2017;
undefined
var anneeNaissance = 1973;
undefined
var agePersonne = anneeCourante - anneeNaissance;
undefined
agePersonne
44
console.log ("Vous avez " + agePersonne + " ans !");
Vous avez 44 ans !


// Exercice 3 - Bientôt vieux

var age = 44;
undefined
var ageMax = 100;
undefined
var denree = "Cannettes de Coca Zero";
undefined
var consommation = 2;
undefined
var nbrJoursAnnee = 365;
undefined
var combienDenreeJusqueFinVie = (ageMax - age) * (consommation * nbrJoursAnnee);
undefined
combienDenreeJusqueFinVie
40880
console.log ("Il vous reste " + combienDenreeJusqueFinVie + " de " + denree + " avant d'atteindre l'age de " + ageMax + " ans");
Il vous reste 40880 de Cannettes de Coca Zero avant d'atteindre l'age de 100 ans

// Exercice 4 - Priorité
