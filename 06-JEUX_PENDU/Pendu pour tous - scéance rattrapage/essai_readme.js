// Bac à sable pour s'entrainer en lisant le readme

windows.prompt();
// windows.prompt affiche une fenetre popup dans laquelle l'utilisateur peut entrer des données
//
// exemple:
// var person = prompt ("Please enter your name", "Harry Potter");
//
// Syntax:

// prompt(text, defaultText);
//
// Dans la syntax: text est le texte qui s'affichera pour demander à l'utilisateur le type de texte à entrer (ex: nom, age, lettre, ...)
// le second paramètre defaultText est optionnel et permet d'afficher un exemple du type de données attendue dans le champ où l'utilisateur doit encoder des données

windows.alert();

// window.alert (string text);
// Affiche le paramètre texte dans un message d'alerte ou d'information (fenêtre popup)
// La boite à message n'est pas modifiable.
// Pour écrire le message sur plusieurs lignes, utilisez le caractère spécial de retour chariot n.
// Deux notations sont possibles et valides
// window: window.alert("texte");
// ou
// alert("texte");



window.confirm();

confirm("texte");

// Boolean window.confirm(String texte)
//
// Affiche le paramètre texte dans un message d'alerte avec 2 boutons de confirmation.
// Retourne true si le visiteur clique sur OK.
// Retourne false si le visiteur clique sur Annuler ou appuye sur la touche Echap.
// La boite de message et les boutons ne sont pas modifiables.
// Pour message sur plusieurs lignes, utilise caractère spécial retour chariot n.
// Deux notations valides:
// window:window.confirm("texte");
// ou
// confirm("texte);
