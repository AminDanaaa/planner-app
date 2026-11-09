// Imports:
import taskHandler from "../core/taskHandler.js";



// Main:
const renderFunction = () => {
    cardContainer.innerElements = [];
    cardContainer.ref.innerHTML = "";
    taskHandler.cards.forEach(task => {
        pushElement(task);
    });
};

const pushElement = (element) => {
    cardContainer.ref.append(element);
    cardContainer.innerElements.push(element);
};



// Exporting:
const cardContainer = {
    render() {
        renderFunction();
    },
    ref: document.createElement("div"),
    innerElements: []
};

cardContainer.ref.classList.add("card-container");

export default cardContainer;