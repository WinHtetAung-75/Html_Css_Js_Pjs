const menuBar = document.querySelector("#menu-bar");
const sideMenu = document.querySelector("#side-menu");

const menuBarHandler = () => {
    sideMenu.classList.add("duration");;
    sideMenu.classList.toggle("tran-y-0");
};

menuBar.addEventListener("click", menuBarHandler);
