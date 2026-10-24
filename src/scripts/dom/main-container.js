// Imports:
import sidebar from "./sidebar.js";
import rightContainer from "./right-container.js";

// Constants:
const body = document.querySelector('body');

// Main:
const initialize = () => {
    const container = document.createElement("div");
    container.classList.add("main-container");

    sidebar.init();
    container.append(sidebar.ref);

    rightContainer.init();
    container.append(rightContainer.ref);

    body.append(container);
};

// Exporting:
const mainContainer = {
    init() {
        initialize();
    }
};

export default mainContainer;