// Exercice Maths

// Minimum et maximum

// La valeur est égal au chiffre le plus petit dans l'enssemble suivant : 7, 5, -12, 6, 32, 18, 14, -2
// La valeur est égal au chiffre le plus grand dans l'enssemble suivant : -3, 9, 21, 36, 27, 54, 17, 35
// La valeur est égal a l'addition des deux précédentes variables

var plus_petit = Math.min (7, 5, -12, 6, 32, 18, 14, -2);
console.log (plus_petit);

var plus_grand = Math.max (-3, 9, 21, 36, 27, 54, 17, 35);
console.log (plus_grand);

var somme = plus_grand + plus_petit;
console.log (somme);

// Réponse:
// -12
// 54
// 42




// Aléatoire 1

// Faire une variable floatBateau dont la valeur est 10.4
// Faire une variable couleBateau dont la valeur est floatBateau arrondie vers le bas
// Faire une variable voleBateau dont la valeur est floatBateau arrondie vers le haut

var floatBateau = 10.4;
console.log (floatBateau);

var couleBateau = Math.floor(floatBateau);
console.log (couleBateau);

var voleBateau = Math.ceil(floatBateau);
console.log (voleBateau);

// Réponse:
// 10.4
// 10
// 11





//Aléatoire 2

// La valeur aléatoire entre 50 et 100
// La valeur aléatoire peut être seulement 0 ou 1
// La valeur aléatoire peut aller de 0 à 10 inclu

// function getRandomIntInclusive(min, max){
//   min = Math.ceil ();
//   max = Math.floor ();
//   return Math.floor(Math.random()*(max - min +1)) + min;
// }

// console.log(getRandomIntInclusive());

// La version étape par étape du code (merci Alexandre)
function getRandomIntInclusive(min, max){
  min = Math.ceil(min);
  max = Math.floor (max);
  rand = Math.random()*(max - min +1);// on crée variable rand (qu'on aurait pu appeler aussi nombre_aléatoire)
  rand = Math.floor(rand) + min;// on modifie variable rand en l'arrondissant et en lui ajoutant la valeur de la variable min
  return rand;
}

console.log(getRandomIntInclusive(50,100));

// La version encore plus simple du code
// https://www.w3schools.com/js/js_random.asp
// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// console.log(getRandomIntInclusive(20,30));


//Explication de la fonction

//Math.ceil arrondit à l'entier supérieur
// var essai = Math.ceil(5.4);
// console.log (essai);
// Réponse: 6
// var essai = Math.ceil(50);
// console.log (essai);
// Réponse: 50;

//Math.floor arrondit à l'entier inférieur
// var essai = Math.floor(5.4);
// console.log (essai);
// Réponse: 5
// var essai = Math.floor(100);
// console.log (essai);
// Réponse: 100;

//Math.round arrondit à l'entier le plus proche (attention ne permet pas toujours d'obtenir une distribution uniforme, car par exemple 3.4 sera arrondi à 3 et 3.6 sera arrondi à 4, par contre 3.5 sera a 4
// var essai = Math.round(3.4);
// console.log (essai);
// Réponse: 3
// var essai = Math.round(3.5);
// console.log (essai);
// Réponse: 4
// var essai = Math.round(3.6);
// console.log (essai);
// Réponse: 4
// Voici pourquoi la distribution uniforme
// Attention : si on utilisait Math.round(), on aurait une distribution non uniforme, les valeurs extreme c'est à dire 50 et 100 auront deux fois moins de chance d'être selectionnées que les autres


// Math.random ()retourne un nombre en 0 (inclus) et 1 (non inclus)
// var essai = Math.random();
// console.log (essai);
// Réponse: 0.9414273633466443
// Cette réponse change à chaque rafraichissement car elle fournit à chaque fois une nouveau nombre aléatoire situé entre 0 et 0.9999999.....
// Math.random() génére des chiffre aléatoire de 0 (inclus) à 1 (non inclus) soit 0.99999...
// Si on veut par exemple obtenir un numéro aléatoire entre 0 et 50 on va multiplier la valeur retournée par Math.random() par 50. exemple: 0.57 * 50 = 28,5
//Et on va mettre le tout dans un Math.ceil ou Math.floor pour qu'il arrondissent à des entiers et ne retourne pas des chiffres décimaux. Le 28,5 obtenu ci-dessus deviendra donc avec un Math.ceil = 29 et un Math.floor = 28
// On utilise pas Math.round() car distribution non uniforme
//On choisit d'arrondir avec Math.floor car arrondit au nombre inférieur et que l'on a du faire Math.random(max - min+1) soit Math.random(100 - 50+1)
//Car si on ajoute pas le +1 avec Math.random fournira au maximum on aura (100-49.999...), hors on veut que ce soit les nombres de 100 à 50 et pas entre 100 et 49 (arrondit avec Math.floor)
//Donc on fait Math.random()(max - min+1) soit Math.random(100-49+1) soit Math.random (100-50)

// Pourquoi rajoute-t-on min à la fin
//Math.floor(Math.random()*(max - min +1)) + min;
//exemple si on n'ajoute pas la valeur de min à la fin
//(0.5897) * (100 - 50+1) + 50
//Math.floor arrondi le résultat donc (0.5897 * 49) + 50
// Soit 28,8953 + 50
//Math.floor (28,8953 + 50)
//Math.floor(78,8953);
//Réponse 78
