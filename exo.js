1
// var nom 
// const age = 44
// let nom = prompt("veulliez entrez le nom de lutilisateur")
// let age = prompt("veulliez entrez le age de lutilisateur")
// console.log("bienvenue Mme Farel")
// 2

// let tranche1=prompt("veuillez entrez le premiere montant")
// let tranche2=prompt("veuillez entrez le deuxieme montant")
// function prix_total(tranche1,tranche2){
//     return tranche1 + tranche2
// }
// console.log(typeof tranche1)

function calculerCoutTotal(coutParParticipant, nombreParticipants) {
    return coutParParticipant * nombreParticipants;
  }
  
  // Exemple d'utilisation :
  let coutParParticipant = 10;
  let nombreParticipants = 5;
  let coutTotal = calculerCoutTotal(coutParParticipant, nombreParticipants);
  console.log("Le coût total est de : " + coutTotal);

//   3
function verifierEligibiliteReduction(age) {
    if (age < 12) {
      console.log("Vous êtes éligible pour une réduction enfant.");
    } else if (age >= 12 && age < 18) {
      console.log("Vous êtes éligible pour une réduction adolescent.");
    } else {
      console.log("Vous n'êtes pas éligible pour une réduction.");
    }
  }
  
  // Exemple d'utilisation :
  verifierEligibiliteReduction(10); 
  verifierEligibiliteReduction(15); 
  verifierEligibiliteReduction(20);
//   4
// Demander les notes à l'utilisateur
let note1 = prompt("Veuillez entrer la première note :");
let note2 = prompt("Veuillez entrer la deuxième note :");
let note3 = prompt("Veuillez entrer la troisième note :");
// Convertir les notes en nombres (car prompt renvoie des chaînes de caractères)
note1 = parseFloat(note1);
note2 = parseFloat(note2);
note3 = parseFloat(note3);

// Calculer la moyenne
let moyenne = (note1 + note2 + note3) / 3;

// Afficher le résultat
console.log("La moyenne des notes est de : " + moyenne);

// 5
// Déclarer et initialiser les variables
let nom = "John Doe";
let age = 30;
let inscriptionPayee = true;

// Afficher les types des variables
console.log("Type de la variable nom : " + typeof nom); // Affiche "string"
console.log("Type de la variable age : " + typeof age); // Affiche "number"
console.log("Type de la variable inscriptionPayee : " + typeof inscriptionPayee); // Affiche "boolean"

// 6
// Créer un tableau avec des noms de participants
let participants = ["Alice", "Bob", "Charlie"];

// Ajouter un nouveau nom à la fin du tableau
participants.push("David");

// Afficher tous les noms du tableau
console.log("Liste des participants :");
for (let i = 0; i < participants.length; i++) {
  console.log(participants[i]);
}
// 7
// Demander le nom du nouvel inscrit
let nomNouvelInscrit = prompt("Veuillez entrer le nom du nouvel inscrit :");

// Afficher une alerte de bienvenue
alert("Bienvenue, " + nomNouvelInscrit + " !");

// Afficher un message de bienvenue dans la console
console.log("Un nouvel inscrit est arrivé : " + nomNouvelInscrit);