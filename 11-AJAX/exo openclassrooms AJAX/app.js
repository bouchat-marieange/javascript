// Création d'une fonction  qui sera appelée lors d'un clic sur un des deux boutons, elle sera chargée de s'occuper du téléchargement et de l'affichage du fichier passé en paramètre

// Fonction qui charge le fichier indiqué dans ses paramètres
function loadFile(file) {

    var xhr = new XMLHttpRequest(); // On fait une requête XMLHttpRequest

    // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
    xhr.open('GET', file);

    xhr.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone

        if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) { // On test si tout c'est bien passé. Si le fichier est chargé sans erreur - le code 200 renvoie à une procédure de téléchargement qui s'est déroulé sans soucis. Attention uniquement sur serveur. Si on travaille en local, le status renvoyé si tout s'est bien passé sera 0, donc on ajoute en plus cette condition au if mais on la retire lorsque l'on travaille sur serveur ou la valeur 0 correspond à une erreur

            document.getElementById('fileContent').innerHTML = '<span>' + xhr.responseText + '</span>'; // Et on affiche dans le HTML!

        }

    });

    xhr.send(null); // La requête est prête, on envoie tout !
}

// On met en place les évènements qui déclencheront tout le processus de chargement des fichiers (ici lorsque l'on clique sur l'un des bouton présent sur la page html)
// Comme d'habitude, une IIFE pour éviter les variables globales. IIFE = fonction anonyme auto-exécutant qui permet de limiter la portée des variables uniquement au seul endroit qui nous intéresse. On enveloppe pour cela notre code Javascript dans une fonction anonyme auto-exécutante
// Voici le code basic d'une  IIFE (fonction anonyme auto-exécutante) - anonyme car elle ne porte pas de nom  et auto-exécutante car elle est interprétée directement grâce au petit (); final
//     (function() {
//         votre code JS
//     })();
(function()
{
    var inputs = document.getElementsByTagName('input'),
        inputsLen = inputs.length;

    for (var i = 0; i < inputsLen; i++)
    {

        inputs[i].addEventListener('click', function()
        {
            loadFile(this.value); // À chaque clique, un fichier sera chargé dans la page
        });
    }

}
)();


//Ca ne fonctionne pas, pourtant j'ai créer des fichier file1.txt contenant le texte 1 et file2.txt contenant le texte 2 que j'ai placer dans même dossier que mon index et app.js
// function loadFile(file) {
//
//           var xhr = new XMLHttpRequest();
//
//           // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
//           xhr.open('GET', file);
//
//           xhr.onreadystatechange = function() { // On gère ici une requête asynchrone
//
//               if (xhr.readyState == 4 && xhr.status == 200) { // Si le fichier est chargé sans erreur
//
//                   document.getElementById('fileContent').innerHTML = '<span>' + xhr.responseText + '</span>'; // Et on affiche !
//
//               }
//
//           }
//
//           xhr.send(null); // La requête est prête, on envoie tout !
//
//       }
//
//       (function() { // Comme d'habitude, une fonction anonyme pour éviter les variables globales
//
//           var inputs = document.getElementsByTagName('input'),
//               inputsLen = inputs.length;
//
//           for (var i = 0 ; i < inputsLen ; i++) {
//
//               inputs[i].onclick = function() {
//                   loadFile(this.value); // À chaque clique, un fichier sera chargé dans la page
//               };
//
//           }
//
//       })();
