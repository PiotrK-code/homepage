console.log("Cześć!");

let changeBackgroundButton = document.querySelector(".js__changeBackground");
let body = document.querySelector(".body");
let nextColorName = document.querySelector(".js__nextColorName")

changeBackgroundButton.addEventListener("click", () => {
body.classList.toggle("js__greyBackground");
nextColorName.innerText = body.classList.contains("js__greyBackground") ? "białe" : "szare";

});
