// Imports:
import { svgLogo } from "../../SVG/SVG.js";



// Main:
const renderFunction = () => {
    sidebar.ref.classList.add("sidebar");
    createLogo();
    createButtons();
};

const createLogo = () => {
    const divLogo = document.createElement("div");
    divLogo.classList.add("logo");
    divLogo.innerHTML = svgLogo;
    pushElement(divLogo);
};

const createButton = (text) => {
    const newButton = document.createElement("button");
    newButton.textContent = text;
    pushElement(newButton);
};

const createButtons = () => {
    const buttonsText = [
        "Add New Task",
        "Clear All Tasks",
        "About Me!"
    ];

    buttonsText.forEach(text => {
        createButton(text);
    });
};

const pushElement = (element) => {
    sidebar.ref.append(element);
    sidebar.innerElements.push(element);
};



// Exporting:
const sidebar = {
    render() {
        renderFunction();
    },
    ref: document.createElement("div"),
    innerElements: []
};

export default sidebar;