//fonction des calculs mathématiques
function addition(nombreA, nombreB) {
  return nombreA + nombreB;
}
function multiplication(nombreA, nombreB) {
  return nombreA * nombreB;
}
function soustraction(nombreA, nombreB) {
  return nombreA - nombreB;
}
function division(nombreA, nombreB) {
  //condition exception règles mathématiques
  if (nombreB == 0) {
    throw new Error(
      "Impossible de diviser par 0, c'est une règle mathématique ;)"
    );
  }
  return nombreA / nombreB;
}

//boucle pour recommencer un calcul
do {
  //boucle du calcul
  do {
    //choix du calcul et stockage du numéro
    var choix = Number(
      prompt(
        "Que souhaitez-vous faire ?\n\n1 - Addition\n2 - Multiplication\n3 - Soustraction\n4 - Division\n\n "
      )
    );
    //forcer le choix du menu de 1 à 4
  } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

  //demande des nombres et stockage dans les variables
  do {
    var premierNombre = Number(
      prompt("Veuillez rentrer votre premier nombre : ")
    );
    var deuxiemeNombre = Number(
      prompt("Veuillez rentrer votre deuxième nombre : ")
    );
    //exception des not a number et d'une réponse vide -> restart les prompts
  } while (
    isNaN(premierNombre) ||
    isNaN(deuxiemeNombre) ||
    (premierNombre, deuxiemeNombre) == ""
  );

  //appels des fonctions selon le numéro des cases
  try {
    switch (choix) {
      case 1:
        var resultat = addition(premierNombre, deuxiemeNombre);
        break;

      case 2:
        var resultat = multiplication(premierNombre, deuxiemeNombre);
        break;

      case 3:
        var resultat = soustraction(premierNombre, deuxiemeNombre);
        break;

      case 4:
        var resultat = division(premierNombre, deuxiemeNombre);
        break;
      //exception en cas d'erreur
      default:
        throw new Error("Une erreur est survenue ! Veuillez recommencer :)");
    }

    //affichage du résultat
    alert("votre resultat est : " + resultat);
    //exception en cas d'erreur
  } catch (error) {
    alert(error);
  }

  //confirmation d'un nouveau calcul
  var restart = confirm("Voulez-vous faire un autre calcul ? =D");
  //si annuler la boucle s'arrête et met affiche l'alert
} while (restart);
alert("A bientôt sur mon Github ! '-' ");
