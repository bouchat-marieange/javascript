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

```javascript
for (var i = 0; i <10; i++) {
    console.log(i);
}
```

Cela nous retourne dans la console les numéros de 1 à 10 dans l'ordre. Par ailleurs, i++ est équivalent à i = i + 1.




