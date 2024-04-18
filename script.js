
function chiffrerMessage (message){
// role : chiffrer le message
// parametre : la valeur de l'input, le message

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let messageEncode = ""; //stockera le message une fois qu'il sera encodé

  //passer le message en minuscule
  message = message.toLowerCase(); 

  //transformer le string en array et supprimer les espaces 
  //message = [...message].filter( (char) => char != " ");    
  
  //transformer le message en array
  message = message.split(""); 

  message.forEach((lettre, index) => {
    const posLettre = alphabet.indexOf(lettre); // recupéré l'index de la lettre
    //const nextPos = pos+1 < alphabet.length ? pos+1 : 0;  // si on arrive à Z on repart a A en ternaire
    let posLettreSuivante = posLettre + 1;

    // si c'est un espace, on ajoute un espace
    if (lettre == " ") {
      messageEncode += " ";
    }

    // si on arrive à Z, on repart a A
    if (posLettreSuivante === alphabet.length) {
      posLettreSuivante = 0;
    }

    //ajouter la lettre et la passer en majuscule
    messageEncode += alphabet[posLettreSuivante].toUpperCase(); 
  });
  return messageEncode;
}



function lancerChiffrage() {
// role : lancer l'action de chiffrage au clic ou a la touche entrée
// parametre : aucun 
  let input = document.querySelector("#myInput"); // stocker la valeur de l'input
  const destination = document.querySelector("#motCode"); // cibler l'élément HTML dans elquel le mot encodé va apparaitre 
  destination.innerHTML = chiffrerMessage(input.value); // Jouer la fonction de chiffrage du message et la pousser dans l'html 
  input.value = "";
}

//lorsque la touche entré est préssé -> lancerChiffrage
const button = document.querySelector("#myButton");
document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    lancerChiffrage();
  }
});

//lorsque le bouton est cliqué -> lancerChiffrage
button.addEventListener("click", (event) => {
  lancerChiffrage();
});
