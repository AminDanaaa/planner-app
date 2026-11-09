class Task {
    constructor(title, priority, dueDate, description) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
    }

    toJSON() {
        return {
            title: this.title,
            priority: this.priority,
            dueDate: this.dueDate,
            description: this.description,
        };
    }
}

export default Task;