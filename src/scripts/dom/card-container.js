// Main:
const renderFunction = () => {
    cardContainer.ref.classList.add("card-container");
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