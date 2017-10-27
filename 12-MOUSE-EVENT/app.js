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
}

div_fantome.forEach(function(div_fantome) // div_fantome est un tableau contenant 3 objets qui contiennent tous différentes propriétés. On a recueillis 3 div avec la class hoverMe, il va donc falloir appliquer la fonction qui les fait disparaitre au survol (mousehover) à chaque d'elles. On utilise pour cela un forEach() qui permet d'exécuter une fonction donnée sur chaque élément d'un tableau
{
  div_fantome.addEventListener("mouseenter", disparaitre);// addEventListener permet l'assignation de gestionnaires d'évènements sur un élément cible. Pour chaque élément portant la class hoverMe, on indique à l'ordinateur de surveiller si un mouseenter à lieu et si c'est le cas, d'appliquer la fonction indiqué (qui dans ce car ajoute une classe hide à l'objet et le fait disparaitre)
});
