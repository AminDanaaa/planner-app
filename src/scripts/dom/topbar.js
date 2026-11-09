// Imports:
import modalOverlay from "./modals/overlay.js";
import modalNewTask from "./modals/new-task.js";



// Main:
const renderFunction = () => {
    topbar.ref.classList.add("topbar");
    createHeader("TASK MANAGER");
    createButtons();
};

const createHeader = (text) => {
    const header = document.createElement("h1");
    header.textContent = text;
    pushElement(header);
};

const addJumpClass = (button) => {
    button.addEventListener("click", () => {
        button.classList.remove("jump");
        void button.offsetWidth;
        button.classList.add("jump");
    });
};

const createButton = (text, functionObject) => {
    const newButton = document.createElement("button");
    newButton.textContent = text;
    
    newButton.addEventListener("click", () => {
        functionObject.onClick(functionObject.parameters);
    });

    addJumpClass(newButton);
    
    pushElement(newButton);
};

const createButtons = () => {
    const buttonsText = [
        "New Task",
    ];

    const buttonsFunction = [
        {
            onClick: modalOverlay.render,
            parameters: modalNewTask.ref
        },
    ];

    for (let index = 0; index < buttonsText.length; index++) {
        createButton(buttonsText[index], buttonsFunction[index]);
    }
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