
const inputAjoutNom = document.querySelector(".inputAjoutNom")
const btnAjoutNom = document.querySelector(".btnAjoutNom")
const listeNoms = document.querySelector(".listeNom ul")
const ajouterNomForm = document.querySelector(".ajoutNom")

ajouterNomForm.addEventListener('submit', ajouterNomAListe)

function ajouterNomAListe(){

    console.log("AAA");

    let liNom = document.createElement('li');
    liNom.textContent = inputAjoutNom.value

    listeNoms.appendChild(liNom)

    inputAjoutNom.value = ''

    event.preventDefault()
    
}