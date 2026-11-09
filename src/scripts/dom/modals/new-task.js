// Imports:
import modalOverlay from "./overlay.js";
import { taskHandler } from "../../core/taskHandler.js";



// Main:
const form = document.createElement("form");
const buttons = document.createElement("div");



const initialzie = () => {
    modalNewTask.ref.classList.add("modal");
    buttons.classList.add("form-buttons");
    createHeader("Add New Task");
    createForm();
};

const createHeader = (text) => {
    const header = document.createElement("h1");
    header.textContent = text;
    pushElement(header);
};

const createForm = () => {
    const inputs = [];
    const inputTitle = document.createElement("input");
    const inputPriority = document.createElement("select");
    const inputDueDate = document.createElement("input");
    const inputDescription = document.createElement("textarea");

    inputs.push(
        inputTitle,
        inputPriority,
        inputDueDate,
        inputDescription
    );

    const inputIdentifiers = [
        "title",
        "priority",
        "dueDate",
        "description"
    ];

    const inputPlaceholders = [
        "Task title",
        "Priority",
        "Due Date",
        "Type a short description of your task here."
    ];

    inputs[0].type = "text";
    inputs[0].id = inputIdentifiers[0];
    inputs[0].name = inputIdentifiers[0];
    inputs[0].placeholder = inputPlaceholders[0];

    const options = ['Very High', 'High', 'Medium', 'Low'];
    inputs[1].add(new Option('Select Priority', '', true, true));
    inputs[1].options[0].disabled = true;
    options.forEach(label => inputs[1].add(new Option(label, label)));
    inputs[1].id = inputIdentifiers[1];
    inputs[1].name = inputIdentifiers[1];

    inputs[2].type = "date";
    inputs[2].id = inputIdentifiers[2];
    inputs[2].name = inputIdentifiers[2];
    inputs[2].classList.add("date-picker");
    inputs[2].addEventListener('click', function() {
        this.showPicker();
    });

    inputs[3].id = inputIdentifiers[3];
    inputs[3].name = inputIdentifiers[3];
    inputs[3].rows = 5;
    inputs[3].style.resize = 'none';
    inputs[3].placeholder = inputPlaceholders[3];
    inputs[3].maxLength = 200;


    inputs.forEach((element) => {
        element.setAttribute('autocomplete', 'off');
        element.required = true;
    });

    const btnCancel = document.createElement("button");
    btnCancel.textContent = "Cancel";
    btnCancel.addEventListener("click", (e) => {
        e.preventDefault();
        form.reset();
        modalOverlay.ref.removeChild(modalOverlay.ref.lastChild);
        modalOverlay.ref.classList.toggle("modal-overlay-active");
    });

    const btnSubmit = document.createElement("button");
    btnSubmit.textContent = "Create Task";
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        taskHandler.createNewTask(inputTitle.value, inputPriority.value, inputDueDate.value, inputDescription.value);
        form.reset();
        modalOverlay.ref.removeChild(modalOverlay.ref.lastChild);
        modalOverlay.ref.classList.toggle("modal-overlay-active");
    });

    buttons.append(btnCancel, btnSubmit);
    inputs.forEach(element => {
        form.append(element);
    });
    form.append(buttons);
    pushElement(form);
}

const pushElement = (element) => {
    modalNewTask.ref.append(element);
    modalNewTask.innerElements.push(element);
};



// Exporting:
const modalNewTask = {
    ref: document.createElement("div"),
    innerElements: []
};

initialzie();

export default modalNewTask;