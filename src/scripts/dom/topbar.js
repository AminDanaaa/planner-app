// Constants:
const topbarReference = document.createElement("div");

// Main:
const initialize = () => {
    topbarReference.classList.add("topbar");
};

// Exporting:
const topbar = {
    init() {
        initialize();
    },
    ref: topbarReference
};

export default topbar;