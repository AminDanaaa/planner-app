// Constants:
const topbarReference = document.createElement("div");

// Main:
const renderFunction = () => {
    topbarReference.classList.add("topbar");

    const header = document.createElement("h1");
    header.textContent = "PERSONAL TASK MANAGER!";

    const addBtn = document.createElement("button");
    addBtn.textContent = "New Task";

    topbarReference.append(header, addBtn);
};

// Exporting:
const topbar = {
    render() {
        renderFunction();
    },
    ref: topbarReference
};

export default topbar;