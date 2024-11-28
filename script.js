
const inputAjoutNom = document.querySelector(".inputAjoutNom")
const btnAjoutNom = document.querySelector(".btnAjoutNom")
const listeNoms = document.querySelector(".listeNom ul")


btnAjoutNom.addEventListener('click', ajouterNomAListe)

function ajouterNomAListe(){

    let liNom = document.createElement('li');

    liNom.textContent = inputAjoutNom.value

    listeNoms.appendChild(liNom)

    inputAjoutNom.value = ''
    
}