import "./styles.css";

class Task {
    static nextId = 0;

    constructor(title, projectId, description = "", dueDate = null, priority = 0){
        this.id = Task.nextId++;
        this.title = title;
        this.project = projectId;
        this.description = description;
        this.dueDate = new Date(dueDate[0], dueDate[1] - 1, dueDate[2]);
        this.priority = priority;
    }
}

class Project {
    static nextId = 0;

    constructor(title){
        this.id = Project.nextId++;
        this.title = title;
        this.tasks = [];
    }
}

class TaskManager {
    static tasks = [];

    findTaskWithId(taskId){
        return TaskManager.tasks.find(task => task.id === taskId);
    }

    static addTask(title, projectId, description = "", dueDate = null, priority = 0){
        let newTask = new Task(title, projectId, description, dueDate, priority);
        TaskManager.tasks.push(newTask);
        const project = ProjectManager.projects.find(project => project.id === projectId);
        project.items.push(newTask);
    }

    static removeTask(oldTaskId){
        const oldTask = ToDoManager.tasks.find(task => task.id === oldTaskId);
        const project = ProjectManager.projects.find(project => project.id === oldTask.projectId);
        project.tasks.filter(task => task.id !== oldTaskId);
        TaskManager.tasks.filter(item => item.id !== id);
    }
}

class ProjectManager {
    static projects = [];

    static addProject(title){
        let project = new Project(title);
        ProjectManager.projects.push(project);
    }

    static removeProject(id){
        ProjectManager.filter(project => project.id !== id);
    }

    findProjectWithId(ProjectId){
        return ProjectManager.projects
    }

}