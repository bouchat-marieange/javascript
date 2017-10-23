// DOM

// Exercice 1 : Manipulation de classes

// sélectionner le body
var bodyElement = document.getElementsByTagName("body");
console.log(bodyElement);

// D'autres alternatives possibles pour selectionner le body
var bodyElement = document.body; // selection la plus simple du body
var bodyElement = document.querySelector('body'); // selection par selecteur css - renvoie uniquement le premier élement de cette class
var bodyElement = document.children[0].children[1]; // enfant de personne [0] et contient tout [1]
var bodyElement = document.getElementsByTagName('body')[0]; // retourne la liste des élément portant le nom de la balise donné (div, h1, ul, ect...)
var bodyElement = document.querySelectorAll("body")[0]; // renvoie la liste de tout les élément portant la classe indiquée


// lui retirer la classe "bg-aqua"
bodyElement.classList.remove("bg-aqua");

// lui ajouter la classe "bg-olive"
bodyElement.classList.add("bg-olive");

// sélectioner first-paragraph
var premier_paragraphe = document.getElementById("first-paragraph");

// lui retirer les classes "bg-lime" et "gray"
premier_paragraphe.classList.remove("bg-lime","gray");

// lui ajouter la class "aqua"
premier_paragraphe.classList.add("aqua");

// sélectionner tous les éléments qui ont la classe 'bg-silver'
var All_bg_silver = document.querySelectorAll(".bg-silver");// Attention pas oublier le point pour indiquer que cela fait référence à une classe
console.log(All_bg_silver);// On vérifie si blockquote est bien renvoyé et donc a été ciblé correctement

// modifier tout ces éléments en leurs ajoutant la classe "bg-teal"
All_bg_silver = document.getElementsByTagName("blockquote")[0].classList.add("bg-teal");
console.log (All_bg_silver);

// modifier tout ces éléments en leurs supprimant la classe "bg-silver"
All_bg_silver = document.getElementsByTagName("blockquote")[0].classList.remove("bg-silver");

// sélectionne tous les éléments de type 'blockquote'
var blockquote = document.getElementsByTagName("blockquote")[0];

// modifier tout ces éléments en leurs ajoutant la classe "bg-white"
blockquote.classList.add("bg-white");



// EXERCICE 2 : Selecteurs CSS

// avec querySelector sélectioner l'élément 'my-table'
// var ma_table = document.querySelector("my-table");
var ma_table = document.querySelector("#my-table");// ne pas oublier le # pour indiquer qu'il s'agit d'un nom id et pas d'un nom de class ou d'élément
console.log(ma_table);

// lui ajouter la classe "bg-purple"
ma_table = document.querySelector("#my-table").setAttribute("class", "bg-purple");

// avec querySelectorAll sélectioner tous les paragraphes dans 'container'
var all_paragraph = document.querySelectorAll("p");
console.log(all_paragraph);

// modifier tout ces éléments en leurs ajoutant la classe 'shadow'
