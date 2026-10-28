// Imports:
import topbar from "./topbar.js";

// Constants:
const rightContainerReference = document.createElement("div");

// Main:
const renderFunction = () => {
    rightContainerReference.classList.add("right-container");

    topbar.render();
    rightContainerReference.append(topbar.ref);
};

// Exporting:
const rightContainer = {
    render() {
        renderFunction();
    },
    ref: rightContainerReference
};

export default rightContainer;