const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");
const body = document.querySelector("body");

const headerItemClickHandler = () => {
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
    body.classList.toggle("lock");
}

iconMenu.addEventListener("click", headerItemClickHandler);
menuBody.addEventListener("click", (event) => {
    if (!event.currentTarget.classList.contains('active')) {
        return;
    }

    headerItemClickHandler();
});
