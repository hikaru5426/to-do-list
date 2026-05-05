import { Task, Project, TaskManager, ProjectManager, LocalStorageManager } from "../logic/classes.js";
import addIcon from "../img/add.svg";

const mainContentDiv = document.getElementById("mainContent");

class MainContent{

    static buildTasks(projectTitle){
        const project = ProjectManager.findProject(projectTitle);
        const tasks = project.tasks;

        for(const task of tasks){
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            taskDiv.dataset.project = projectTitle;

            const firstRow = document.createElement("div");
            firstRow.classList.add("taskFirstRow");

            const title = document.createElement("h2");
            title.classList.add("taskTitle");
            title.innerText = task.title;

            const priority = document.createElement("span");
            priority.classList.add("taskPriority bold");
            priority.innerText = String(task.priority);

            firstRow.append(title, priority);
            
            const dueDate = document.createElement("p");
            dueDate.classList.add("taskDueDate bold");
            dueDate.innerText = task.dueDate.toLocaleDateString();

            const description = document.createElement("p");
            description.classList.add("taskDescription");
            description.innerText = task.description;

            taskDiv.append(firstRow, dueDate, description);
            mainContentDiv.append(taskDiv);
        }

        const addTaskBtn = document.createElement("button");
        addTaskBtn.classList.add("task" ,"addTaskBtn");
        addTaskBtn.type = "button";

        const img = document.createElement("img");
        img.src = addIcon;
        img.alt = "a cross icon";

        addTaskBtn.append(img);

        mainContentDiv.append(addTaskBtn)
    }

    
}

export{MainContent};