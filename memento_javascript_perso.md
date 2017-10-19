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

### Transformation

```javascript
parseFloat() // Permet de transformer une chaîne de caractères en un nombre flottant après avoir analysée celle-ci (parsing).

parseInt() //La fonction parseInt() analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.

parseFloat(string)
Paramètres
string
Une chaîne de caractères la valeur qu'on souhaite analyser et transformer en un nombre flottant.
Valeur de retour
Un nombre flottant obtenu à partir de l'analyse de la chaîne de caractères. Si le premier caractère ne permet pas d'obtenir un nombre, ce sera la valeur NaN qui sera renvoyée.

parseFloat analyse l'argument fourni sous la forme d'une chaîne de caractères et renvoie un nombre flottant correspondant. L'analyse de la chaîne s'arrête dès qu'un caractère qui n'est pas +,-, un chiffre, un point ou un exposant. Ce caractère, ainsi que les suivants, seront ignorés. Les blancs en début et en fin de chaîne sont autorisés..

Si le premier caractère de la chaîne ne peut pas être converti en un nombre, parseFloat() renverra NaN.

Pour des raisons arithmétiques, la valeur NaN n'est jamais un nombre, quelle que soit la base considérée. On peut utiliser la méthode isNaN afin de déterminer si le résultat obtenu par parseFloat() est NaN. Si NaN est passé comme valeur lors d'opérations arithmétiques, ces opérations renverront également NaN comme résultat.

parseFloat() peut également analyser et renvoyer la valeur Infinity qui représente l'infini numérique. Ici, on pourra utiliser la fonction isFinite() afin de déterminer si le résultat obtenu est un nombre fini (c'est-à-dire qui n'est ni Infinity, ni -Infinity, ni NaN).


parseInt(string, base);

Paramètres
string
La valeur qu'on souhaite analyser et convertir. Si l'argument string n'est pas une chaîne de caractères, elle sera convertie en une chaîne (grâce à l'opération abstraite ToString) . Les blancs contenus au début de l'argument sont ignorés.
base
Un entier compris entre 2 et 36 qui représente la base utilisée pour la valeur représentée dans la chaîne. La base communément utilisée est la base décimale et on utilisera donc 10 dans ce cas pour ce paramètre. Ce paramètre doit toujours être utilisé, en effet s'il n'est pas spécifié, le comportement de la fonction n'est pas garanti et peut varier d'une plate-forme à une autre.
Valeur de retour
Un entier obtenu à partir de l'analyse de la chaîne de caractères. Si le premier caractère ne permet d'obtenir un nombre, ce sera NaN qui sera renvoyé.



```

