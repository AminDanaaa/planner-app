// Imports:
import Task from "./Task.js";
import { renderCard } from "../dom/card.js";
import cardContainer from "../dom/card-container.js";
import { loadTasks, saveTasks } from "./storage.js";



// Main:
const createNewTask = (title, priority, dueDate, description) => {
    const task = new Task(title, priority, dueDate, description);
    taskHandler.tasks.push(task);
    taskHandler.cards.push(createNewTaskCard(task));
    cardContainer.render();
    saveTasks(taskHandler.tasks);
};

const createNewTaskCard = (task) => {
    return renderCard(task);
};

const removeTask = (id) => {
    let index = taskHandler.tasks.findIndex(task => task.id === id);

    if (index !== -1) {
        taskHandler.tasks.splice(index, 1);
        taskHandler.cards.splice(index, 1);

        cardContainer.render();
    }
    saveTasks(taskHandler.tasks);
};

const handleLoading = () => {
    const loadedData = loadTasks();

    if (loadedData.length === 0) {
        return
    } else {
        loadedData.forEach(element => {
            createNewTask(
                element.title, element.priority, element.dueDate, element.description
            );
        });
    }
};



// Exporting:
export const taskHandler = {
    tasks: [],
    cards: [],
    createNewTask,
    removeTask
};

handleLoading();
