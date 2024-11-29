const start = document.querySelector("#start");
const modal = document.querySelector("#modal");
const fullPage = document.querySelector("#fullPage");
const bookMark = document.querySelector("#bookMark");
const bookMarkContent = document.querySelector(".bookmarkContent");
const nameChange = document.querySelector("#nameChange");
const tablePlus = document.querySelector(".tablePlus");
const chairPlus = document.querySelector(".chairPlus");
const tableCount = document.querySelector("#tableCount");
const chairCount = document.querySelector("#chairCount");

start.addEventListener("click", handleModalClose);
bookMark.addEventListener("click", handleBookMarkOpen);
tablePlus.addEventListener("click", handleCountPlus);
chairPlus.addEventListener("click", handleCountPlus);

function handleModalClose(event) {
  fullPage.classList.remove("hidden");
  fullPage.classList.add("flex");
  modal.classList.remove("flex");
  modal.classList.add("hidden");
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
