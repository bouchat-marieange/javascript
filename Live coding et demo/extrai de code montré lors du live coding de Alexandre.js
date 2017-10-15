// Tableaux
    var ceux_qui_ont _deja_passe_le_badge = Array ("Steve", "Thomas", "Sly", "Kevin", "Valerian");
    console.log(ceux_qui_ont _deja_passe_le_badge);

    // Changer nom du tableau trop long
    var yo = ceux_qui_ont _deja_passe_le_badge;

    yo[0]
    yo.lastindex

    // Cette boucle va afficher dans une fenetre pop up à chaque rafraichissement de la page " Bonjour + premier nom du tableau", puis "Bonjour+ second nom du tableau"
    for (var index = 0; index < yo.lenght ; index ++)
    // for ( definiti variable utilisée uniquement dans la boucle; condition jusque quand s'exécute la boucle - attention éviter boucle infinie)
    {
      // code à éxécuter x nombre de fois (dépend de ...- ici tant que la valeur de l'index est inférieur à la longeur du tableau)
      alert("Bonjour" + yo [index]);
    }

    for (var index = 0; index < yo.lenght ; index ++)
    // for ( definiti variable utilisée uniquement dans la boucle; condition jusque quand s'exécute la boucle - attention éviter boucle infinie)
    {
      // code à éxécuter x nombre de fois (dépend de ...- ici tant que la valeur de l'index est inférieur à la longeur du tableau)
      console.log("index de "" + yo[index] + " = " + index);
    }

    Grace au javascript on peut modifier directement html
    document.getEmementByID('js-yo').value;
    
    // Function de "callbak", a exécuter lorsque l'évènement "change " de l'input est détecté
    message = this.value;
    if (message.lenght <2)
    {
      document.get ElementByID ('js-yo).atom')
    }

