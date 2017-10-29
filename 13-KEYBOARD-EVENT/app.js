// KEYBOARD

// Exercices 1
//
// Crée (en HTML) une DIV avec l'id "character"
// Faire changer de couleur de fond a cette DIVà chaque fois qu'on appuie sur une numéro de 0 à 9 sur le clavier
// Tip : utiliser le switch

var cameleon = document.getElementById("character");// On cible la div créée en html à partir de son ID avec la méthode document.getElementById("Id)
console.log (cameleon); // on vérifie que la div a été correctement ciblée. La console affiche bien <div id="character"></div>


var change_color = function (event)// On crée un fonction qui change la couleur de fond de la div selon la touche (de 0 à 9) qui a été tapée par l'utilisateur.
{
  // On crée une variable color en la laissant volontairement vide, car sa valeur (la couleur de fond de la div) va varier selon le cas qui sera activé dans le switch.
  let color = "";

  // A l'intérieur de la fonction, on crée un switch qui permet de définir le changement de couleur à l'appui de la touche 0 jusqu'à la touche 9
  switch (event.key)
  {
    case "0": // Lorsque on appuie sur la touche 0 alors la couleur de fond de la div devient celle indiquée.
      color = "aqua";
    break;

    case "1":// Lorsque on appuie sur la touche 1 alors la couleur de fond de la div devient celle indiquée.
      color = "black";
    break;

    case "2":// Lorsque on appuie sur la touche 2 alors la couleur de fond de la div devient celle indiquée.
      color = "blue";
    break;

    case "3":// Lorsque on appuie sur la touche 3 alors la couleur de fond de la div devient celle indiquée.
      color = "fuchsia";
    break;

    case "4":// Lorsque on appuie sur la touche 4 alors la couleur de fond de la div devient celle indiquée.
      color = "green";
    break;

    case "5":// Lorsque on appuie sur la touche 5 alors la couleur de fond de la div devient celle indiquée.
      color = "lime";
    break;

    case "6":// Lorsque on appuie sur la touche 6 alors la couleur de fond de la div devient celle indiquée.
      color = "purple";
    break;

    case "7":// Lorsque on appuie sur la touche 7 alors la couleur de fond de la div devient celle indiquée.
      color = "red";
    break;

    case "8":// Lorsque on appuie sur la touche 8 alors la couleur de fond de la div devient celle indiquée.
      color = "teal";
    break;

    case "9":// Lorsque on appuie sur la touche 9 alors la couleur de fond de la div devient celle indiquée.
      color = "yellow";
    break;
    default: // Dans le cas ou une autre touche que celle située entre 0 et 9 est tapée, un message est afficher dans la console, indiquant l'erreur !
      console.log("Vous n'avez pas taper une touche entre 0 et 9 !");
    break;
  };
  cameleon.style.background = color; // On modifie de style de la valeur background de l'élément cameleon en lui appliquant la couleur attribuée par le switch en fonction de la touche qui a été tapée (entre 0 et 9)
};

window.addEventListener ('keydown', change_color); // Avec l'évènement window.addEventListener on indique que l'évènement à surveiller est l'appui sur un touche, et l'action a effectuer alors est celle reprise dans la fonction précédement créée portant le nom de change_color qui change la couleur de fond de la div en fonction de la valeur de la touche renovyée et passé dans le switch pour savoir quelle couleur appiquer au fond de la div.


// Exercices 2

// Crée (en HTML) 4 divs avec les id suivantes : "up, down, left, right"
// crée une class 'highlight' dans le CSS qui réduit l'opacité de l'élément
// Pour chaque div ajouter la classe 'highlight' quand une des touches directionel est enfoncée
// Pour chaque div retier la classe 'highlight' quand on relâche la touche
// Tip : Faire la structure HTML sans JavaScript
