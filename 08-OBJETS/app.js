// Exercice Objet JSON

// Exercice : PNJ (Personnage non-joueur)

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
  name:"John",
  age:30,
  items_to_give:["épée", "bouclier", "casque", "massue", "hache", "arbalète"],
  giveItem:  function(){
    var rand_index = Math.random()*(this.items_to_give.length);
    rand_index = Math.floor (rand_index);

    return this.items_to_give[rand_index];
  }
}

// Fonction giveItem pour choisir aléatoirement un objet dans le tableau item_to_give imbriqué dans l'objet Character
// On va placer la fonction directement dans l'objet sous le tableau.
// Ne pas oublier d'ajouter this. lorsque l'on fait référence au tableau cité plus haut,comme ça l'ordi comprend qui doit aller vérifier dans tout l'objet que l'élément auquel on fait référence à bien été déclaré

// Pour attribuer un objet aléatoirement, on créer un tableau avec des objets
// On crée une variable rand_index qui va générer un numéro d'index aléatoire avec Math.random et lui envoyer les paramètre du tableau (0 et 5) - la valeur minimal et maximal d'index du tableau item
// On modifie la variable rand_index pour l'arrondir à un nombre entier avec Math.floor
// La fonction giveItem va renvoyer la valeur correspondant à l'index aléatoire stocké dans la variable rand_index

//Affichage des propriétés de l'objet (string, numero et tableau) - 1 propriété par ligne dans console
//
var sous_tableau = Character.items_to_give;
for (x in Character)
{
  if(x != "items_to_give" && x != "giveItem"){
    console.log (Character[x]);
  }
  else if(x =="giveItem"){
    var item = Character.giveItem();
    console.log (item);
  }
}

// Pour afficher dans un boucle for in à la fois les valeur simple comme (string, number, ...)
// On utilise console.log (Character[x]); Soit le nom de l'objet et entre crochets la clé qui correspond à la valeur que l'on veut afficher.
// Mais cette boucle affichera bien les valeur simple mais pas les tableaux imbriqué dans l'objet.
// Il faut donc créer un condition (if elseif) indiquant comment les données simple doivent être affichées et comment les tableaux doivent être affichés
// Dans le if on indique que l'on utilise l'affichage standard des valeur lorsque x n'est pas égale à item_to_give et n'est pas égale non plus à la fonction (car sinon il va afficher la fonction dans la console)
// En gros on lui dit Affichage normal pour tout ce qui n'est pas tableau le tableau item_to_give et qu'on ne boucle pas non plus sur la foncion giveItem
// Dans le elseif on indique ce qu'il faut faire si x est égale à au tableau"giveItem", donc comment afficher les tableaux imbriqué
// Pour afficher tableau imbriqué on va stocké dans une variable apellée item l'élément récupérer Character.giveitem() . Soit la valeur de ce qui se trouve dans l'objet Character et qui correspond à la clef retournée par la fonction giveItem
// Attention ne pas mettre Character.items_to_give car à ce moment là il va boucler sur tout les éléments du tableau items_to_give au lieu de n'afficher que celui qui a été choisi avec la fonction giveItem.



// Exercice : Shop

// Crée un tableau avec des objets à vendre (épée, hache, sceptre, etc.)
//
// Caractéristique de chaque objet :
//
// title (string)
// physic (int)
// magic (int)
// minLevel (int)
// available (boolean)

// Manipulation :
//
// faire une fonction pour afficher tout les objets
// faire une fonction pour afficher les objets disponibles
// faire une fonction pour afficher les objets dont le niveau minimum est de 10

objet_a_vendre =
{
  epee : ["épée", 8, 1, 5, true],
  poison : ["poison", 8, 1, 5, false],
  baton : ["baton", 8, 1, 5, true],
  arbalete : ["arbalete", 8, 1, 5, true],
  hache : ["hache", 8, 1, 5, true],
  //index 0 : title
  //index 1 : physic
  //index 2 : magic
  //index 3 : minLevel
  //index 4: available

  affiche_objets: function()
  {
    for (x in objet_a_vendre)
    {
      console.log (this.objet_a_vendre[x]);
    }
  }
}

affiche_objets();
