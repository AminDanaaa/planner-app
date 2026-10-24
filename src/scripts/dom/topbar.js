// Constants:
const topbarReference = document.createElement("div");

// Main:
const initialize = () => {
    topbarReference.classList.add("topbar");

    const header = document.createElement("h1");
    header.textContent = "PERSONAL TASK MANAGER!";

    const addBtn = document.createElement("button");
    addBtn.textContent = "New Task";

    topbarReference.append(header, addBtn);
};

// Exporting:
const topbar = {
    init() {
        initialize();
    },
    ref: topbarReference
};

export default topbar;