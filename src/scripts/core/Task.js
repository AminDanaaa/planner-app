class Task {
    constructor(title, priority, dueDate, description) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
    }
}

export default Task;