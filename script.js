// ....................................... PARTIE ANIMATION .......................................

const start = document.querySelector("#start");
const modalIn = document.querySelector("#modalIn");
const modal = document.querySelector("#modal");
const fullPage = document.querySelector("#fullPage");
const bookMark = document.querySelector("#bookMark");
const bookMarkContent = document.querySelector(".bookmarkContent");
const nameChange = document.querySelector("#nameChange");
const tablePlus = document.querySelector(".tablePlus");
const chairPlus = document.querySelector(".chairPlus");
const tableCount = document.querySelector("#tableCount");
const chairCount = document.querySelector("#chairCount");
const box = document.querySelector("#cartonOpen");

start.addEventListener("click", handleModalClose);
bookMark.addEventListener("click", handleBookMarkOpen);
box.addEventListener("click", handleBoxShaking);

function handleModalClose(event) {
  fullPage.classList.remove("hidden");
  fullPage.classList.add("flex");
  modal.classList.remove("flex");
  modal.classList.add("hidden");

  carnetValeurs = carnet.getBoundingClientRect();
}

function handleBookMarkOpen(event) {
  bookMark.classList.add("h-[750px]");
  bookMarkContent.classList.remove("hidden");
  bookMarkContent.classList.add("flex");
  nameChange.classList.add("hidden");
}
let countTable = 0;
let countChair = 0;
function handleCountPlus(event) {
  if (event.target == tablePlus) {
    countTable++;
    tableCount.innerHTML = countTable;
  } else if (event.target == chairPlus) {
    countChair++;
    chairCount.innerHTML = countChair;
  }
}

function handleBoxShaking(event) {
  box.classList.add("boxShake");
  box.src = "./img/boxFromTopCovered.jpg";
  setTimeout(() => {
    box.classList.remove("boxShake");
    box.src = "./img/boxFromTop.png";
  }, "1000");
}

//  ....................................... PARTIE LISTE RANDOM .......................................

// Jte vois mohand fais attention a toi

const btnAddTable = document.querySelector(".btnAddTable");
const btnAddChair = document.querySelector(".btnAddChair");
const carnet = document.querySelector("#carnet");

// Pour garder la width et height du carnet
let carnetValeurs;

// initialisation vide pour stocker getBoundingClientRect de la div sélectionné
let currentMovingDiv, startX, startY, startWidth, startHeight, currentResize;
let lastTableWidth = 128;
let lastTableHeight = 64;
// Offset x et Y pour bouger les divs en fonction de la souris
const offset = [-30, -20];

btnAddTable.addEventListener("click", handleClickAddTable);
btnAddChair.addEventListener("click", handleClickAddChair);

// Click functions to add corresponding divs
function handleClickAddChair() {
  console.log("added chair");

  // Crée la chaise avec classe prédéfinies
  const newChair = document.createElement("div");
  newChair.classList = `chair absolute w-16 h-16 border-black border-2 rounded-full top-[100px]`;

  newChair.addEventListener("mousedown", handleInitMove);
  newChair.addEventListener("contextmenu", handleDeleteOnRClick);

  // Ajoute la chaise dans la div carnet
  carnet.appendChild(newChair);
}
// Todo add wa to resize
function handleClickAddTable() {
  console.log("added table");

  const newTable = document.createElement("div");
  newTable.classList = `table absolute w-[${lastTableWidth}px] h-[${lastTableHeight}px] border-black border-2 top-[100px]`;

  newTable.addEventListener("mousedown", handleInitMove);
  newTable.addEventListener("contextmenu", handleDeleteOnRClick);

  // Resizer

  const resizer = document.createElement("div");
  resizer.classList =
    "resizer w-[10px] h-[10px] bg-blue-500 absolute right-0 bottom-0";

  newTable.appendChild(resizer);
  // On utilise le false en 3ème argument pour éviter le bubbling, La table et le resizer ont tous les deux l'écouteur mousedown. En mettant false, si on mousedown le resizer, seulement handleInitResize sera lancé, pas la fonction handleInitMove.
  resizer.addEventListener("mousedown", handleInitResize, false);

  // Ajoute la table dans la div carnet
  carnet.appendChild(newTable);
}

// Resizing tables

// REsize la table en fonction de la souris
function handleDragging(event) {
  let changedWidth = startWidth + event.clientX - startX;
  let changedHeight = startHeight + event.clientY - startY;

  currentResize.style.width = changedWidth + "px";
  currentResize.style.height = changedHeight + "px";

  lastTableWidth = changedWidth;
  lastTableHeight = changedHeight;
}
// Initialise le resize en gardant la taille du parent de resize aka la table
function handleInitResize(event) {
  startX = event.clientX;
  startY = event.clientY;

  currentResize = event.target.parentElement;
  let currentMovingDiv = currentResize.getBoundingClientRect();

  startWidth = currentMovingDiv.width;
  startHeight = currentMovingDiv.height;

  document.addEventListener("mousemove", handleDragging, false);
  document.addEventListener("mouseup", handleMouseUpRemoveMove, false);
}

// Sélectionne la div qu'on prend et initialise les event listener pour la bouger
function handleInitMove(event) {
  // console.log("Moving");
  currentMovingDiv = event.target;

  if (!currentMovingDiv.classList.contains("resizer")) {
    // console.log("Pas un resizer");

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUpRemoveMove);
  }
}

// Quand on bouge la souris, bouge la div, en essayant de ne pas sortir de la div carnet
function handleMouseMove(event) {
  let posMouseX = event.clientX - carnetValeurs.x;
  let posMouseY = event.clientY - carnetValeurs.y;

  /** A garder au cas ou on fait en fonction d'une grid
     
    let gridSize = 50
    
    posMouseXGrid = Math.floor(posMouseX / gridSize) * gridSize
    posMouseYGrid = Math.floor(posMouseY / gridSize) * gridSize
    
    currentMovingDiv.style.left = `${(posMouseXGrid + offset[0])}px`
    currentMovingDiv.style.top = `${posMouseYGrid + offset[1]}px`
    */

  // Changer la position de la div

  currentMovingDiv.style.left = `${posMouseX + offset[0]}px`;
  currentMovingDiv.style.top = `${posMouseY + offset[1]}px`;

  let currentDivSize = currentMovingDiv.getBoundingClientRect();

  // Preventing div from going out of bounds

  // OOB Droite
  if (posMouseX > carnetValeurs.width - currentDivSize.width / 2) {
    currentMovingDiv.style.left = `${
      carnetValeurs.width - currentDivSize.width
    }px`;
    //    console.log("oob");
  }

  // OOB Gauche
  if (posMouseX - currentDivSize.width / 2 < 0) {
    currentMovingDiv.style.left = `${0}px`;
    //    console.log("oob");
  }

  // OOB bas
  if (posMouseY > carnetValeurs.height - currentDivSize.height / 2) {
    currentMovingDiv.style.top = `${
      carnetValeurs.height - currentDivSize.height
    }px`;
    //    console.log("oob");
  }

  // OOB Haut
  if (posMouseY - currentDivSize.height / 2 < 0) {
    currentMovingDiv.style.top = `${0}px`;
    //    console.log("oob");
  }
}

// Deletes div when right clicked
function handleDeleteOnRClick(event) {
  if (!event.target.classList.contains("resizer")) {
    console.log(event);
    event.target.remove();
    event.preventDefault();
  }
}

// Retire les EventListener lorsqu'on arrête de rester appuyer sur la souris
function handleMouseUpRemoveMove() {
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUpRemoveMove);
  document.removeEventListener("mousemove", handleDragging, false);
}

// ....................................... PARTIE LISTE RANDOM .......................................

const shuffleButton = document.querySelector("#quickPlace");
const listeNoms = document.querySelector(".listeNoms");
const listShuffled = document.querySelector(".listeShuffled");

let listeDesNoms = [];

listeNoms.addEventListener("input", ajouterNomAListe);

// Récupère les noms donnés dans la div listeNom et l'ajoute a la liste listeDesNoms
function ajouterNomAListe() {
  listeDesNoms = [];

  listeNoms.querySelectorAll("div").forEach((nom) => {
    listeDesNoms.push(nom.textContent);
  });
  // console.log(listeDesNoms);
}

shuffleButton.addEventListener("click", handleClickShuffle);

// Quand on clique sur le bouton shuffle, randomise la liste et l'ajoute quelquepart
function handleClickShuffle() {
  // console.log("click shuffle");

  const listeSansVide = removeEmptyElementsFromArray(listeDesNoms);
  showList(shuffleArray(listeSansVide), listShuffled);
}

// Methode Fisher Yates
function shuffleArray(array) {
  console.log("Shuffling...");

  const newArray = array;

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }

  return newArray;
}

// Prend une liste array et ajoute chacun de ses trucs dans l'HTML a l'endroit placeToAdd
// TODO , REMPLACER PAR CREER DIVS POUR CHAQUE BOUTON
function showList(array, placeToAdd) {
  console.log("Showing list...");

  array.forEach((element) => {
    const newDiv = document.createElement("p");
    newDiv.innerHTML = element;
    placeToAdd.appendChild(newDiv);
  });
  1;
}

// Check l'array entier et enlève les élements vides
function removeEmptyElementsFromArray(array) {
  return array.filter((n) => n);
}

// ....................................... PARTIE ANIMATION MODAL .......................................
