// Imports:
import topbar from "./topbar.js";



// Main:
const renderFunction = () => {
    rightContainer.ref.classList.add("right-container");
    topbar.render();
    pushElement(topbar.ref);
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