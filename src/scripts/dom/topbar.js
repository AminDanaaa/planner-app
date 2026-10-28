// Main:
const renderFunction = () => {
    topbar.ref.classList.add("topbar");
    createHeader("PERSONAL TASK MANAGER");
    createButtons();
};

const createHeader = (text) => {
    const header = document.createElement("h1");
    header.textContent = text;
    pushElement(header);
};

const createButton = (text) => {
    const newButton = document.createElement("button");
    newButton.textContent = text;
    pushElement(newButton);
};

const createButtons = () => {
    const buttonsText = [
        "New Task"
    ];

    buttonsText.forEach(text => {
        createButton(text);
    });
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
    innerElements: []
};

export default topbar;