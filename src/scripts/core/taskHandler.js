// Imports:
import Task from "./Task.js";
import card from "../dom/card.js";
import cardContainer from "../dom/card-container.js";



// Main:
const createNewTask = (title, priority, dueDate, description) => {
    const task = new Task(title, priority, dueDate, description);
    taskHandler.tasks.push(task);
    taskHandler.cards.push(createNewTaskCard(task));
    cardContainer.render();
};

const createNewTaskCard = (task) => {
    return card.create(task);
};

const removeTask = (id) => {
    let index = taskHandler.tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        taskHandler.tasks.splice(index, 1);
        taskHandler.cards.splice(index, 1);

        cardContainer.render();
    }
};



// Exporting:
const taskHandler = {
    tasks: [],
    cards: [],
    createNewTask,
    removeTask
};

export default taskHandler;