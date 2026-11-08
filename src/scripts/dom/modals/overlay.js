// Main:
const renderFunction = () => {
    modalOverlay.ref.classList.add("modal-overlay-active");
};

const initialzie = () => {
    modalOverlay.ref.classList.add("modal-overlay");
    document.querySelector('body').append(modalOverlay.ref);
}

const pushElement = (element) => {
    modalOverlay.ref.append(element);
    modalOverlay.innerElements.push(element);
};



// Exporting:
const modalOverlay = {
    render() {
        renderFunction();
    },
    ref: document.createElement("div"),
    innerElements: []
};

initialzie();

export default modalOverlay;