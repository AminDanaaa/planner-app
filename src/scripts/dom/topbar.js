// Main:
const renderFunction = () => {
    topbar.ref.classList.add("topbar");
    createHeader("PERSONAL TASK MANAGER");
    createBtnAdd();
};

const createHeader = (text) => {
    const header = document.createElement("h1");
    header.textContent = text;
    pushElement(header);
};

const createBtnAdd = () => {
    const addBtn = document.createElement("button");
    addBtn.textContent = "New Task";
    pushElement(addBtn);
};

const pushElement = (element) => {
    topbar.ref.append(element);
    topbar.innerElements.push(element);
};



// Exporting:
const topbar = {
    render() {
        renderFunction();
    },
    ref: document.createElement("div"),
    innerElements: [],
};

export default topbar;