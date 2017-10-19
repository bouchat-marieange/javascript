// Exercice Objet JSON

// PNJ (Personnage non-joueur)

// Exercice : PNJ (Personnage non-joueur)

// Crée un objet "Character" qui contient les informations suivantes :
// name (string)
// age (numero)
// items_to_give (tableau)
// afficher chaque information sur une ligne séparés dans la console (for in)
// faire une fonction "giveItem" qui permet au PNJ de donner un objet aléatoirement

Character =
{
  "name":"John",
  "age":30,
  "items_to_give":
    {
      "item1":"objet inconnu",
      "item2":"objet mystère"
    }
}

for (x in Character)
{
  document.getElementById("demo").innerHTML += Character[x] + "<br>";

  for (j in Character.items_to_give)
    {
      x += Character.items_to_give[j];
    }
}

// Pour attribuer un objet aléatoirement, on créer un tableau avec des objets
var item = ["épée", "bouclier", "casque", "massue", "hache", "arbalète"];
// On crée ensuite la fonction qui va générer un numéro d'index aléatoire
// et attribuer l'objet correspondant à cet index
// la valeur de cet objet devra venir remplacer celle de item1 dans l'objet Character
// On stockera cette valeur aléatoire dans une variable nommée objet_aleatoire
// On changera cette valeur en indiquant Character.items_to_give.item1 = objet_aleatoire
