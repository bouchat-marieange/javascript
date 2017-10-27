// Exercice Mouse

// Évènements de la souris

// click, ctextmenu, dblclick, mousedown, mouseenter, mouseleave, mousemove, mouseover, mouseout, mouseup

// Exercices 1
//
// Crée (en HTML) 3 DIV possedant la même classe 'hoverMe'
// Faire disparaitre les divs lorsque l'on passe la souris dessus
// Tip : utiliser le mouseenter ou mouseover

var div_fantome = document.querySelectorAll('.hoverMe');// On stocke dans une variable div_fantome, tous les éléments dans le documents HTML portant la classe "hoverMe"
console.log (div_fantome); // la console affiche [div.hoverMe, div.hoverMe, div.hoverMe] - on donc récupérer dans notre document 3 div portant la class hoverMe

var disparaitre = function(event)// on stocke dans une variable disparaitre le résultat d'une fonction qui va ajouter une class hide à tous les éléments portant la class hideMe
{
  let cible = event.target; // event.target fair référence à l'objet qui a envoyé l'événement, bref on cible les objets
  cible.classList.add("hide");// Sur l'élément cible qui est un objet, on va ajouter une class qui s'appellera hide
};

div_fantome.forEach(function(div_fantome) // div_fantome est un tableau contenant 3 objets qui contiennent tous différentes propriétés. On a recueillis 3 div avec la class hoverMe, il va donc falloir appliquer la fonction qui les fait disparaitre au survol (mousehover) à chaque d'elles. On utilise pour cela un forEach() qui permet d'exécuter une fonction donnée sur chaque élément d'un tableau
{
  div_fantome.addEventListener("mouseenter", disparaitre);// addEventListener permet l'assignation de gestionnaires d'évènements sur un élément cible. Pour chaque élément portant la class hoverMe, on indique à l'ordinateur de surveiller si un mouseenter à lieu et si c'est le cas, d'appliquer la fonction indiqué (qui dans ce car ajoute une classe hide à l'objet et le fait disparaitre)
});


// Exercices 2
//
// Crée (en HTML) une DIV avec une l'id "reset"
// Faire de sorte que quand on clique dessus elle fasse réaparaitre les 3 divs premièrement créé
// Tip : avec une animation ce serait super cool

var reset = document.getElementById("reset"); // On crée une variable reset dans laquelle on stocke l'élément que l'on récupère dans le document html à partir de son ID (reset)
console.log(reset); // on verifie dans la console si l'élément reset à bien été selecitonner. La console affiche <div id="reset">Reset</div>

var reapparaitre = function() // On crée une variable pour récupérer le résulat d'une fonction simple (pas de paramètres).
{
  div_fantome.forEach(function(div_fantome) // On boucle sur toutes les div_fantome
  {
    div_fantome.classList.remove("hide"); // pour retirer à chaque div_fantome, la class qu'on lui avait ajouter auparavant (hide) et qui la faisait disparaitre. Si on retire cette class aux éléments div_fantome avec div_fantome.classList.remove("hide"), les éléments réapparaissent
  });
}

reset.addEventListener("click", reapparaitre);// On applique ensuite cela au bouton reset en lui demandant de surveiller le bouton reset (reset.addEventListener) et de déclencher la fonction réapparaitre sur tous les div_fantome quand on click sur reset ("click", reapparaitre)


// Exercices 3
//
// Crée (en HTML) 2 DIV avec une id chacune 'axe-x' et 'axe-y'
// Faire de sorte que lorsque l'on bouge la souris dans la fenêtre, la position sois affiché dans les divs associés
// Tip : Utiliser l'evenement reçu en argument Tip : Utiliser innerHTML ou innerText

// innerHTML récupère ou définit tout le balisage et le contenu au sein d'un élément donné.
// document.getElementById("demo").innerHTML
// permettra par exemple de récupérer toutes les infos concernant un élément
// Qui se présenteront dans la console sous cette forme
// {
//     offsetX: 74,
//     offsetY: 10,
//     pageX: 154,
//     pageY: 576,
//     screenX: 154,
//     screenY: 489,
//     target: H2,
//     timeStamp: 1363131952985,
//     type: "click",
//     x: 154,
//     y: 395
// }
// innerText récupère ou change le contenu entre deux balises et affiche le texte récupéré en supprimant toutes les balises. Par exemple: <p>Bonjour</p> renverra Bonjour. Attention si on indique innerHTML = "Nouveau text", c'est ce nouveau texte qui sera affiché à la place du texte initial.
// MouseEvent.clientX  : La coordonnée en X du pointeur de la souris dans les coordonnées locales (contenu du DOM).
// MouseEvent.clientY  : La coordonnée en Y du pointeur de la souris dans les coordonnées locales ( contenu du DOM).


var axe_x_element = document.getElementById("axe-x");// on crée une variable et on stocke à l'intérieur les données recueillies pour
var axe_y_element = document.getElementById("axe-y");

console.log(axe_x_element);
console.log(axe_y_element);

var Coordonnées = function(event)
{
  // On va afficher dans le html dans les div vides axe-x et axe-y une petit texte "Axe x : " ou "Axe y : " suivi des valeurs de coordonnées de la souris récoltée grâce à ClientX et ClientY
  axe_x_element.innerText = "Axe x : " + event.clientX; // MouseEvent.clientY et MouseEvent.clientX sont des propriété qui renvoie respectivement la coordonnée verticale (y) et la coordonnée horizontale(x) dans la zone client de l'application à laquelle l'événement s'est produit (par opposition aux coordonnées dans la page).
  axe_y_element.innerText = "Axe y : " + event.clientY; //  Si vous cliquez dans le coin supérieur gauche de la zone client, un événement de souris avec une valeur clientY de 0 se produit toujours, que la page soit défilée verticalement ou non.
}

// Alternative avec la récupération et affichage des valeurs correspondant à pageX et pageY dans l'objet récupérer avec innertext

// var Coordonnées = function(event)
// {
//   // On va afficher dans le html dans les div vides axe-x et axe-y une petit texte "Axe x : " ou "Axe y : " suivi des valeurs de coordonnées de la souris récoltée grâce à ClientX et ClientY
//   axe_x_element.innerText = "Axe x : " + event.pageX; // .pageX renvoie la valeur correspondant à la propriété pageX de l'objet ciblé (voir explications plus haut)
//   axe_y_element.innerText = "Axe y : " + event.pageY; // .pageY renvoie la valeur correspondant à la propriété pageY dee l'objet ciblé (voir explications plus haut)
// }

window.addEventListener("mousemove", Coordonnées);// L'élément cible (à surveiller) c'est toute la fenêtre donc window.addEventListener,(window représente un objet global c'est à dire accessible de partout dans le code et qui n'a pas dû être défini préalablement) quand il se produit l'évènement déplacement souris (mousemove), alors on lance la fonction coordonnées qui affiche les coordonnées x et y de la souris (sa positiion dans la page selon l'axe des x et des y)
