# Ajax

AJAX = Asynchronous JavaScript and XML
en français JavaScript et XML asynchrones

## Ajax, ça sert à quoi?

Ensemble de technologies destinées à réaliser de rapides mises à jour du contenu d'une page Web sans nécessiter de rechargement visible par l'utilisateur.

Les technologies employées sont diverses et varie selon le type de requête que l'on utilise, mais en général le JavaScript est toujours présent.

Les langages HTML et CSS sont également pris en compte pour l'affichage mais ceux-ci ne sont pas inclus dans le processus de communication. 

Le transfert de données est géré exclusivement par le JavaScript et utilise différentes technologies de formatage de données comme le XML oue le JSON.

## Application concrète

Dans champ de recherche d'un site, l'usage de l'auto-complétion (qui permet d'afficher la liste des mots qui commencent par les lettres que vous avez déja tapé. Ce système requiert l'AJAX qui demande au serveur de chercher les mots correspondant à la recherche et ce sans recharger la page, car sinon les caractères entrés seraient perdus.

La sauvegarde automatique à intervalles réguliers pour les textes en cours d'écriture sur les news, forums, etc... La sauvegarde doit se faire de manière transparente sans géner le rédacteur et sans nécessiter le rechargement de la page. Ajax se charge donc d'envoyer à intervalle régulier le texte encoder au serveur sans géner le rédacteur.

Dans ces deux cas, les requêtes contiennent juste les données à faire transiter et rien de plus. C'est tout l'intérêt de l'AJAX, car il permet de requêtes rapides car les requêtes sont précise et Ajax ne va pas recevoir la page complète mais seulement la partie concernée par la requếte formatée de manière à pouvoir l'analyser facilement.


## Les formats de données

L'ajax étant un ensemble de technologies effectuant des transferts de données, il faut structurer ces données. Il existe de nombreux formats pour transférer des données, voici les 4 principaux:

* Le format texte : le plus simple, aucune structure prédéfinie, sert essentiellement à transmettre une phrase à afficher à l'utilisateur, comme un message d'erreur ou autre. Bref, c'est une chaîne de caractère.

* Le HTML : permet transfert facile des données. Généralement il achemine des données qui sont déja formatées par le serveur puis affiché directement dans la page sans aucun traitement préalable de JavaScript.

* XML : acronyme de eXtensible Markup Language . Format de données proche du HTML. Il permet de stockere les données dans un language de balisage semblable au HTML. Très pratique pour stocker de nombreuses données ayant besoin d'être formatées et fournit moyen simple d'y accéder.

* JSON : JavaScript Objet Notation . Le plus courant. Il a pour particularité de segmenter les données dans un objet JavaScript. Très avantageux pour les petits transfert de données segmentées et de plsu en plus utilisé dans de très nombreux langages.

## Utilisation

### HtML et format texte

Ces 2 formats n'ont rien de particulier, on récupère leur contenu et on l'affiche là oàù il faut, ils ne nécessite aucun traitement.

Exemple si on recoit le texte suivant


'Je suis une alerte à afficher sur l'écran de l'utilisateur.'

On affiche le texte simple à l'endroit approprié

````html
<p>Je suis un paragraphe <strong>inintéressant</strong> qui doit être copié quelque part dans le DOM.</p>
````

On copier ce code HTML là où il doit être car le texte est déja formaté et prêt à l'emploi.


### Le XML

Le XML est plus intéressant car il permet de structurer des données de la même manière qu'en HTML, mais avec des balises personnalisées. Il est donc possible de réduire fortement le poids du transfert grâce à l'utilisation de noms de balise courts. Par exemple voici un tableau en XML.

````xml
<?xml version="1.0" encoding="utf-8"?>
<table>

    <line>
        <cel>Ligne 1 - Colonne 1</cel>
        <cel>Ligne 1 - Colonne 2</cel>
        <cel>Ligne 1 - Colonne 3</cel>
    </line>

    <line>
        <cel>Ligne 2 - Colonne 1</cel>
        <cel>Ligne 2 - Colonne 2</cel>
        <cel>Ligne 2 - Colonne 3</cel>
    </line>

    <line>
        <cel>Ligne 3 - Colonne 1</cel>
        <cel>Ligne 3 - Colonne 2</cel>
        <cel>Ligne 3 - Colonne 3</cel>
    </line>

</table>
````

Ce qui est très intéressant c'est que l'on peut avec la requête approprié, parcourir ce code WML avec les même méthodes que l'on utilise pour le DOM HTML (par exemple getElementByTagName())

Suite à votre requête, votre code JavaScript var recevoir une chaîne de caractères contenant un code comme celui de ce tableau. A ce stade il n'est pas encore possible de parcourir ce code, car il ne s'agit encore que d'une chaîne de caractère. Une fois la requête terminée et toutes les données reçues, un parseur (ou analyseur syntaxique) va se mettre en route pour analyser le code reçu , le décomposer, et enfin le reconstituer sous forme d'arbre DOM qu'il sera possible de parcourir.

On peut alors compter le nombre de cellules (les balises <cel>) qui existent et voir leur contenu grâce au méthodes habituelles utilisées avec le DOM HTML.


### Le JSON

Le JSON est le format le plus utilisé et le plus pratique pour nous. Comme l'indique son nom (JavaScript Object Notation), il s'agit d'une représentation des données sous forme d'objet JavaScript. Essayons, par exemple de représenter uen liste de membres ainsi que leurs informations:

````json
{

    Membre1: {
        posts: 6230,
        inscription: '22/08/2003'
    },

    Membre2: {
        posts: 200,
        inscription: '04/06/2011'
     }

}
````

Tout comme pour le XML, on reçoit ce code sous forme de chaîne de caractères, cependant le parseur ne se déclenche par automatiquement pour ce format. Il faut utiliser l'objet nommé JSON, qui possède deux méthode bien pratiques:

* parse() , prend en paramètre la chaîne de caractères à analyser et retourne le résulat sous forme d'objet JSON

* stringify() , premet de faire l'inverse, elle prend en paramètre un objet JSON et retourne son équivalent sous forme de chaîne de caractères.

Voici un exemple de ces deux méthodes

````javascript
var obj = {
        index: 'contenu'
    },
    string;

string = JSON.stringify(obj);

alert(typeof string + ' : ' + string); // Affiche : « string : {"index":"contenu"} »

obj = JSON.parse(string);

alert(typeof obj + ' : ' + obj); // Affiche : « object : [object Object] »
````

Le JSON est très pratique pour recevoir des données mais aussi pour en envoyer , surtout depuis que le PHP5.2 permet le support des fonctions json_decode() et json_encode()


## En résumé

* L'AJAX est un moyen de charger des données sans recharger la page, en utilisant le JavaScript.

* Dans une requête AJAX, les deux formats de données plébiscités sont le XML et le JSON. Mais les données au format texte sont permises.

* Les données reçues au format XML ont l'avantage de pouvoir être traitées avec des méthodes DOM, comme getElementById(). Le désavantage est que le XML peut se révéler assez verbeux, ce qui alourdit la taille du fichier.

* Les données reçues au format JSON ont l'avantage d'être très concises, mais ne sont pas toujours très lisibles pour un humain. Un autre avantage est que les données sont accessibles en tant qu'objets littéraux.


## XMLHttpRequest

Nous allons maintenant utiliser l'objet XMLHttpRequest. C'est la technique AJAX la plus courante.

L'objet XMLHttpRequest a été initialement conçu par Microsoft et implémenté dans Internet Explorer et Outlook sous forme d'un contrôle ActiveX. A l'origine il s'appellait XMLHTTP. Il a ensuite été repris par de nombreux navigateurs sous le nom XMLHttpRequest.

Le principe de cet objet est simple : une requête HTTP est envoyée à l'adresse spécifiée, une réponse est alors attendue en retour de la part du serveur. Une fois la réponse obtenue, la requête s'arrête et peut éventuellement être relancée.

L'utilisation de l'objet XHR (abréviation courante de XMLHttpRequest) se fait en deux étapes bien distinctes:

1. Préparation et envoi de la requête
2. Réception des données.

### Préparation et envoi de la requête

Pour commencer notre requête, il faut d'abord instancier un objet XHR (instancier = initialiser à partir d'un espace mémoire réservé, un objet à partir d'un ensemble de caractéristiques applé class - fabriquer un élément à partir d'un modèle)

````javascript
var xhr = new XMLHttpRequest();
````

La préparation de la requête se fait par le biais de la méthode open(), qui prend en paramètres 5 arguments différents, dont 3 facultatifs:

* Le premier argument contient la méthode d'envoi des données, les trois méthode principales sont GET,POST et HEAD
* Le deuxième argument est l'URL à laquelle vous souhaitez soumettre votre requête, par exemple  'http://mon_site_web.com'
* Le troisième argument est un booléen facultatif dont la valeur par défaut est true.
A true, la requête est de type asynchrone, à false la requête est de type synchrone (cfr explications plus bas)
* Les deux derniers arguments sont à spécifier en cas d'indentification nécessaires sur le site Web (à cause d'un .htaccess par exemple. Le premier contient le nom d'utilisateur, tandis que le deuxième contient le mot de passe.

Voici une utilisation basique et courante de la méthode open():

````javascript
xhr.open('GET', 'http://mon_site_web.com/ajax.php');
````

Cette ligne de code prépare une requête afin que cette dernière contacte la page ajax.php sur le nom de domaine mon_site_web.com par le biais du protocole http (on peut aussi utiliser d'autres protocoles comme HTTPS ou FTP par exemple). Tout paramètre spécifié à la requête sera transmis par le biais de al méthode GET (via l'adresse url du site).

Après préparation de la requête, il ne reste plus qu'à l'envoyer avec la méthode send() qui prend en paramètre un argument obligatoire (étudier plus tard). Dans l'immédiat, nous lui spécifions la valeur null:

````javascript
xhr.send(null);
````

Après exécution de cette méthode, l'envoi de la requête commence. Cependant nous n'avons spécifié aucun paramètre ni aucune solution pour vérifier le retour des données, l'intérêt est donc quasi nul.


**Pour interrompre une requête qui prend trop de temps**

Si vous travaillez avec des requêtes asynchrones (ce que vous ferez dans 99% des cas), sachez qu'il existe une méthode abort() permettant de stopper toute activité. La connexion au serveur est alors interrompue et votre instance de l'objet XHR est remise à zéro. Son utilisation est très rare, mais elle peut servir si vous avez des requêtes qui prennent bien trop de temps.


### Synchrone ou asynchrone?

Une requête synchrone va bloquer votre script tant que la réponse n'aura pas été obtenue, tandis qu'une requête asynchrone laissera continuer l'exécution de votre script et vous préviendra de l'obtention de la réponse par le biais d'un événement.

La solution la plus intéressante est la requête asychrone. Il est très rare d'avoir besoin que votre script reste inactif simplement parce qu'il attend une réponse à une requête. Une requête asynchrone vous permet de gérer votre interfacependant que vous attendez la réponse du serveur, vous pouvez donc indiquer au client de patienter ou vous occuper d'autres tâches en attendant.


### GET, POST et HEAD

**Get**

Méthode d'envoi. Ajoute des données à l'URL pour les faire transiter vers une autre page (taille limitée à environ 2000 caractères), si on exécute le bouton retour, les requêtes GET sont exécutées à nouveau.

**Post** 

Méthode d'envoi.Envoi un en-tête est un corps de message au serveur. Pas de taille limite. Les données n'apparaissent pas dans l'URL. Il n'est pas possible de récupéer directement les données en javascript ,il faut ajouter du code PHP dans la page.

**Head**

Méthode d'envoi et de réception. En spécifiant cette méthode on recoit non pas le contenu du fichier dont on a spécifié l'URL mais jsute son en-tête (son header, donc HEAD). Cette utilisation est très pratique quand on souhaite simplement vérifier l'existence d'un fichier sur le serveur.


Lorsque l'on utilise la méthode GET, la transmission de ces paramètres se fait de la même manière qu'avec une URL classique, il faut les spécifier avec les caractères ? et & dans l'URL que vous passer à la méthode open()

````javascript
xhr.open('GET', 'http://mon_site_web.com/ajax.php?param1=valeur1&param2=valeur2');
````

Il est conseillé avec la méthode GET ou POST d'encoder toutes les valeurs que vous passer en paramètre grâce à la fonction encodeURIComponent(), afin d'éviter d'écrire d'éventuels caractères interdits dans une URL.

````javascript
var value1 = encodeURIComponent(value1),
    value2 = encodeURIComponent(value2);

xhr.open('GET', 'http://mon_site_web.com/ajax.php?param1=' + value1 + '&param2=' + value2);
````

Votre requête est maintenant prête à envoyer des paramètres par le biais de la méthode GET.

Avec la méthode POST, les paramètres ne sont pas à spécifier avec la méthode open() mais avec la méthode send()

````javascript
xhr.open('POST', 'http://mon_site_web.com/ajax.php');
xhr.send('param1=' + value1 + '&param2=' + value2);
````

Cependant la méthode POST consiste généralement à envoyer des valeurs contenues dans un formulaire, il faut donc modifier les en-têtes d'envoi des données afin de préciser qu'il s'agit de données provenant d'un formulaire (même si, à la base, ce n'est pas le cas)

````javascript
xhr.open('POST', 'http://mon_site_web.com/ajax.php');
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send('param1=' + value1 + '&param2=' + value2);
````

La méthode seRequestHeader() permet l'ajout ou la modification d'un en-tête, elle prende en paramètres deux arguments: l'en-tête concerné et la valeur à lui attribuer.


### Réception des données

La réception des données d'une requête se fait par le biais de nombreuses propriétés qui diffèrent selon que la requête est synchrone ou non.

#### Requêteasynchrone: spécifier la fonction de callback

Dans le cas d'une requête asynchrone, il nous faut spécifier une fonction de callback afin de savoir quand la requête s'est terminée. Pour cela, l'objet XHR possède un évènement nommé readystatechange auquel il suffit d'attribuer une fonction

````javascript
xhr.addEventListener('readystatechange', function() {
    // Votre code…
});
````

Cependant, cet évènement ne se déclenche pas seulement lorsque la requête est terminée, mais plutôt, comme son nom l'indique à chaque changement d'état. Il existe 5 états différents représentés par des constantes spécifiques à l'objet XMLHttpRequest

Constante: UNSENT
Valeur:0
Description: L'objet XHR a été créé, mais pas initialisé (la méthode open() n'a pas encore été appelée).

Constante:OPENED
Valeur:1
Description: La méthode open() a été appelée, mais la requête n'a pas encore été envoyée par la méthode send().

Constante:HEADERS_RECEIVED
Valeur:2
Description: La méthode send() a été appelée et toutes les informations ont été envoyées au serveur.

Constante:LOADING
Valeur:3
Description: Le serveur traite les informations et a commencé à renvoyer les données. Tous les en-têtes des fichiers ont été reçus.

Constante:DONE
Valeur:4
Description: Toutes les données ont été réceptionnées.


L'utilisation de la propriété readyState est nécessaire pour connaître l'état de la requête. L'état qui nous intéresse est le cinquième (la constante DONE), car nous voulons simplement savoir quand notre requête est terminée. 

Il existe deux manière pour vérifier que la propriété readyState contient bien une valeur indiquant que la requête est terminée, la première (que nous utiliserons pour une question de lisibilité) consiste à utiliser la constante elle-même.


````javascript
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === XMLHttpRequest.DONE) { // La constante DONE appartient à l'objet XMLHttpRequest, elle n'est pas globale
        // Votre code…
    }
});
````

La seconde manière de faire consiste à utiliser directement la valeur de la constante, soit 4 pour la constante DONE:

````javascript
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4) {
        // Votre code…
    }
});
````

De cette manière notre code ne s'éxécutera que lorsque la requête aura terminé son travail.Toutefois, même si la requête à terminé son travail, cela ne veut pas forcément dire qu'elle l'a mené à bien. Pour le vérifier nous utiliserons le statut de la requête grâce à la propriété status. Cette dernière renvoie le code correspondant à son statut, (ex: 404 pour les fichiers non trouvé).Le statut qui nous intéresse est le 200 qui signifie que tout s'est bien passé.

````javascript
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Votre code…
    }
});
````

A noter qu'il existe aussi une propriété nommée statusText contenant une version au format text du statut de la requête, en anglais seulement. Par exemple, le statut 404 donnera le texte suivant: "Not Found"

Remarque: 

Si vous souhaitez tester votre requête XHR sur votre ordinateur sans même utiliser de serveur de test (WampServer par exemple), alors vous n'obtiendrez jamais de statut équivalent à 200 puisque c'est normalement le rôle du serveur HTTP (Apache par exemple, fourni avec WampServer) de fournir cette valeur. Vérifiez alors si le statut équivaut à 0, cela suffira.

Nous avons traité ici une requête asychrone mais pour une requête synchrone, il n'y a qu'à vérifier le statut de votre requête, tout simplement.

### Traitement des données

Une fois la requête terminée, il faut récupérer les données obtenues. Pour cela, deux possibilités
1. **Données au format XML**, on utilise la propriété responseXML, qui permet de parcourir l'arbre DOM des données reçues.Response XML est particulièrecar elle contient un arbre DOM que l'on peut facilement parcourir. Par exemple si on reçoit l'arbre DOM suivant:

````xml
<?xml version="1.0" encoding="utf-8"?>
<table>

    <line>
        <cel>Ligne 1 - Colonne 1</cel>
        <cel>Ligne 1 - Colonne 2</cel>
        <cel>Ligne 1 - Colonne 3</cel>
    </line>

    <line>
        <cel>Ligne 2 - Colonne 1</cel>
        <cel>Ligne 2 - Colonne 2</cel>
        <cel>Ligne 2 - Colonne 3</cel>
    </line>
    
    <line>
        <cel>Ligne 3 - Colonne 1</cel>
        <cel>Ligne 3 - Colonne 2</cel>
        <cel>Ligne 3 - Colonne 3</cel>
    </line>

</table>
````

**Remarque**

Une petite précision est nécessaire concernant l'utilisation de la propriété responseXML. Sur de vieux navigateurs (notamment avec de vieilles versions de Firefox), celle-ci peut ne pas être utilisable si le serveur n'a pas renvoyé une réponse avec un en-tête spécifiant qu'il s'agit bel et bien d'un fichier XML. La propriété pourrait alors être inutilisable, bien que le contenu soit pourtant un fichier XML. Pensez donc bien à spécifier l'en-tête Content-type avec la valeur text/xml pour éviter les mauvaises surprises. Le JavaScript reconnaîtra alors le type MIME XML. En PHP, cela se fait de la manière suivante :

````php
<?php header('Content-type: text/xml'); ?>
````

On peut récupérer toutes le balises <cel> de la manière suivante:

````javascript
var cels = xhr.responseXML.getElementsByTagName('cel');
````

2. **Données au format autre que XML**, on utilise la propriété responseText, qui fournit toutes les données sous forme d'une chaîne de caractères. On peut ensuite si on le souhaite faire des conversion, en objet JSON par exemple:

````javascript
var response = JSON.parse(xhr.responseText);
````

### Récupération des en-têtes de la réponse

Il se peut que vous ayez parfois besoin de récupérer les valeurs des en-têtes fournis avec la réponse de votre requête. On peut pour cela utiliser 2 méthodes:

1. **méthode geAllResponseHeader()** et retourne tous les en-têtes de la réponse en vrac. Voici ce que lcela peut donner

````javascript
Date: Sat, 17 Sep 2011 20:09:46 GMT
Server: Apache
Vary: Accept-Encoding
Content-Encoding: gzip
Content-Length: 20
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
Content-Type: text/html; charset=utf-8
````
2. **methode getResonseHeader()** permet la récupération d'un seul en-tête. Il suffit d'en spécifier le nom en paramètre et la méthode retournera sa valeur

````javascript
var xhr = new XMLHttpRequest();

xhr.open('HEAD', 'http://mon_site_web.com/', false);
xhr.send(null);

alert(xhr.getResponseHeader('Content-type')); // Affiche : « text/html; charset=utf-8 »
````






























