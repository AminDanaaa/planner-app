// Main:
const renderFunction = () => {
    modalNewTask.ref.classList.add("modal");
};

const pushElement = (element) => {
    modalNewTask.ref.append(element);
    modalNewTask.innerElements.push(element);
};



// Exporting:
const modalNewTask = {
    render() {
        renderFunction();
    },
    ref: document.createElement("div"),
    innerElements: []
};

export default modalNewTask;