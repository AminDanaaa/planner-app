// Imports:
import sidebar from "./sidebar.js";
import rightContainer from "./right-container.js";

// Constants:
const body = document.querySelector('body');

// Main:
const renderFunction = () => {
    const container = document.createElement("div");
    container.classList.add("main-container");

    sidebar.render();
    container.append(sidebar.ref);

    rightContainer.render();
    container.append(rightContainer.ref);

    body.append(container);
};

// Exporting:
const mainContainer = {
    render() {
        renderFunction();
    }
};

export default mainContainer;