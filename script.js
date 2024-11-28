
const shuffleButton = document.querySelector(".shuffleButton")
const listeNoms = document.querySelector(".listeNoms")
const listShuffled = document.querySelector(".listeShuffled")

let listeDesNoms = []


listeNoms.addEventListener('input', ajouterNomAListe)
// Récupère les noms donnés dans la div listeNom et l'ajoute a la liste listeDesNoms
function ajouterNomAListe(){
    listeDesNoms = []

    listeNoms.querySelectorAll("div").forEach((nom) => {
        listeDesNoms.push(nom.textContent) 
    })
}


shuffleButton.addEventListener("click", handleClickShuffle)
// Quand on clique sur le bouton shuffle, randomise la liste et l'ajoute quelquepart
function handleClickShuffle() {
    
    showList(shuffleArray(listeDesNoms), listShuffled)
}


// Methode Fisher Yates
function shuffleArray(array) {

    console.log("Shuffling...");
    
    const newArray = array

    for (let i = array.length-1 ; i> 0 ; i--) {

        const j = Math.floor( Math.random() * (i+1) )
        const temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;

    }

    return newArray;

}

// Prend une liste array et ajoute chacun de ses trucs dans l'HTML a l'endroit placeToAdd
function showList(array, placeToAdd) {
    console.log("Showing list...");
     
    array.forEach(element => {

        const newDiv = document.createElement("p")
        newDiv.innerHTML = element
        placeToAdd.appendChild(newDiv)
        
    });1
    
}

