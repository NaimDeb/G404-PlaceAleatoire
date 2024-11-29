
const btnAddTable = document.querySelector(".btnAddTable")
const btnAddChair = document.querySelector(".btnAddChair")
const carnet = document.querySelector(".carnet")


btnAddTable.addEventListener("click", handleAddTable)
btnAddChair.addEventListener("click", handleAddChair)

function handleAddChair() {
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
function handleAddTable() {
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


// Moves when holding move button
function handleMove(event) {
    console.log("Moving");

    event.target.addEventListener("mousemove", handleMouseMove)

}

function handleMouseMove(event) {
    console.log("ca marche");
    console.log(mouse.x);
    console.log(mouse.y);

    
}
