
// Jte vois mohand fais attention a toi


const btnAddTable = document.querySelector(".btnAddTable")
const btnAddChair = document.querySelector(".btnAddChair")
const carnet = document.querySelector(".carnet")


// Pour garder la width et height du carnet
const carnetValeurs = carnet.getBoundingClientRect()

// initialisation vide pour stocker getBoundingClientRect de la div sélectionné
let currentMovingDiv

// Offset x et Y pour bouger les divs en fonction de la souris
const offset = [-30,-20]


btnAddTable.addEventListener("click", handleClickAddTable)
btnAddChair.addEventListener("click", handleClickAddChair)


// Click functions to add corresponding divs 

function handleClickAddChair() {
    console.log("added chair");
    
    // Crée la chaise avec classe prédéfinies
    const newChair = document.createElement("div")
    newChair.classList = "chair absolute w-16 h-16 border-black border-2 rounded-full"

    newChair.addEventListener("mousedown", handleMove)
    newChair.addEventListener("contextmenu", handleDeleteOnRClick)

    // Ajoute la chaise dans la div carnet
    carnet.appendChild(newChair)


}
// Todo add wa to resize
function handleClickAddTable() {
    console.log("added table");

    const newTable = document.createElement("div")
    newTable.classList = "table absolute w-32 h-16 border-black border-2"

    newTable.addEventListener("mousedown", handleMove)
    newTable.addEventListener("contextmenu", handleDeleteOnRClick)

    // Ajoute la table dans la div carnet
    carnet.appendChild(newTable)

}


// Deletes div when right clicked
function handleDeleteOnRClick(event) {
    console.log("Deleted");
    console.log(event);
    event.target.remove()
}


// Sélectionne la div qu'on prend et initialise les event listener pour la bouger
function handleMove(event) {
    console.log("Moving");
    currentMovingDiv = event.target
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUpRemoveMove)

}


// Quand on bouge la souris, bouge la div, en essayant de ne pas sortir de la div carnet
function handleMouseMove(event) {

    let posMouseX = event.clientX - carnetValeurs.x
    let posMouseY = event.clientY - carnetValeurs.y


    /** A garder au cas ou on fait en fonction d'une grid

    let gridSize = 50

    posMouseXGrid = Math.floor(posMouseX / gridSize) * gridSize
    posMouseYGrid = Math.floor(posMouseY / gridSize) * gridSize

    currentMovingDiv.style.left = `${(posMouseXGrid + offset[0])}px`
    currentMovingDiv.style.top = `${posMouseYGrid + offset[1]}px`
    */
     

    // Changer la position de la div

    currentMovingDiv.style.left = `${(posMouseX + offset[0])}px`
    currentMovingDiv.style.top = `${posMouseY + offset[1]}px`

    let currentDivSize = currentMovingDiv.getBoundingClientRect()




    // Preventing div from going out of bounds

    // OOB Droite
    if ((posMouseX) > (carnetValeurs.width - (currentDivSize.width/2))) {
        currentMovingDiv.style.left = `${carnetValeurs.width - (currentDivSize.width)}px`
    }

    // OOB Gauche
    if ((posMouseX - (currentDivSize.width/2)) < 0) {
        currentMovingDiv.style.left = `${0}px`
    }

    // OOB bas
    if (posMouseY > (carnetValeurs.height - (currentDivSize.height/2)) ) {
        currentMovingDiv.style.top = `${carnetValeurs.height - (currentDivSize.height)}px`
    }

    // OOB Haut
    if ((posMouseY - (currentDivSize.height/2)) < 0) {
        currentMovingDiv.style.top = `${0}px`
    }
    
}



// Retire les EventListener lorsqu'on arrête de rester appuyer sur la souris
function handleMouseUpRemoveMove() {
    document.removeEventListener("mousemove", handleMouseMove) 
    document.removeEventListener("mouseup", handleMouseUpRemoveMove)
}