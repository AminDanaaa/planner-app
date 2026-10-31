// Main:
const renderFunction = () => {
    cardContainer.ref.classList.add("card-container");
    for (let i = 0; i < 5; i++) {
        pushElement(document.createElement("div"));
    }
};

const pushElement = (element) => {
    cardContainer.ref.append(element);
    cardContainer.innerElements.push(element);
};



// Exporting:
const cardContainer = {
    render() {
        renderFunction();
    },
    ref: document.createElement("div"),
    innerElements: []
};

export default cardContainer;