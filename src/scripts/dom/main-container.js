// Imports:
import sidebar from "./sidebar.js";
import rightContainer from "./right-container.js";



// Main:
const renderFunction = () => {
    mainContainer.ref.classList.add("main-container");
    sidebar.render();
    pushElement(sidebar.ref);
    rightContainer.render();
    pushElement(rightContainer.ref);
    document.querySelector('body').append(mainContainer.ref);
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