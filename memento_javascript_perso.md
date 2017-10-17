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




