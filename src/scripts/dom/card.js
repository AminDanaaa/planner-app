// Imports
import { taskHandler } from "../core/taskHandler.js";



export const renderCard = (task) => {
    const card = document.createElement("div");
    const topDivInner = document.createElement("div");
    const topDiv = document.createElement("div");
    const title = document.createElement("h2");
    const priority = document.createElement("p");
    const description = document.createElement("p");
    const bottomDiv = document.createElement("div");
    const dueDate = document.createElement("p");
    const btnRemove = document.createElement("button");

    title.textContent = task.title;
    priority.textContent = task.priority;
    description.textContent = task.description;
    dueDate.textContent = task.dueDate;

    btnRemove.textContent = "Remove";
    addRemoveListener(btnRemove, task.id);

    topDivInner.append(title, priority);
    topDiv.append(topDivInner, description);
    bottomDiv.append(dueDate, btnRemove);
    card.append(topDiv, bottomDiv);

    return card;
};

const addRemoveListener = (btnRemove, cardID) => {
    btnRemove.addEventListener("click", () => {
        taskHandler.removeTask(cardID);
    });
};