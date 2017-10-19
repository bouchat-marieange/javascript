// Exercice Objet JSON

// PNJ (Personnage non-joueur)

// Exercice : PNJ (Personnage non-joueur)

// Crée un objet "Character" qui contient les informations suivantes :
// name (string)
// age (numero)
// items_to_give (tableau)
// afficher chaque information sur une ligne séparés dans la console (for in)
// faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement

//Création de l'objet
Character =
{
  "name":"John",
  "age":30,
  "items_to_give":
    {
      "item1":"objet inconnu",
      // "item2":"Objet secret"
    }
}

//Affichage des propriétés de l'objet (string, numero et tableau) - 1 propriété par ligne dans console
var sous_tableau = Character.items_to_give;
for (x in Character)
{
  console.log (Character[x])
  // document.getElementById("demo").innerHTML += Character[x] + "<br>";

  // for (var i=0; i<sous_tableau.length;i++)
  //   {
  //     console.log(Character.items_to_give[i]);
  //   }
}
  console.log (Character.items_to_give.item1);




// Fonction giveItem pour choisir aléatoirement un objet qui va remplacer l'item1 dans les propriété de l'objet Character
var item = ["épée", "bouclier", "casque", "massue", "hache", "arbalète"];

var rand_index = Math.random()*(item.length - 0);
var rand_index = Math.floor (rand_index) + 0;
console.log (rand_index);
var objet_aleatoire = item[rand_index];
console.log (objet_aleatoire);

function giveItem()
{
  Character.items_to_give.item1 = objet_aleatoire;
}

giveItem();

// Pour attribuer un objet aléatoirement, on créer un tableau avec des objets
// On crée ensuite générer un numéro d'index aléatoire avec Math.random et lui envoyer les paramètre du tableau (0 et 5) - la valeur minimal et maximal d'index du tableau item
// et attribuer l'objet correspondant à cet index que l'on affichera dans la console pour vérification
// On stockera cette valeur aléatoire dans une variable nommée objet_aleatoire
// la valeur de cet objet devra venir remplacer celle de item1 dans l'objet Character
// On changera cette valeur en indiquant Character.items_to_give.item1 = objet_aleatoire
