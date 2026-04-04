class Task {
    static nextId = 0;

    constructor(title, description = "", dueDate = null, priority = 0) {
        this.id = Task.nextId++;
        this.title = title;
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
        ProjectManager.projects.forEach(project => {
            project.tasks.forEach(task =>{
                if(task.id === taskId) return task;
            })
        })
        //return this.tasks.find(task => task.id === taskId);
    }

    static addTask(projectTitle, title, description = "", dueDate = null, priority = 0) {
        let newTask = new Task(title, description, dueDate, priority);
        this.tasks.push(newTask);
        const project = ProjectManager.findProject(projectTitle);
        project.tasks.push(newTask);
    }

    static removeTask(oldTaskId) {
        const oldTask = this.findTaskWithId(oldTaskId);
        const project = ProjectManager.findProjectWithTaskId(oldTaskId);
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
        LocalStorageManager.updateProjects();
    }

    static removeProject(title) {
        this.projects = this.projects.filter(project => project.title !== title);
        LocalStorageManager.updateProjects();
    }

    static editProject(oldTitle, newTitle) {
        const project = this.findProject(oldTitle);
        project.title = newTitle;
        LocalStorageManager.updateProjects();
        LocalStorageManager.updateTasks();
    }

    static findProject(title) {
        return this.projects.find(project => project.title === title);
    }

    static findProjectWithTaskId(taskId){
        const project = this.projects.find(project =>
            project.tasks.some(task => task.id === taskId)
        )
        return project;
    }

    static changeProjectOfTask(taskId, oldProjectTitle, newProjectTitle) {
        const oldProject = this.findProject(oldProjectTitle);
        oldProject.tasks = oldProject.tasks.filter(task => task.id !== taskId);

        const newProject = this.findProject(newProjectTitle);
        const task = TaskManager.findTaskWithId(taskId);
        newProject.tasks.push(task);
    }

    static isTitleAvailable(title) {
        for (const project of this.projects) {
            if (project.title === title) {
                return false;
            }
        }
        return true;
    }

    static listProjectsAndTasks() { // For dev and debug purpose
        this.projects.forEach(function (project) {
            console.log(`Projet : ${project.title} :`);
            console.log(`Tasks :`);
            project.tasks.forEach(task => console.log(`ID : ${task.id} | title : ${task.title} | description : ${task.description} | dueDate : ${task.dueDate} | priority : ${task.priority}`));
            console.log("");
        })
    }
}

class LocalStorageManager {

    static retrieveData(){
        ProjectManager.projects = JSON.parse(localStorage.getItem("projects"));
    }

    static updateTasks(){
        localStorage.setItem("tasks", JSON.stringify(TaskManager.tasks));
    }

    static updateProjects(){
        localStorage.setItem("projects", JSON.stringify(ProjectManager.projects));
    }
}

export { Task, Project, TaskManager, ProjectManager, LocalStorageManager };