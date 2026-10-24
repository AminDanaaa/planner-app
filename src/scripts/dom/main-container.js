const body = document.querySelector('body');

const initialize = () => {
    const container = document.createElement("div");
    container.classList.add("main-container");
    
    body.append(container);
};

const mainContainer = {
    init() {
        initialize();
    }
};

export default mainContainer;