Javascript
https://www.grafikart.fr/formations/debuter-javascript/variables

Note à partir de Grafikart

Une variable sert à stocké provisoirement des données
On peut décider du nom que l'on donne à la variable, en respectant ceci:

le nom de la variable:

* doit commencer par une lettre
* peut être composé ensuite de lettre et de chiffre et underscore
* aucun autre caractère spécial ne peut être utilisé pour nommer les variable

exemple: 
* var chat
* var demo
* var c85Jv
* var a_deviner

Pour assigné une valeur à une variable on utilise le terme égal.

Les varibles peuvent être de différents type:

* en entien - exemple: 2 ,26
* un chiffre à virgule (un reel)- exemple: 1.23
* un chiffre négatif : -4
* des chaine de caractère (toujours entouré de guillemets doubles ou simples) - exemple: "Bonjour je vais bien"

Important : Il n'y a pas besoin de mettre de point-virgule à la fin des instructions, juste retour à la ligne.

Quand on va taper "Enter", la variable sera automatiquement stockée.
exemple: var chat = "Luna"

si ensuite je tape
demo
la console affichera le contenu de la variable soit
Luna

Le javascript est un langage qui est faiblement typé contrairement au java, les variables peuvent changer de type au cours de l'exécution du script

Je peux par exemple indiqué juste après l'instruction chat = 4
Et cela ne posera aucun problème.
Il faudra donc faire attention lors de l'exécution d'opération mathématiques
C'est différent de faire
3 + 4 
qui renverra la valeur 7

alors que "3" + 4 
renverra la valeur "34"
le systeme a converti automatiquement la réponse en chaine de caractère et non en chiffres, car il converti automatiquement le chiffre ajouter à la chaine de caractère en une chaine de caractère également.


Par contre si l'opération n'est pas possible à faire sur une chaine de caractère comme la multiplication, le systeme convertira la chaine de caractère en chiffre car il déduit que dans ce cas il s'agit d'un entier.
"3" * 4
renverra 12

Par contre si on essaie de multiplier une chaine de caractère complexe par un chiffe, la console renverra NaN qui signifie "Not a Number" car il ne peut pas convertir cette chaine de caractère en nombre.
"Salut les gens" * 4 
renverra NaN


On peut additionner des chaines de caractère stockées ou non dans des variables
var a= "Salut"
var b =" les gens !"
a + b
renverra "Salut les gens!"

```javascript
var demo = "Salut les gens"
undefined
demo
"Salut les gens"
demo = 3
3
3+4
7
"3"+4
"34"
"3"+4
"34"
"3"*4
12
"Salut les gens" * 4
NaN
var a = "Salut"
undefined
var b =" les gens"
undefined
a + b
"Salut les gens"
b+a
" les gensSalut"
```

Pour nettoyer la console on utilise l'icone sens interdit ou le raccourci Ctrl + L


Il existe des types de variables plus originaux comme:
* les booléens - soit vrai soit faux
pour stocké la valeur "vrai" vous tapez "true"
pour stocké la valeur "faux" vous tapez "false"


exemple:
```javascript
var c= true
undefined
c
true
```

Les booléens seront renvoyé lorsque l'on fait des opérations de comparaison


exemple:

```javascript
3>4
false
```

Attention cela peut générer des erreur quand on fait cela avec des chaînes de caractères.
Lorsque l'on compare 2 chiffres - pas de soucis
Lorsque l'on compare 1 chaine de caractère et un chiffre, la console converti la chaine en chiffre donc le résultat est toujours correct
Mais lorsque l'on compare deux chiffre placé entre guillemets comme chaine de caractère, la console renvoie un résultat inexacte car cette fois la console ne compare plus la valeur des chiffre mais bien la position dans l'ordre alphabétique. Donc 7 est supérieur à 4 et donc il renvoie true.


```javascript
var c= true
undefined
c
true
3>4
false
7>42
false
"7" > 42
false
"7" > "42"
true
```

On a des type de variable qui permettent également de stocké des variables plus complexes.Par exemple la liste du nom des élèves d'une classe. Pour créer un tableau on utilise les crochets et des virgules pour séparer les différentes valeurs stockées dans le tableau comme ceci:

```javascript
var eleves = ["Jean", "John", "Marion"]
undefined
eleves[0]
    
"Jean"
eleves[1]
"John"
eleves[2]
"Marion"

```

Pour récupérer un éléments précis stocké dans le tableau, je vais taper le nom de la variable tableau ainsi que l'index de la valeur que je veux récupérer. 

ATTENTION EN JAVASCRIPT LA NUMEROTATION DE L'INDEX COMMENCE A 0 et pas à 1, donc on obtiendra ceci:


Ce type de tableau atteint rapidement ces limite lorsque l'on veut stocké des données plus complexes comme par exemple une serie d'information concernant un elève (Nom, age, note).

Si on le fait comme ceci est que l'on revient après sur son code, on ne saura plus si 12 correspond par exemple à l'age ou à la note obtenue.

var etudiant = ["Marc", 12, 15]
undefined

On va alors utiliser les objets pour stocker ce type de données. Voici comment procéder.


On a ainsi pour chaque valeur une clefs qui lui correspond et qui indique de quoi il s'agit (c'est l'équivalent des tableaux associatifs en PHP). On pourra ensuite récupérer ces données grâce aux clefs qui leurs sont associés facilement.

```javascript
var etudiant ={nom: "Marc", age: 12, moyenne: 15}
undefined
etudiant.nom
"Marc"
etudiant.age
12
etudiant.moyenne
15
```
















