# Javascript Mémento perso

## Affichage

Pour afficher texte dans console
```javascript
console.log();
```


Pour afficher texte dans la page web (index.html)
```javascript
document.write();
```


Pour afficher un message dans une fenêtre pop-up

```javascript
alert();
```

Pour afficher un message dans une fenêtre pop-up avec un champ pour que l'utilisateur puisse faire une saisie de texte

```javascript
prompt();
```

## Variables

### Déclaration variable

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

### Initialisation variable
```javascript
var nom = "Tom";
var age = 20;
```

### Assignation d'une variable (mise à jour de la valeur d'une variable en la remplacant pour une autre valeur)
```javascript
nom = "Andy";
age = 43;
```

### Stocker des résultats d'opération dans une variable
```javascript
var apples = 5,
pears = 10;

var piecesOfFruit = apples + pears;

var piecesForEachPerson = piecesOfFruit / 3;
```

### Priorité et opérateurs
```javascript
(10 + 2) / 2 + 4 * 2
```

Priorité:

* parenthèses
* multiplication et division (si plusieurs à effectuer de gauche à droite)
* addition et soustraction


## Logique

### Egalité

Deux valeurs sont égales avec opérateur ==

```javascript
15,234 == 15,234
­> true
```


Deux valeurs ne sont pas égales avec opérateur !=

```javascript
15,234 != 18,4545
­> true
```

Attention les chaine et le nombre ne sont pas égaux
```javascript
'10' == 10
­> false
­> true
```

### Supériorité et infériorité

valeur 1 plus grand que valeur 2 avec >

```javascript
10 > 5
­> true
```

valeur 1 plus petit que valeur 2 avec <

```javascript
20,4 < 20,2
-> false
```

### Comparaison combinée

Plus grand ou égal ou plus petit ou égal

```javascript
10 >= 10 
-> true

10 <= 5 
-> false
```

### Conditions
```javascript
if (43 < 2) 
{
	// Exécutez le code ici
} 
else 
{
	// Exécutez un autre morceau de code
}
```

## Fonctions

### Créer une fonction

```javascript
var add = function (a, b) {
    return a + b;
}
```
Attention après le return, rien ne sera exécuté.

### Appeller une fonction

```javascript
faireQuelqueChose();
findAnInterestingThing();
```

```javascript
var result = add(1, 2); 
-> result est égal a 3
```

Cet appel ajoute les arguments 1 et 2, qui à l'intérieur de la fonction add, seront enregistrées dans les variables a et b.


## Boucles

### while

```javascript
var increment = 0;
while (increment <10) {
    console.log(increment);
    increment = increment + 1;
}
// increment est égal a 10
```
À la fin de la boucle le code continue son exécution à partir de l'accolade fermante ("}") de la fin du bloc.

### for

```javascript
for (var i = 0; i <10; i++) {
    console.log(i);
}
```

Cela nous retourne dans la console les numéros de 1 à 10 dans l'ordre. Par ailleurs, i++ est équivalent à i = i + 1.


## Tableaux

### Création d'un tableau

```javascript
let emptyArray = []; // anciennement : new Array()
let shoppingList = ["lait", "pain", "haricots"];
```

Les tableaux sont des listes de tout type de données, y compris d'autres tableaux. Chaque élément du tableau a un indice. Ce nombre permet de récupérer un élément du tableau. Les indices commencent à 0. Le premier élément d’un tableau a l'indice 0.

### Récupérez un élément spécifique d'un tableau

```javascript
ShoppingList[0];
­> lait
```

### Modifiez un élément spécifique d'un tableau

```javascript
shoppingList[1] = "cookies";
// ShoppingList est maintenant ['lait', 'cookies', 'haricots']
```

### Trouver nombre d'élément dans un tableau avec length

```javascript
shoppingList.length;
­> 3
```

### Ajouter ou supprimer des éléments à la fin du tableau avec push et pop

```javascript
shoppingList.push('new car');
// shoppingList est maintenant ['Milk', 'pain', 'haricots', 'new car']
shoppingList.pop();
// shoppingList est de retour à ['Milk', 'pain', 'haricots']
```

### Exemple complexe avec tableaux et fonction et ajout de données avec push

Dans l'exemple ci-dessous:

* On créer une fonction appellée helloFrom qui affiche "Bonjour de + nom de chacune des personnes stockées dans le tableau (boucle - itération)

* Le tableau s'appelle let people et contient les élement Tom, Yoda, Ron avec respectivement les index 0, 1, 2

* On ajoute deux nouvelles personnes aux tableaux avec nom_tableau.push : Bob et Dr Mal

* On effectue une boucle for sur tous les éléments du tableau. La boucle commence à 0 (i =0), incrément sera inférieur à la longueur du tableau calculée avec lenght (puisqu'il commence à 0) et on incrémente de 1 à chaque fois (i++).

* A chaque tour de boucle, on stocke dans un let (très proche d'une variable) appelé greeting le fait que l'on applique systematiquement la fonction helloFrom définie plus haut à chaque nom de personne contenue dans le tableau people. Pour cibler à chaque fois la personne suivante, on indique [i] après le nom du tableau qui permet de récupérer le contenu de la cellule dont l'index sera incrémenté à chaque tour en commençant par 0. Exemple: people[0] -> Tom - people [1] -> Yoda, etc...

* Le nombre de tour de boucle sera automatiquement adapté grâce à l'usage de length les paramètre de la boucle, même si d'autres noms ont été ajoutés avec push.

* On affiche ensuite dans la console le résulat retourné par le let (variable) greeting c'est à dire "Bonjour de Tom" "Bonjour de Yoda" etc...


```javascript
let helloFrom = function (personName) {
    return "Bonjour de " + personName;
}
let people = ["Tom", "Yoda", "Ron"];
people.push("Bob", "Dr Mal");
for (let i = 0; i < people.Length; i++) {
    let greeting = helloFrom(people[i]);
    console.log(greeting);
}
```

## Jeux Pendu

### Les commandes à utiliser et leurs usages

#### prompt();

```javascript
windows.prompt();
}
```

windows.prompt affiche une fenetre popup dans laquelle l'utilisateur peut entrer des données.

exemple: 

```javascript
var person = prompt ("Please enter your name", "Harry Potter");
}
```

Syntax

prompt(text, defaultText)

* Dans la syntax: text est le texte qui s'affichera pour demander à l'utilisateur le type de texte à entrer (ex: nom, age, lettre, ...). 
* Le second paramètre defaultText est optionnel et permet d'afficher un exemple du type de données attendue dans le champ où l'utilisateur doit encoder des données.


#### alert();


```javascript
windows.alert();
```
Syntax

```javascript
windows.alert();
```
ou 

```javascript
alert();
```

* Affiche le paramètre texte dans un message d'alerte ou d'information (fenêtre popup)
* La boite à message n'est pas modifiable.
* Pour écrire le message sur plusieurs lignes, utilisez le caractère spécial de retour chariot n.
* Deux notations sont possibles et valides:
window: window.alert("texte");
ou 
alert("texte");


#### confirm();

Boolean window.confirm(String texte)

```javascript
window:window.confirm("texte");
```
Syntax

```javascript
windows.confirm();
```
ou 

```javascript
confirm("texte);
```

* Affiche le paramètre texte dans un message d'alerte avec 2 boutons de confirmation.
* Retourne true si le visiteur clique sur OK.
* Retourne false si le visiteur clique sur Annuler ou appuye sur la touche Echap.
* La boite de message et les boutons ne sont pas modifiables.
* Pour message sur plusieurs lignes, utilise caractère spécial retour chariot n.
* Deux notations valides:
window:window.confirm("texte");
ou 
confirm("texte);


## Math

### Math Object

L'objet Math est un objet natif dont les méthodes et propriétés permettent l'utilisation de constantes et fonctions mathématiques. Cet objet n'est pas une fonction.

Math n'est pas un constructeur (contrairement au autres objets globaux)

Toutes les propriétés et méthodes de Math sont statiques.

Pour accéder à la constante PI, on utilise Math.PI
Pour accéder à la fonction sinus, on utilise Math.sin(x), où x est l'argument de la méthode.

Les constantes sont définies avec la précision des nombres réels en Javascript.


```javascript
var x = Math.PI;            // Returns PI
var y = Math.sqrt(16);      // Returns the square root (racine carrée) of 16
```

### Math Object Methods

```javascript
Math.ceil(x)	//Renvoie la valeur de x arrondie supérieur à son entier le plus proche
		//Returns the value of x rounded up to its nearest integer)

Math.floor(x)	//Renvoie la valeur de x arrondie inférieur à son entier le plus proche	
		//Returns the value of x rounded down to its nearest integer

Math.max(x, y, z, ...)	//Renvoie le nombre avec la valeur la plus élevée
			//Returns the number with the highest value

Math.min(x, y, z, ...)	//Renvoie le nombre avec la valeur la plus basse
			//Returns the number with the lowest value

Math.random()	//Retourne un nombre aléatoire entre 0 et 1
		//Returns a random number between 0 and 1

Math.round(x)	//Renvoie la valeur de x arrondie à son entier le plus proche
		//Returns the value of x rounded to its nearest integer

```

### Générer une valeur aléatoire entière entre une valeur maximal et minimal (entre 50 et 100)
 
```javascript
function getRndInteger(min, max) 
{
     return Math.floor(Math.random() * (max - min + 1) ) + min;
}
```

Avec les valeurs 50 et 100

```javascript
function getRndInteger(50, 100) 
{
     return Math.floor(Math.random() * (100 - 50 + 1) ) + 50;
}
```

### Choisir une valeur aléatoirement dans un tableau

```javascript
var mon_tableau = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
var longueur_tableau = mon_tableau.length;//renvoie 10 (car 10 éléments dans le tableau)
var rand_index = Math.random()*(longueur_tableau - 0);
var rand_index = Math.floor(rand_index)+ 0;
console.log (rand_index);
console.log (mon_tableau[rand_index]);
```


### Transformation

```javascript
parseFloat() // Permet de transformer une chaîne de caractères en un nombre flottant après avoir analysée celle-ci (parsing).

parseInt() //La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.

parseFloat(string)
```

Paramètres
string
Une chaîne de caractères la valeur qu'on souhaite analyser et transformer en un nombre flottant.
Valeur de retour
Un nombre flottant obtenu à partir de l'analyse de la chaîne de caractères. Si le premier caractère ne permet pas d'obtenir un nombre, ce sera la valeur NaN qui sera renvoyée.

parseFloat analyse l'argument fourni sous la forme d'une chaîne de caractères et renvoie un nombre flottant correspondant. L'analyse de la chaîne s'arrête dès qu'un caractère qui n'est pas +,-, un chiffre, un point ou un exposant. Ce caractère, ainsi que les suivants, seront ignorés. Les blancs en début et en fin de chaîne sont autorisés..

Si le premier caractère de la chaîne ne peut pas être converti en un nombre, parseFloat() renverra NaN.

Pour des raisons arithmétiques, la valeur NaN n'est jamais un nombre, quelle que soit la base considérée. On peut utiliser la méthode isNaN afin de déterminer si le résultat obtenu par parseFloat() est NaN. Si NaN est passé comme valeur lors d'opérations arithmétiques, ces opérations renverront également NaN comme résultat.

parseFloat() peut également analyser et renvoyer la valeur Infinity qui représente l'infini numérique. Ici, on pourra utiliser la fonction isFinite() afin de déterminer si le résultat obtenu est un nombre fini (c'est-à-dire qui n'est ni Infinity, ni -Infinity, ni NaN).

```javascript
parseInt(string, base);
```

Paramètres
string
La valeur qu'on souhaite analyser et convertir. Si l'argument string n'est pas une chaîne de caractères, elle sera convertie en une chaîne (grâce à l'opération abstraite ToString) . Les blancs contenus au début de l'argument sont ignorés.
base
Un entier compris entre 2 et 36 qui représente la base utilisée pour la valeur représentée dans la chaîne. La base communément utilisée est la base décimale et on utilisera donc 10 dans ce cas pour ce paramètre. Ce paramètre doit toujours être utilisé, en effet s'il n'est pas spécifié, le comportement de la fonction n'est pas garanti et peut varier d'une plate-forme à une autre.
Valeur de retour
Un entier obtenu à partir de l'analyse de la chaîne de caractères. Si le premier caractère ne permet d'obtenir un nombre, ce sera NaN qui sera renvoyé.




## Objet (JSON)

Infos dans le readme

```javascript
let table = new Object(); // ancienne manière de déclarer
let table = {}; // nouvelle manière de déclarer

let main_color = "#FF0000";
let chair = {
	color : main_color,
	feets : 4,
	things : ["papier","telecommande","clé usb"],
	knock : function(){
		console.log("TAP TAP ! ");
		console.log( chair.things ); // ["papier",..] si on utilise des références 
		console.log( this.things ); // ["papier",...] si on utilise d'autres instances
	}
};
console.log( chair[feets] ); // pas bon
console.log( chair.feets ); // -> 4
console.log( chair["feets"] ); // -> 4

chair.knock(); // lance la méthode knock

for(let key in chair){ // boucle
	console.log(typeof key); // affiche le type de key ici String
	console.log( key ) // affiche chaque clé de mon objet ("color", "feets",...)
	console.log( chair[key] ) // affiche chaque valeur ("#FF0000", 4,...)
}
```


<https://www.w3schools.com/js/js_json_objects.asp>

### Syntax des objet

Entre parenthèse, paire de clé/valeur, séparée par une virgule.
Les valeurs peuvent être de type string, number, object, array, boolean ou null)

```javascript
{ "name":"John", "age":30, "car":null }
```

### Accéder à la valeur d'un objet

On accède à un objet en donnant le nom de l'objet.clé lié à la valeur que l'on veut récupérer

```javascript
myObj = { "name":"John", "age":30, "car":null };
x = myObj.name;
```

On peut aussi accéder à un la valeur d'un objet en utilisant les crochets

```javascript
myObj = { "name":"John", "age":30, "car":null };
x = myObj["name"];
```

### Faire une boucle sur un objet

#### Une boucle for pour accéder aux clés de l'objet

```javascript
myObj = { "name":"John", "age":30, "car":null };

for (x in myObj) 
{
    document.getElementById("demo").innerHTML += x + "<br>;
}
```


* document.getElementByID("demo") --> cible tout les élément dans le document HTML qui ont l'ID "demo"
* innerHTML += x --> est l'écriture raccourcie pour indiquer innerHTML = innerHTML + x
* innerHTML récupère ou définit tout le balisage et le contenu au sein d'un élément donné.
* document.getElementById("demo").innerHTML += x; signifie donc;
* Cibler tous les éléments sur la page HTML avec id "demo", récupérer dans cet élément tout le balisage (p, div, h1,... ) et leurs contenu et ensuite ajouter x à cela.
* En fait cela ajoute à la suite du contenu de l'élément avec l'id "demo, la liste des clés du tableau soit name, age, car

#### Une boucle for pour accéder aux valeurs correspondant au clefs de l'objet


```javascript
myObj = { "name":"John", "age":30, "car":null };

for (x in myObj) 
{
    document.getElementById("demo").innerHTML += myObj[x];
}
```

* idem que pour accéder au clef mais au lieu d'ajouter la clef à la fin, on ajoute la valeur qui correspond à la cle en indiquant le nom de l'objet et le x représentant la clef entre crochets.
* Cela va boucler sur toutes les valeurs du tableaux pour les afficher à la suite de l'élément dans le document HTML portant l'ID "demo"

### Objets JSON imbriqués (Nested)

Une valeur d'un objet JSON peut être un autre objet JSON

```javascript
myObj = {
    "name":"John",
    "age":30,
    "cars": {
        "car1":"Ford",
        "car2":"BMW",
        "car3":"Fiat"
    }
 }
```

#### Pour accéder à une valeur stockée dans un objet JSON imbriqué dans un autre objet JSON

On peut utiliser deux type de notation avec des points ou avec point et crochets

```javascript
myObj = {
    "name":"John",
    "age":30,
    "cars": {
        "car1":"Ford",
        "car2":"BMW",
        "car3":"Fiat"
    }
 }
x = myObj.cars.car2;

//ou autre notation avec point et crochets

x = myObj.cars["car2"];
```

#### Modifié une valeur stockée dans un objet JSON imbriqué dans un autre objet JSON

Avec la notation point

```javascript
myObj.cars.car2 = "Mercedes";
```

Avec la notation point et crochet

```javascript
myObj.cars["car2"] = "Mercedes";
```

#### Supprimé une paire cle/valeur stockée dans un objet JSON imbriqué dans un autre objet JSON

delete myObj.cars.car2;


### Les tableaux dans les Objets JSON

Les tableaux en JSON sont presque les même qu'en javascript

Dans JSON, les valeurs de tableau doivent être de type string, number, object, array, boolean ou null. 
En JavaScript, les valeurs de tableau peuvent être toutes les réponses ci-dessus, ainsi que toute autre expression JavaScript valide, y compris les fonctions, les dates et les valeurs indéfinies.

Un tableaux peut stocké plusieurs valeur pour une clef dans une objet JSON

```javascript
{
"name":"John",
"age":30,
"cars":[ "Ford", "BMW", "Fiat" ]
}
```

#### Accéder aux valeurs stockées dans un tableau situé dans un Objets JSON

```javascript
x = myObj.cars[0];
```

#### Boucle pour récupérer toutes les valeurs stockées dans un tableau situé dans un Objets JSON

##### Avec une boucle for-in

```javascript
for (i in myObj.cars) 
{
    x += myObj.cars[i];
}
```

* Dans le paramètre de la boucle on indique i dans nom_objet
* x = x + nom_objet.clef[i];
* On peut ajouter un br pour retourner à la ligne après chaque valeurs x += myObj.cars[i] + "<br>";
* Cela affichera une liste de toutes les valeurs stockée dans le tableau correspondant à la clé "cars"
* Cela affichera donc Ford, BMW, Fiat

##### Avec une boucle for

```javascript
for (i = 0; i < myObj.cars.length; i++) 
{
    x += myObj.cars[i];
}
```

* On crée une boucle for traditionnelle
* En premier paramètre (où commence la boucle) on indique i=0 (car le premier index d'un tableau est 0)
* En second paramètre (jusque quand la boucle doit s'effectuer), on indique la taille de la longueur du tableau qui sera automatiquement récupérer grace à la fonction native javascript length.
* Attention lenght s'applique sur nom_objet.clé et pas directement sur l'objet
* En 3e paramètre on indique l'incrémentation soit i ++ ce qui est la notation raccourcie pour dire i= i+1 (on augmente la valeur de l'index de 1 à chaque boucle), donc d'abord on affiche la valeur correspondant à l'index 0, puis la valeur correspondant à l'index 1, etc...


### Les tableaux imbriqués dans les Objets JSON

La valeur d'un tableau peut également être un autre tableau ou même un autre objet JSON

```javascript
myObj = {
    "name":"John",
    "age":30,
    "cars": [
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
        { "name":"Fiat", "models":[ "500", "Panda" ] }
    ]
 }
```

#### Boucle pour récupérer les valeurs stockées dans les tableaux imbriqués dans un tableau dans les Objets JSON

```javascript
for (i in myObj.cars) 
{
    x += "<h1>" + myObj.cars[i].name + "</h1>";

    for (j in myObj.cars[i].models) 
	{
        x += myObj.cars[i].models[j];
    	}
}
```

* Si on veut obtenir un bel affichage on peut même indiqué que les valeurs du premier sous tableau s'afficheront comme des h1 et que leur contenu s'affichera ensuite normalement
* On affiche donc sous forme de h1 la valeur contenue dans l'objet myObj dans le tableau correspondant à la clé "cars" qui contient également un autre tableau dont on veut afficher la valeur correspondant à la clé "name"
* Ensuite dans la boucle, on insère une seconde boucle qui va prendre comme paramètre j (pour ne pas utiliser une seconde fois i) dans nom_objet.clé[valeur d'index i]. nom_clé dans le tableau imbriqué dans le tableau.
* Cette boucle va effectuer x += myObj.cars[i].models[j];
* En bref, on boucle pour afficher les valeurs correspondant à la clé du deuxième tableau imbriqué dans le premier tableau. 


#### Modifier les valeurs stockées dans les tableaux imbriqués dans un tableau dans les Objets JSON

On utilise le numéro de l'index pour modifier une valeur dans un tableau

```javascript
 myObj.cars[1] = "Mercedes";
```

#### Supprimer une paire clé/valeur stockée dans les tableaux imbriqués dans un tableau dans les Objets JSON

```javascript
delete myObj.cars[1];
```

#### Créer un constructeur pour générer facilement plusieurs objets qui ont les même propriétés
Créer un constructeur pour générer facilement plusieurs objets qui ont les même propriétés

```javascript
class Banana {
  constructor(title, physic, magic, minLevel) {
    this.title = title;
    this.physic = physic;
    this.magic = magic;
    this.minLevel = minLevel;
    this.Available = function Available(UserLevel) {
      if (UserLevel >= minLevel) {
        return true;
      } else {
        return false;
      }
    }
  }
}


var Sword = new Banana("Sword", 40, 0, 10);
var Bow = new Banana("Bow", 10, 10, 10);
var Shotgun = new Banana("Shotgun", 999, 0, 95);
```


#### Autre exemple de constructeur

```javascript
class mainCharacter {
  constructor(name, level, life) {
    this.name = name;
    this.level = level;
    this.life = life;
    this.weapon = Sword.title;
    this.weaponAttack = Sword.physic;
    this.attack = function attack() {
      var dammage = this.level * this.weaponAttack;
      console.log(this.name + " did " + dammage + " dammage with a " + this.weapon);
    }

let a = new mainCharacter("ste", 10, 200);
```

### JSON.parse()

Un usage courant de JSON est d'échanger des données avec un serveur web.
Lorsque l'on reçoit des données d'un serveur web, les données sont toujours des chaînes de caractère
Analyser les données avec JSON.parse() et les données deviennent une objet Javascript.

Texte reçu d'un serveur web (toujours chaîne de caractère - string)

```javascript
'{ "name":"John", "age":30, "city":"New York"}'
```

On utilise la fonction JSON.parse() pour convertir ce texte en objet JavaScript

```javascript
var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
```

Attention, il faut vérifier que le texte est écrit au format JSON car sinon cela renvoie une erreur de syntax.

On peut maintenant utiliser l'objet JavaScript dans notre page

```html
<p id="demo"></p> 

<script>
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age; 
</script>
```

### JSON depuis le serveur

On peut demander JSON à partir du serveur en utilisant une requête AJAX.
Tant que la réponse du serveur est écrite au format JSON, vous pouvez confertir la chaîne (parse) en un objet JavaScript.

Je verrais cette partie plus tard car elle ne me semble pas d'actualité tant que je n'ai pas parfaitement intégrer les autres fonctionnalités Jason. Lorsque je remprendrais cet apprentissage, je pourrais continuer ma prise de note à partir de la page https://www.w3schools.com/js/js_json_parse.asp

HTML est une structure de type XML. Les éléments qui le forment ont une structure de noeuds avec des parents et des enfants. Comme le tronc et les branches d'un arbre.Il y a un élément de racine (html) avec des branches comme head et body qui a leur tour ont également des branches. C'est pourquoi, le DOM est aussi appelé l'arbre DOM

La modification du DOM se fait en choisissant un élément et en changeant quelque chose à son sujet. C'est une action que l'on fait souvent en javascript.
Pour accéder au DOM à partir de Javascript, l'objet document est utilisé. Il est fourni par le navigateur et permet au code sur la page javascript d'intéragir avec le contenu.


## DOM

DOM = Document Object Model
permet de manipuler la structure et le style d'un page HTML.
Pour voir à quoi ressemble le DOM d'une page, ouvrir les outils de développement dans votre navigateur (Ctrl+ Maj + i ou j) et rechercher l'inspecteur d'élément. Dans la plupart des navigateurs vous pouvez supprimer et modifier directement les éléments du DOM.


HTML est une structure de type XML. Les éléments qui le forment ont une structure de noeuds avec des parents et des enfants. Comme le tronc et les branches d'un arbre.Il y a un élément de racine (html) avec des branches comme head et body qui a leur tour ont également des branches. C'est pourquoi, le DOM est aussi appelé l'arbre DOM


La modification du DOM se fait en choisissant un élément et en changeant quelque chose à son sujet. C'est une action que l'on fait souvent en javascript.
Pour accéder au DOM à partir de Javascript, l'objet document est utilisé. Il est fourni par le navigateur et permet au code sur la page javascript d'intéragir avec le contenu.

### Obtenir un élément

Il y a plusieurs manière d'obtenir un élément

#### Par l'ID

document.getElementById permet d'obtenir un élément à partir de son ID

```javascript
var pageHeader = document.getElementById('pageHeader');
```

L'élément de pageHeader peut alors être manipulé. On peut par exemple modifier sa taille ou sa couleur.Ou un autre code peut être déclaré pour gérer l'élément quand on clique dessuou ou quand il est survolé.

getElementById est une méthode de l'objet document. La plupart des méthodes utilisées pour accéder à la page se trouvent sur l'objet document.

Par le tag (nom de la balise) document.getElementByTagName fonctionne de la même manière que get ElementById, sauf qu'elle prend un nom de tag (div, ul, li, ...) au lieu d'un ID. Elle renvoie une NodeList qui est essentiellement un tableau des éléments DOM qu'elle a trouvé.

#### Par le nom de la classe

document.ElementByClassName renvoie le même genre de NodeList comme getElementByTagname, sauf que vous passez un nom de class et non un nom de tag.


#### En sélecteur CSS

De nouvelles méthodes sont disponibles dans les navigateurs modernes. Elles font des sélections d'éléments plus faciles en permettant l'utilisation de sélecteur CSS. Il s'agit de 
document.querySelector
et
document.querySelectorAll

```javascript
var pageHeader = document.querySelector('#header');
var bouton = document.querySelectorAll('.btn');
```

querySelector, comme getElementById, retourne un seul élément alors que querySelectorAll renvoie une NodeList. Si plusieurs éléments correspondent au même sélecteur et que vous utilisez querySelector, seul le premier élément serar retourné. 


### Utiliser le DOM avec Javascript

// la fonction getElementById() permet d'accéder à un élément de l'arbre DOM grâce à son id.

```html
<p id="paragraphe01" class="texte">Bonjour à tous</p>
```

// Le bloc <p> est accessible de la manière suivante:

```javascript
document.getElementById("paragraphe01")
```

// On peut donc agir sur lui en changeant par exemple sa couleur

```javascript
document.getElementById("paragraphe01").style.color = "#ddcddc";
```

### Naviguer dans l'arbre DOM en Javascript

A partir de Javascript pour pouvez naviguer dans l'arbre DOM et atteindre et
modifier chacun des éléments du document par l'intermédiaire de fonctions
dont voici les plus utiles

#### parentNode
L'attribut renvoie son noeud parent. S'il n'y a pas de noeud parent, il renvoie NULL

#### childNote
L'attribut renvoie un tableau de tous ses noeuds enfants. S'il n'y a ps de noeud enfant , alors il renvoie un tableau vide

#### firstChild
L'attribut renvoie son premier noeud enfant. S'il n'y a pas de noeud enfant, il renvoie NULL

#### lastChild
L'attribut renvoie son dernier noeud enfant. S'il n'y as pas de noeud enfant, il renvoie NULL

#### nextSilbing
L'attribut renvoie le noeud frere qui le suit. S'il n'apas de noeud suivant , il renvoie NULL

#### previousSilbing
L'attribut renvoie le noeud frere qui le précède. S'il n'a pas de noeud précédent, il renvoie NULL




### Manipuler les éléments et modifier l'arbre DOM

#### Fonction : createElement
permet de créer un élémnent du type passé en paramètre. Dans cette expemple cela crée une div
```javascript
document.createElement("div")
```

#### Fonction : createTextNode
permet de créer un élément de type texte
```javascript
text = document.createTextNode("Bonjour à tous";)
```

#### Fonction :appendChild
permet d'insérer un noeud en dernière position des ses élement enfants
```javascript
nouveauDiv = document.createElement("div");
text = document.createTextNode("Bonjour à tous");
nouveauDiv.appendChild(text);
document.body.appendChild(nouveauDiv);
```

#### Fonction : insertBefore
permet d'insérer un noeud enfant A avant un noeud enfant B
```javascript
noeudA = document.createElement("div");
document.body.insertBefore(noeudA, noeudB);
```

#### Fonction : replaceChild
permet de remplacer un noeud enfant A par un noeud enfant B
elementParent.replaceChild(noeudB, noeudA);
```

#### Fonction: cloneNode
permet de cloner un noeud A et de façon optionnel ses enfants, et un noeud B
```javascript
noeudB = noeudA.cloneNode(true);
```

#### Fonction : removeChild
permet de supprimer un noeud enfant
```javascript
elementParent.removeChild(noeud);
```


### Ce qu'il faut retenir

* La représentation du document sous forme d'arbre DOM permet de le manipuler grâce à différentes fonctions et/ou atttributs de chaque noeud.
* Il est extrêment important de comprendre la notion de DOL pour réaliser des programmation AJAX efficaces
* Ces différentes fonctions permettent:
	* La navigation dans l'arbre DOM (parentNode, childNote, ...)
	* La récupération d'information dans l'arbre DOM
	* La manipulation de l'arbre DOM (createElement, apprendChild, ...)


### Résumé DOM

#### Obtenir un élément (selectionner)

```javascript
var bodyElement = document.body; // selection la plus simple du body
var bodyElement = document.querySelector('body'); // selection par selecteur css - renvoie uniquement le premier élement de cette class
var bodyElement = document.children[0].children[1]; // enfant de personne [0] et contient tout [1]
var bodyElement = document.getElementsByTagName('body')[0]; // retourne la liste des élément portant le nom de la balise donné (div, h1, ul, ect...)
var bodyElement = document.querySelectorAll("body")[0];
var premier_paragraphe = document.getElementById("first-paragraph");
var All_bg_silver = document.querySelectorAll(".bg-silver"); //selectionner tout les éléments qui ont la class "bg-silver"
var ma_table = document.querySelector("#my-table"); // Selectionner le premier élément qui à l'id my-table
var All_bg_silver = document.querySelectorAll("#my-table"); //Selectionner tout les élément qui on l'id my-table

```

#### Ajouter une classe à un élément

```javascript
var premier_paragraphe = document.getElementById("first-paragraph");
premier_paragraphe.classList.add("aqua");
```

```javascript
All_bg_silver = document.getElementsByTagName("blockquote")[0].classList.add("bg-teal");
```

```javascript
firstParagraphe = document.getElementById("first-paragraph").setAttribute("class", "aqua");
```

#### Retirer une classe à un élément

```javascript
var premier_paragraphe = document.getElementById("first-paragraph");
premier_paragraphe.classList.remove("bg-lime","gray");
```

```javascript
All_bg_silver = document.getElementsByTagName("blockquote")[0].classList.remove("bg-silver");
```
```javascript
Bgsilver = document.getElementsByTagName("blockquote")[0].removeAttribute("class", "bg-silver");
```

#### Faire boucle pour ajouter ou retirer une class à une série d'élément renvoyée par querySelectorAll (la classe doit être ajouter ou retirer à chaque élément un par un grâce à une boucle

```javascript
for (i = 0; i < longueur; i++)
{
  var all_paragraphe = document.querySelectorAll("p")[i].setAttribute("class", "shadow");
}
```

```javascript
for (i = 0; i < longueur; i++)
{
  var all_paragraphe = document.querySelectorAll("p")[i].removeAttribute("class", "shadow");
}
```
