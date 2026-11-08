// Imports:
import topbar from "./topbar.js";
import cardContainer from "./card-container.js";



// Main:
const renderFunction = () => {
    mainContainer.ref.classList.add("main-container");
    renderChildren();
    document.querySelector('body').append(mainContainer.ref);
};

const renderChildren = () => {
    topbar.render();
    pushElement(topbar.ref);
    cardContainer.render();
    pushElement(cardContainer.ref);
};

const pushElement = (element) => {
    mainContainer.ref.append(element);
    mainContainer.innerElements.push(element);
};



// Exporting:
const mainContainer = {
    render() {
        renderFunction();
    },
    ref: document.createElement("div"),
    innerElements: []
};

export default mainContainer;