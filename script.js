
const shuffleButton = document.querySelector(".shuffleButton")
const listeNoms = document.querySelector(".listeNoms")
const listShuffled = document.querySelector(".listShuffled")

let listeDesNoms = []

listeNoms.addEventListener('input', ajouterNomAListe)

// Récupère les noms donnés dans la div listeNom et l'ajoute a la liste listeDesNoms
function ajouterNomAListe(){
    listeDesNoms = []

    listeNoms.querySelectorAll("div").forEach((nom) => {
        listeDesNoms.push(nom.textContent) 
    })
console.log(listeDesNoms);

}


shuffleButton.addEventListener("click", handleClickShuffle)

function handleClickShuffle() {
    shuffleArray(listeDesNoms)
}


// Methode Fisher Yates
function shuffleArray(array) {

    console.log("Shuffling...");
    

    for (let i = array.length-1 ; i> 0 ; i--) {
        const j = Math.floor( Math.random() * (i+1) )
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    console.log(array);
    

}

console.log(listeDesNoms);
