class Task {
    static nextId = 0;

    constructor(title, projectTitle, description = "", dueDate = null, priority = 0){
        this.id = Task.nextId++;
        this.title = title;
        this.projectTitle = projectTitle;
        this.description = description;
        this.dueDate = new Date(dueDate[0], dueDate[1] - 1, dueDate[2]);
        this.priority = priority;
    }
}

class Project {

    constructor(title){
        this.title = title;
        this.tasks = [];
    }
}


class TaskManager {
    static tasks = [];

    static findTaskWithId(taskId){
        return TaskManager.tasks.find(task => task.id === taskId);
    }

    static addTask(title, projectTitle, description = "", dueDate = null, priority = 0){
        let newTask = new Task(title, projectTitle, description, dueDate, priority);
        TaskManager.tasks.push(newTask);
        const project = ProjectManager.findProject(projectTitle);
        project.tasks.push(newTask);
    }

    static removeTask(oldTaskId){
        const oldTask = TaskManager.findTaskWithId(oldTaskId);
        const project = ProjectManager.findProject(oldTask.projectTitle);
        project.tasks.filter(task => task.id !== oldTaskId);
        TaskManager.tasks.filter(item => item.id !== id);
    }

    static editTask(taskId, title, projectTitle, description, dueDate, priority){
        const task = this.findTaskWithId(taskId);
        task.title = title;
        task.projectTitle = projectTitle;
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

    static addProject(title){
        let project = new Project(title);
        ProjectManager.projects.push(project);
    }

    static removeProject(title){
        ProjectManager.filter(project => project.title !== title);
    }

    static findProject(title){
        return ProjectManager.projects.find(project => project.title === title);
    }

    static editProject(title){
        const project = findProject(title);
        project.title = title;
    }

    static isTitleAvailable(title){
        for(const project of ProjectManager.projects){
            if(project.title === title){
                return false;
            }
        }
        return true;
    }

}

export {Task, Project, TaskManager, ProjectManager};