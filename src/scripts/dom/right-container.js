// Imports:
import topbar from "./topbar.js";
import cardContainer from "./card-container.js";



// Main:
const renderFunction = () => {
    rightContainer.ref.classList.add("right-container");
    renderChildren();
};

const renderChildren = () => {
    topbar.render();
    pushElement(topbar.ref);
    cardContainer.render();
    pushElement(cardContainer.ref);
};

const pushElement = (element) => {
    rightContainer.ref.append(element);
    rightContainer.innerElements.push(element);
};



// Exporting:
const rightContainer = {
    render() {
        renderFunction();
    },
    ref: document.createElement("div"),
    innerElements: []
};

export default rightContainer;