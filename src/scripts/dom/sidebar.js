// Imports:
import { logo } from "../../SVG/SVG.js";

// Constants:
const sidebarReference = document.createElement("div");

// Main:
const renderFunction = () => {
    sidebarReference.classList.add("sidebar");
    createLogo();
    createSidebarButtons();
};

const createLogo = () => {
    const divLogo = document.createElement("div");
    divLogo.classList.add("logo");
    divLogo.innerHTML = logo;
    pushElement(divLogo);
};

const createSidebarButtons = () => {
    createBtnAdd();
    createBtnClear();
    createBtnAbout();
};

const createBtnAdd = () => {
    const addBtn = document.createElement("button");
    addBtn.textContent = "Add New Task";
    pushElement(addBtn);
};

const createBtnClear = () => {
    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Clear All Tasks";
    pushElement(clearBtn);
};

const createBtnAbout = () => {
    const aboutBtn = document.createElement("button");
    aboutBtn.textContent = "About Me!";
    pushElement(aboutBtn);
};

const pushElement = (element) => {
    sidebarReference.append(element);
    sidebar.innerElements.push(element);
};

// Exporting:
const sidebar = {
    render() {
        renderFunction();
    },
    ref: sidebarReference,
    innerElements: [],
};

export default sidebar;