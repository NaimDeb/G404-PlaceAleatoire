const start = document.querySelector("#start");
const modal = document.querySelector("#modal")
const fullPage = document.querySelector("#fullPage")
const bookMark = document.querySelector("#bookMark")
const bookMarkContent = document.querySelector(".bookmarkContent")
const nameChange = document.querySelector("#nameChange")

start.addEventListener("click", handleModalClose);
bookMark.addEventListener("click", handleBookMarkOpen);



function handleModalClose(event){
    console.log(event);
    fullPage.classList.remove("hidden")
    fullPage.classList.add("flex")
    modal.classList.remove("flex")
    modal.classList.add("hidden")
    
}

function handleBookMarkOpen(event){
    bookMark.classList.add("h-[750px]")
    bookMarkContent.classList.remove("hidden")
    bookMarkContent.classList.add("flex")
    nameChange.classList.add("hidden")
}
