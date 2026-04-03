class Task {
    static nextId = 0;

    constructor(title, projectTitle, description = "", dueDate = null, priority = 0) {
        this.id = Task.nextId++;
        this.title = title;
        this.projectTitle = projectTitle;
        this.description = description;
        this.dueDate = new Date(dueDate[0], dueDate[1] - 1, dueDate[2]);
        this.priority = priority;
    }
}

class Project {

    constructor(title) {
        this.title = title;
        this.tasks = [];
    }
}


class TaskManager {
    static tasks = [];

    static findTaskWithId(taskId) {
        return this.tasks.find(task => task.id === taskId);
    }

    static addTask(title, projectTitle, description = "", dueDate = null, priority = 0) {
        let newTask = new Task(title, projectTitle, description, dueDate, priority);
        this.tasks.push(newTask);
        const project = ProjectManager.findProject(projectTitle);
        project.tasks.push(newTask);
    }

    static removeTask(oldTaskId) {
        const oldTask = this.findTaskWithId(oldTaskId);
        const project = ProjectManager.findProject(oldTask.projectTitle);
        project.tasks = project.tasks.filter(task => task.id !== oldTaskId);
        this.tasks = this.tasks.filter(item => item.id !== id);
    }

    static editTask(taskId, title, oldProjectTitle, description, dueDate, priority, newProjectTitle = null) {
        const task = this.findTaskWithId(taskId);
        task.title = title;

        if (newProjectTitle) {
            ProjectManager.changeProjectOfTask(taskId, oldProjectTitle, newProjectTitle);
        }

        task.description = description;
        task.dueDate = new Date(dueDate[0], dueDate[1] - 1, dueDate[2]);
        task.priority = priority;
    }

    // static listTasks(){
    //     let tasks = [];
    //     let project;
    //     for(let i = 0; i < projects.length; i++){
    //         project = ProjectManager.projects[i];
    //         for (let j = 0; j < project.tasks.length; j++){
    //             tasks.push(project.tasks[j]);
    //         }
    //     }
    //     return tasks;
    // }
}

class ProjectManager {
    static projects = [];

    static addProject(title) {
        let project = new Project(title);
        this.projects.push(project);
    }

    static removeProject(title) {
        this.projects = this.projects.filter(project => project.title !== title);
    }

    static findProject(title) {
        return this.projects.find(project => project.title === title);
    }

    static editProject(title) {
        const project = findProject(title);
        project.title = title;
    }

    static changeProjectOfTask(taskId, oldProjectTitle, newProjectTitle) {
        const oldProject = this.findProject(oldProjectTitle);
        oldProject.tasks = oldProject.tasks.filter(task => task.id !== taskId);

        const newProject = this.findProject(newProjectTitle);
        const task = TaskManager.findTaskWithId(taskId);
        newProject.tasks.push(task);
        task.projectTitle = newProject.title;
    }

    static isTitleAvailable(title) {
        for (const project of this.projects) {
            if (project.title === title) {
                return false;
            }
        }
        return true;
    }

    static listProjectsAndTasks(){ // For dev and debug purpose
        this.projects.forEach(function(project){
            console.log(`Projet : ${project.title} :`);
            console.log(`ID : ${project.id}`);
            console.log(`Tasks :`);
            project.tasks.forEach(task => console.log(`ID : ${task.id}, title : ${task.title}, projectTitle : ${task.projectTitle}, description : ${task.description}, dueDate : ${task.duteDate}, priority : ${task.priority}`));
            console.log("");
        })
    }
}

export { Task, Project, TaskManager, ProjectManager };