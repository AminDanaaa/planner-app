// Constants:
const sidebarReference = document.createElement("div");

// Main:
const initialize = () => {
    sidebarReference.classList.add("sidebar");
};

// Exporting:
const sidebar = {
    init() {
        initialize();
    },
    ref: sidebarReference
};

export default sidebar;