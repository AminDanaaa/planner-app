// Main:
const renderFunction = (box) => {
    modalOverlay.ref.classList.add("modal-overlay-active");
    pushElement(box);
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
    render(box) {
        renderFunction(box);
    },
    ref: document.createElement("div"),
    innerElements: []
};

initialzie();

export default modalOverlay;