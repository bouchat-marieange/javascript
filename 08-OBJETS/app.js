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

// Attention la syntaxe pour déclarer une fonction à l'intérieur d'un objet giveItem:  function() n'est pas la même que pour la déclaer à l'extérieur d'un objet function affiche_objets()
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



// On place le tableau contenant toute les variables des différentes armes après avoir créé celles-ci pour éviter que la console ne renvoie une erreur de variable non définie

// un variable qui stocke chaque objet
var epee =
{
  title : "épée",
  physic : 8,
  magic : 1,
  minLevel : 10,
  available: true
}

var poison =
{
  title : "poison",
  physic : 1,
  magic : 10,
  minLevel : 1,
  available: false
}

var baton =
{
  title : "baton",
  physic : 2,
  magic : 0,
  minLevel : 3,
  available: true
}

var arbalete =
{
  title : "arbalete",
  physic : 5,
  magic : 1,
  minLevel : 8,
  available: true
}

var hache =
{
  title : "hache",
  physic : 9,
  magic : 0,
  minLevel : 10,
  available: false
}

// Créer un objet tableau qui contient une variable définie avec toutes ses propriétés pour chaque arme. (epee, poisson, etc..). Celle-ci ne sont pas entre "" car il s'agit de nom de variables que l'on à crées et pas de string
var objetAVendre = [epee,poison,baton, arbalete, hache];

//Créer une fonction pour afficher tout les objets
function affiche_objets()
  {
    for (x in objetAVendre)
    {
      console.log(objetAVendre[x].title);
    }
  }


affiche_objets();// Appelle la fonction affiche objets



//Créer une fonction pour afficher tout les objets disponibles (available == true)
function affiche_objets_disponibles()
  {
    for (x in objetAVendre)
    {
      if (objetAVendre[x].available == true)
      {
        console.log(objetAVendre[x].title);
      }
    }
  }

  affiche_objets_disponibles();



//Alternative : Créer une fonction pour afficher tout les objets disponibles (available == true)
// Attention cette fois avec une boucle FOR OF

//Créer une fonction pour afficher tout les objets disponibles (available == true)
// function affiche_objets_disponibles()
//   {
//     for (x of objetAVendre)
//     {
//       if (x.available == true)
//       {
//         console.log(x.title);
//       }
//     }
//   }
//
//   affiche_objets_disponibles();

  // x n'est pas une valeur d'incrément, c'est directement l'objet for in (renvoie la propriété d'un objet et pas la valeur) - pour for of pour les liste x c'est l'ojet lui-même (renvoie la valeur d'une liste)


// Créer une fonction pour afficher les objets dont le niveau minimum est de 10
function affiche_objets_nivMin10 ()
{
  for (x in objetAVendre)
  {
    if (objetAVendre[x].minLevel == 10)
    {
      console.log(objetAVendre[x].title);
    }
  }
}

affiche_objets_nivMin10();

// Explication on boucle sur tout les élément du tableau objetAVendre
//Si la valeur de l'élément sur lequel on est en train de boucler à une valeur de minLevel =  à 10
// Alors on affiche la valeur du title de cet élément (le nom de l'arme)/
//Donc au final ça affiche uniquement les armes dont le minLevel est égal à 10



// Exercice : Personnage

// crée un objet "mainCharacter" qui possède le propriétés suivantes :
// name (string)
// level (int)
// life (int)
// weapon (object)
// attack (function)
// l'objet "weapon" possède les propriétés suivantes :
// name (string)
// damage (int)
// Appeler la fonction "attack" du personnage
// la fonction doit retourner : (le nom du personnage) attaque avec l'arme (nom de l'arme) les dégâts sont (niveau du personnage multiplié par le damage de l'arme)

// let arme = {"name": "aiguille", "damage": 5};

let mainCharacter =
{
  name : "Arya Stark",
  level : 6,
  life : 7,

  weapon :
          {
            "name": "aiguille",
            "damage": 5
          },

  attaquer: function ()
    {
      let degat = this.level * this.weapon.damage;

      console.log (this.name + " attaque avec l'arme " + this.weapon.name + ", " + "les dégâts sont " + degat);
      return this.name + " attaque avec l'arme " + this.weapon.name + ", " + "les dégâts sont " + degat ;
    }
};

mainCharacter.attaquer();

// Attention quand on utilise l'instruction return, on sort automatiquement de la boucle, donc toutes les instructions qui suivent un return et son contenu ne seront pas exécutées.
// Donc si on veut faire un console.log et un return, mettre toujours le return en dernier car sinon le console.log ne s'exécutera pas et rien ne s'affichera dans la console.
// Le this dans la fonction fait référence à l'objet donc c'est équivalent de mettre mainCharacter.weapon.name et this.weapon.name
// L'usage du this permet également de régler certains problème où la console indique que tel variable ou terme n'a pas été défini car il permet de vérifier si ça n'est pas le cas plus haut ou plus bas (je crois ...)


// BONUS :
//
// Exercice : Adversaire
//
// crée un objet "character" qui possèe le propriétés suivantes :
// name (string)
// level (int)
// life (int)
// weapon (object)
// attack (function)
// receiveDamage (function)
// l'objet "weapon" possèe les propriétés suivantes :
// name (string)
// damage (int)
// crée un objet "opponentCharacter" a partir de character
//
// crée un objet "mainCharacter" a partir de character
//
// Appeler la fonction "attack" de "mainCharacter" afin qu'il attaque "opponentCharacter"
//
// la fonction doit afficher dans la console (ligne par lige)
// (le nom du personnage) attaque (nom de l'adversaire)
// avec l'arme (nom de l'arme)
// et lui inflige (niveau du personnage multiplié par le damage de l'arme) de dégats
// (nom de l'adversaire) a maintenant (life de l'adversaire) de vie

character =
{
  name : "Le Limier",
  level : 8,
  life : 10,
  weapon :
          {
            name: "épée",
            damage: 8
          },

  bataille: function ()
  {
      let degat = this.level * this.weapon.damage;

      // var message = character.name + " attaque " + opponentCharacter.name;
      // message += " avec l'arme " + character.weapon.name;
      // message += " et lui inflige " + degat + " de dégat .";
      // message += opponentCharacter.name + " a maintenant " + opponentCharacter.life + " de vie";
      // return console.log(message

      //Solution moins éléguante que celle juste au dessus mais qui malheureusement ne fonctionne pas et affiche toute la phrase sur une même ligne dans la console
      console.log (character.name + " attaque " + opponentCharacter.name);
      console.log (" avec l'arme " + character.weapon.name);
      console.log (" et lui inflige " + degat + " de dégat .");
      console.log (opponentCharacter.name + " a maintenant " + opponentCharacter.life + " de vie");

  },

  receiveDamage: function()
  {
    let vie_restante= opponentCharacter.life - degat;
    return vie-restante;
  }
};

opponentCharacter =
{
  name : "La Montagne",
  level : 15,
  life : 20,
  weapon :
          {
            name: "épée massive",
            damage: 12
          }
};

character.bataille();
