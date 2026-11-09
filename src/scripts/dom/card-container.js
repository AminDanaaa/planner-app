// Imports:
import { taskHandler } from "../core/taskHandler.js";



// Main:
const renderFunction = () => {
    cardContainer.innerElements = [];
    cardContainer.ref.innerHTML = "";
    if (taskHandler.cards.length === 0) {
        renderCardPlaceholder();
    } else {
        taskHandler.cards.forEach(task => {
            pushElement(task);
        });
    }
};

const renderCardPlaceholder = () => {
    pushElement(placeholder);
};

const initializeCardPlaceholder = () => {
    const cardPlaceholderDiv = document.createElement("div");
    const cardPlaceholder = document.createElement("h2");
    cardPlaceholder.textContent = "Start by adding a new Task and enjoy the Planner App.";
    cardPlaceholderDiv.classList.add("card-placeholder");
    cardPlaceholderDiv.classList.add("rotating-border");
    cardPlaceholderDiv.append(cardPlaceholder);
    return cardPlaceholderDiv;
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
const placeholder = initializeCardPlaceholder();

export default cardContainer;