// Imports:
import SVG from "../../SVG/SVG.js";

// Constants:
const sidebarReference = document.createElement("div");

// Main:
const initialize = () => {
    sidebarReference.classList.add("sidebar");

    const divLogo = document.createElement("div");
    divLogo.innerHTML = SVG.logo;

    divLogo.classList.add("logo");

    sidebarReference.append(divLogo);
    createButtons();
};

const createButtons = () => {
    createBtnAdd();
    createBtnClear();
    createBtnAbout();
};

const createBtnAdd = () => {
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add New Task";
    sidebarReference.append(addBtn);
};

const createBtnClear = () => {
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear All Tasks";
    sidebarReference.append(clearBtn);
};

const createBtnAbout = () => {
    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About Me!";
    sidebarReference.append(aboutBtn);
};

// Exporting:
const sidebar = {
    init() {
        initialize();
    },
    ref: sidebarReference
};

export default sidebar;