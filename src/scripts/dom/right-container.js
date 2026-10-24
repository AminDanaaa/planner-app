// Imports:
import topbar from "./topbar.js";

// Constants:
const rightContainerReference = document.createElement("div");

// Main:
const initialize = () => {
    rightContainerReference.classList.add("right-container");

    topbar.init();
    rightContainerReference.append(topbar.ref);
};

// Exporting:
const rightContainer = {
    init() {
        initialize();
    },
    ref: rightContainerReference
};

export default rightContainer;