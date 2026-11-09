// Main:
const KEY = "planner.tasks";

export function clearTasks() {
    localStorage.removeItem(KEY);
}

export function saveTasks(tasks) {
    clearTasks();
    try {
        localStorage.setItem(KEY, JSON.stringify(
            { version: 1, tasks }
        ));
    } catch (err) {
        console.log(`Save failed: ${err}`);
    }
}

export function loadTasks() {
    try {
        const raw = localStorage.getItem(KEY);
        clearTasks();
        if (!raw) return [];
        return JSON.parse(raw).tasks;
    } catch (err) {
        console.log(`Load failed: ${err}`);
        return [];
    }
}