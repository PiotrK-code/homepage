{
    const welcome = () => {
        console.log("Cześć!");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColorName = document.querySelector(".js__nextColorName")
        body.classList.toggle("js__greyBackground");
        nextColorName.innerText = body.classList.contains("js__greyBackground") ? "białe" : "szare";
    }

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js__changeBackground");
        changeBackgroundButton.addEventListener("click", toggleBackground);

        welcome();
    }

    init();
   
}